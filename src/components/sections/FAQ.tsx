'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { FAQ_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="muted" className="py-24 md:py-32">
      <Container size="md">
        <div className="text-center mb-16">
          <Badge className="mb-4">FAQ</Badge>
          <Heading level="display-2" className="text-white mb-4">
            FAQs
          </Heading>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <Text as="span" className="text-white font-semibold pr-4">
                  {item.question}
                </Text>
                <span
                  className={cn(
                    'flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )}
                >
                  <svg
                    className="w-4 h-4 text-white"
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
                <Text as="div" className="px-6 pb-6 text-gray-400">
                  {item.answer}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FAQ;
