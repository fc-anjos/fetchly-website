'use client';

import { useEffect, useRef } from 'react';
import { submitToHubSpot } from '@/lib/hubspot';
import { getUTMForHubSpot } from '@/lib/utm';
import type { IntakeFields } from './useIntakeForm';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEBOUNCE_MS = 1500;

export function usePartialFormSave(fields: IntakeFields) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSentRef = useRef('');

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      if (!EMAIL_REGEX.test(fields.email)) return;

      // Build the payload from filled fields
      const payload: Record<string, string> = {};
      if (fields.email) payload.email = fields.email;
      if (fields.name) payload.firstname = fields.name;
      if (fields.companyName) payload.company = fields.companyName;
      if (fields.companyWebsite) payload.website = fields.companyWebsite;
      if (fields.phone) payload.phone = fields.phone;
      if (fields.linkedin) payload.linkedin = fields.linkedin;
      if (fields.message) payload.message = fields.message;
      if (fields.projectType) payload.project_type = fields.projectType;
      if (fields.companySize) payload.company_size = fields.companySize;

      // Attach UTM params
      const utm = getUTMForHubSpot();
      Object.assign(payload, utm);

      // Don't re-send identical payloads
      const signature = JSON.stringify(payload);
      if (signature === lastSentRef.current) return;
      lastSentRef.current = signature;

      submitToHubSpot(payload).catch(() => {
        // Silent fail for partial saves
      });
    }, DEBOUNCE_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [fields]);
}
