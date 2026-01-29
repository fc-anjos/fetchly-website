'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { COMPARISON_DATA } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ComparisonProps {
  theme?: 'dark' | 'light';
}

export function Comparison({ theme = 'dark' }: ComparisonProps) {
  const isDark = theme === 'dark';

  return (
    <Section
      id="comparison"
      className={cn(
        'py-24 md:py-32',
        isDark ? 'bg-gray-950' : 'bg-light-bg'
      )}
    >
      <Container>
        <div className="text-center mb-16">
          <Heading level="display-2" className={isDark ? 'text-white' : 'text-black'}>
            A totally different model
          </Heading>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th
                  className={cn(
                    'text-left py-4 px-6 font-medium text-sm uppercase tracking-wider',
                    isDark ? 'text-gray-400' : 'text-black/60'
                  )}
                >
                  Product Comparison
                </th>
                <th
                  className={cn(
                    'py-4 px-6 text-center font-medium',
                    isDark ? 'text-gray-400' : 'text-black/60'
                  )}
                >
                  Staff Aug
                </th>
                <th className="py-4 px-6 text-center">
                  <div className="inline-flex flex-col items-center bg-dark rounded-t-xl py-3 px-6 -mb-4">
                    <Text as="span" size="lg" className="text-white font-semibold">Fetchly</Text>
                  </div>
                </th>
                <th
                  className={cn(
                    'py-4 px-6 text-center font-medium',
                    isDark ? 'text-gray-400' : 'text-black/60'
                  )}
                >
                  Agency
                </th>
              </tr>
            </thead>
            <tbody
              className={cn(
                'divide-y',
                isDark ? 'divide-white/5' : 'divide-black/5'
              )}
            >
              {COMPARISON_DATA.rows.map((row) => (
                <tr
                  key={row.feature}
                  className={cn(
                    'transition-colors',
                    isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'
                  )}
                >
                  <td
                    className={cn(
                      'py-5 px-6 font-medium uppercase text-sm tracking-wide',
                      isDark ? 'text-white' : 'text-black'
                    )}
                  >
                    {row.feature}
                  </td>
                  <td className="py-5 px-6 text-center">
                    <ComparisonCell value={row.staffAug} isDark={isDark} />
                  </td>
                  <td className="py-5 px-6 text-center bg-dark/30">
                    <ComparisonCell value={row.fetchly} highlight isDark={isDark} />
                  </td>
                  <td className="py-5 px-6 text-center">
                    <ComparisonCell value={row.agency} isDark={isDark} />
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
      </Container>
    </Section>
  );
}

function ComparisonCell({
  value,
  highlight = false,
  isDark = true,
}: {
  value: boolean | 'partial';
  highlight?: boolean;
  isDark?: boolean;
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
    <span
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 rounded-full',
        isDark ? 'bg-gray-700/50' : 'bg-gray-300/50'
      )}
    >
      <svg
        className={cn('w-5 h-5', isDark ? 'text-gray-500' : 'text-gray-400')}
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
