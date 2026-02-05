'use client';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/Input';
import type { IntakeFields, IntakeErrors } from '@/hooks/useIntakeForm';

const COMPANY_SIZES = ['1-5', '6-10', '11-49', '50-250', '251+'] as const;

interface CompanyInfoStepProps {
  fields: IntakeFields;
  errors: IntakeErrors;
  onFieldChange: <K extends keyof IntakeFields>(key: K, value: IntakeFields[K]) => void;
  onBack: () => void;
  onNext: () => void;
}

export function CompanyInfoStep({
  fields,
  errors,
  onFieldChange,
  onBack,
  onNext,
}: CompanyInfoStepProps) {
  return (
    <div className="space-y-8">
      {/* Company name & website */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Company name"
          placeholder="ACME"
          value={fields.companyName}
          onChange={(e) => onFieldChange('companyName', e.target.value)}
          error={errors.companyName}
        />
        <Input
          label="Company website (optional)"
          placeholder="https://acme.com"
          value={fields.companyWebsite}
          onChange={(e) => onFieldChange('companyWebsite', e.target.value)}
          error={errors.companyWebsite}
        />
      </div>

      {/* Company size */}
      <fieldset>
        <legend className="text-body-lg font-medium text-foreground mb-3">
          Company size
        </legend>
        <div className="flex flex-wrap gap-2">
          {COMPANY_SIZES.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => onFieldChange('companySize', size)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200',
                fields.companySize === size
                  ? 'bg-primary text-black border-primary'
                  : 'border-border text-foreground-subtle hover:text-foreground hover:border-primary',
              )}
            >
              {size}
            </button>
          ))}
        </div>
        {errors.companySize && (
          <p className="mt-2 text-sm text-red-500">{errors.companySize}</p>
        )}
      </fieldset>

      {/* Navigation */}
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
          onClick={onNext}
          className={cn(
            'flex-1 py-3 rounded-lg text-sm font-semibold transition-colors duration-200',
            'bg-primary text-black hover:bg-primary-dark',
          )}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default CompanyInfoStep;
