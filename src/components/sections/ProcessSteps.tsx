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
  title: string;
  steps: ProcessStep[];
  background?: 'default' | 'muted';
  className?: string;
}

export function ProcessSteps({
  title,
  steps,
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
