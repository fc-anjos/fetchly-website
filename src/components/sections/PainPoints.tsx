import { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { SectionHeader } from './SectionHeader';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';

export interface PainPointItem {
  title: string;
  description?: string;
  icon?: ReactNode;
}

export interface PainPointsProps {
  label?: string;
  title?: string;
  items: PainPointItem[];
  background?: 'default' | 'muted';
  className?: string;
}

export function PainPoints({
  label = 'Sound familiar?',
  title = 'Problems we solve',
  items,
  background = 'muted',
  className,
}: PainPointsProps) {
  return (
    <Section background={background} className={cn('py-12 md:py-16', className)}>
      <Container>
        <SectionHeader label={label} title={title} />
        <ScrollReveal stagger={0.12} direction="up" distance={30}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {items.map((item) => (
              <div
                key={item.title}
                data-reveal
                className="flex gap-4 p-6 rounded-xl border border-border bg-surface-card"
              >
                <div className="shrink-0 mt-0.5">
                  {item.icon || (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  )}
                </div>
                <div>
                  <Heading level="h4" className="text-foreground mb-1 text-base">
                    {item.title}
                  </Heading>
                  {item.description && (
                    <Text size="sm" className="text-foreground-muted">
                      {item.description}
                    </Text>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export default PainPoints;
