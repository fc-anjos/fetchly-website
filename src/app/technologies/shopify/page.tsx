import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Shopify Plus Development Agency | Fetchly',
  description:
    'Custom Shopify themes, headless storefronts, Shopify apps, and subscription commerce from a team with deep Shopify Plus experience.',
};

const FAQ_ITEMS = [
  {
    question: 'Do you only work with Shopify Plus?',
    answer:
      'No. We work with standard Shopify and Shopify Plus. That said, most of our clients are on Plus because they need custom checkout, scripting, and multi-store capabilities.',
  },
  {
    question: 'Can you migrate my store from another platform to Shopify?',
    answer:
      'Yes. We have migrated stores from WooCommerce, Magento, BigCommerce, and custom platforms to Shopify. We handle product data, customer accounts, order history, and SEO redirects.',
  },
  {
    question: 'Do you build custom Shopify apps?',
    answer:
      'Yes. We build public and private Shopify apps using the Shopify API and App Bridge. Common builds include custom subscription logic, loyalty programs, and ERP integrations.',
  },
  {
    question: 'How long does a typical Shopify project take?',
    answer:
      'A custom theme build typically takes 6-10 weeks. Headless storefronts and app development vary based on complexity but usually land in the 8-16 week range.',
  },
];

export default function ShopifyPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Shopify Plus Development Agency',
            description:
              'Custom Shopify themes, headless storefronts, Shopify apps, and subscription commerce from a team with deep Shopify Plus experience.',
            url: 'https://www.fetch.ly/technologies/shopify',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'Shopify' },
          ]}
        />
      </Container>

      <PageHero
        title="Shopify expertise that drives revenue."
        description="Custom themes, headless storefronts, Shopify apps, and subscription commerce — from a team with deep Shopify Plus experience."
        ctaText="Start your Shopify project"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <ProcessSteps
        title="How we deliver Shopify projects"
        steps={[
          { title: 'Commerce strategy', description: 'We audit your current store, define conversion goals, and plan the technical architecture for your Shopify build.' },
          { title: 'Theme & app development', description: 'We build your custom theme, develop any required apps, and integrate third-party tools — all following Shopify best practices.' },
          { title: 'Launch & optimize', description: 'We deploy to production, run QA across devices, and optimize performance, SEO, and conversion post-launch.' },
        ]}
      />

      <FeatureGrid
        label="Shopify"
        title="What we build"
        columns={3}
        items={[
          { title: 'Custom Themes', description: 'Pixel-perfect Shopify themes built with Online Store 2.0 and optimized for speed and conversion.' },
          { title: 'Shopify Apps', description: 'Public and private apps using the Shopify API, App Bridge, and Polaris design system.' },
          { title: 'Headless Commerce', description: 'Hydrogen and custom headless storefronts powered by the Shopify Storefront API.' },
          { title: 'Subscription Setup', description: 'Recurring billing and subscription box flows using Shopify subscriptions or third-party providers.' },
          { title: 'Checkout Customization', description: 'Custom checkout experiences with Shopify Functions, checkout UI extensions, and Plus scripting.' },
          { title: 'Migration Services', description: 'Full-service migration from WooCommerce, Magento, or BigCommerce to Shopify with zero data loss.' },
        ]}
      />

      <Testimonials />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Let's build your Shopify store" buttonText="Get Started" />
    </>
  );
}
