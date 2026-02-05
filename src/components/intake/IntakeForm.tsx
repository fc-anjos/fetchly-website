'use client';

import { useState, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIntakeForm } from '@/hooks/useIntakeForm';
import { ProjectInfoStep } from './ProjectInfoStep';
import { CompanyInfoStep } from './CompanyInfoStep';
import { ContactInfoStep } from './ContactInfoStep';
import { SuccessStep } from './SuccessStep';
import { FormTracker } from '@/components/tracking/FormTracker';

type Step = 'project' | 'company' | 'contact' | 'success';

const STEP_LABELS: Record<Step, string> = {
  project: 'Your Project',
  company: 'Your Company',
  contact: 'Your Details',
  success: 'Done',
};

const STEP_ORDER: Step[] = ['project', 'company', 'contact', 'success'];

interface IntakeFormProps {
  preselectedType?: string;
  heading?: string;
  initialEmail?: string;
}

export function IntakeForm({ preselectedType, heading, initialEmail }: IntakeFormProps) {
  const form = useIntakeForm('intake-form');

  // Pre-fill email from Hero redirect
  useEffect(() => {
    if (initialEmail) {
      form.setField('email', initialEmail);
    }
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [step, setStep] = useState<Step>('project');

  const currentIndex = STEP_ORDER.indexOf(step);

  const validateStep = useCallback((keys: (keyof typeof form.fields)[]): boolean => {
    let valid = true;
    for (const key of keys) {
      const err = form.validateField(key);
      if (err) valid = false;
    }
    if (!valid) form.validate();
    return valid;
  }, [form]);

  const handleProjectNext = useCallback(() => {
    if (validateStep(['email', 'name', 'projectType', 'message'])) {
      setStep('company');
    }
  }, [validateStep]);

  const handleCompanyBack = useCallback(() => {
    setStep('project');
  }, []);

  const handleCompanyNext = useCallback(() => {
    if (validateStep(['companyName', 'companySize'])) {
      setStep('contact');
    }
  }, [validateStep]);

  const handleContactBack = useCallback(() => {
    setStep('company');
  }, []);

  const handleContactSubmit = useCallback(async () => {
    if (!form.validate()) return;
    await form.handleSubmit();
    try {
      sessionStorage.setItem('fetchly_form_submitted', '1');
    } catch {
      // sessionStorage unavailable
    }
    setStep('success');
  }, [form]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Heading */}
      {step !== 'success' && (
        <div className="text-center mb-10">
          <h1 className="text-h2 font-bold text-foreground mb-3">
            {heading || 'Tell us about your project'}
          </h1>
          <p className="text-body-lg text-foreground-subtle">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      )}

      {/* Step indicator */}
      {step !== 'success' && (
        <div className="flex items-center gap-2 mb-8" role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemin={1} aria-valuemax={3}>
          {STEP_ORDER.slice(0, 3).map((s, i) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div
                className={cn(
                  'flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium shrink-0 transition-colors',
                  i <= currentIndex
                    ? 'bg-primary text-black'
                    : 'bg-surface-card border border-border text-foreground-muted',
                )}
              >
                {i + 1}
              </div>
              <span
                className={cn(
                  'text-sm font-medium hidden sm:block',
                  i <= currentIndex ? 'text-foreground' : 'text-foreground-muted',
                )}
              >
                {STEP_LABELS[s]}
              </span>
              {i < 2 && (
                <div
                  className={cn(
                    'flex-1 h-px ml-2',
                    i < currentIndex ? 'bg-primary' : 'bg-border',
                  )}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {step === 'success' ? (
        <SuccessStep />
      ) : (
        <FormTracker formId="intake-form">
          <div className="bg-surface-card border border-border rounded-xl p-6 sm:p-8">
            {step === 'project' && (
              <ProjectInfoStep
                fields={form.fields}
                errors={form.errors}
                onFieldChange={form.setField}
                onNext={handleProjectNext}
                preselectedType={preselectedType}
              />
            )}

            {step === 'company' && (
              <CompanyInfoStep
                fields={form.fields}
                errors={form.errors}
                onFieldChange={form.setField}
                onBack={handleCompanyBack}
                onNext={handleCompanyNext}
              />
            )}

            {step === 'contact' && (
              <ContactInfoStep
                fields={form.fields}
                errors={form.errors}
                onFieldChange={form.setField}
                onBack={handleContactBack}
                onSubmit={handleContactSubmit}
                submitting={form.submitting}
              />
            )}
          </div>
        </FormTracker>
      )}
    </div>
  );
}

export default IntakeForm;
