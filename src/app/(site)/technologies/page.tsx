import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, SectionHeader, CTA } from '@/components/sections';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { getAllTechnologies, getTechnologiesPage } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Technologies & Tech Stack | Fetchly',
  description:
    'React, Next.js, Rails, Python, Shopify, AWS, AI/ML, and more — explore the full technology stack Fetchly uses to build production software.',
};

export default async function TechnologiesPage() {
  const [technologies, page] = await Promise.all([
    getAllTechnologies(),
    getTechnologiesPage(),
  ]);

  return (
    <>
      <PageHero
        title={page.heroTitle}
        description={page.heroDescription}
        showBadge={false}
      />

      {page.categories.map((category) => {
        const items = technologies.filter((t) => t.category === category.key);
        return (
          <Section key={category.key} className="py-12 md:py-16">
            <Container>
              <SectionHeader
                title={category.title}
                description={category.description || ''}
              />
              <ScrollReveal stagger={0.08} direction="up" distance={30}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((tech) => (
                    <Link
                      key={tech.slug}
                      href={tech.href}
                      data-reveal
                      data-cursor="hover"
                      className="group flex flex-col p-6 rounded-xl border border-border bg-surface-card hover:border-primary/30 hover:bg-surface-alt transition-all duration-200"
                    >
                      <Heading level="h4" className="text-foreground group-hover:text-primary transition-colors text-base mb-2">
                        {tech.title}
                      </Heading>
                      <Text size="sm" className="text-foreground-muted flex-1">
                        {tech.description}
                      </Text>
                      <span className="inline-flex items-center gap-1.5 mt-4 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                        Learn more
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </ScrollReveal>
            </Container>
          </Section>
        );
      })}

      <CTA
        title={page.ctaTitle}
        description={page.ctaDescription}
        buttonText={page.ctaButtonText}
      />
    </>
  );
}
