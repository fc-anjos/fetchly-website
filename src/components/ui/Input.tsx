'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { InputProps } from '@/types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-lg border transition-colors duration-200',
            'bg-white text-gray-900 placeholder:text-gray-500',
            'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20',
            'outline-none',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
