import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup } from '@/components/seo';
import { localBusinessSchema } from '@/lib/schema';
import { PageHero, SolutionsGrid, FAQ, CTA } from '@/components/sections';
import { getAllLocations, getLocation, getAllSolutions } from '@/lib/content';

export async function generateStaticParams() {
  const locations = await getAllLocations();
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = await getLocation(slug);
  if (!location) return {};
  return {
    title: location.metaTitle || `Software Development Agency in ${location.city} | Fetchly`,
    description: location.metaDescription || `${location.city}-based software development agency. Custom web and mobile development, design, QA, and DevOps.`,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = await getLocation(slug);
  if (!location) notFound();

  const solutions = await getAllSolutions();
  const locationDef = {
    slug,
    city: location.city,
    state: location.state,
    stateAbbr: location.stateAbbr,
    href: `/locations/${slug}`,
  };

  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema(locationDef)]} />
      <PageHero
        breadcrumbs={location.breadcrumbs?.map((b) => ({ label: b.label, href: b.href || undefined }))}
        title={location.heroTitle}
        description={location.heroDescription || undefined}
        ctaText={location.heroCtaText || undefined}
        ctaHref={location.heroCtaHref || undefined}
        secondaryText={location.heroSecondaryText || undefined}
        secondaryHref={location.heroSecondaryHref || undefined}
      />

      {location.overviewTitle && (
        <section className="py-12 md:py-16 bg-surface-alt">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-display-2 font-bold text-foreground mb-4">
                {location.overviewTitle}
              </h2>
              {location.overviewDescription && (
                <p className="text-lg text-foreground-muted">
                  {location.overviewDescription}
                </p>
              )}
            </div>
          </Container>
        </section>
      )}

      <SolutionsGrid
        title={location.solutionsGridTitle}
        description={location.solutionsGridDescription}
        solutions={solutions}
        columns={4}
      />

      {location.faqItems && location.faqItems.length > 0 && (
        <FAQ
          items={[...location.faqItems]}
          title={location.faqTitle}
          label={location.faqLabel}
        />
      )}

      <CTA
        title={location.ctaTitle}
        buttonText={location.ctaButtonText}
      />
    </>
  );
}
