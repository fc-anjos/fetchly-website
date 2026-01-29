import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { SectionHeader } from './SectionHeader';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
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
  /** Background variant */
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
  background = 'default',
  className,
}: ProcessStepsProps) {
  return (
    <Section
      background={background}
      className={cn('py-24 md:py-32', className)}
    >
      <Container>
        <SectionHeader title={title} />
        <ScrollReveal stagger={0.15} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                data-reveal
                className="p-8 rounded-2xl transition-colors bg-surface-card border border-border"
              >
                <Text size="sm" className="font-semibold mb-4 text-primary">
                  0{index + 1}
                </Text>
                <Heading level="h4" className="mb-4 capitalize text-foreground">
                  {step.title}
                </Heading>
                <Text className="text-foreground-muted">
                  {step.description}
                </Text>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export default ProcessSteps;
