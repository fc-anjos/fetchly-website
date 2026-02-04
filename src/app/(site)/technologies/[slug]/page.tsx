import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SchemaMarkup } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, PainPoints, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';
import { getAllTechnologies, getTechnology, getAllTestimonials } from '@/lib/content';

export async function generateStaticParams() {
  const technologies = await getAllTechnologies();
  return technologies.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tech = await getTechnology(slug);
  if (!tech) return {};
  return {
    title: tech.metaTitle || `${tech.title} | Fetchly`,
    description: tech.metaDescription || tech.description,
  };
}

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tech = await getTechnology(slug);
  if (!tech) notFound();

  const testimonials = await getAllTestimonials();

  const schemas = [];
  if (tech.schemaName) {
    schemas.push(
      serviceSchema({
        name: tech.schemaName,
        description: tech.schemaDescription || tech.description,
        url: tech.schemaUrl || `https://www.fetch.ly/technologies/${slug}`,
      }),
    );
  }
  if (tech.faqItems?.length) {
    schemas.push(faqSchema([...tech.faqItems]));
  }

  return (
    <>
      {schemas.length > 0 && <SchemaMarkup schema={schemas} />}

      <PageHero
        breadcrumbs={tech.breadcrumbs?.map((b) => ({ label: b.label, href: b.href || undefined }))}
        title={tech.heroTitle}
        description={tech.heroDescription || undefined}
        ctaText={tech.heroCtaText || undefined}
        ctaHref={tech.heroCtaHref || undefined}
        showBadge={tech.heroShowBadge ?? false}
      />

      {tech.painPoints && tech.painPoints.length > 0 && (
        <PainPoints
          items={[...tech.painPoints]}
          label={tech.painPointsLabel || undefined}
          title={tech.painPointsTitle || undefined}
        />
      )}

      {tech.processSteps && tech.processSteps.length > 0 && (
        <ProcessSteps
          steps={[...tech.processSteps]}
          title={tech.processStepsTitle}
        />
      )}

      {tech.features && tech.features.length > 0 && (
        <FeatureGrid
          items={[...tech.features]}
          title={tech.featureGridTitle || undefined}
          label={tech.featureGridLabel || undefined}
          columns={tech.featureGridColumns as 2 | 3 | 4}
          background={tech.featureGridBackground as 'default' | 'muted'}
        />
      )}

      <Testimonials items={testimonials.slice(0, 4)} />

      {tech.faqItems && tech.faqItems.length > 0 && (
        <FAQ
          items={[...tech.faqItems]}
          title={tech.faqTitle}
          label={tech.faqLabel}
        />
      )}

      <CTA
        title={tech.ctaTitle}
        buttonText={tech.ctaButtonText}
      />
    </>
  );
}
