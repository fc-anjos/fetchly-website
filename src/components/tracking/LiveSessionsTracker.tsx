'use client';

import { useEffect } from 'react';

const FLS_SERVER_URL = process.env.NEXT_PUBLIC_FLS_SERVER_URL ?? '';
const FLS_SITE_ID = process.env.NEXT_PUBLIC_FLS_SITE_ID ?? '';

export function LiveSessionsTracker() {
  useEffect(() => {
    if (!FLS_SERVER_URL || !FLS_SITE_ID) return;

    let tracker: { destroy(): void; chat: { send(body: string): void; on(event: string, handler: (...args: any[]) => void): () => void } } | null = null;

    async function loadTracker() {
      try {
        const { init } = await import('@nicholasgriffintn/live-sessions/client');
        tracker = init({
          siteId: FLS_SITE_ID,
          serverUrl: FLS_SERVER_URL,
        });
        (window as any).__FLS_TRACKER__ = tracker;
      } catch {
        // SDK not available
      }
    }

    loadTracker();

    return () => {
      if (tracker) {
        tracker.destroy();
        tracker = null;
      }
      delete (window as any).__FLS_TRACKER__;
    };
  }, []);

  return null;
}
