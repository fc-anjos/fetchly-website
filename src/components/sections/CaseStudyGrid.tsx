import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/utils';

export interface CaseStudy {
  /** Case study title */
  title: string;
  /** Case study description */
  description: string;
  /** Optional image URL */
  image?: string;
  /** Link to the case study */
  href?: string;
}

export interface CaseStudyGridProps {
  /** Section title */
  title?: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Array of case studies (defaults to DEFAULT_CASE_STUDIES) */
  items?: CaseStudy[];
  /** Link to view all case studies */
  viewAllHref?: string;
  /** View all link text */
  viewAllText?: string;
  /** Theme variant */
  theme?: 'dark' | 'light';
  /** Background variant */
  background?: 'default' | 'muted';
  /** Additional className */
  className?: string;
}

/** Default case studies used across multiple pages */
export const DEFAULT_CASE_STUDIES: CaseStudy[] = [
  {
    title: 'VRT Sync',
    description: 'Real products with real results. See how our SaaS development services move the needle.',
    href: '/case-studies',
  },
  {
    title: 'Container Alliance',
    description: 'See how our all-in-one team handles design, development, QA, and launch so your SaaS works better, looks better, and gets to market faster.',
    href: '/case-studies',
  },
];

export function CaseStudyGrid({
  title = "What we've built.",
  subtitle = 'Real products with real results.',
  items = DEFAULT_CASE_STUDIES,
  viewAllHref = '/case-studies',
  viewAllText = 'View all',
  theme = 'dark',
  background = 'default',
  className,
}: CaseStudyGridProps) {
  const isDark = theme === 'dark';

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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <Heading
              level="display-2"
              className={cn('mb-4', isDark ? 'text-white' : 'text-black')}
            >
              {title}
            </Heading>
            {subtitle && (
              <Text size="xl" className={isDark ? 'text-gray-300' : 'text-light-text-muted'}>
                {subtitle}
              </Text>
            )}
          </div>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="mt-6 md:mt-0 text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2"
            >
              {viewAllText}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((study) => (
            <Link
              key={study.title}
              href={study.href || '/case-studies'}
              className={cn(
                'group rounded-2xl overflow-hidden transition-all duration-300',
                isDark
                  ? 'bg-gray-900/50 border border-white/10 hover:border-primary/50'
                  : 'bg-light-card border border-black/10 hover:border-primary/50'
              )}
            >
              <div
                className={cn(
                  'aspect-video relative',
                  isDark ? 'bg-gray-800' : 'bg-gray-200'
                )}
              >
                {study.image ? (
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className={cn(
                      'absolute inset-0 flex items-center justify-center',
                      isDark ? 'text-gray-600' : 'text-gray-400'
                    )}
                  >
                    <Text as="span" size="lg">{study.title}</Text>
                  </div>
                )}
              </div>
              <div className="p-6">
                <Heading
                  level="h4"
                  className={cn(
                    'mb-2 group-hover:text-primary transition-colors',
                    isDark ? 'text-white' : 'text-black'
                  )}
                >
                  {study.title}
                </Heading>
                <Text className={isDark ? 'text-gray-400' : 'text-light-text-muted'}>
                  {study.description}
                </Text>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default CaseStudyGrid;
