'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { FAQ_ITEMS } from '@/lib/constants';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="muted">
      <Container size="md">
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <Heading level="display-2" className="text-foreground mb-4">
              FAQs
            </Heading>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.1} direction="up" distance={30}>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                data-reveal
                className="bg-surface-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-overlay transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <Text as="span" className="text-foreground font-semibold pr-4">
                    {item.question}
                  </Text>
                  <span
                    className={cn(
                      'flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-overlay transition-transform duration-200',
                      openIndex === index && 'rotate-180'
                    )}
                  >
                    <svg
                      className="w-4 h-4 text-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-200',
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  )}
                >
                  <Text as="div" className="px-6 pb-6 text-foreground-muted">
                    {item.answer}
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

export default FAQ;
