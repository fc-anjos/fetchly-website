'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { SectionHeader } from './SectionHeader';
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
  /** Theme variant */
  theme?: 'dark' | 'light';
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
  theme = 'dark',
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  theme?: 'dark' | 'light';
}) {
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden',
        isDark
          ? 'bg-gray-900/50 border border-white/10'
          : 'bg-light-card border border-black/10 rounded-[1rem]'
      )}
    >
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between p-6 text-left transition-colors',
          isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'
        )}
        aria-expanded={isOpen}
      >
        <Text
          as="span"
          size={isDark ? 'base' : 'lg'}
          className={cn(
            'font-semibold pr-4',
            isDark ? 'text-white' : 'text-black'
          )}
        >
          {item.question}
        </Text>
        <span
          className={cn(
            'flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-transform duration-200',
            isDark ? 'bg-white/10' : 'text-primary',
            isOpen && 'rotate-180'
          )}
        >
          <svg
            className={cn('w-4 h-4', isDark ? 'text-white' : 'w-6 h-6')}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isDark ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
                className={cn('transition-transform', isOpen && 'rotate-45')}
              />
            )}
          </svg>
        </span>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <Text as="div" className={cn('px-6 pb-6', isDark ? 'text-gray-400' : 'text-light-text-muted')}>
          {item.answer}
        </Text>
      </div>
    </div>
  );
}

function FAQItemUncontrolled({
  item,
  theme = 'dark',
}: {
  item: FAQItem;
  theme?: 'dark' | 'light';
}) {
  const isDark = theme === 'dark';

  return (
    <details
      className={cn(
        'group overflow-hidden',
        isDark
          ? 'rounded-2xl bg-gray-900/50 border border-white/10'
          : 'rounded-[1rem] bg-light-card border border-black/10'
      )}
    >
      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
        <Text
          as="span"
          size="lg"
          className={cn(
            'font-semibold pr-4',
            isDark ? 'text-white' : 'text-black'
          )}
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
        <Text className={isDark ? 'text-gray-400' : 'text-light-text-muted'}>{item.answer}</Text>
      </div>
    </details>
  );
}

export function FAQAccordion({
  title = 'FAQ',
  description,
  items,
  theme = 'dark',
  background = 'default',
  layout = 'centered',
  controlled = false,
  showCTA = false,
  ctaText = 'Get in Touch',
  ctaHref = '/intake/step-1',
  className,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isDark = theme === 'dark';

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFAQItems = () => (
    <div className="space-y-4">
      {items.map((item, index) =>
        controlled ? (
          <FAQItemControlled
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => toggleItem(index)}
            theme={theme}
          />
        ) : (
          <FAQItemUncontrolled key={index} item={item} theme={theme} />
        )
      )}
    </div>
  );

  if (layout === 'two-column') {
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
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1fr] gap-12 lg:gap-20">
            <div>
              {!isDark && (
                <Text size="sm" className="uppercase tracking-[1px] font-semibold text-black/60 mb-4">
                  FAQ
                </Text>
              )}
              <Heading
                level="display-2"
                className={isDark ? 'text-white' : 'text-black'}
              >
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
      background={isDark ? background : undefined}
      className={cn(
        'py-24 md:py-32',
        !isDark && (background === 'muted' ? 'bg-light-bg-alt' : 'bg-light-bg'),
        className
      )}
    >
      <Container size="md">
        <SectionHeader title={title} description={description} theme={theme} />
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
