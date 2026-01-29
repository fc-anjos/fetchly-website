import { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { SectionHeader } from './SectionHeader';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';

export interface FeatureItem {
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Optional icon element */
  icon?: ReactNode;
}

export interface FeatureGridProps {
  /** Optional label above the title */
  label?: string;
  /** Section title */
  title?: string;
  /** Optional description */
  description?: string;
  /** Array of feature items */
  items: FeatureItem[];
  /** Number of columns */
  columns?: 2 | 3 | 4;
  /** Background variant */
  background?: 'default' | 'muted';
  /** Whether to center text in cards */
  centerText?: boolean;
  /** Whether to show icon with background */
  iconWithBackground?: boolean;
  /** Additional className */
  className?: string;
  /** Section id for anchor links */
  id?: string;
}

export function FeatureGrid({
  label,
  title,
  description,
  items,
  columns = 3,
  background = 'default',
  centerText = false,
  iconWithBackground = false,
  className,
  id,
}: FeatureGridProps) {
  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <Section
      id={id}
      background={background}
      className={cn('py-24 md:py-32', className)}
    >
      <Container>
        {(title || label) && (
          <SectionHeader
            label={label}
            title={title || ''}
            description={description}
          />
        )}
        <ScrollReveal stagger={0.08} direction="up" distance={40}>
          <div className={cn('grid grid-cols-1 gap-6', gridColsClass)}>
            {items.map((item) => (
              <div
                key={item.title}
                data-reveal
                className={cn(
                  'p-8 rounded-2xl transition-all duration-300',
                  'bg-surface-card border border-border hover:border-primary/50',
                  centerText && 'text-center'
                )}
              >
                {item.icon && (
                  <div
                    className={cn(
                      'mb-6',
                      centerText && 'flex justify-center',
                      iconWithBackground &&
                        'w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors',
                      !iconWithBackground && 'text-primary'
                    )}
                  >
                    {item.icon}
                  </div>
                )}
                <Heading level="h4" className="mb-3 text-foreground">
                  {item.title}
                </Heading>
                <Text className="text-foreground-muted">
                  {item.description}
                </Text>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export default FeatureGrid;
