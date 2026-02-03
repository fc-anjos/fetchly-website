import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Vue.js Development Agency | Fetchly',
  description:
    'Progressive web applications with Vue.js and Nuxt — approachable, performant, and versatile.',
};

const PROCESS_STEPS = [
  {
    title: 'Application architecture',
    description:
      'We plan your component structure, state management strategy, and routing — choosing between Vue SPA and Nuxt SSR based on your SEO and performance needs.',
  },
  {
    title: 'Component development',
    description:
      'We build with the Composition API, TypeScript, and single-file components. Your app grows with clean, reusable code that your team can maintain long-term.',
  },
  {
    title: 'Testing & deployment',
    description:
      'Vitest for unit tests, Cypress for end-to-end coverage, and automated CI/CD pipelines. Your Vue app ships reliably with every merge.',
  },
];

const FEATURES = [
  { title: 'Composition API', description: 'Modern Vue 3 patterns with the Composition API — better TypeScript support, code reuse, and logical organization.' },
  { title: 'Nuxt.js SSR', description: 'Server-side rendering and static generation with Nuxt for SEO-friendly, fast-loading Vue applications.' },
  { title: 'Pinia State Management', description: 'Type-safe, modular state management with Pinia — the official Vue store that scales with your app.' },
  { title: 'Component Libraries', description: 'Custom design systems and component libraries built on Vuetify, PrimeVue, or your own tokens.' },
  { title: 'TypeScript Support', description: 'Full type safety with Vue 3 and TypeScript — auto-complete, compile-time checks, and better refactoring.' },
  { title: 'Performance Optimization', description: 'Tree-shaking, lazy-loaded routes, and async components to keep your Vue app fast at any scale.' },
];

const FAQ_ITEMS = [
  {
    question: 'When should I choose Vue.js over React?',
    answer:
      'Vue is an excellent choice when your team values a gentler learning curve, strong conventions, and an integrated ecosystem. It is particularly popular for enterprise dashboards, progressive web apps, and teams transitioning from jQuery or server-rendered templates.',
  },
  {
    question: 'How experienced is your team with Vue.js?',
    answer:
      'Our frontend engineers have built production Vue applications with both the Options API and Composition API. We have shipped Vue 3 and Nuxt 3 projects across SaaS, e-commerce, and enterprise platforms.',
  },
  {
    question: 'How long does a typical Vue.js project take?',
    answer:
      'A Vue SPA or Nuxt application typically ships in 6-12 weeks. Larger platforms with complex state management, SSR, and integrations take 10-16 weeks depending on scope.',
  },
  {
    question: 'Can you migrate our Vue 2 app to Vue 3?',
    answer:
      'Yes. We have handled multiple Vue 2 to Vue 3 migrations, including converting from the Options API to the Composition API, migrating from Vuex to Pinia, and upgrading from Nuxt 2 to Nuxt 3.',
  },
];

export default function VuejsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Vue.js Development Agency',
            description: 'Progressive web applications with Vue.js and Nuxt — approachable, performant, and versatile.',
            url: 'https://www.fetch.ly/technologies/vuejs',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Technologies' }, { label: 'Vue.js' }]} />
      </Container>

      <PageHero
        title="Vue.js — progressive and powerful."
        description="Progressive web applications with Vue.js and Nuxt — approachable, performant, and versatile."
        ctaText="Start your Vue.js project"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <ProcessSteps steps={PROCESS_STEPS} title="How we build with Vue.js" />

      <FeatureGrid items={FEATURES} title="What we build" label="Vue.js" columns={3} background="muted" />

      <Testimonials />

      <FAQ items={FAQ_ITEMS} title="Vue.js development FAQ" label="FAQ" />

      <CTA title="Start your Vue.js project" buttonText="Get Started" />
    </>
  );
}
