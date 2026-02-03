import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Next.js Development Agency | Fetchly',
  description:
    'Full-stack React applications with server-side rendering, static generation, and the best developer experience in the ecosystem.',
};

const PROCESS_STEPS = [
  {
    title: 'Architecture & planning',
    description:
      'We map your data model, routing strategy, and rendering approach — SSR, SSG, or ISR — so every page loads fast and ranks well from day one.',
  },
  {
    title: 'Component-driven development',
    description:
      'We build your app in isolated, testable components with TypeScript and the App Router. You review working features every sprint, not wireframes.',
  },
  {
    title: 'Testing & deployment',
    description:
      'Automated tests, CI/CD pipelines, and zero-downtime deployments to Vercel or your preferred infrastructure. Ship with confidence.',
  },
];

const FEATURES = [
  { title: 'Server-Side Rendering', description: 'Dynamic pages rendered on the server for fast initial loads and strong SEO across every route.' },
  { title: 'Static Site Generation', description: 'Pre-built pages at build time for near-instant load speeds and minimal server costs.' },
  { title: 'API Routes', description: 'Backend endpoints built directly into your Next.js app — no separate API server required.' },
  { title: 'App Router', description: 'Layouts, loading states, and streaming built on React Server Components for modern data fetching patterns.' },
  { title: 'Edge Functions', description: 'Run logic at the edge for personalization, A/B testing, and geo-based routing with sub-millisecond latency.' },
  { title: 'Performance Optimization', description: 'Image optimization, code splitting, and bundle analysis to keep your Core Web Vitals in the green.' },
];

const FAQ_ITEMS = [
  {
    question: 'When should I choose Next.js over a plain React app?',
    answer:
      'Next.js is the right choice when you need SEO, fast initial page loads, or server-side logic. If your app is purely behind a login screen with no public pages, a plain React SPA may suffice — but Next.js still offers a better developer experience for most projects.',
  },
  {
    question: 'How experienced is your team with Next.js?',
    answer:
      'Our team has shipped 20+ production Next.js applications across e-commerce, SaaS, and content platforms. We use the App Router, Server Components, and the latest Next.js features in every new build.',
  },
  {
    question: 'How long does a typical Next.js project take?',
    answer:
      'A marketing site or content platform ships in 4-8 weeks. A full-stack SaaS application typically takes 8-16 weeks depending on scope. We give you a detailed timeline after discovery.',
  },
  {
    question: 'What does a Next.js project cost?',
    answer:
      'Most projects range from $30K to $150K depending on complexity. We offer flat monthly pricing — no hourly billing or surprise invoices.',
  },
];

export default function NextjsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Next.js Development Agency',
            description: 'Full-stack React applications with server-side rendering, static generation, and the best developer experience in the ecosystem.',
            url: 'https://www.fetch.ly/technologies/nextjs',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Technologies' }, { label: 'Next.js' }]} />
      </Container>

      <PageHero
        title="Next.js development that ships."
        description="Full-stack React applications with server-side rendering, static generation, and the best developer experience in the ecosystem."
        ctaText="Start your Next.js project"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <ProcessSteps steps={PROCESS_STEPS} title="How we build with Next.js" />

      <FeatureGrid items={FEATURES} title="What we build" label="Next.js" columns={3} background="muted" />

      <Testimonials />

      <FAQ items={FAQ_ITEMS} title="Next.js development FAQ" label="FAQ" />

      <CTA title="Start your Next.js project" buttonText="Get Started" />
    </>
  );
}
