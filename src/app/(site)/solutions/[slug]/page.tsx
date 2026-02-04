import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SchemaMarkup } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import {
  PageHero,
  PainPoints,
  ProcessSteps,
  FeatureGrid,
  Testimonials,
  FAQ,
  CTA,
} from '@/components/sections';
import { getAllSolutions, getSolution, getFilteredTestimonials } from '@/lib/content';

export async function generateStaticParams() {
  const solutions = await getAllSolutions();
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = await getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.metaTitle || `${solution.title} | Fetchly`,
    description: solution.metaDescription || solution.description,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = await getSolution(slug);
  if (!solution) notFound();

  const testimonials = await getFilteredTestimonials({ filterSolution: slug });

  const schemas = [];
  if (solution.schemaName) {
    schemas.push(
      serviceSchema({
        name: solution.schemaName,
        description: solution.schemaDescription || solution.description,
        url: solution.schemaUrl || `https://www.fetch.ly/solutions/${slug}`,
      }),
    );
  }
  if (solution.faqItems?.length) {
    schemas.push(faqSchema([...solution.faqItems]));
  }

  return (
    <>
      {schemas.length > 0 && <SchemaMarkup schema={schemas} />}

      <PageHero
        breadcrumbs={solution.breadcrumbs?.map((b) => ({
          label: b.label,
          href: b.href || undefined,
        }))}
        title={solution.heroTitle}
        description={solution.heroDescription || undefined}
        ctaText={solution.heroCtaText || undefined}
        ctaHref={solution.heroCtaHref || undefined}
        showBadge={solution.heroShowBadge ?? false}
      />

      {solution.painPoints && solution.painPoints.length > 0 && (
        <PainPoints
          items={[...solution.painPoints]}
          label={solution.painPointsLabel || undefined}
          title={solution.painPointsTitle || undefined}
        />
      )}

      {solution.processSteps && solution.processSteps.length > 0 && (
        <ProcessSteps
          steps={[...solution.processSteps]}
          title={solution.processStepsTitle}
        />
      )}

      {solution.features && solution.features.length > 0 && (
        <FeatureGrid
          items={[...solution.features]}
          title={solution.featureGridTitle || undefined}
          label={solution.featureGridLabel || undefined}
          columns={solution.featureGridColumns as 2 | 3 | 4}
          background={solution.featureGridBackground as 'default' | 'muted'}
        />
      )}

      <Testimonials items={testimonials} />

      {solution.faqItems && solution.faqItems.length > 0 && (
        <FAQ
          items={[...solution.faqItems]}
          title={solution.faqTitle}
          label={solution.faqLabel}
        />
      )}

      <CTA
        title={solution.ctaTitle}
        buttonText={solution.ctaButtonText}
      />
    </>
  );
}
