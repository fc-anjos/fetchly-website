'use client';

import { useEffect, useState, useCallback } from 'react';
import { useCalendlyEvents } from '@/hooks/useCalendlyEvents';

const CALENDLY_URL =
  'https://calendly.com/fetchly1/fetchly-intro?hide_gdpr_banner=1&primary_color=69E5FB&text_color=000000';

interface SuccessStepProps {
  onCalendlyScheduled?: () => void;
}

export function SuccessStep({ onCalendlyScheduled }: SuccessStepProps) {
  const [ready, setReady] = useState(false);

  useCalendlyEvents({
    onEventScheduled: onCalendlyScheduled,
  });

  // Load Calendly widget assets
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setReady(true);
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  // Auto-open popup when script is ready
  useEffect(() => {
    if (!ready) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL });
  }, [ready]);

  const openCalendly = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL });
  }, []);

  return (
    <div className="text-center space-y-4 py-4">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-2">
        <svg
          className="w-7 h-7 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-h4 font-semibold text-foreground">
        Got it! We&apos;ll be in touch within 24 hours.
      </h2>
      <p className="text-body text-foreground-subtle max-w-md mx-auto">
        Want to skip the back-and-forth? Book a call now.
      </p>
      <button
        type="button"
        onClick={openCalendly}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-black font-semibold text-sm hover:bg-primary-dark transition-colors"
      >
        Book a Call
      </button>
    </div>
  );
}

export default SuccessStep;
