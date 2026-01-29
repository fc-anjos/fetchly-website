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
  // Use editorial list layout for 2-3 columns, grid for 4
  const useEditorialLayout = columns <= 3;

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

        {useEditorialLayout ? (
          <EditorialLayout
            items={items}
            columns={columns}
            centerText={centerText}
            iconWithBackground={iconWithBackground}
          />
        ) : (
          <CompactGrid
            items={items}
            centerText={centerText}
            iconWithBackground={iconWithBackground}
          />
        )}
      </Container>
    </Section>
  );
}

/** Editorial layout: items as rows separated by rules, two-column asymmetric on desktop */
function EditorialLayout({
  items,
  columns,
  centerText,
  iconWithBackground,
}: {
  items: FeatureItem[];
  columns: 2 | 3 | 4;
  centerText: boolean;
  iconWithBackground: boolean;
}) {
  return (
    <ScrollReveal stagger={0.12} direction="up" distance={30}>
      <div
        className={cn(
          'grid gap-y-0',
          columns === 2 ? 'grid-cols-1 md:grid-cols-2 md:gap-x-16' : 'grid-cols-1',
        )}
      >
        {items.map((item, index) => (
          <div
            key={item.title}
            data-reveal
            className={cn(
              'py-8 md:py-10',
              // Top border on all except first (and for 2-col, not the first in each column)
              columns === 2
                ? index >= 2 && 'border-t border-border'
                : index > 0 && 'border-t border-border',
              // For 2-col layout, first two items get top border only on mobile
              columns === 2 && index === 1 && 'border-t border-border md:border-t-0',
              centerText && 'text-center',
            )}
          >
            <div className={cn(
              'flex gap-5',
              centerText && 'flex-col items-center',
              !item.icon && 'flex-col',
            )}>
              {item.icon && (
                <div
                  className={cn(
                    'shrink-0 text-primary mt-1',
                    iconWithBackground &&
                      'w-12 h-12 rounded-lg bg-primary/8 flex items-center justify-center',
                  )}
                >
                  {item.icon}
                </div>
              )}
              <div>
                <Heading level="h4" className="text-foreground mb-3">
                  {item.title}
                </Heading>
                <Text className="text-foreground-muted max-w-lg">
                  {item.description}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

/** Compact grid: for 4-column layouts, minimal open style without card borders */
function CompactGrid({
  items,
  centerText,
  iconWithBackground,
}: {
  items: FeatureItem[];
  centerText: boolean;
  iconWithBackground: boolean;
}) {
  return (
    <ScrollReveal stagger={0.08} direction="up" distance={30}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            data-reveal
            className={cn(centerText && 'text-center')}
          >
            {item.icon && (
              <div
                className={cn(
                  'mb-5 text-primary',
                  centerText && 'flex justify-center',
                  iconWithBackground &&
                    'w-12 h-12 rounded-lg bg-primary/8 flex items-center justify-center',
                  centerText && iconWithBackground && 'mx-auto',
                )}
              >
                {item.icon}
              </div>
            )}
            <Heading level="h4" className="text-foreground mb-3">
              {item.title}
            </Heading>
            <Text className="text-foreground-muted">
              {item.description}
            </Text>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

export default FeatureGrid;
