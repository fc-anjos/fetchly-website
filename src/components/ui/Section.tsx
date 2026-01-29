import { cn } from '@/lib/utils';
import type { SectionProps } from '@/types';

const backgrounds = {
  default: 'bg-transparent',
  muted: 'bg-surface-muted',
  dark: 'bg-surface',
};

export function Section({ children, className, id, background = 'default' }: SectionProps) {
  // Check if className includes custom padding or min-h to skip defaults
  const hasCustomPadding = className?.includes('py-') || className?.includes('min-h-');

  return (
    <section
      id={id}
      className={cn(
        !hasCustomPadding && 'py-12 md:py-16 lg:py-20',
        backgrounds[background],
        className
      )}
    >
      {children}
    </section>
  );
}

export default Section;
