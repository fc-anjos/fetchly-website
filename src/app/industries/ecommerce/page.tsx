'use client';

import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Breadcrumbs } from '@/components/seo';
import {
  PageHero,
  ProcessSteps,
  FeatureGrid,
  CaseStudyGrid,
  Testimonials,
  FAQ,
  CTA,
} from '@/components/sections';
import { ParallaxSection } from '@/components/effects/ParallaxSection';

const FAQ_ITEMS = [
  {
    question: 'Do you build on Shopify Plus or custom platforms?',
    answer:
      'Both. We build Shopify Plus storefronts for brands that want speed-to-market, and fully custom headless commerce solutions for businesses that need more control over their buyer experience, integrations, or data.',
  },
  {
    question: 'What does headless commerce mean, and is it right for us?',
    answer:
      'Headless commerce separates your storefront (what customers see) from the backend (inventory, payments, fulfillment). This gives you complete design freedom and faster page loads. It\'s ideal if you need a unique customer experience or plan to sell across multiple channels.',
  },
  {
    question: 'Can you build subscription and recurring billing systems?',
    answer:
      'Yes. We\'ve built subscription platforms handling hundreds of thousands of active subscribers with features like flexible billing cycles, dunning management, pause/skip flows, and churn analytics.',
  },
  {
    question: 'How do you handle migration from an existing platform?',
    answer:
      'We start with a full audit of your current platform — products, customers, orders, and integrations. Then we build a migration plan that moves data without downtime and preserves SEO equity. We\'ve migrated stores from WooCommerce, Magento, and legacy custom builds.',
  },
] as const;

const CASE_STUDIES = [
  {
    title: 'Oats Overnight',
    description:
      '250K+ active subscribers and 94% subscription revenue. We built the DTC subscription platform that powers their explosive growth.',
    href: '/case-studies/oats-overnight',
  },
  {
    title: 'Ministry of Tattoos',
    description:
      'A custom marketplace connecting tattoo artists with clients — built with real-time booking, artist portfolios, and integrated payments.',
  },
];

export default function EcommercePage() {
  return (
    <>
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Industries' },
            { label: 'E-Commerce' },
          ]}
        />
      </Container>

      <PageHero
        title="Commerce platforms that sell."
        description="From Shopify Plus to custom marketplaces — we've built platforms that process millions in transactions."
        ctaText="Start your commerce project"
      />

      <ParallaxSection speed={0.3}>
        <section className="py-12 md:py-16 bg-surface-alt">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Heading level="h2" className="text-foreground mb-4">
                We understand e-commerce because we&apos;ve built it.
              </Heading>
              <Text size="lg" className="text-foreground-muted">
                Our team has built subscription platforms, headless commerce
                solutions, and custom marketplaces for brands doing real revenue.
              </Text>
            </div>
          </Container>
        </section>
      </ParallaxSection>

      <ProcessSteps
        title="How we build commerce platforms"
        steps={[
          {
            title: 'Discovery & commerce strategy',
            description:
              'We analyze your product catalog, revenue model, and customer journey to define the right platform architecture — whether that\'s Shopify Plus, a headless build, or a custom marketplace.',
          },
          {
            title: 'Design & development',
            description:
              'We design conversion-optimized storefronts and build robust backend systems for inventory, payments, and fulfillment. You see working builds weekly.',
          },
          {
            title: 'Launch & optimize',
            description:
              'We launch with monitoring in place, then iterate based on real conversion data. A/B tests, funnel analysis, and performance tuning are part of the process.',
          },
        ]}
      />

      <FeatureGrid
        label="Capabilities"
        title="What we build for e-commerce"
        items={[
          {
            title: 'Shopify Plus',
            description:
              'Custom Shopify Plus storefronts with advanced theme development, app integrations, and checkout customization for high-volume brands.',
          },
          {
            title: 'Custom Marketplaces',
            description:
              'Multi-vendor marketplace platforms with seller onboarding, commission management, and integrated payment splitting.',
          },
          {
            title: 'Headless Commerce',
            description:
              'Decoupled commerce architectures using Next.js frontends with Shopify, Medusa, or custom backends for maximum flexibility and performance.',
          },
          {
            title: 'Subscription Commerce',
            description:
              'Recurring billing platforms with flexible plans, dunning management, skip/pause flows, and subscriber analytics dashboards.',
          },
          {
            title: 'Payment Integration',
            description:
              'Stripe, PayPal, Apple Pay, and custom payment flows — including split payments, escrow, and international currency support.',
          },
          {
            title: 'Inventory Management',
            description:
              'Real-time inventory tracking, warehouse integrations, and automated fulfillment workflows that scale with your order volume.',
          },
        ]}
      />

      <CaseStudyGrid
        title="Commerce platforms we've built."
        items={CASE_STUDIES}
      />

      <Testimonials filterIndustry="ecommerce" />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA
        title="Let's build your commerce platform."
        buttonText="Start your commerce project"
      />
    </>
  );
}
