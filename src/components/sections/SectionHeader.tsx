import { Badge } from '@/components/ui/Badge';
import { Text } from '@/components/ui/Text';
import { SplitText } from '@/components/effects/SplitText';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  /** Small label displayed above the title */
  label?: string;
  /** Main section title */
  title: string;
  /** Optional description below the title */
  description?: string;
  /** Alignment of the header content */
  align?: 'left' | 'center';
  /** Size variant affecting title size */
  size?: 'default' | 'large';
  /** Additional className for the container */
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  size = 'default',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-16',
        align === 'center' && 'text-center',
        align === 'center' && 'max-w-3xl mx-auto',
        className
      )}
    >
      {label && (
        <ScrollReveal direction="up" distance={20} duration={0.5}>
          <Badge className="mb-4">{label}</Badge>
        </ScrollReveal>
      )}
      <SplitText
        as={size === 'large' ? 'h1' : 'h2'}
        splitBy="words"
        trigger="scroll"
        className={cn(
          size === 'large'
            ? 'text-display-1 font-bold leading-[1.05] tracking-tight'
            : 'text-display-2 font-bold leading-[1.1] tracking-tight',
          'mb-4',
          'text-foreground'
        )}
        animation={{ duration: 0.6, stagger: 0.04, ease: 'power3.out', y: 35 }}
      >
        {title}
      </SplitText>
      {description && (
        <ScrollReveal direction="up" distance={20} duration={0.6} delay={0.2}>
          <Text size="lg" className="text-foreground-muted">
            {description}
          </Text>
        </ScrollReveal>
      )}
    </div>
  );
}

export default SectionHeader;
