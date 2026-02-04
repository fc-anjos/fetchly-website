import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

import { CTA } from '@/components/sections/CTA';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { FAQ } from '@/components/sections/FAQ';
import { PageHero } from '@/components/sections/PageHero';
import { ParallaxSection } from '@/components/effects/ParallaxSection';
import { CheckoutForm } from '@/components/sections/ecommerce/CheckoutForm';
import { getIndustry, getFilteredTestimonials } from '@/lib/content';
import { Testimonials } from '@/components/sections/Testimonials';

export async function generateMetadata(): Promise<Metadata> {
  const industry = await getIndustry('ecommerce');
  if (!industry) return {};
  return {
    title: industry.metaTitle || `${industry.title} | Fetchly`,
    description: industry.metaDescription || industry.description,
  };
}

export default async function EcommercePage() {
  const industry = await getIndustry('ecommerce');
  if (!industry) notFound();

  const testimonials = await getFilteredTestimonials({ filterIndustry: 'ecommerce' });

  return (
    <>
      {/* Hero Section */}
      <PageHero
        breadcrumbs={industry.breadcrumbs?.map((b) => ({
          label: b.label,
          href: b.href || undefined,
        }))}
        title={industry.heroTitle}
        description={industry.heroDescription || undefined}
        ctaText={industry.heroCtaText || undefined}
        ctaHref={industry.heroCtaHref || undefined}
        secondaryText="Learn more"
        secondaryHref="/our-model"
        rightContent={<CheckoutForm />}
      />

      {/* Trust Section */}
      {industry.overviewTitle && (
        <ParallaxSection speed={0.8} fadeOut>
          <section className="py-14 bg-surface-alt">
            <Container>
              <div className="max-w-4xl mx-auto text-center">
                <Text size="sm" className="uppercase tracking-[1px] font-semibold text-foreground-muted mb-6">
                  Shopify Plus Partner Agency
                </Text>
                <Heading level="display-2" className="text-foreground mb-6">
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

      {/* Process Section */}
      {industry.processSteps && industry.processSteps.length > 0 && (
        <ProcessSteps
          title={industry.processStepsTitle}
          steps={[...industry.processSteps]}
        />
      )}

      {/* Featured Case Study */}
      <ParallaxSection speed={0.8} fadeOut>
        <section className="py-14 bg-surface-alt">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Text size="sm" className="uppercase tracking-[1px] font-semibold text-foreground-muted mb-4">
                  Featured case study
                </Text>
                <Heading level="display-2" className="text-foreground">
                  Oats Overnight: 250K+ subscribers. 94% subscription revenue.
                </Heading>
              </div>
              <div className="p-8 md:p-12 rounded-[1.25rem] bg-surface-card border border-border">
                <Text size="xl" className="text-foreground leading-relaxed">
                  We built the subscription platform, custom checkout, and Shopify theme that helped Oats Overnight turn first-time buyers into a quarter-million active subscribers.
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-border items-center">
                  <div>
                    <Heading level="h4" className="text-foreground mb-2">
                      Read the case study
                    </Heading>
                    <Text size="sm" className="text-foreground-muted mb-4">
                      See how we helped Oats Overnight build and scale their subscription-first Shopify store.
                    </Text>
                    <a
                      href="/case-studies"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                      View full case study
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex md:justify-end">
                    <Image
                      src="/images/oats-overnight.svg"
                      alt="Oats Overnight"
                      width={120}
                      height={36}
                      className="w-24 h-auto dark:invert shrink-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </ParallaxSection>

      {/* Dark CTA Card */}
      <section className="py-14 bg-surface">
        <Container>
          <div className="rounded-[3rem] bg-gray-900 text-white overflow-hidden dark:bg-white/5 dark:border dark:border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <Heading level="display-2" className="text-white mb-6">
                  Ready to grow
                  <br />
                  your store?
                </Heading>
                <Text size="lg" className="text-gray-400 mb-8">
                  Get a high-performing Shopify store designed, built, and managed by a team that&apos;s launched over 70.
                </Text>
                <div>
                  <Button href="/intake/request" size="lg" variant="primary">
                    Get in Touch
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-full">
                <Image
                  src="/images/tapp.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How we work */}
      {industry.features && industry.features.length > 0 && (
        <ParallaxSection speed={0.85}>
          <FeatureGrid
            label={industry.featureGridLabel}
            title={industry.featureGridTitle}
            items={[...industry.features]}
            columns={industry.featureGridColumns as 2 | 3 | 4}
            background={industry.featureGridBackground as 'default' | 'muted'}
          />
        </ParallaxSection>
      )}

      {/* Built to sell */}
      {industry.additionalFeatures && industry.additionalFeatures.length > 0 && (
        <ParallaxSection speed={1}>
          <FeatureGrid
            label={industry.additionalFeaturesLabel}
            title={industry.additionalFeaturesTitle}
            description={industry.additionalFeaturesDescription || undefined}
            items={[...industry.additionalFeatures]}
            columns={industry.additionalFeaturesColumns as 2 | 3 | 4}
            centerText
          />
        </ParallaxSection>
      )}

      {/* Testimonials */}
      <Testimonials items={testimonials} />

      {/* FAQ */}
      {industry.faqItems && industry.faqItems.length > 0 && (
        <FAQ
          items={[...industry.faqItems]}
          title={industry.faqTitle}
          label={industry.faqLabel}
        />
      )}

      {/* Final CTA */}
      <CTA
        title={industry.ctaTitle}
        buttonText={industry.ctaButtonText}
      />
    </>
  );
}
