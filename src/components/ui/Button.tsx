'use client';

import { TransitionLink } from '@/components/effects/TransitionLink';
import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/types';

const variants = {
  primary: 'bg-primary text-black hover:bg-primary-dark font-medium',
  secondary: 'bg-surface-card text-foreground hover:bg-surface-alt',
  outline: 'border-2 border-border bg-transparent hover:bg-overlay-hover text-foreground',
  ghost: 'bg-transparent hover:bg-overlay-hover text-foreground',
  icon: 'bg-primary text-black hover:bg-primary-dark p-0',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
};

const iconSizes = {
  sm: 'w-9 h-9',
  md: 'w-11 h-11',
  lg: 'w-14 h-14',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled,
  className,
  icon,
  type = 'button',
}: ButtonProps) {
  const isIconOnly = variant === 'icon';

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-surface',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    isIconOnly ? iconSizes[size] : sizes[size],
    className
  );

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <TransitionLink
        href={href}
        className={classes}
        data-cursor="hover"
      >
        {content}
      </TransitionLink>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      data-cursor="hover"
    >
      {content}
    </button>
  );
}

export default Button;
