'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { ScrollReveal } from '@/components/effects/ScrollReveal';

export function CTA() {
  return (
    <section className="relative py-12 md:py-16 bg-surface">
      <Container className="relative">
        <ScrollReveal stagger={0.2} direction="up">
          <div className="max-w-2xl">
            <div data-reveal>
              <Heading level="display-2" className="text-foreground mb-6">
                Ready to start building?
              </Heading>
            </div>
            <div data-reveal>
              <Button href="/intake/step-1" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default CTA;
