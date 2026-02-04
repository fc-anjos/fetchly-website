'use client';

import { useFormImpression } from '@/hooks/useFormImpression';

interface FormTrackerProps {
  formId: string;
  children: React.ReactNode;
  className?: string;
}

export function FormTracker({ formId, children, className }: FormTrackerProps) {
  const ref = useFormImpression(formId);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
