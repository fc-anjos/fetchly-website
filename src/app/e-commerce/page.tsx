'use client';

import Image from 'next/image';
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

const FEATURES = [
  {
    title: 'Your design & planning roadmap',
    description:
      'Before we build, we blueprint. Every screen, flow, and feature is mapped to match your e-commerce goals before any code is written.',
  },
  {
    title: 'Feature development that ships fast',
    description:
      'You get weekly test builds and live preview links so you can track real progress throughout development.',
  },
  {
    title: 'Testing & polishing that catches it all',
    description:
      'We break it before your users do. Every feature goes through rigorous testing and refinement for a high-performing launch.',
  },
  {
    title: 'Ongoing maintenance and support',
    description:
      'We catch issues before your customers do and resolve them before they cost you revenue.',
  },
];

const CAPABILITIES = [
  {
    title: 'Backend that holds the line',
    description:
      'Ensure your store runs smoothly with our reliable backend solutions.',
  },
  {
    title: 'UI/UX that keeps shoppers clicking',
    description:
      'We craft ecommerce interfaces that guide customers from browsing to checkout.',
  },
  {
    title: 'Shopify without limitations',
    description:
      'We configure, integrate, and optimize your Shopify store for speed, stability, and scale.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What do you offer for custom ecommerce development?',
    answer:
      'We handle everything: strategy, design, development, QA, Shopify integration, backend architecture, and ongoing support. We dive into due diligence, deliver data-backed planning, and manage the full build.',
  },
  {
    question: 'Do you handle Shopify migrations and re-platforms?',
    answer:
      'Yes. We migrate existing stores to Shopify and Shopify Plus, handling data migration, custom theme development, and app integrations with zero downtime.',
  },
  {
    question: 'What Shopify services do you offer?',
    answer:
      'Custom theme development, Shopify Plus builds, app integrations, headless commerce, performance optimization, and ongoing store management.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'We work on a flexible month-to-month basis. Every engagement includes design, development, QA, and ongoing support. No long-term contracts required.',
  },
  {
    question: 'How do I get started?',
    answer:
      "Just fill out our contact form. We'll schedule a quick consultation, learn about your goals, and show you exactly how our team would build your ecommerce platform.",
  },
];

export default function EcommercePage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Shopify, Built for Brands That Scale"
        subtitle="Custom Shopify design, development, and conversion optimization for brands going further."
        description="We strategize, design, build, test, launch, and manage custom Shopify stores on a flexible month-to-month basis. From UX to backend, every store we build is optimized to drive revenue."
        ctaText="Talk to us"
        ctaHref="/intake/request"
        secondaryText="Learn more"
        secondaryHref="/our-model"
        rightContent={<CheckoutForm />}
      />

      {/* Trust Section — fades as it scrolls away */}
      <ParallaxSection speed={0.8} fadeOut>
        <section className="py-14 bg-surface-alt">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <Text size="sm" className="uppercase tracking-[1px] font-semibold text-foreground-muted mb-6">
                Shopify Plus Partner Agency
              </Text>
              <Heading level="display-2" className="text-foreground mb-6">
                Trusted by brands that don&apos;t want to build another team.
              </Heading>
              <Text size="lg" className="text-foreground-muted">
                For years, many clients have relied on Fetchly as their only outside dev team. Why? Fetchly gives you more than just code. You get a full-stack team, a tightly managed process, and a smarter way to build and scale your store.
                <br />
                <strong className="text-foreground">70+ stores launched. 7+ years strong.</strong>
              </Text>
            </div>
          </Container>
        </section>
      </ParallaxSection>

      {/* Process Section */}
      <ProcessSteps />

      {/* Featured Case Study — slower scroll with fade */}
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

      {/* CTA Card Section */}
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
                  <Button href="/intake/step-1" size="lg" variant="primary">
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

      {/* Features Section — scrolls slightly slower for depth */}
      <ParallaxSection speed={0.85}>
        <FeatureGrid
          label="How we work"
          title="A cross-functional eCommerce team built to scale your brand."
          items={FEATURES}
          columns={2}
          background="muted"
        />
      </ParallaxSection>

      {/* Capabilities Section — scrolls at normal speed, overtakes Features */}
      <ParallaxSection speed={1}>
        <FeatureGrid
          label="Your eCommerce development experts"
          title="Built to sell. Engineered to scale."
          description="We design and develop ecommerce platforms with the architecture, performance, and flexibility to grow as you do."
          items={CAPABILITIES}
          columns={3}
          centerText
        />
      </ParallaxSection>

      {/* FAQ Section */}
      <FAQ
        items={FAQ_ITEMS}
        title="See if we have what you need."
        label="FAQ"
      />

      {/* Final CTA Section */}
      <CTA />
    </>
  );
}
