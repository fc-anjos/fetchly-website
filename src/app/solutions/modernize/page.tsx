import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import {
  PageHero,
  PainPoints,
  ProcessSteps,
  FeatureGrid,
  Testimonials,
  FAQ,
  CTA,
} from '@/components/sections';

export const metadata: Metadata = {
  title: 'Modernize & Migrate — Legacy Code Modernization | Fetchly',
  description:
    'We modernize aging applications incrementally — no big-bang rewrites, no downtime, no drama. Get a free modernization roadmap from Fetchly.',
};

const FAQ_ITEMS = [
  {
    question: 'How long does a typical modernization project take?',
    answer:
      'It depends on the size and complexity of your system, but most projects run 3-9 months. We break the work into incremental milestones so you see value within the first few weeks, not the last.',
  },
  {
    question: 'Will there be downtime during the migration?',
    answer:
      'No. Our migration plans are designed for zero downtime. We run the old and new systems in parallel and cut over module by module so your users never notice the switch.',
  },
  {
    question: 'How much does legacy modernization cost?',
    answer:
      'Pricing depends on scope, but our flat monthly model means no surprise invoices. We scope the engagement together and give you a predictable cost before work begins.',
  },
  {
    question: 'Will we lose any existing data during migration?',
    answer:
      'Absolutely not. Data integrity is the first thing we plan for. We build automated data migration scripts, validate every record, and run parallel environments to ensure nothing is lost.',
  },
];

export default function ModernizePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Legacy Code Modernization',
            description:
              'Incremental legacy application modernization — no big-bang rewrites, no downtime, no drama.',
            url: 'https://www.fetch.ly/solutions/modernize',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/services' },
            { label: 'Modernize & Migrate' },
          ]}
        />
      </Container>

      <PageHero
        title="Your legacy stack is holding you back."
        description="We modernize aging applications incrementally — no big-bang rewrites, no downtime, no drama."
        ctaText="Get a free modernization roadmap"
        ctaHref="/intake/request"
        showBadge={false}
      />

      <PainPoints
        items={[
          { title: "Can't hire developers for your outdated stack" },
          { title: 'Security patches have stopped' },
          { title: 'New features take 10x longer than they should' },
          { title: 'Deployment is manual and terrifying' },
        ]}
      />

      <ProcessSteps
        title="How we modernize your stack"
        steps={[
          {
            title: 'Audit & assessment',
            description:
              'We map your entire system — architecture, dependencies, technical debt, and risk areas — so we know exactly what we are working with before changing a single line of code.',
          },
          {
            title: 'Incremental migration plan',
            description:
              'We design a phased roadmap with zero-downtime milestones. Each phase delivers working software so you see progress immediately, not months from now.',
          },
          {
            title: 'Module-by-module migration',
            description:
              'We migrate your application one module at a time, running old and new systems in parallel. Your users never notice the switch, and your team stays productive throughout.',
          },
        ]}
      />

      <FeatureGrid
        label="What you get"
        title="Modernization capabilities"
        columns={3}
        items={[
          {
            title: 'Legacy Audit',
            description:
              'Thorough assessment of architecture and technical debt.',
          },
          {
            title: 'Migration Planning',
            description:
              'Detailed roadmap with zero-downtime milestones.',
          },
          {
            title: 'Incremental Approach',
            description:
              'Migrate module by module — no big-bang rewrites.',
          },
          {
            title: 'Testing Strategy',
            description:
              'Comprehensive test coverage before, during, and after.',
          },
          {
            title: 'Performance Optimization',
            description:
              'Modern stack means faster load times and better UX.',
          },
          {
            title: 'Knowledge Transfer',
            description:
              'Your team learns the new stack as we build.',
          },
        ]}
      />

      <Testimonials filterSolution="modernize" />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA
        title="Book your free modernization assessment"
        buttonText="Get Started"
      />
    </>
  );
}
