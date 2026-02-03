import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, PainPoints, ProcessSteps, FeatureGrid, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Rails 5 to 7 Migration Services | Fetchly',
  description:
    "We've migrated dozens of Rails applications to the latest version with zero downtime and full test coverage. Get a free migration audit.",
};

const FAQ_ITEMS = [
  {
    question: 'How long does a Rails migration typically take?',
    answer:
      'Most Rails 5 to 7 migrations take 4-12 weeks depending on application size, gem dependencies, and test coverage. We scope each project individually and give you a clear timeline before work begins.',
  },
  {
    question: 'Will there be downtime during the migration?',
    answer:
      'No. We run the upgraded application in a staging environment, validate every feature against your existing test suite, and deploy with zero downtime using blue-green or rolling deployments.',
  },
  {
    question: 'What happens to our existing gems and dependencies?',
    answer:
      'We audit every gem for Rails 7 compatibility, replace deprecated ones with maintained alternatives, and ensure your Gemfile is clean and up to date before deployment.',
  },
  {
    question: 'How much does a Rails migration cost?',
    answer:
      'Cost depends on scope, but our flat monthly model means no surprise invoices. We scope the engagement together and provide a predictable cost before any work begins.',
  },
];

export default function RailsMigrationPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Rails 5 to 7 Migration Services',
            description:
              'We migrate Rails applications to the latest version with zero downtime and full test coverage.',
            url: 'https://www.fetch.ly/technologies/rails-migration',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'Rails Migration' },
          ]}
        />
      </Container>

      <PageHero
        title="Still running Rails 5?"
        description="We've migrated dozens of Rails applications to the latest version — with zero downtime and full test coverage."
        ctaText="Get a free migration audit"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <PainPoints
        label="Still running Rails 5?"
        title="Why teams migrate now"
        items={[
          { title: 'Security patches have ended' },
          { title: "Can't hire Rails 5 developers" },
          { title: 'Gems are incompatible' },
          { title: 'Performance is degrading' },
        ]}
      />

      <ProcessSteps
        title="Our migration approach"
        steps={[
          { title: 'Audit', description: 'We map your Rails version, gem dependencies, test coverage, and database schema to identify every upgrade blocker before writing a single line of code.' },
          { title: 'Plan', description: 'We build a phased migration plan with version-by-version upgrades, gem replacements, and deprecation fixes — each phase deployable and testable independently.' },
          { title: 'Migrate', description: 'We execute the upgrade incrementally, running your full test suite at every step, and deploy to production with zero downtime.' },
        ]}
      />

      <FeatureGrid
        label="Migration"
        title="What's included"
        columns={3}
        items={[
          { title: 'Version Upgrade', description: 'Incremental Rails version upgrades from 5 through 6 to 7 with full compatibility checks.' },
          { title: 'Gem Compatibility', description: 'Audit and replace deprecated gems with maintained, Rails 7-compatible alternatives.' },
          { title: 'Database Migration', description: 'Schema updates, migration files, and ActiveRecord changes for the latest Rails conventions.' },
          { title: 'Test Suite Update', description: 'Update your test suite to work with the new Rails version and fix any deprecation warnings.' },
          { title: 'CI/CD Pipeline', description: 'Modernize your build and deployment pipeline for the upgraded application.' },
          { title: 'Performance Optimization', description: 'Leverage Rails 7 performance improvements including async queries and caching.' },
        ]}
      />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Get your free migration audit" buttonText="Book Audit" />
    </>
  );
}
