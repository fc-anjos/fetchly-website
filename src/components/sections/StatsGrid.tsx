import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { SectionHeader } from './SectionHeader';
import { cn } from '@/lib/utils';

export interface StatItem {
  /** The stat value (number or string) */
  value: string | number;
  /** Description of the stat */
  label: string;
}

export interface StatsGridProps {
  /** Section title */
  title?: string;
  /** Optional description */
  description?: string;
  /** Array of stat items (defaults to DEFAULT_STATS) */
  stats?: StatItem[];
  /** Theme variant */
  theme?: 'dark' | 'light';
  /** Background variant */
  background?: 'default' | 'muted';
  /** Additional className */
  className?: string;
}

/** Default company stats used across multiple pages */
export const DEFAULT_STATS: StatItem[] = [
  { value: '8', label: 'Years of history and running' },
  { value: '128', label: 'Team members across the globe' },
  { value: '103', label: 'Successfully launched web, mobile and eComm platforms' },
];

export function StatsGrid({
  title = 'About us',
  description = 'For over eight years, we have helped businesses deliver innovative platforms.',
  stats = DEFAULT_STATS,
  theme = 'dark',
  background = 'default',
  className,
}: StatsGridProps) {
  const isDark = theme === 'dark';

  return (
    <Section
      background={isDark ? background : undefined}
      className={cn(
        'py-24 md:py-32',
        !isDark && (background === 'muted' ? 'bg-light-bg-alt' : 'bg-light-bg'),
        className
      )}
    >
      <Container>
        <SectionHeader title={title} description={description} theme={theme} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                'text-center p-8 rounded-2xl',
                isDark
                  ? 'bg-gray-900/50 border border-white/10'
                  : 'bg-light-card border border-black/10'
              )}
            >
              <Heading
                level="display-1"
                as="div"
                className={cn('mb-2', isDark ? 'text-primary' : 'text-primary')}
              >
                {stat.value}
              </Heading>
              <Text className={isDark ? 'text-gray-400' : 'text-light-text-muted'}>
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default StatsGrid;
