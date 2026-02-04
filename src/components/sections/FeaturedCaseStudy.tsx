import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/effects/ScrollReveal';

export interface FeaturedCaseStudyProps {
  title: string;
  description: string;
  logoSrc: string;
  ctaText: string;
  ctaHref: string;
  label: string;
}

export function FeaturedCaseStudy({
  title,
  description,
  logoSrc,
  ctaText,
  ctaHref,
  label,
}: FeaturedCaseStudyProps) {
  return (
    <Section className="py-12 md:py-16 bg-surface-alt">
      <Container>
        <ScrollReveal direction="up" distance={40}>
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-[1.25rem] bg-surface-card border border-border">
              <Badge variant="default" className="mb-6">
                {label}
              </Badge>
              <Heading level="h2" className="text-foreground mb-4">
                {title}
              </Heading>
              <Text size="lg" className="text-foreground-muted mb-8 leading-relaxed">
                {description}
              </Text>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-border">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  {ctaText}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Image
                  src={logoSrc}
                  alt="Oats Overnight"
                  width={120}
                  height={36}
                  className="w-24 h-auto dark:invert shrink-0"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export default FeaturedCaseStudy;
