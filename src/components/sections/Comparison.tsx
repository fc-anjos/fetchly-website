'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { ScrollReveal } from '@/components/effects/ScrollReveal';

interface ComparisonProps {
  data: {
    headers: string[];
    rows: { feature: string; staffAug: boolean | 'partial'; fetchly: boolean | 'partial'; agency: boolean | 'partial' }[];
  };
}

export function Comparison({ data }: ComparisonProps) {
  const COMPARISON_DATA = data;
  return (
    <Section id="comparison" className="bg-surface">
      <Container>
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center mb-16">
            <Heading level="display-2" className="text-foreground">
              A totally different model
            </Heading>
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal stagger={0.06} direction="up" distance={30}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="text-left py-5 px-6 font-medium text-sm uppercase tracking-wider text-foreground-muted w-[40%]" />
                  <th className="py-5 px-6 text-center">
                    <span className="block font-medium text-sm uppercase tracking-wider text-foreground-muted">Staff Aug</span>
                    <span className="block text-lg text-foreground-muted mt-1">$$</span>
                  </th>
                  <th className="py-4 px-6 text-center bg-primary dark:bg-dark rounded-t-2xl">
                    <div className="flex justify-center">
                      <Image
                        src="/images/logo-1080.webp"
                        alt="Fetchly"
                        width={150}
                        height={42}
                        className="object-contain dark:brightness-0 dark:invert"
                      />
                    </div>
                    <span className="block text-lg text-dark dark:text-white/70 mt-1">$$</span>
                  </th>
                  <th className="py-5 px-6 text-center">
                    <span className="block font-medium text-sm uppercase tracking-wider text-foreground-muted">Agency</span>
                    <span className="block text-lg text-foreground-muted mt-1">$$$</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    data-reveal
                    className="group"
                  >
                    <td className="py-5 px-6 font-medium uppercase text-sm tracking-wide text-foreground border-b border-border">
                      {row.feature}
                    </td>
                    <td className="py-5 px-6 text-center border-b border-border">
                      <ComparisonCell value={row.staffAug} />
                    </td>
                    <td className="py-5 px-6 text-center bg-primary dark:bg-dark border-b border-primary-dark/30 dark:border-white/10">
                      <ComparisonCell value={row.fetchly} highlight />
                    </td>
                    <td className="py-5 px-6 text-center border-b border-border">
                      <ComparisonCell value={row.agency} />
                    </td>
                  </tr>
                ))}
                {/* CTA Row */}
                <tr>
                  <td className="py-6 px-6" />
                  <td className="py-6 px-6" />
                  <td className="py-6 px-6 text-center bg-primary dark:bg-dark rounded-b-2xl">
                    <Button href="/intake/request" className="w-full">
                      Get in touch
                    </Button>
                  </td>
                  <td className="py-6 px-6" />
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

function ComparisonCell({
  value,
  highlight = false,
}: {
  value: boolean | 'partial';
  highlight?: boolean;
}) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-9 h-9">
        <svg
          className={`w-6 h-6 ${highlight ? 'text-dark dark:text-accent' : 'text-foreground'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={highlight ? 2.5 : 1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }

  if (value === 'partial') {
    return (
      <span className="inline-flex items-center justify-center w-9 h-9">
        <svg
          className={`w-6 h-6 ${highlight ? 'text-yellow-400' : 'text-yellow-500'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        </svg>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center w-9 h-9">
      <svg
        className={`w-6 h-6 ${highlight ? 'text-dark/30 dark:text-white/30' : 'text-foreground-muted/40'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

export default Comparison;
