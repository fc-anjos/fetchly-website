import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'PostgreSQL Consulting & Database Design | Fetchly',
  description:
    'Database design, query optimization, and scaling strategies with PostgreSQL — the most advanced open-source database.',
};

const FAQ_ITEMS = [
  {
    question: 'Can you optimize our existing PostgreSQL database?',
    answer:
      'Yes. We audit your schema, analyze slow queries with EXPLAIN ANALYZE, review your indexing strategy, and implement changes that typically cut query times by 50-90% without application changes.',
  },
  {
    question: 'Should we use PostgreSQL or another database?',
    answer:
      'PostgreSQL is our default recommendation for most applications — it handles relational data, JSON, full-text search, and vector embeddings. We recommend specialized databases only when your workload specifically demands it.',
  },
  {
    question: 'How do you handle database migrations in production?',
    answer:
      'We use zero-downtime migration strategies — adding columns as nullable, backfilling data in batches, and swapping constraints only after data is consistent. No maintenance windows required.',
  },
  {
    question: 'Can PostgreSQL handle AI vector search?',
    answer:
      'Yes. The pgvector extension adds vector similarity search directly in PostgreSQL. We set up vector columns, indexing with HNSW or IVFFlat, and integrate it with your AI pipeline — no separate vector database needed.',
  },
];

export default function PostgresqlPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'PostgreSQL Consulting & Database Design',
            description:
              'Database design, query optimization, and scaling strategies with PostgreSQL — the most advanced open-source database.',
            url: 'https://www.fetch.ly/technologies/postgresql',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'PostgreSQL' },
          ]}
        />
      </Container>

      <PageHero
        title="PostgreSQL — the database that scales."
        description="Database design, query optimization, and scaling strategies with PostgreSQL — the most advanced open-source database."
        ctaText="Start your database project"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <ProcessSteps
        title="How we deliver PostgreSQL projects"
        steps={[
          { title: 'Schema design', description: 'We design normalized schemas with proper data types, constraints, and relationships — built for your query patterns and growth trajectory.' },
          { title: 'Optimization & indexing', description: 'We analyze query plans, add targeted indexes, rewrite slow queries, and configure connection pooling for maximum throughput.' },
          { title: 'Scaling & replication', description: 'We set up read replicas, connection pooling with PgBouncer, partitioning strategies, and automated backups for production reliability.' },
        ]}
      />

      <FeatureGrid
        label="PostgreSQL"
        title="What we build"
        columns={3}
        items={[
          { title: 'Schema Design', description: 'Normalized database schemas with proper constraints, data types, and relationships optimized for your application queries.' },
          { title: 'Query Optimization', description: 'EXPLAIN ANALYZE-driven query tuning, common table expression refactoring, and materialized views for complex reporting.' },
          { title: 'Index Strategy', description: 'B-tree, GIN, GiST, and BRIN indexes placed strategically based on actual query patterns and table statistics.' },
          { title: 'Replication & HA', description: 'Streaming replication, read replicas, and automatic failover with Patroni or AWS RDS Multi-AZ for high availability.' },
          { title: 'PGVector for AI', description: 'Vector similarity search with pgvector — HNSW and IVFFlat indexes for fast nearest-neighbor queries in your AI pipeline.' },
          { title: 'Backup & Recovery', description: 'Automated backups with point-in-time recovery, WAL archiving, and disaster recovery runbooks for production databases.' },
        ]}
      />

      <Testimonials />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Let's optimize your database" buttonText="Get Started" />
    </>
  );
}
