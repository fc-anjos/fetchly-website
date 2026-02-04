'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';

export interface CTAProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref?: string;
  className?: string;
}

export function CTA({
  title,
  description,
  buttonText,
  buttonHref = '/intake/request',
  className,
}: CTAProps) {
  return (
    <section className={cn('relative py-12 md:py-16 bg-surface', className)}>
      <Container className="relative">
        <ScrollReveal stagger={0.2} direction="up">
          <div className="max-w-2xl">
            <div data-reveal>
              <Heading level="display-2" className="text-foreground mb-6">
                {title}
              </Heading>
            </div>
            {description && (
              <div data-reveal>
                <Text size="lg" className="text-foreground-muted mb-8">
                  {description}
                </Text>
              </div>
            )}
            <div data-reveal>
              <Button href={buttonHref} size="lg">
                {buttonText}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default CTA;
