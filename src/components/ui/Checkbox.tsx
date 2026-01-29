'use client';

import { cn } from '@/lib/utils';

interface CheckboxProps {
  id?: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
}

export function Checkbox({
  id,
  label,
  checked = false,
  onChange,
  className,
  disabled = false,
}: CheckboxProps) {
  return (
    <label
      className={cn(
        'flex items-center gap-3 cursor-pointer select-none',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          className="sr-only peer"
        />
        <div
          className={cn(
            'w-5 h-5 border-2 rounded transition-all duration-200',
            'border-white/30 bg-transparent',
            'peer-checked:bg-primary peer-checked:border-primary',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-gray-950'
          )}
        />
        <svg
          className={cn(
            'absolute top-0.5 left-0.5 w-4 h-4 text-black pointer-events-none',
            'opacity-0 peer-checked:opacity-100 transition-opacity duration-200'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-white">{label}</span>
    </label>
  );
}

export default Checkbox;
