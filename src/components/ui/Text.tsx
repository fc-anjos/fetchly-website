import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type TextSize = 'xl' | 'lg' | 'base' | 'sm' | 'xs';

interface TextProps {
  size?: TextSize;
  children: ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div' | 'label' | 'blockquote';
  muted?: boolean;
}

const sizeStyles: Record<TextSize, string> = {
  xl: 'text-body-xl',
  lg: 'text-body-lg',
  base: 'text-body',
  sm: 'text-body-sm',
  xs: 'text-body-xs',
};

export function Text({ size = 'base', children, className, as = 'p', muted }: TextProps) {
  const Tag = as;

  return (
    <Tag
      className={cn(
        sizeStyles[size],
        'leading-relaxed',
        muted && 'opacity-70',
        className
      )}
    >
      {children}
    </Tag>
  );
}

export default Text;
