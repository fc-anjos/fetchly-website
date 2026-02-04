'use client';

import { useState, useCallback, useRef } from 'react';
import { useIntakeForm, type ProjectType, type CompanySize, type IntakeFields } from './useIntakeForm';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type InputMode = 'chips' | 'text' | 'textarea' | 'contact' | 'none';

export interface StepDef {
  botMessage: string;
  inputMode: InputMode;
  field: keyof IntakeFields | null;
  options?: string[];
  placeholder?: string;
  skippable?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'bot' | 'user';
  text: string;
  /** Marks a skipped optional step */
  skipped?: boolean;
}

// ---------------------------------------------------------------------------
// Step definitions
// ---------------------------------------------------------------------------

export const STEPS: StepDef[] = [
  {
    botMessage: 'What kind of Shopify project are we building?',
    inputMode: 'chips',
    field: 'projectType',
    options: ['New Store', 'Redesign', 'Migration', 'Optimization', 'Other'],
    skippable: true,
  },
  {
    botMessage: 'How many people are on your team?',
    inputMode: 'chips',
    field: 'companySize',
    options: ['1-5', '6-10', '11-49', '50-250', '251+'],
    skippable: true,
  },
  {
    botMessage: "What's the company called?",
    inputMode: 'text',
    field: 'companyName',
    placeholder: 'ACME',
    skippable: true,
  },
  {
    botMessage: 'Got a website?',
    inputMode: 'text',
    field: 'companyWebsite',
    placeholder: 'https://acme.com',
    skippable: true,
  },
  {
    botMessage: 'Tell us more about the project.',
    inputMode: 'textarea',
    field: 'message',
    placeholder: 'Describe what you need...',
    skippable: true,
  },
  {
    botMessage: 'Last step, where can we reach you?',
    inputMode: 'contact',
    field: null,
  },
  {
    botMessage: "Got it! We'll be in touch within 24 hours.",
    inputMode: 'none',
    field: null,
  },
];

const SUCCESS_STEP = STEPS.length - 1;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

let msgCounter = 0;
function nextId() {
  return `msg-${++msgCounter}`;
}

export function useChatConversation() {
  const form = useIntakeForm();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const stepRef = useRef(0);

  // -----------------------------------------------------------------------
  // Actions
  // -----------------------------------------------------------------------

  /** Append a bot message and flip the typing flag */
  const startBotTyping = useCallback((text: string) => {
    const id = nextId();
    setMessages(prev => [...prev, { id, role: 'bot', text }]);
    setIsBotTyping(true);
    return id;
  }, []);

  /** Called when bot typing animation finishes */
  const finishBotTyping = useCallback(() => {
    setIsBotTyping(false);
  }, []);

  /** Advance to the next step, appending the user's display text as a reply */
  const advanceStep = useCallback(
    (displayText: string) => {
      // Append user bubble
      setMessages(prev => [...prev, { id: nextId(), role: 'user', text: displayText }]);

      const nextStep = stepRef.current + 1;
      if (nextStep < STEPS.length) {
        stepRef.current = nextStep;
        setIsBotTyping(true);
        setCurrentStepIndex(nextStep);
      }
    },
    [],
  );

  /** Skip an optional step */
  const skipStep = useCallback(() => {
    setMessages(prev => [...prev, { id: nextId(), role: 'user', text: 'Skipped', skipped: true }]);

    const nextStep = stepRef.current + 1;
    if (nextStep < STEPS.length) {
      stepRef.current = nextStep;
      setIsBotTyping(true);
      setCurrentStepIndex(nextStep);
    }
  }, []);

  /** Submit the form (contact step) */
  const submitForm = useCallback(async () => {
    await form.handleSubmit();
    // On success, advance to the success step
    const nextStep = stepRef.current + 1;
    if (nextStep < STEPS.length) {
      stepRef.current = nextStep;
      setCurrentStepIndex(nextStep);
    }
  }, [form]);

  /** Kick off the conversation */
  const start = useCallback(() => {
    if (started) return;
    setStarted(true);
  }, [started]);

  return {
    // Form state re-exposed
    fields: form.fields,
    errors: form.errors,
    submitted: form.submitted,
    submitting: form.submitting,
    setField: form.setField,
    validateField: form.validateField,
    validate: form.validate,

    // Chat state
    messages,
    currentStepIndex,
    currentStep: (() => {
      const step = STEPS[currentStepIndex] ?? STEPS[SUCCESS_STEP];
      if (step.field === 'companyWebsite' && form.fields.companyName) {
        const slug = slugify(form.fields.companyName);
        if (slug) return { ...step, placeholder: `https://${slug}.com` };
      }
      return step;
    })(),
    isBotTyping,
    started,
    isSuccess: currentStepIndex === SUCCESS_STEP,

    // Actions
    start,
    startBotTyping,
    finishBotTyping,
    advanceStep,
    skipStep,
    submitForm,
  };
}
