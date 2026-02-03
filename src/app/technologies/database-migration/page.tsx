import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, PainPoints, ProcessSteps, FeatureGrid, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Database Migration Services — MongoDB to PostgreSQL | Fetchly',
  description:
    'We migrate between MongoDB, PostgreSQL, and other databases with data integrity guarantees and zero data loss. Get a free migration audit.',
};

const FAQ_ITEMS = [
  {
    question: 'How long does a database migration take?',
    answer:
      'Most database migrations take 4-10 weeks depending on data volume, schema complexity, and the number of application queries that need rewriting. We scope each project before work begins.',
  },
  {
    question: 'Will we lose any data during the migration?',
    answer:
      'No. We run automated data validation scripts that compare source and target databases record by record. Every migration includes checksums, rollback plans, and parallel environments.',
  },
  {
    question: 'Can we migrate without downtime?',
    answer:
      'Yes. We use change data capture and dual-write patterns to keep both databases in sync during the transition, then cut over with zero downtime once validation is complete.',
  },
  {
    question: 'How do you handle schema differences between databases?',
    answer:
      'We design the target schema to match your data model and query patterns. For MongoDB to PostgreSQL migrations, we normalize document structures into relational tables optimized for your access patterns.',
  },
];

export default function DatabaseMigrationPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Database Migration Services',
            description:
              'We migrate between MongoDB, PostgreSQL, and other databases with data integrity guarantees and zero data loss.',
            url: 'https://www.fetch.ly/technologies/database-migration',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'Database Migration' },
          ]}
        />
      </Container>

      <PageHero
        title="Outgrowing your database?"
        description="We migrate between MongoDB, PostgreSQL, and other databases — with data integrity guarantees and zero data loss."
        ctaText="Get a free migration audit"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <PainPoints
        label="Outgrowing your database?"
        title="Why teams migrate now"
        items={[
          { title: 'Schema limitations' },
          { title: 'Query performance degrading' },
          { title: 'Scaling costs unsustainable' },
          { title: 'Missing relational features' },
        ]}
      />

      <ProcessSteps
        title="Our migration approach"
        steps={[
          { title: 'Audit', description: 'We analyze your current database schema, query patterns, data volume, and performance bottlenecks to design the optimal target architecture.' },
          { title: 'Plan', description: 'We design the target schema, build automated migration scripts, and create a zero-downtime cutover plan with rollback procedures at every stage.' },
          { title: 'Migrate', description: 'We execute the migration with change data capture for real-time sync, validate every record, and cut over with zero downtime and zero data loss.' },
        ]}
      />

      <FeatureGrid
        label="Migration"
        title="What's included"
        columns={3}
        items={[
          { title: 'Schema Design', description: 'Target database schema optimized for your data model, query patterns, and growth trajectory.' },
          { title: 'Data Migration', description: 'Automated migration scripts with record-level validation and checksums for complete data integrity.' },
          { title: 'Query Optimization', description: 'Rewrite application queries for the target database with optimized execution plans.' },
          { title: 'Index Strategy', description: 'Design and implement indexes tailored to your query patterns for optimal read and write performance.' },
          { title: 'Backup & Recovery', description: 'Comprehensive backup strategy and disaster recovery procedures for your new database.' },
          { title: 'Zero-Downtime Cutover', description: 'Dual-write and change data capture patterns for seamless migration without service interruption.' },
        ]}
      />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Get your free migration audit" buttonText="Book Audit" />
    </>
  );
}
