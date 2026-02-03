import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, PainPoints, ProcessSteps, FeatureGrid, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'React Modernization — Class to Hooks Migration | Fetchly',
  description:
    'We upgrade class components to hooks, modernize state management, and bring your React app into the current ecosystem. Get a free modernization audit.',
};

const FAQ_ITEMS = [
  {
    question: 'How long does a React modernization take?',
    answer:
      'Most React modernization projects take 6-14 weeks depending on component count, Redux complexity, and whether TypeScript adoption is included. We scope each project individually before starting.',
  },
  {
    question: 'Can we modernize incrementally without rewriting everything?',
    answer:
      'Absolutely. Hooks and class components coexist in the same application. We migrate component by component, so your app stays live and your team stays productive throughout.',
  },
  {
    question: 'What replaces our Redux setup?',
    answer:
      'It depends on your needs. We evaluate React Context, Zustand, Jotai, or Redux Toolkit based on your application complexity, and migrate your state management to the best fit.',
  },
  {
    question: 'Will our existing tests break during the migration?',
    answer:
      'We update your test suite alongside each component migration, ensuring coverage is maintained or improved at every step. Tests run in CI on every pull request.',
  },
];

export default function ReactModernizationPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'React Modernization — Class to Hooks Migration',
            description:
              'We upgrade class components to hooks, modernize state management, and bring your React app into the current ecosystem.',
            url: 'https://www.fetch.ly/technologies/react-modernization',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'React Modernization' },
          ]}
        />
      </Container>

      <PageHero
        title="Legacy React holding you back?"
        description="We upgrade class components to hooks, modernize state management, and bring your React app into the current ecosystem."
        ctaText="Get a free migration audit"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <PainPoints
        label="Still using class components?"
        title="Why teams modernize now"
        items={[
          { title: 'Class components everywhere' },
          { title: 'Redux boilerplate slowing development' },
          { title: 'No TypeScript' },
          { title: 'Outdated React Router' },
        ]}
      />

      <ProcessSteps
        title="Our migration approach"
        steps={[
          { title: 'Audit', description: 'We inventory every class component, Redux connection, and legacy pattern to build a complete modernization roadmap with clear priorities.' },
          { title: 'Plan', description: 'We design an incremental migration plan — converting components to hooks, replacing Redux with modern state management, and adding TypeScript file by file.' },
          { title: 'Migrate', description: 'We execute the modernization component by component, running tests at every step, so your application stays live and your team keeps shipping.' },
        ]}
      />

      <FeatureGrid
        label="Migration"
        title="What's included"
        columns={3}
        items={[
          { title: 'Hooks Migration', description: 'Convert class components to functional components with hooks for state, effects, and context.' },
          { title: 'State Management Upgrade', description: 'Replace Redux boilerplate with Redux Toolkit, Zustand, or React Context based on your needs.' },
          { title: 'TypeScript Adoption', description: 'Add TypeScript incrementally with proper type definitions, interfaces, and strict mode readiness.' },
          { title: 'Router Migration', description: 'Upgrade to the latest React Router with data loaders, nested routes, and modern patterns.' },
          { title: 'Testing Modernization', description: 'Update test suite to React Testing Library and ensure full coverage on modernized components.' },
          { title: 'Performance Optimization', description: 'Implement React.memo, useMemo, useCallback, and code splitting for measurable performance gains.' },
        ]}
      />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Get your free migration audit" buttonText="Book Audit" />
    </>
  );
}
