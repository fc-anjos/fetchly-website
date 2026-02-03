import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Ruby on Rails Development Agency | Fetchly',
  description:
    "We've shipped 30+ Rails applications. Rapid development with a battle-tested framework.",
};

const PROCESS_STEPS = [
  {
    title: 'Domain modeling & architecture',
    description:
      'We design your data model, define your API surface, and set up the Rails conventions that keep your codebase clean as it grows.',
  },
  {
    title: 'Rapid development',
    description:
      'Rails lets us move fast without cutting corners. You get working features every sprint — authentication, admin panels, background jobs — all production-ready.',
  },
  {
    title: 'Testing & deployment',
    description:
      'Comprehensive test suites with RSpec, CI/CD pipelines, and automated deployments. Your Rails app ships reliably every time.',
  },
];

const FEATURES = [
  { title: 'API Development', description: 'RESTful and GraphQL APIs that serve your web and mobile clients with clean, versioned endpoints.' },
  { title: 'Background Jobs', description: 'Sidekiq-powered background processing for emails, imports, webhooks, and anything that should not block a request.' },
  { title: 'Database Design', description: 'PostgreSQL schema design with proper indexing, migrations, and query optimization from the start.' },
  { title: 'Authentication & Authorization', description: 'Secure user management with Devise, OAuth integrations, and role-based access control.' },
  { title: 'Admin Dashboards', description: 'Internal tools and admin interfaces that let your team manage data without bothering engineers.' },
  { title: 'Performance Tuning', description: 'N+1 query elimination, caching strategies, and database optimization to keep response times low.' },
];

const FAQ_ITEMS = [
  {
    question: 'Is Ruby on Rails still a good choice in 2025?',
    answer:
      'Absolutely. Rails powers Shopify, GitHub, Basecamp, and thousands of production applications. It remains one of the fastest frameworks for building web applications, with a mature ecosystem and strong community.',
  },
  {
    question: 'How experienced is your team with Rails?',
    answer:
      'We have shipped over 30 Rails applications across e-commerce, fintech, healthcare, and SaaS. Our engineers have 5-10 years of Rails experience and stay current with the latest releases.',
  },
  {
    question: 'How long does a typical Rails project take?',
    answer:
      'A standard CRUD application or API ships in 6-10 weeks. More complex platforms with integrations and admin tooling typically take 10-16 weeks. We scope everything upfront.',
  },
  {
    question: 'Can you work with our existing Rails app?',
    answer:
      'Yes. We pick up existing Rails codebases regularly — upgrading Ruby and Rails versions, refactoring legacy code, improving test coverage, and adding new features.',
  },
];

export default function RailsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Ruby on Rails Development Agency',
            description: "We've shipped 30+ Rails applications. Rapid development with a battle-tested framework.",
            url: 'https://www.fetch.ly/technologies/rails',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Technologies' }, { label: 'Ruby on Rails' }]} />
      </Container>

      <PageHero
        title="Rails — fast to build, built to last."
        description="We've shipped 30+ Rails applications. Rapid development with a battle-tested framework."
        ctaText="Start your Rails project"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <ProcessSteps steps={PROCESS_STEPS} title="How we build with Rails" />

      <FeatureGrid items={FEATURES} title="What we build" label="Rails" columns={3} background="muted" />

      <Testimonials />

      <FAQ items={FAQ_ITEMS} title="Rails development FAQ" label="FAQ" />

      <CTA title="Start your Rails project" buttonText="Get Started" />
    </>
  );
}
