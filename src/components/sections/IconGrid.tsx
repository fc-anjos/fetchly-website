import { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';
import { SectionHeader } from './SectionHeader';
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
  /** Theme variant */
  theme?: 'dark' | 'light';
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
  theme = 'dark',
  background = 'default',
  iconWithBackground = false,
  className,
  id,
}: IconGridProps) {
  const isDark = theme === 'dark';

  const gridColsClass = {
    3: 'md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    8: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-8',
  }[columns];

  const paddingClass = {
    compact: 'p-4',
    default: 'p-6',
    large: 'p-8',
  }[size];

  return (
    <Section
      id={id}
      background={isDark ? background : undefined}
      className={cn(
        'py-24 md:py-32',
        !isDark && (background === 'muted' ? 'bg-light-bg-alt' : 'bg-light-bg'),
        className
      )}
    >
      <Container>
        {(title || description) && (
          <SectionHeader title={title || ''} description={description} theme={theme} />
        )}
        <div className={cn('grid gap-4', gridColsClass)}>
          {items.map((item) => (
            <div
              key={item.title}
              className={cn(
                'rounded-2xl text-center transition-colors',
                paddingClass,
                isDark
                  ? 'bg-gray-900/50 border border-white/10 hover:border-primary/50'
                  : 'bg-light-card border border-black/10 hover:border-primary/50'
              )}
            >
              <div
                className={cn(
                  'flex justify-center mb-3 text-primary',
                  iconWithBackground &&
                    'w-16 h-16 mx-auto rounded-xl bg-primary/10 items-center'
                )}
              >
                {item.icon}
              </div>
              <Text
                size={size === 'compact' ? 'sm' : 'base'}
                className={isDark ? 'text-gray-300' : 'text-light-text-muted'}
              >
                {item.title}
              </Text>
              {item.description && (
                <Text
                  size="sm"
                  className={cn('mt-2', isDark ? 'text-gray-400' : 'text-light-text-muted')}
                >
                  {item.description}
                </Text>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default IconGrid;
