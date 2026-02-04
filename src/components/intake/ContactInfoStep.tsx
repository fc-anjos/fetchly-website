'use client';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/Input';
import type { IntakeFields, IntakeErrors } from '@/hooks/useIntakeForm';

interface ContactInfoStepProps {
  fields: IntakeFields;
  errors: IntakeErrors;
  onFieldChange: <K extends keyof IntakeFields>(key: K, value: IntakeFields[K]) => void;
  onBack: () => void;
  onSubmit: () => void;
  submitting: boolean;
}

export function ContactInfoStep({
  fields,
  errors,
  onFieldChange,
  onBack,
  onSubmit,
  submitting,
}: ContactInfoStepProps) {
  return (
    <div className="space-y-6">
      <Input
        label="Name"
        placeholder="Jane Smith"
        value={fields.name}
        onChange={(e) => onFieldChange('name', e.target.value)}
        error={errors.name}
      />

      <Input
        label="Email"
        type="email"
        placeholder="you@company.com"
        value={fields.email}
        onChange={(e) => onFieldChange('email', e.target.value)}
        error={errors.email}
      />

      <Input
        label="Phone (optional)"
        type="tel"
        placeholder="+1 (405) 123-6789"
        value={fields.phone}
        onChange={(e) => onFieldChange('phone', e.target.value)}
        error={errors.phone}
      />

      <Input
        label="LinkedIn (optional)"
        type="url"
        placeholder="https://linkedin.com/in/janesmith"
        value={fields.linkedin}
        onChange={(e) => onFieldChange('linkedin', e.target.value)}
        error={errors.linkedin}
      />

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className={cn(
            'flex-1 py-3 rounded-lg text-sm font-medium transition-colors duration-200',
            'border border-border text-foreground hover:border-primary hover:text-primary',
          )}
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className={cn(
            'flex-1 py-3 rounded-lg text-sm font-semibold transition-colors duration-200',
            'bg-primary text-black hover:bg-primary-dark',
            'disabled:opacity-50 disabled:cursor-not-allowed',
          )}
        >
          {submitting ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </div>
  );
}

export default ContactInfoStep;
