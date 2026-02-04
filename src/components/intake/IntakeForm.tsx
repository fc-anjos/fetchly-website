'use client';

import { useState, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIntakeForm } from '@/hooks/useIntakeForm';
import { ProjectInfoStep } from './ProjectInfoStep';
import { ContactInfoStep } from './ContactInfoStep';
import { SuccessStep } from './SuccessStep';
import { FormTracker } from '@/components/tracking/FormTracker';

type Step = 'project' | 'contact' | 'success';

const STEP_LABELS: Record<Step, string> = {
  project: 'About Your Project',
  contact: 'Contact Info',
  success: 'Done',
};

const STEP_ORDER: Step[] = ['project', 'contact', 'success'];

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

  const validateProjectStep = useCallback((): boolean => {
    const required: (keyof typeof form.fields)[] = [
      'projectType',
      'companySize',
      'companyName',
      'message',
    ];
    let valid = true;
    for (const key of required) {
      const err = form.validateField(key);
      if (err) {
        valid = false;
      }
    }
    if (!valid) form.validate();
    return valid;
  }, [form]);

  const handleProjectNext = useCallback(() => {
    if (validateProjectStep()) {
      setStep('contact');
    }
  }, [validateProjectStep]);

  const handleContactBack = useCallback(() => {
    setStep('project');
  }, []);

  const handleContactSubmit = useCallback(async () => {
    if (!form.validate()) return;
    await form.handleSubmit();
    setStep('success');
  }, [form]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-h2 font-bold text-foreground mb-3">
          {heading || 'Tell us about your project'}
        </h1>
        <p className="text-body-lg text-foreground-subtle">
          {step === 'success'
            ? ''
            : 'Fill out the form below and we\'ll get back to you within 24 hours.'}
        </p>
      </div>

      {/* Step indicator */}
      {step !== 'success' && (
        <div className="flex items-center gap-2 mb-8" role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemin={1} aria-valuemax={3}>
          {STEP_ORDER.slice(0, 2).map((s, i) => (
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
              {i < 1 && (
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

      {/* Form card */}
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

        {step === 'success' && <SuccessStep />}
      </div>
      </FormTracker>
    </div>
  );
}

export default IntakeForm;
