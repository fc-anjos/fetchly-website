'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface LiveChatMessage {
  id: string;
  body: string;
  sender: 'admin' | 'visitor';
  timestamp: string;
}

interface UseLiveChatReturn {
  isOpen: boolean;
  messages: LiveChatMessage[];
  send: (body: string) => void;
  close: () => void;
}

type TrackerChat = {
  send(body: string): void;
  on(event: string, handler: (...args: any[]) => void): () => void;
};

function getTracker(): TrackerChat | null {
  return (window as any).__FLS_TRACKER__?.chat ?? null;
}

export function useLiveChat(): UseLiveChatReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<LiveChatMessage[]>([]);
  const chatRef = useRef<TrackerChat | null>(null);

  useEffect(() => {
    let disposed = false;
    const unsubs: Array<() => void> = [];

    // Poll for tracker availability (it loads async)
    const poll = setInterval(() => {
      const chat = getTracker();
      if (!chat || disposed) return;
      clearInterval(poll);
      chatRef.current = chat;

      unsubs.push(chat.on('chat_initiated', (msg: any) => {
        setIsOpen(true);
        // History may come with the initiated message on admin side only; visitor just opens
      }));

      unsubs.push(chat.on('chat_message', (msg: any) => {
        setMessages(prev => [...prev, {
          id: msg.messageId || `msg-${Date.now()}`,
          body: msg.body,
          sender: msg.sender || 'admin',
          timestamp: msg.timestamp || new Date().toISOString(),
        }]);
      }));

      unsubs.push(chat.on('chat_ended', () => {
        setIsOpen(false);
      }));
    }, 500);

    return () => {
      disposed = true;
      clearInterval(poll);
      unsubs.forEach(fn => fn());
    };
  }, []);

  const send = useCallback((body: string) => {
    const trimmed = body.trim();
    if (!trimmed) return;
    chatRef.current?.send(trimmed);
    // Optimistically add visitor's own message
    setMessages(prev => [...prev, {
      id: `local-${Date.now()}`,
      body: trimmed,
      sender: 'visitor',
      timestamp: new Date().toISOString(),
    }]);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, messages, send, close };
}
