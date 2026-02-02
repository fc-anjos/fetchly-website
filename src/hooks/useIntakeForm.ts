'use client';

import { useState, useCallback, useMemo } from 'react';

export type ProjectType = 'New Store' | 'Redesign' | 'Migration' | 'Optimization' | '';
export type CompanySize = '1-5' | '6-10' | '11-49' | '50-250' | '251+' | '';

export interface IntakeFields {
  projectType: ProjectType;
  companySize: CompanySize;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  companyWebsite: string;
  message: string;
}

export interface IntakeErrors {
  projectType?: string;
  companySize?: string;
  name?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  companyWebsite?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REQUIRED_KEYS: (keyof IntakeFields)[] = ['projectType', 'companySize', 'name', 'email', 'companyName', 'message'];
const FIELD_KEYS: (keyof IntakeFields)[] = ['projectType', 'companySize', 'name', 'email', 'phone', 'companyName', 'companyWebsite', 'message'];

const initialFields: IntakeFields = {
  projectType: '',
  companySize: '',
  name: '',
  email: '',
  phone: '',
  companyName: '',
  companyWebsite: '',
  message: '',
};

export function useIntakeForm() {
  const [fields, setFields] = useState<IntakeFields>(initialFields);
  const [errors, setErrors] = useState<IntakeErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const setField = useCallback(<K extends keyof IntakeFields>(key: K, value: IntakeFields[K]) => {
    setFields(prev => ({ ...prev, [key]: value }));
    setErrors(prev => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

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
    if (key === 'companyWebsite' || key === 'phone') return undefined; // optional
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
    await new Promise(resolve => setTimeout(resolve, 800));
    setSubmitting(false);
    setSubmitted(true);
  }, [validate]);

  const reset = useCallback(() => {
    setFields(initialFields);
    setErrors({});
    setSubmitted(false);
    setSubmitting(false);
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
