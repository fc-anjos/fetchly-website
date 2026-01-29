import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { SectionHeader } from './SectionHeader';
import { cn } from '@/lib/utils';

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ProcessStepsProps {
  /** Section title */
  title?: string;
  /** Array of process steps (defaults to DEFAULT_PROCESS_STEPS) */
  steps?: ProcessStep[];
  /** Theme variant */
  theme?: 'dark' | 'light';
  /** Background variant (dark theme only) */
  background?: 'default' | 'muted';
  /** Additional className for the section */
  className?: string;
}

/** Default process steps used across multiple pages */
export const DEFAULT_PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Initial consultation and discovery',
    description:
      'Kickstart your journey with our Initial Consultation and Discovery — where your needs meet expert insight. Discover the path to your best solutions, tailored just for you from day one!',
  },
  {
    title: 'Collaborative planning and strategy',
    description:
      'Supercharge your success with Collaborative Planning and Strategy — where every voice counts and every step is smarter. Harness the power of teamwork to turn goals into game-changing results!',
  },
  {
    title: 'Design and development execution',
    description:
      'Unlock innovation with seamless Design and Development Execution — where bold ideas become reality, fast. Experience the perfect blend of creativity and precision to bring your vision to life, from concept to launch!',
  },
];

export function ProcessSteps({
  title = 'Our seamless collaboration process',
  steps = DEFAULT_PROCESS_STEPS,
  theme = 'dark',
  background = 'default',
  className,
}: ProcessStepsProps) {
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
        <SectionHeader title={title} theme={theme} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={cn(
                'p-8 rounded-2xl transition-colors',
                isDark
                  ? 'bg-gray-900/50 border border-white/10'
                  : 'bg-light-card border border-black/10 hover:bg-light-card-hover rounded-[1rem]'
              )}
            >
              <Text size="sm" className="font-semibold mb-4 text-primary">
                0{index + 1}
              </Text>
              <Heading
                level="h4"
                className={cn('mb-4 capitalize', isDark ? 'text-white' : 'text-black')}
              >
                {step.title}
              </Heading>
              <Text className={isDark ? 'text-gray-400' : 'text-light-text-muted'}>
                {step.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ProcessSteps;
