'use client';

import { useState, useEffect, useRef, useCallback, type FormEvent } from 'react';
import { useExitIntent } from '@/hooks/useExitIntent';
import { submitToHubSpot } from '@/lib/hubspot';
import { getUTMForHubSpot } from '@/lib/utm';
import { trackEvent } from '@/lib/analytics';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ExitIntentPopup() {
  const { show, dismiss } = useExitIntent();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Fire GA4 event when shown
  useEffect(() => {
    if (!show) return;
    trackEvent('exit_intent_shown', {
      page: typeof window !== 'undefined' ? window.location.pathname : '',
    });
  }, [show]);

  // GSAP entrance animation
  useEffect(() => {
    if (!show) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      if (overlayRef.current) overlayRef.current.style.opacity = '1';
      if (panelRef.current) {
        panelRef.current.style.opacity = '1';
        panelRef.current.style.transform = 'none';
      }
      return;
    }

    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import('gsap');
      ctx = gsap.context(() => {
        if (overlayRef.current) {
          gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        }
        if (panelRef.current) {
          gsap.fromTo(
            panelRef.current,
            { opacity: 0, y: 30, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 },
          );
        }
      });
    })();

    return () => {
      ctx?.revert();
    };
  }, [show]);

  const handleDismiss = useCallback(() => {
    trackEvent('exit_intent_dismissed');
    dismiss();
  }, [dismiss]);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (!EMAIL_REGEX.test(email)) {
        setError('Please enter a valid email');
        return;
      }
      setError('');
      setSubmitting(true);

      const domain = email.split('@')[1] ?? '';
      trackEvent('exit_intent_submit', { email_domain: domain });

      const utm = getUTMForHubSpot();
      await submitToHubSpot({ email, ...utm }, { partial: true });

      setSubmitting(false);
      setSubmitted(true);

      // Auto-close after a brief delay
      setTimeout(dismiss, 2000);
    },
    [email, dismiss],
  );

  if (!show) {
    if (process.env.NODE_ENV === 'development') {
      return (
        <button
          type="button"
          onClick={() => {
            sessionStorage.removeItem('fetchly_form_submitted');
            window.location.reload();
          }}
          className="fixed bottom-4 right-4 z-[9999] px-3 py-1.5 rounded bg-yellow-500 text-black text-xs font-mono"
        >
          Reset exit intent
        </button>
      );
    }
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ opacity: 0 }}
      data-lenis-prevent
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleDismiss} />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative w-full max-w-md rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-8 shadow-2xl"
        style={{ opacity: 0 }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4l12 12M16 4L4 16" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-white text-lg font-medium">Thanks! We&apos;ll be in touch.</p>
          </div>
        ) : (
          <>
            <h2 className="text-white text-xl font-bold mb-2">Before you go...</h2>
            <p className="text-white/70 text-sm mb-6">
              Drop your email and we&apos;ll reach out to discuss your project.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                />
                {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-5 py-3 rounded-lg bg-primary text-black font-semibold text-sm hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Get Your Estimate'}
              </button>
            </form>

            <p className="text-white/40 text-xs mt-4 text-center">No spam.</p>
          </>
        )}
      </div>
    </div>
  );
}
