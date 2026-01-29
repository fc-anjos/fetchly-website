'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { SectionHeader } from './SectionHeader';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  /** Section title */
  title?: string;
  /** Optional description below the title */
  description?: string;
  /** Array of FAQ items */
  items: FAQItem[];
  /** Background variant */
  background?: 'default' | 'muted';
  /** Layout variant */
  layout?: 'centered' | 'two-column';
  /** Whether to use controlled state (managed accordion) or uncontrolled (native details) */
  controlled?: boolean;
  /** Show CTA button at bottom */
  showCTA?: boolean;
  /** CTA button text */
  ctaText?: string;
  /** CTA button href */
  ctaHref?: string;
  /** Additional className */
  className?: string;
}

function FAQItemControlled({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl overflow-hidden bg-surface-card border border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-overlay"
        aria-expanded={isOpen}
      >
        <Text
          as="span"
          size="base"
          className="font-semibold pr-4 text-foreground"
        >
          {item.question}
        </Text>
        <span
          className={cn(
            'flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-transform duration-200 text-primary',
            isOpen && 'rotate-180'
          )}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
              className={cn('transition-transform', isOpen && 'rotate-45')}
            />
          </svg>
        </span>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <Text as="div" className="px-6 pb-6 text-foreground-muted">
          {item.answer}
        </Text>
      </div>
    </div>
  );
}

function FAQItemUncontrolled({ item }: { item: FAQItem }) {
  return (
    <details className="group overflow-hidden rounded-2xl bg-surface-card border border-border">
      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
        <Text
          as="span"
          size="lg"
          className="font-semibold pr-4 text-foreground"
        >
          {item.question}
        </Text>
        <span className="flex-shrink-0 text-primary">
          <svg
            className="w-6 h-6 transform transition-transform group-open:rotate-45"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </summary>
      <div className="px-6 pb-6">
        <Text className="text-foreground-muted">{item.answer}</Text>
      </div>
    </details>
  );
}

export function FAQAccordion({
  title = 'FAQ',
  description,
  items,
  background = 'default',
  layout = 'centered',
  controlled = false,
  showCTA = false,
  ctaText = 'Get in Touch',
  ctaHref = '/intake/step-1',
  className,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFAQItems = () => (
    <ScrollReveal stagger={0.1} direction="up" distance={30}>
      <div className="space-y-4">
        {items.map((item, index) =>
          controlled ? (
            <div key={index} data-reveal>
              <FAQItemControlled
                item={item}
                isOpen={openIndex === index}
                onToggle={() => toggleItem(index)}
              />
            </div>
          ) : (
            <div key={index} data-reveal>
              <FAQItemUncontrolled item={item} />
            </div>
          )
        )}
      </div>
    </ScrollReveal>
  );

  if (layout === 'two-column') {
    return (
      <Section
        background={background}
        className={cn('py-24 md:py-32', className)}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1fr] gap-12 lg:gap-20">
            <div>
              <Text size="sm" className="uppercase tracking-[1px] font-semibold text-foreground-subtle mb-4">
                FAQ
              </Text>
              <Heading level="display-2" className="text-foreground">
                {title}
              </Heading>
            </div>
            {renderFAQItems()}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section
      background={background}
      className={cn('py-24 md:py-32', className)}
    >
      <Container size="md">
        <SectionHeader title={title} description={description} />
        {renderFAQItems()}
        {showCTA && (
          <div className="text-center mt-12">
            <Button href={ctaHref} size="lg">
              {ctaText}
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}

export default FAQAccordion;
