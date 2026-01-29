import { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';
import { SectionHeader } from './SectionHeader';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';

export interface IconGridItem {
  /** Item title */
  title: string;
  /** Optional description */
  description?: string;
  /** Icon element */
  icon: ReactNode;
}

export interface IconGridProps {
  /** Section title */
  title?: string;
  /** Optional description */
  description?: string;
  /** Array of items with icons */
  items: IconGridItem[];
  /** Number of columns on large screens */
  columns?: 3 | 4 | 6 | 8;
  /** Card size variant */
  size?: 'compact' | 'default' | 'large';
  /** Background variant */
  background?: 'default' | 'muted';
  /** Whether to show icon in a background box */
  iconWithBackground?: boolean;
  /** Additional className */
  className?: string;
  /** Section id for anchor links */
  id?: string;
}

export function IconGrid({
  title,
  description,
  items,
  columns = 4,
  size = 'default',
  background = 'default',
  iconWithBackground = false,
  className,
  id,
}: IconGridProps) {
  const gridColsClass = {
    3: 'md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    8: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-8',
  }[columns];

  const gapClass = {
    compact: 'gap-6',
    default: 'gap-8 md:gap-10',
    large: 'gap-10 md:gap-12',
  }[size];

  return (
    <Section
      id={id}
      background={background}
      className={cn('py-24 md:py-32', className)}
    >
      <Container>
        {(title || description) && (
          <SectionHeader title={title || ''} description={description} />
        )}
        <ScrollReveal stagger={0.05} direction="up" distance={25}>
          <div className={cn('grid', gridColsClass, gapClass)}>
            {items.map((item) => (
              <div
                key={item.title}
                data-reveal
                className="text-center group"
              >
                <div
                  className={cn(
                    'flex justify-center mb-4 text-primary transition-colors',
                    'group-hover:text-accent',
                    iconWithBackground &&
                      'w-14 h-14 mx-auto rounded-xl bg-primary/8 items-center group-hover:bg-primary/12'
                  )}
                >
                  {item.icon}
                </div>
                <Text
                  size={size === 'compact' ? 'sm' : 'base'}
                  className="text-foreground-muted"
                >
                  {item.title}
                </Text>
                {item.description && (
                  <Text size="sm" className="mt-1.5 text-foreground-muted/70">
                    {item.description}
                  </Text>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export default IconGrid;
