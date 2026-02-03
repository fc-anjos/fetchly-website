import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Stripe Integration & Payment Development | Fetchly',
  description:
    'Stripe integration for subscriptions, marketplaces, and custom payment flows — done right the first time.',
};

const FAQ_ITEMS = [
  {
    question: 'Can you integrate Stripe with our existing backend?',
    answer:
      'Yes. We integrate Stripe with Rails, Node.js, Django, and any backend that supports REST APIs. We handle API keys, webhook endpoints, and idempotency so your payment flow is production-ready.',
  },
  {
    question: 'Do you handle PCI compliance?',
    answer:
      'Stripe handles most PCI requirements when you use their hosted payment elements. We ensure your integration follows Stripe best practices so you stay within PCI SAQ-A scope.',
  },
  {
    question: 'Can you build marketplace payment flows with Stripe Connect?',
    answer:
      'Yes. We build multi-party payment flows using Stripe Connect — including onboarding, split payments, platform fees, and payout schedules for your sellers or service providers.',
  },
  {
    question: 'How do you handle failed payments and dunning?',
    answer:
      'We configure Stripe Smart Retries, set up webhook listeners for payment failures, and build custom dunning email flows to recover failed subscription payments automatically.',
  },
];

export default function StripePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Stripe Integration & Payment Development',
            description:
              'Stripe integration for subscriptions, marketplaces, and custom payment flows — done right the first time.',
            url: 'https://www.fetch.ly/technologies/stripe',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'Stripe' },
          ]}
        />
      </Container>

      <PageHero
        title="Payments that just work."
        description="Stripe integration for subscriptions, marketplaces, and custom payment flows — done right the first time."
        ctaText="Start your payments project"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <ProcessSteps
        title="How we deliver Stripe integrations"
        steps={[
          { title: 'Payment architecture', description: 'We map your revenue model to Stripe products — subscriptions, one-time charges, metered billing, or marketplace payouts — and design the integration.' },
          { title: 'Integration development', description: 'We build the checkout flow, webhook handlers, and backend logic with proper error handling, idempotency, and test coverage.' },
          { title: 'Testing & go-live', description: 'We validate every payment scenario in Stripe test mode, run end-to-end QA, and deploy to production with monitoring in place.' },
        ]}
      />

      <FeatureGrid
        label="Stripe"
        title="What we build"
        columns={3}
        items={[
          { title: 'Subscription Billing', description: 'Recurring billing with trials, usage-based pricing, proration, and plan upgrades using Stripe Billing.' },
          { title: 'Marketplace Payouts', description: 'Multi-party payments with Stripe Connect — onboarding, split payments, and automated payout schedules.' },
          { title: 'Custom Checkout', description: 'Embedded payment forms using Stripe Elements and Payment Intents for a seamless branded checkout.' },
          { title: 'Invoice Generation', description: 'Automated invoicing with line items, tax calculation, and PDF delivery through the Stripe Invoicing API.' },
          { title: 'Webhook Handling', description: 'Reliable webhook endpoints that process payment events, handle retries, and keep your system in sync.' },
          { title: 'PCI Compliance', description: 'Integration architecture that keeps you in PCI SAQ-A scope using Stripe-hosted payment collection.' },
        ]}
      />

      <Testimonials />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Let's build your payment flow" buttonText="Get Started" />
    </>
  );
}
