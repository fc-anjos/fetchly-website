'use client';

import { useState, useCallback, useMemo, useRef } from 'react';
import { submitToHubSpot } from '@/lib/hubspot';
import { getUTMForHubSpot } from '@/lib/utm';
import { trackEvent } from '@/lib/analytics';
import { usePartialFormSave } from './usePartialFormSave';

export type ProjectType = string;
export type CompanySize = '1-5' | '6-10' | '11-49' | '50-250' | '251+' | '';

export interface IntakeFields {
  projectType: ProjectType;
  companySize: CompanySize;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: string;
  companyName: string;
  companyWebsite: string;
  message: string;
  _hp: string;
}

export interface IntakeErrors {
  projectType?: string;
  companySize?: string;
  name?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  companyName?: string;
  companyWebsite?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REQUIRED_KEYS: (keyof IntakeFields)[] = ['projectType', 'companySize', 'name', 'lastName', 'email', 'companyName', 'message'];
const FIELD_KEYS: (keyof IntakeFields)[] = ['projectType', 'companySize', 'name', 'lastName', 'email', 'phone', 'linkedin', 'companyName', 'companyWebsite', 'message'];

const initialFields: IntakeFields = {
  projectType: '',
  companySize: '',
  name: '',
  lastName: '',
  email: '',
  phone: '',
  linkedin: '',
  companyName: '',
  companyWebsite: '',
  message: '',
  _hp: '',
};

export function useIntakeForm(formId = 'intake-form') {
  const [fields, setFields] = useState<IntakeFields>(initialFields);
  const [errors, setErrors] = useState<IntakeErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formStartedRef = useRef(false);

  // Partial saves: sends to HubSpot as user fills fields
  usePartialFormSave(fields);

  const setField = useCallback(<K extends keyof IntakeFields>(key: K, value: IntakeFields[K]) => {
    setFields(prev => ({ ...prev, [key]: value }));
    setErrors(prev => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });

    // Fire form_start on first interaction
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackEvent('form_start', { form_id: formId });
    }

    // Fire form_field_complete when field gets a valid value
    const isValid = key === 'email' ? EMAIL_REGEX.test(value as string) : (value as string).trim().length > 0;
    if (isValid) {
      trackEvent('form_field_complete', { form_id: formId, field: key });
    }
  }, [formId]);

  const isFieldComplete = useCallback((key: keyof IntakeFields): boolean => {
    const val = fields[key];
    if (key === 'email') return EMAIL_REGEX.test(val);
    return val.trim().length > 0;
  }, [fields]);

  const completedCount = useMemo(
    () => FIELD_KEYS.filter(k => {
      const val = fields[k];
      if (k === 'email') return EMAIL_REGEX.test(val);
      return val.trim().length > 0;
    }).length,
    [fields]
  );

  const progress = useMemo(() => completedCount / FIELD_KEYS.length, [completedCount]);

  const validateField = useCallback((key: keyof IntakeFields): string | undefined => {
    const val = fields[key];
    if (key === 'companyWebsite' || key === 'phone' || key === 'linkedin' || key === '_hp') return undefined;
    if (!val || val.trim().length === 0) return 'This field is required';
    if (key === 'email' && !EMAIL_REGEX.test(val)) return 'Please enter a valid email';
    return undefined;
  }, [fields]);

  const validate = useCallback((): boolean => {
    const newErrors: IntakeErrors = {};
    let valid = true;
    for (const key of REQUIRED_KEYS) {
      const err = validateField(key);
      if (err) {
        newErrors[key] = err;
        valid = false;
      }
    }
    setErrors(newErrors);
    return valid;
  }, [validateField]);

  const handleSubmit = useCallback(async () => {
    if (!validate()) return;
    setSubmitting(true);
    trackEvent('form_submit', { form_id: formId });

    const payload: Record<string, string> = {
      email: fields.email,
      firstname: fields.name,
      lastname: fields.lastName,
      company: fields.companyName,
      message: fields.message,
      project_type: fields.projectType,
      company_size: fields.companySize,
    };
    if (fields.phone) payload.phone = fields.phone;
    if (fields.linkedin) payload.linkedin = fields.linkedin;
    if (fields.companyWebsite) payload.website = fields.companyWebsite;

    // Attach UTM params
    const utm = getUTMForHubSpot();
    Object.assign(payload, utm);

    const result = await submitToHubSpot(payload, { honeypot: fields._hp });

    if (result.ok) {
      trackEvent('form_submit_success', { form_id: formId });
    } else {
      trackEvent('form_submit_error', { form_id: formId, error: `status_${result.status}` });
    }

    setSubmitting(false);
    setSubmitted(true);
  }, [validate, fields, formId]);

  const reset = useCallback(() => {
    setFields(initialFields);
    setErrors({});
    setSubmitted(false);
    setSubmitting(false);
    formStartedRef.current = false;
  }, []);

  return {
    fields,
    errors,
    submitted,
    submitting,
    completedCount,
    progress,
    setField,
    validate,
    validateField,
    isFieldComplete,
    handleSubmit,
    reset,
  };
}
