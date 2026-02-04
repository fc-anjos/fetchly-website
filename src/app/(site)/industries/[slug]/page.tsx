import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ParallaxSection } from '@/components/effects/ParallaxSection';
import {
  PageHero,
  ProcessSteps,
  FeatureGrid,
  CaseStudyGrid,
  Testimonials,
  FAQ,
  CTA,
} from '@/components/sections';
import { getAllIndustries, getIndustry, getFilteredTestimonials } from '@/lib/content';

export async function generateStaticParams() {
  const industries = await getAllIndustries();
  // Exclude ecommerce - it has its own dedicated route
  return industries.filter((i) => i.slug !== 'ecommerce').map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle || `${industry.title} | Fetchly`,
    description: industry.metaDescription || industry.description,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) notFound();

  const testimonials = await getFilteredTestimonials({ filterIndustry: slug });

  return (
    <>
      <PageHero
        breadcrumbs={industry.breadcrumbs?.map((b) => ({
          label: b.label,
          href: b.href || undefined,
        }))}
        title={industry.heroTitle}
        description={industry.heroDescription || undefined}
        ctaText={industry.heroCtaText || undefined}
        ctaHref={industry.heroCtaHref || undefined}
      />

      {industry.overviewTitle && (
        <ParallaxSection speed={0.3}>
          <section className="py-12 md:py-16 bg-surface-alt">
            <Container>
              <div className="max-w-3xl mx-auto text-center">
                <Heading level="h2" className="text-foreground mb-4">
                  {industry.overviewTitle}
                </Heading>
                {industry.overviewDescription && (
                  <Text size="lg" className="text-foreground-muted">
                    {industry.overviewDescription}
                  </Text>
                )}
              </div>
            </Container>
          </section>
        </ParallaxSection>
      )}

      {industry.processSteps && industry.processSteps.length > 0 && (
        <ProcessSteps
          steps={[...industry.processSteps]}
          title={industry.processStepsTitle}
        />
      )}

      {industry.features && industry.features.length > 0 && (
        <FeatureGrid
          items={[...industry.features]}
          title={industry.featureGridTitle || undefined}
          label={industry.featureGridLabel || undefined}
          columns={industry.featureGridColumns as 2 | 3 | 4}
          background={industry.featureGridBackground as 'default' | 'muted'}
        />
      )}

      {industry.caseStudies && industry.caseStudies.length > 0 && (
        <CaseStudyGrid
          title={industry.caseStudiesTitle}
          items={industry.caseStudies.map((cs) => ({
            title: cs.title,
            description: cs.description,
            href: cs.href || undefined,
          }))}
        />
      )}

      <Testimonials items={testimonials} />

      {industry.faqItems && industry.faqItems.length > 0 && (
        <FAQ
          items={[...industry.faqItems]}
          title={industry.faqTitle}
          label={industry.faqLabel}
        />
      )}

      <CTA
        title={industry.ctaTitle}
        buttonText={industry.ctaButtonText}
      />
    </>
  );
}
