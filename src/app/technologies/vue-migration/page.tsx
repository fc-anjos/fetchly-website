import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, PainPoints, ProcessSteps, FeatureGrid, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Vue 2 to Vue 3 Migration Services | Fetchly',
  description:
    'Vue 2 reached end of life. We migrate your application to Vue 3 with Composition API, Pinia, and modern tooling. Get a free migration audit.',
};

const FAQ_ITEMS = [
  {
    question: 'How long does a Vue 2 to Vue 3 migration take?',
    answer:
      'Most Vue 2 to Vue 3 migrations take 4-10 weeks depending on component count, Vuex usage, and third-party plugin dependencies. We scope every project individually before work begins.',
  },
  {
    question: 'Will our application have downtime during migration?',
    answer:
      'No. We migrate components incrementally using the Vue 3 compatibility build as a bridge, then cut over to full Vue 3 when everything is validated and tested.',
  },
  {
    question: 'What happens to our Vuex stores?',
    answer:
      'We migrate Vuex stores to Pinia, the officially recommended state management solution for Vue 3. Pinia offers better TypeScript support, simpler API, and improved devtools integration.',
  },
  {
    question: 'How much does a Vue migration cost?',
    answer:
      'Pricing depends on application size and complexity. Our flat monthly model means predictable costs with no surprise invoices. We scope the engagement and agree on cost before any work begins.',
  },
];

export default function VueMigrationPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Vue 2 to Vue 3 Migration Services',
            description:
              'We migrate Vue 2 applications to Vue 3 with Composition API, Pinia, and modern tooling.',
            url: 'https://www.fetch.ly/technologies/vue-migration',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'Vue Migration' },
          ]}
        />
      </Container>

      <PageHero
        title="Still running Vue 2?"
        description="Vue 2 reached end of life. We migrate your application to Vue 3 with Composition API, Pinia, and modern tooling."
        ctaText="Get a free migration audit"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <PainPoints
        label="Still running Vue 2?"
        title="Why teams migrate now"
        items={[
          { title: 'Vue 2 EOL — no more security patches' },
          { title: 'Options API limiting your codebase' },
          { title: 'Vuex is deprecated' },
          { title: "Can't use latest Vue ecosystem" },
        ]}
      />

      <ProcessSteps
        title="Our migration approach"
        steps={[
          { title: 'Audit', description: 'We analyze your component tree, Vuex stores, mixins, and plugin dependencies to build a complete migration inventory and identify breaking changes.' },
          { title: 'Plan', description: 'We design a phased migration using the Vue 3 compatibility build as a bridge — converting components incrementally while your application stays live.' },
          { title: 'Migrate', description: 'We convert Options API to Composition API, replace Vuex with Pinia, upgrade build tools to Vite, and validate everything with your existing test suite.' },
        ]}
      />

      <FeatureGrid
        label="Migration"
        title="What's included"
        columns={3}
        items={[
          { title: 'Composition API Migration', description: 'Convert Options API components to Composition API with composables for shared logic.' },
          { title: 'Pinia State Management', description: 'Replace Vuex with Pinia for simpler, type-safe state management.' },
          { title: 'Build Tool Upgrade', description: 'Migrate from Vue CLI or Webpack to Vite for faster builds and hot module replacement.' },
          { title: 'Component Refactoring', description: 'Update templates, slots, and event handling for Vue 3 syntax and conventions.' },
          { title: 'Test Migration', description: 'Update test suite for Vue Test Utils v2 and ensure full coverage on migrated components.' },
          { title: 'TypeScript Integration', description: 'Add TypeScript support with proper type definitions across your Vue 3 codebase.' },
        ]}
      />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Get your free migration audit" buttonText="Book Audit" />
    </>
  );
}
