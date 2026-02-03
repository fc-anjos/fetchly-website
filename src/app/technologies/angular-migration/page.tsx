import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, PainPoints, ProcessSteps, FeatureGrid, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'AngularJS to React Migration Services | Fetchly',
  description:
    'AngularJS is end-of-life. We migrate your application to React, Vue, or modern Angular — incrementally and safely. Get a free migration audit.',
};

const FAQ_ITEMS = [
  {
    question: 'How long does an AngularJS migration take?',
    answer:
      'Most AngularJS to React migrations take 8-16 weeks depending on application size and complexity. We use an incremental approach so your application stays live throughout the process.',
  },
  {
    question: 'Should we migrate to React, Vue, or modern Angular?',
    answer:
      'We help you choose based on your team skills, hiring plans, and application needs. React is our most common recommendation, but we evaluate each situation individually and present the trade-offs.',
  },
  {
    question: 'Can we migrate incrementally instead of rewriting?',
    answer:
      'Yes. We use tools like single-spa or module federation to run AngularJS and the new framework side by side, migrating one route or feature at a time while your application stays live.',
  },
  {
    question: 'What happens to our existing data and user accounts?',
    answer:
      'All data stays intact. The frontend migration does not affect your backend or database. We maintain full API compatibility throughout the transition.',
  },
];

export default function AngularMigrationPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'AngularJS to React Migration Services',
            description:
              'We migrate AngularJS applications to React, Vue, or modern Angular — incrementally and safely.',
            url: 'https://www.fetch.ly/technologies/angular-migration',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'Angular Migration' },
          ]}
        />
      </Container>

      <PageHero
        title="Still running AngularJS?"
        description="AngularJS is end-of-life. We migrate your application to React, Vue, or modern Angular — incrementally and safely."
        ctaText="Get a free migration audit"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <PainPoints
        label="Still running AngularJS?"
        title="Why teams migrate now"
        items={[
          { title: 'AngularJS is completely unsupported' },
          { title: 'Security vulnerabilities accumulating' },
          { title: "Can't find AngularJS developers" },
          { title: 'Browser compatibility issues' },
        ]}
      />

      <ProcessSteps
        title="Our migration approach"
        steps={[
          { title: 'Audit', description: 'We inventory your AngularJS controllers, services, directives, and routes to build a complete migration map and recommend the best target framework.' },
          { title: 'Plan', description: 'We design an incremental migration strategy using micro-frontend patterns so both frameworks run side by side while you migrate route by route.' },
          { title: 'Migrate', description: 'We convert AngularJS components to the new framework one feature at a time, maintaining full functionality and testing coverage at every step.' },
        ]}
      />

      <FeatureGrid
        label="Migration"
        title="What's included"
        columns={3}
        items={[
          { title: 'Framework Selection', description: 'We evaluate React, Vue, and modern Angular to recommend the best fit for your team and product.' },
          { title: 'Incremental Migration', description: 'Run old and new frameworks side by side using micro-frontend patterns for zero-disruption migration.' },
          { title: 'Component Mapping', description: 'Map AngularJS directives and controllers to modern components with equivalent functionality.' },
          { title: 'State Migration', description: 'Migrate $scope and services to modern state management patterns like Redux, Pinia, or Context.' },
          { title: 'API Layer Update', description: 'Replace $http and $resource with modern data fetching using Axios, React Query, or SWR.' },
          { title: 'Testing Strategy', description: 'Replace Karma and Protractor with Jest, Testing Library, and Playwright for modern testing.' },
        ]}
      />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Get your free migration audit" buttonText="Book Audit" />
    </>
  );
}
