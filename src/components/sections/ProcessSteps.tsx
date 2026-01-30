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
      'We start with a deep dive into your product, your users, and your goals. Just a real conversation about what you need built and why.',
  },
  {
    title: 'Collaborative planning and strategy',
    description:
      'We map out every screen, feature, and milestone before writing a line of code. You review the plan, we adjust, and nothing moves forward until we agree on the direction.',
  },
  {
    title: 'Design and development execution',
    description:
      'Your team starts building. You get weekly test builds and live preview links so you can see real progress, not just status updates. We test, iterate, and ship.',
  },
];

export function ProcessSteps({
  title = 'How we work together',
  steps = DEFAULT_PROCESS_STEPS,
  background = 'default',
  className,
}: ProcessStepsProps) {
  return (
    <Section
      background={background}
      className={cn('py-12 md:py-16', className)}
    >
      <Container>
        <SectionHeader title={title} />
        <ScrollReveal stagger={0.2} direction="up" distance={30}>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.title}
                data-reveal
                className={cn(
                  'grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-4 md:gap-12',
                  'py-10 md:py-12',
                  index < steps.length - 1 && 'border-b border-border',
                )}
              >
                {/* Step number — large typographic anchor */}
                <div
                  className="text-foreground/10 font-bold leading-none"
                  style={{ fontSize: 'clamp(3rem, 4vw, 4rem)' }}
                >
                  0{index + 1}
                </div>

                {/* Content */}
                <div>
                  <Heading level="h3" className="text-foreground mb-4 capitalize">
                    {step.title}
                  </Heading>
                  <Text className="text-foreground-muted max-w-xl">
                    {step.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export default ProcessSteps;
