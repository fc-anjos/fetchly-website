type GA4EventParams = Record<string, string | number | boolean | undefined>;

const GA4_EVENTS = [
  'page_view',
  'form_impression',
  'form_start',
  'form_field_complete',
  'form_submit',
  'form_submit_success',
  'form_submit_error',
  'hero_email_submit',
  'exit_intent_shown',
  'exit_intent_dismissed',
  'exit_intent_submit',
  'calendly_date_selected',
  'calendly_event_scheduled',
] as const;

export type GA4Event = (typeof GA4_EVENTS)[number];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag(...args);
}

export function trackEvent(event: GA4Event, params?: GA4EventParams) {
  gtag('event', event, params);
}

export function setUserProperties(properties: GA4EventParams) {
  gtag('set', 'user_properties', properties);
}
