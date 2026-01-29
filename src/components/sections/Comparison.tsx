'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { COMPARISON_DATA } from '@/lib/constants';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';

export function Comparison() {
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
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-sm uppercase tracking-wider text-foreground-muted">
                    Product Comparison
                  </th>
                  <th className="py-4 px-6 text-center font-medium text-foreground-muted">
                    Staff Aug
                  </th>
                  <th className="py-4 px-6 text-center">
                    <div className="inline-flex flex-col items-center bg-dark rounded-t-xl py-3 px-6 -mb-4">
                      <Text as="span" size="lg" className="text-white font-semibold">Fetchly</Text>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center font-medium text-foreground-muted">
                    Agency
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {COMPARISON_DATA.rows.map((row) => (
                  <tr
                    key={row.feature}
                    data-reveal
                    className="transition-colors hover:bg-overlay"
                  >
                    <td className="py-5 px-6 font-medium uppercase text-sm tracking-wide text-foreground">
                      {row.feature}
                    </td>
                    <td className="py-5 px-6 text-center">
                      <ComparisonCell value={row.staffAug} />
                    </td>
                    <td className="py-5 px-6 text-center bg-dark/30">
                      <ComparisonCell value={row.fetchly} highlight />
                    </td>
                    <td className="py-5 px-6 text-center">
                      <ComparisonCell value={row.agency} />
                    </td>
                  </tr>
                ))}
                {/* CTA Row */}
                <tr>
                  <td className="py-5 px-6"></td>
                  <td className="py-5 px-6"></td>
                  <td className="py-5 px-6 text-center bg-dark/30 rounded-b-xl">
                    <Button href="/intake/step-1" className="w-full">
                      Get in touch
                    </Button>
                  </td>
                  <td className="py-5 px-6"></td>
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
      <span
        className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
          highlight ? 'bg-accent/20' : 'bg-green-500/20'
        }`}
      >
        <svg
          className={`w-5 h-5 ${highlight ? 'text-accent' : 'text-green-500'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }

  if (value === 'partial') {
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/20">
        <svg
          className="w-5 h-5 text-yellow-500"
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
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-foreground-muted/20">
      <svg
        className="w-5 h-5 text-foreground-muted"
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
