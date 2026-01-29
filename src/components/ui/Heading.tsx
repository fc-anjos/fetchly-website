import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type HeadingLevel = 'display-1' | 'display-2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const levelStyles: Record<HeadingLevel, string> = {
  'display-1': 'text-display-1 font-bold leading-[1.05] tracking-tight',
  'display-2': 'text-display-2 font-bold leading-[1.1] tracking-tight',
  h1: 'text-h1 font-semibold leading-[1.2]',
  h2: 'text-h2 font-semibold leading-[1.25]',
  h3: 'text-h3 font-semibold leading-[1.3]',
  h4: 'text-h4 font-semibold leading-[1.35]',
  h5: 'text-h5 font-semibold leading-[1.4]',
  h6: 'text-h6 font-medium leading-[1.4]',
};

const defaultTags: Record<HeadingLevel, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = {
  'display-1': 'h1',
  'display-2': 'h2',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

export function Heading({ level, children, className, as }: HeadingProps) {
  const Tag = as || defaultTags[level];
  const finalClassName = cn(levelStyles[level], className);

  return (
    <Tag className={finalClassName}>
      {children}
    </Tag>
  );
}

export default Heading;
