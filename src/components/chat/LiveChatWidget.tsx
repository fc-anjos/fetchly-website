'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface ChatMessage {
  id: string;
  body: string;
  sender: 'admin' | 'visitor';
  timestamp: string;
}

interface LiveChatWidgetProps {
  isOpen: boolean;
  messages: ChatMessage[];
  onSend: (body: string) => void;
  onClose: () => void;
}

export function LiveChatWidget({ isOpen, messages, onSend, onClose }: LiveChatWidgetProps) {
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [unread, setUnread] = useState(0);
  const [animatedIn, setAnimatedIn] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP entrance animation
  useEffect(() => {
    if (!isOpen) {
      setAnimatedIn(false);
      return;
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setAnimatedIn(true);
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const { gsap } = await import('gsap');
        if (cancelled || !containerRef.current) return;
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out', onComplete: () => setAnimatedIn(true) },
        );
      } catch {
        setAnimatedIn(true);
      }
    })();

    return () => { cancelled = true; };
  }, [isOpen]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Track unread when minimized
  useEffect(() => {
    if (minimized && messages.length > 0) {
      const last = messages[messages.length - 1];
      if (last.sender === 'admin') {
        setUnread(prev => prev + 1);
      }
    }
  }, [messages, minimized]);

  // Focus input when expanded
  useEffect(() => {
    if (!minimized && animatedIn) {
      inputRef.current?.focus();
    }
  }, [minimized, animatedIn]);

  const handleSend = useCallback(() => {
    const body = input.trim();
    if (!body) return;
    onSend(body);
    setInput('');
  }, [input, onSend]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  const handleExpand = useCallback(() => {
    setMinimized(false);
    setUnread(0);
  }, []);

  if (!isOpen) return null;

  // Minimized bubble
  if (minimized) {
    return (
      <button
        onClick={handleExpand}
        className={cn(
          'fixed bottom-6 right-6 z-[9998] w-14 h-14 rounded-full',
          'bg-white/10 backdrop-blur-xl border border-white/15',
          'flex items-center justify-center',
          'shadow-lg hover:scale-105 transition-transform',
        )}
        aria-label="Open chat"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#04FFA8] text-black text-xs font-bold rounded-full flex items-center justify-center">
            {unread > 9 ? '9+' : unread}
          </span>
        )}
      </button>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'fixed bottom-6 right-6 z-[9998] w-80 max-h-[480px]',
        'bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl',
        'shadow-2xl flex flex-col overflow-hidden',
        !animatedIn && 'opacity-0',
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#04FFA8] animate-pulse" />
          <span className="text-sm font-medium text-white">Live Chat</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setMinimized(true)}
            className="p-1 text-white/60 hover:text-white transition-colors"
            aria-label="Minimize chat"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /></svg>
          </button>
          <button
            onClick={onClose}
            className="p-1 text-white/60 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-3 space-y-2 min-h-[200px] max-h-[340px] scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
        data-lenis-prevent
      >
        {messages.length === 0 && (
          <p className="text-center text-white/40 text-sm py-8">An agent will be with you shortly.</p>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className={cn('flex', msg.sender === 'visitor' ? 'justify-end' : 'justify-start')}>
            <div
              className={cn(
                'max-w-[80%] rounded-xl px-3 py-2 text-sm',
                msg.sender === 'visitor'
                  ? 'bg-[#04FFA8] text-black'
                  : 'bg-white/10 text-white',
              )}
            >
              <p className="break-words">{msg.body}</p>
              <p className={cn(
                'text-[10px] mt-1',
                msg.sender === 'visitor' ? 'text-black/50' : 'text-white/40',
              )}>
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-white/10 p-3 flex gap-2">
        <input
          ref={inputRef}
          type="text"
          className={cn(
            'flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white',
            'placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[#69E5FB]/50',
          )}
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLength={2000}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className={cn(
            'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
            input.trim()
              ? 'bg-[#04FFA8] text-black hover:bg-[#04FFA8]/90'
              : 'bg-white/5 text-white/30 cursor-not-allowed',
          )}
        >
          Send
        </button>
      </div>
    </div>
  );
}
