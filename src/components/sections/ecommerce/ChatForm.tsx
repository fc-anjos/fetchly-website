'use client';

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type KeyboardEvent,
  type FormEvent,
} from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/Input';
import {
  useChatConversation,
  STEPS,
  type StepDef,
} from '@/hooks/useChatConversation';
import type { IntakeFields } from '@/hooks/useIntakeForm';
import { FormTracker } from '@/components/tracking/FormTracker';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ---------------------------------------------------------------------------
// runTypewriter — async GSAP-powered character-by-character text reveal
// ---------------------------------------------------------------------------

async function runTypewriter(
  setText: (t: string) => void,
  fullText: string,
  signal?: { cancelled: boolean },
): Promise<void> {
  if (prefersReducedMotion()) {
    setText(fullText);
    return;
  }

  const { gsap } = await import('gsap');

  return new Promise<void>(resolve => {
    const proxy = { index: 0 };
    gsap.to(proxy, {
      index: fullText.length,
      duration: fullText.length * 0.03,
      ease: 'none',
      onUpdate() {
        if (signal?.cancelled) return;
        setText(fullText.slice(0, Math.round(proxy.index)));
      },
      onComplete() {
        setText(fullText);
        resolve();
      },
    });
  });
}

// ---------------------------------------------------------------------------
// TypingIndicator — 3 bouncing dots
// ---------------------------------------------------------------------------

function TypingIndicator() {
  const ref = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const dots = ref.current.children;
    if (prefersReducedMotion()) return;

    let cancelled = false;

    (async () => {
      const { gsap } = await import('gsap');
      if (cancelled) return;
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(dots, {
        y: -4,
        duration: 0.4,
        ease: 'power1.inOut',
        stagger: { each: 0.15, yoyo: true, repeat: -1 },
      });
      tweenRef.current = tl;
    })();

    return () => {
      cancelled = true;
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <div ref={ref} className="flex gap-1 py-1 px-0.5">
      <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
      <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
      <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// BotAvatar
// ---------------------------------------------------------------------------

function BotAvatar() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-6 h-6 shrink-0 rounded-full"
      aria-hidden
    >
      <circle cx="50" cy="50" r="50" className="fill-primary" />
      <g transform="translate(25, 22) scale(0.14)">
        <path
          d="M253.44 156.42C254.44 152.55 250.03 149.25 246.03 149.26C239.03 149.26 227.44 149.26 217.15 149.26C196.03 149.16 154.65 148.54 133.55 149.08H133.34C114.34 149.08 119.2 141.65 121.59 134.13C129.32 109.83 137.3 86.06 144.85 61.68C148 51.56 151.78 48.62 163 48.86C203.34 48.94 280.11 48.8 320.45 48.56C323.941 48.4816 327.358 47.544 330.4 45.83C337.08 42 339.07 34 345.85 7.77C346.85 3.71 342.91 0.33 336.76 0.21C332.05 0.12 327.3 0 322.56 0C266 0.45 172.94 -0.46 116.38 0.45C112.05 0.57 105.72 5.14 104 9.12C98.58 21.82 94.81 35.18 90.57 48.34C73.66 101.27 66.6 126.61 41.2 201C31.84 227.69 24.41 255 16.02 281.93C11.07 297.73 5.62001 313.4 0.510012 329.18C-1.43999 335.18 2.44001 338.9 7.67001 339.18C19.8511 340.006 32.0756 339.959 44.25 339.04C49.25 338.66 56.57 334.11 58.03 329.92C67.48 302.92 75.6 275.44 84.14 248.12C87.88 236.12 90.05 227.61 95.67 209.12C97.33 203.68 103.35 198.46 109.47 198.46C114.32 198.46 118.87 198.62 124.08 198.46C154.98 197.55 190.78 198.21 227 198.21C239.92 198.27 247.07 181 253.44 156.42Z"
          fill="black"
        />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// BotMessage
// ---------------------------------------------------------------------------

interface BotMessageProps {
  text: string;
  isLatest: boolean;
  onTypingDone: () => void;
}

function BotMessage({ text, isLatest, onTypingDone }: BotMessageProps) {
  const [phase, setPhase] = useState<'indicator' | 'typing' | 'done'>(
    isLatest ? 'indicator' : 'done',
  );
  const [displayText, setDisplayText] = useState(isLatest ? '' : text);
  const wrapRef = useRef<HTMLDivElement>(null);
  const cancelRef = useRef({ cancelled: false });

  // Animate entrance + typewriter for latest message
  useEffect(() => {
    if (!isLatest) return;
    let cancelled = false;
    cancelRef.current = { cancelled: false };

    (async () => {
      // Brief pause showing indicator
      if (!prefersReducedMotion()) {
        const { gsap } = await import('gsap');
        if (wrapRef.current) {
          gsap.fromTo(
            wrapRef.current,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' },
          );
        }
        await new Promise(r => setTimeout(r, 600));
      }

      if (cancelled) return;
      setPhase('typing');

      await runTypewriter(setDisplayText, text, cancelRef.current);

      if (cancelled) return;
      setPhase('done');
      onTypingDone();
    })();

    return () => {
      cancelled = true;
      cancelRef.current.cancelled = true;
    };
    // Run only on mount for latest message
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={wrapRef} className="flex gap-2 items-start">
      <BotAvatar />
      <div className="max-w-[85%] bg-surface-card border border-border rounded-lg rounded-tl-sm px-4 py-3 text-sm text-foreground">
        {phase === 'indicator' ? <TypingIndicator /> : displayText}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// UserMessage
// ---------------------------------------------------------------------------

interface UserMessageProps {
  text: string;
  skipped?: boolean;
}

function UserMessage({ text, skipped }: UserMessageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;
    let cancelled = false;

    (async () => {
      const { gsap } = await import('gsap');
      if (cancelled) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' },
      );
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex justify-end">
      <div
        ref={ref}
        className={cn(
          'max-w-[85%] rounded-lg rounded-tr-sm px-4 py-3 text-sm',
          skipped
            ? 'border border-border text-foreground-muted italic'
            : 'bg-primary text-black',
        )}
      >
        {text}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SuccessCheckmark
// ---------------------------------------------------------------------------

function SuccessCheckmark() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    let cancelled = false;

    (async () => {
      const path = pathRef.current!;
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      if (prefersReducedMotion()) {
        path.style.strokeDashoffset = '0';
        return;
      }

      const { gsap } = await import('gsap');
      if (cancelled) return;
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.3,
      });
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex justify-center py-3">
      <svg
        className="w-12 h-12 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          ref={pathRef}
          d="M5 13l4 4L19 7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// NotificationDot — pulsing chat-style badge
// ---------------------------------------------------------------------------

function NotificationDot() {
  return (
    <div className="absolute -top-2 -right-2 z-20">
      <span className="relative flex h-5 w-5">
        <span className="animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-5 w-5 bg-primary" />
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ChipSelector
// ---------------------------------------------------------------------------

interface ChipSelectorProps {
  options: string[];
  onSelect: (value: string) => void;
  disabled: boolean;
  skippable?: boolean;
  onSkip?: () => void;
}

function ChipSelector({ options, onSelect, disabled, skippable, onSkip }: ChipSelectorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;
    let cancelled = false;

    (async () => {
      const { gsap } = await import('gsap');
      if (cancelled) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
      );
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div ref={ref} className="flex flex-wrap items-center gap-2">
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(opt)}
          className={cn(
            'px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200',
            'border-border text-foreground-subtle hover:text-foreground hover:border-primary',
            'disabled:opacity-50 disabled:cursor-not-allowed',
          )}
        >
          {opt}
        </button>
      ))}
      {skippable && (
        <button
          type="button"
          disabled={disabled}
          onClick={onSkip}
          className="ml-auto text-sm text-foreground-muted hover:text-foreground transition-colors"
        >
          Skip
        </button>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// TextInputBar
// ---------------------------------------------------------------------------

interface TextInputBarProps {
  placeholder?: string;
  skippable?: boolean;
  disabled: boolean;
  onSend: (value: string) => void;
  onSkip?: () => void;
}

function TextInputBar({ placeholder, skippable, disabled, onSend, onSkip }: TextInputBarProps) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapRef.current || prefersReducedMotion()) return;
    let cancelled = false;

    (async () => {
      const { gsap } = await import('gsap');
      if (cancelled) return;
      gsap.fromTo(
        wrapRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
      );
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!disabled) inputRef.current?.focus();
  }, [disabled]);

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue('');
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div ref={wrapRef} className="flex gap-3 items-center">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKey}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          'flex-1 px-4 py-2.5 rounded-lg border transition-colors duration-200 text-sm',
          'bg-overlay text-foreground placeholder:text-foreground-muted',
          'border-border focus:border-primary/40 focus:ring-1 focus:ring-primary/20 outline-none',
          'disabled:opacity-50',
        )}
      />
      {skippable && (
        <button
          type="button"
          disabled={disabled}
          onClick={onSkip}
          className="text-sm text-foreground-muted hover:text-foreground transition-colors"
        >
          Skip
        </button>
      )}
      <button
        type="button"
        disabled={disabled || !value.trim()}
        onClick={submit}
        className={cn(
          'px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200',
          'bg-primary text-black hover:bg-primary-dark',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        )}
      >
        Send
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// TextareaInputBar
// ---------------------------------------------------------------------------

interface TextareaInputBarProps {
  placeholder?: string;
  disabled: boolean;
  skippable?: boolean;
  onSend: (value: string) => void;
  onSkip?: () => void;
}

function TextareaInputBar({ placeholder, disabled, skippable, onSend, onSkip }: TextareaInputBarProps) {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapRef.current || prefersReducedMotion()) return;
    let cancelled = false;

    (async () => {
      const { gsap } = await import('gsap');
      if (cancelled) return;
      gsap.fromTo(
        wrapRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
      );
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!disabled) textareaRef.current?.focus();
  }, [disabled]);

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue('');
  };

  const handleKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div ref={wrapRef} className="space-y-2">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKey}
        placeholder={placeholder}
        disabled={disabled}
        rows={3}
        className={cn(
          'w-full px-4 py-3 rounded-lg border transition-colors duration-200 text-sm resize-none',
          'bg-overlay text-foreground placeholder:text-foreground-muted',
          'border-border focus:border-primary/40 focus:ring-1 focus:ring-primary/20 outline-none',
          'disabled:opacity-50',
        )}
      />
      <div className="flex items-center justify-between">
        <span className="text-xs text-foreground-muted">
          Shift+Enter for new line
        </span>
        <div className="flex items-center gap-4">
          {skippable && (
            <button
              type="button"
              disabled={disabled}
              onClick={onSkip}
              className="text-sm text-foreground-muted hover:text-foreground transition-colors"
            >
              Skip
            </button>
          )}
          <button
            type="button"
            disabled={disabled || !value.trim()}
            onClick={submit}
            className={cn(
              'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
              'bg-primary text-black hover:bg-primary-dark',
              'disabled:opacity-50 disabled:cursor-not-allowed',
            )}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ContactGroupInput
// ---------------------------------------------------------------------------

interface ContactGroupInputProps {
  fields: { phone: string; linkedin: string };
  errors: { phone?: string; linkedin?: string };
  disabled: boolean;
  onFieldChange: (key: 'phone' | 'linkedin', value: string) => void;
  onSubmit: () => void;
}

function ContactGroupInput({
  fields,
  errors,
  disabled,
  onFieldChange,
  onSubmit,
}: ContactGroupInputProps) {
  const wrapRef = useRef<HTMLFormElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!wrapRef.current || prefersReducedMotion()) return;
    let cancelled = false;

    (async () => {
      const { gsap } = await import('gsap');
      if (cancelled) return;
      gsap.fromTo(
        wrapRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
      );
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!disabled) phoneRef.current?.focus();
  }, [disabled]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const glassInput = 'bg-overlay !border-border text-foreground placeholder:text-foreground-muted focus:!border-primary/40 focus:!ring-1 focus:!ring-primary/20';

  return (
    <form ref={wrapRef} onSubmit={handleSubmit} className="space-y-3 text-foreground">
      <Input
        ref={phoneRef}
        label="Phone (optional)"
        type="tel"
        placeholder="+1 (405) 123-6789"
        value={fields.phone}
        onChange={e => onFieldChange('phone', e.target.value)}
        error={errors.phone}
        className={glassInput}
      />
      <Input
        label="LinkedIn (optional)"
        type="url"
        placeholder="https://linkedin.com/in/you"
        value={fields.linkedin}
        onChange={e => onFieldChange('linkedin', e.target.value)}
        error={errors.linkedin}
        className={glassInput}
      />
      <button
        type="submit"
        disabled={disabled}
        className={cn(
          'w-full py-2.5 rounded-lg text-sm font-medium transition-colors duration-200',
          'bg-primary text-black hover:bg-primary-dark',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        )}
      >
        {disabled ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

// ---------------------------------------------------------------------------
// InputArea — renders the right control per step
// ---------------------------------------------------------------------------

interface InputAreaProps {
  step: StepDef;
  isBotTyping: boolean;
  isSuccess: boolean;
  submitting: boolean;
  fields: { phone: string; linkedin: string };
  errors: { phone?: string; linkedin?: string };
  onChipSelect: (value: string) => void;
  onTextSend: (value: string) => void;
  onSkip: () => void;
  onContactFieldChange: (key: 'phone' | 'linkedin', value: string) => void;
  onContactSubmit: () => void;
}

function InputArea({
  step,
  isBotTyping,
  isSuccess,
  submitting,
  fields,
  errors,
  onChipSelect,
  onTextSend,
  onSkip,
  onContactFieldChange,
  onContactSubmit,
}: InputAreaProps) {
  if (isSuccess || step.inputMode === 'none') return null;

  const disabled = isBotTyping || submitting;

  switch (step.inputMode) {
    case 'chips':
      return (
        <ChipSelector
          key={step.botMessage}
          options={step.options ?? []}
          onSelect={onChipSelect}
          disabled={disabled}
          skippable={step.skippable}
          onSkip={onSkip}
        />
      );
    case 'text':
      return (
        <TextInputBar
          key={step.botMessage}
          placeholder={step.placeholder}
          skippable={step.skippable}
          disabled={disabled}
          onSend={onTextSend}
          onSkip={onSkip}
        />
      );
    case 'textarea':
      return (
        <TextareaInputBar
          key={step.botMessage}
          placeholder={step.placeholder}
          disabled={disabled}
          skippable={step.skippable}
          onSend={onTextSend}
          onSkip={onSkip}
        />
      );
    case 'contact':
      return (
        <ContactGroupInput
          key={step.botMessage}
          fields={fields}
          errors={errors}
          disabled={disabled}
          onFieldChange={onContactFieldChange}
          onSubmit={onContactSubmit}
        />
      );
    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// ChatForm — root component
// ---------------------------------------------------------------------------

export function ChatForm() {
  const chat = useChatConversation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showAttention, setShowAttention] = useState(false);

  const isContactStep = chat.currentStep.inputMode === 'contact';

  // --------------- Attention: notification dot after 3s ---------------

  useEffect(() => {
    const timer = setTimeout(() => setShowAttention(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const dismissAttention = useCallback(() => {
    if (showAttention) setShowAttention(false);
  }, [showAttention]);

  // --------------- Auto-scroll ---------------

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chat.messages, chat.currentStepIndex, chat.isBotTyping]);

  // --------------- Start conversation ---------------

  useEffect(() => {
    if (chat.started) return;
    const timer = setTimeout(() => chat.start(), 800);
    return () => clearTimeout(timer);
  }, [chat.started, chat.start]);

  // --------------- Bot message queue ---------------

  const lastBotStepRef = useRef(-1);

  useEffect(() => {
    if (!chat.started) return;
    if (chat.currentStepIndex === lastBotStepRef.current) return;

    lastBotStepRef.current = chat.currentStepIndex;
    const step = STEPS[chat.currentStepIndex];
    if (!step) return;

    const delay = chat.currentStepIndex === 0 ? 0 : 400;
    const timer = setTimeout(() => {
      chat.startBotTyping(step.botMessage);
    }, delay);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat.currentStepIndex, chat.started]);

  // --------------- Handlers ---------------

  const handleChipSelect = useCallback(
    (value: string) => {
      dismissAttention();
      const step = STEPS[chat.currentStepIndex];
      if (step?.field) {
        chat.setField(step.field, value as IntakeFields[keyof IntakeFields]);
      }
      chat.advanceStep(value);
    },
    [chat, dismissAttention],
  );

  const handleTextSend = useCallback(
    (value: string) => {
      dismissAttention();
      const step = STEPS[chat.currentStepIndex];
      if (step?.field) {
        chat.setField(step.field, value as IntakeFields[keyof IntakeFields]);
      }
      chat.advanceStep(value);
    },
    [chat, dismissAttention],
  );

  const handleSkip = useCallback(() => {
    dismissAttention();
    chat.skipStep();
  }, [chat, dismissAttention]);

  const handleContactFieldChange = useCallback(
    (key: 'phone' | 'linkedin', value: string) => {
      dismissAttention();
      chat.setField(key, value);
    },
    [chat, dismissAttention],
  );

  const handleContactSubmit = useCallback(async () => {
    const parts: string[] = [];
    if (chat.fields.phone) parts.push(chat.fields.phone);
    if (chat.fields.linkedin) parts.push(chat.fields.linkedin);

    chat.advanceStep(parts.length ? parts.join(' | ') : 'Submitted');
    await chat.submitForm();
  }, [chat]);

  // --------------- Shared input props ---------------

  const inputAreaProps = {
    step: chat.currentStep,
    isBotTyping: chat.isBotTyping,
    isSuccess: chat.isSuccess,
    submitting: chat.submitting,
    fields: {
      phone: chat.fields.phone,
      linkedin: chat.fields.linkedin,
    },
    errors: {
      phone: chat.errors.phone,
      linkedin: chat.errors.linkedin,
    },
    onChipSelect: handleChipSelect,
    onTextSend: handleTextSend,
    onSkip: handleSkip,
    onContactFieldChange: handleContactFieldChange,
    onContactSubmit: handleContactSubmit,
  };

  return (
    <FormTracker formId="ecommerce-chat">
    <div className="relative -mx-6 lg:-mx-10">
      {/* Notification dot — outside card so overflow:hidden doesn't clip it */}
      {showAttention && <NotificationDot />}

      {/* Chat card — dark glassmorphism */}
      <div className="bg-overlay backdrop-blur-xl border border-border rounded-xl overflow-hidden flex flex-col h-[400px] shadow-lg">
        {/* Scrollable chat area with thin styled scrollbar */}
        <div
          ref={scrollRef}
          data-lenis-prevent
          className={cn(
            'flex-1 overflow-y-auto p-5 space-y-4',
            '[&::-webkit-scrollbar]:w-1.5',
            '[&::-webkit-scrollbar-track]:bg-transparent',
            '[&::-webkit-scrollbar-thumb]:rounded-full',
            '[&::-webkit-scrollbar-thumb]:bg-foreground/10',
            'hover:[&::-webkit-scrollbar-thumb]:bg-foreground/20',
          )}
        >
          {chat.messages.map((msg, i) =>
            msg.role === 'bot' ? (
              <BotMessage
                key={msg.id}
                text={msg.text}
                isLatest={
                  i === chat.messages.length - 1 &&
                  msg.role === 'bot' &&
                  chat.isBotTyping
                }
                onTypingDone={chat.finishBotTyping}
              />
            ) : (
              <UserMessage key={msg.id} text={msg.text} skipped={msg.skipped} />
            ),
          )}
          {chat.isSuccess && <SuccessCheckmark />}
        </div>

        {/* Pinned input area — appears after the bot finishes typing */}
        {chat.started && !chat.isSuccess && !chat.isBotTyping && chat.currentStep.inputMode !== 'none' && (
          <div className="border-t border-border px-4 py-3">
            <InputArea {...inputAreaProps} />
          </div>
        )}
      </div>
    </div>
    </FormTracker>
  );
}

export default ChatForm;
