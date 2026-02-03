import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, PainPoints, ProcessSteps, FeatureGrid, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Migrate Off Heroku — Heroku to AWS Migration | Fetchly',
  description:
    'We migrate your application from Heroku to AWS, Docker, or self-hosted infrastructure with better performance and lower costs. Get a free migration audit.',
};

const FAQ_ITEMS = [
  {
    question: 'How long does a Heroku to AWS migration take?',
    answer:
      'Most Heroku to AWS migrations take 4-8 weeks depending on the number of dynos, add-ons, and database size. We scope each project individually and provide a clear timeline upfront.',
  },
  {
    question: 'Will there be downtime during the migration?',
    answer:
      'No. We run your application on both Heroku and AWS simultaneously during the transition, then cut over DNS with zero downtime once everything is validated.',
  },
  {
    question: 'How much will we save by leaving Heroku?',
    answer:
      'Most teams see 40-60% cost savings after migrating to AWS. We design your infrastructure for cost efficiency from day one, and provide a cost comparison before migration begins.',
  },
  {
    question: 'Will our database migrate safely?',
    answer:
      'Absolutely. We use proven database migration tools with full data validation, checksums, and parallel environments. Every record is verified before the cutover.',
  },
];

export default function HerokuMigrationPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Heroku to AWS Migration Services',
            description:
              'We migrate applications from Heroku to AWS, Docker, or self-hosted infrastructure with better performance and lower costs.',
            url: 'https://www.fetch.ly/technologies/heroku-migration',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'Heroku Migration' },
          ]}
        />
      </Container>

      <PageHero
        title="Ready to leave Heroku?"
        description="We migrate your application from Heroku to AWS, Docker, or self-hosted infrastructure — with better performance and lower costs."
        ctaText="Get a free migration audit"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <PainPoints
        label="Still on Heroku?"
        title="Why teams migrate now"
        items={[
          { title: 'Heroku costs keep climbing' },
          { title: 'Dyno limitations' },
          { title: 'Cold starts affecting users' },
          { title: 'Need more infrastructure control' },
        ]}
      />

      <ProcessSteps
        title="Our migration approach"
        steps={[
          { title: 'Audit', description: 'We map your Heroku dynos, add-ons, databases, and environment variables to design the optimal AWS architecture for your application.' },
          { title: 'Plan', description: 'We design your target infrastructure with Docker containers, managed databases, CI/CD pipelines, and monitoring — optimized for cost and performance.' },
          { title: 'Migrate', description: 'We deploy to AWS in parallel, migrate your database with zero data loss, validate everything, and cut over DNS with zero downtime.' },
        ]}
      />

      <FeatureGrid
        label="Migration"
        title="What's included"
        columns={3}
        items={[
          { title: 'AWS Architecture Design', description: 'Custom AWS infrastructure designed for your application workload, scale, and budget.' },
          { title: 'Docker Containerization', description: 'Containerize your application with Docker for consistent, reproducible deployments anywhere.' },
          { title: 'Database Migration', description: 'Migrate Heroku Postgres, Redis, or other data stores to AWS managed services with full data integrity.' },
          { title: 'CI/CD Setup', description: 'Automated build, test, and deployment pipelines replacing Heroku Git-based deploys.' },
          { title: 'Monitoring & Alerting', description: 'Production monitoring, log aggregation, and alerting to replace Heroku add-ons.' },
          { title: 'Cost Optimization', description: 'Right-sized infrastructure with reserved instances and auto-scaling to minimize your AWS bill.' },
        ]}
      />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Get your free migration audit" buttonText="Book Audit" />
    </>
  );
}
