import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
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

function CaseStudyItem({
  study,
  featured = false,
}: {
  study: CaseStudy;
  featured?: boolean;
}) {
  const content = (
    <div className={cn(
      'group block',
      featured ? 'md:grid md:grid-cols-[1.2fr_1fr] md:gap-12 md:items-center' : '',
    )}>
      {/* Image */}
      <div
        className={cn(
          'relative overflow-hidden rounded-xl bg-surface-muted',
          featured ? 'aspect-[4/3]' : 'aspect-video',
        )}
      >
        {study.image ? (
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-foreground/5 font-bold select-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              {study.title}
            </span>
          </div>
        )}
      </div>

      {/* Text content */}
      <div className={cn(featured ? 'mt-6 md:mt-0' : 'mt-6')}>
        <Heading
          level={featured ? 'h2' : 'h3'}
          className="text-foreground group-hover:text-primary transition-colors mb-3"
        >
          {study.title}
        </Heading>
        <Text className="text-foreground-muted max-w-md">
          {study.description}
        </Text>
        <span className="inline-flex items-center gap-2 mt-5 text-primary text-sm font-medium group-hover:gap-3 transition-all">
          View case study
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </div>
  );

  if (study.href) {
    return (
      <Link href={study.href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

export function CaseStudyGrid({
  title = "What we've built.",
  subtitle = 'Real products with real results.',
  items = DEFAULT_CASE_STUDIES,
  viewAllHref = '/case-studies',
  viewAllText = 'View all',
  background = 'default',
  className,
}: CaseStudyGridProps) {
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <Section
      background={background}
      className={cn('py-24 md:py-32', className)}
    >
      <Container>
        {/* Section header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <Heading
                level="display-2"
                className="mb-4 text-foreground"
              >
                {title}
              </Heading>
              {subtitle && (
                <Text size="xl" className="text-foreground-muted">
                  {subtitle}
                </Text>
              )}
            </div>
            {viewAllHref && (
              <Link
                href={viewAllHref}
                className="mt-6 md:mt-0 text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2 text-sm font-medium"
              >
                {viewAllText}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        </ScrollReveal>

        {/* Featured case study */}
        {featured && (
          <ScrollReveal direction="up" distance={30}>
            <CaseStudyItem study={featured} featured />
          </ScrollReveal>
        )}

        {/* Remaining case studies */}
        {rest.length > 0 && (
          <ScrollReveal stagger={0.15} direction="up" distance={30}>
            <div className={cn(
              'mt-16 pt-16 border-t border-border',
              'grid grid-cols-1 md:grid-cols-2 gap-12',
            )}>
              {rest.map((study) => (
                <div key={study.title} data-reveal>
                  <CaseStudyItem study={study} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </Container>
    </Section>
  );
}

export default CaseStudyGrid;
