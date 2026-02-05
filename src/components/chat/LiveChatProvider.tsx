'use client';

import { useLiveChat } from '@/hooks/useLiveChat';
import { LiveChatWidget } from './LiveChatWidget';

export function LiveChatProvider() {
  const { isOpen, messages, send, close } = useLiveChat();

  return (
    <LiveChatWidget
      isOpen={isOpen}
      messages={messages}
      onSend={send}
      onClose={close}
    />
  );
}
