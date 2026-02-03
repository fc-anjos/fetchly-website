import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, PainPoints, ProcessSteps, FeatureGrid, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Legacy Modernization — PHP to Modern Stack | Fetchly',
  description:
    'We modernize PHP, .NET, and other legacy applications to modern frameworks — Node.js, Rails, Next.js, and more. Get a free modernization audit.',
};

const FAQ_ITEMS = [
  {
    question: 'How long does a legacy modernization project take?',
    answer:
      'Most legacy modernization projects take 3-9 months depending on application size and complexity. We break work into incremental milestones so you see value within the first few weeks.',
  },
  {
    question: 'Will there be downtime during the modernization?',
    answer:
      'No. We use a strangler fig pattern to replace legacy components one at a time while the existing system stays live. Your users never notice the transition.',
  },
  {
    question: 'Can you work with our existing team?',
    answer:
      'Yes. We integrate with your team, follow your processes, and transfer knowledge throughout the engagement so your developers can maintain the modernized system independently.',
  },
  {
    question: 'What modern stack should we migrate to?',
    answer:
      'It depends on your product needs, team skills, and hiring plans. We evaluate options like Node.js, Rails, Next.js, and others, then recommend the best fit with a clear rationale.',
  },
];

export default function LegacyModernizationPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Legacy Modernization — PHP to Modern Stack',
            description:
              'We modernize PHP, .NET, and other legacy applications to modern frameworks like Node.js, Rails, and Next.js.',
            url: 'https://www.fetch.ly/technologies/legacy-modernization',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'Legacy Modernization' },
          ]}
        />
      </Container>

      <PageHero
        title="Your legacy stack has an expiration date."
        description="We modernize PHP, .NET, and other legacy applications to modern frameworks — Node.js, Rails, Next.js, and more."
        ctaText="Get a free migration audit"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <PainPoints
        label="Running a legacy stack?"
        title="Why teams modernize now"
        items={[
          { title: "Can't hire for your tech stack" },
          { title: 'Security patches unavailable' },
          { title: 'Development velocity is glacial' },
          { title: 'Technical debt is compounding' },
        ]}
      />

      <ProcessSteps
        title="Our migration approach"
        steps={[
          { title: 'Audit', description: 'We assess your legacy application architecture, dependencies, data layer, and deployment process to understand the full scope and identify the highest-risk areas.' },
          { title: 'Plan', description: 'We design a strangler fig migration strategy with an API-first approach — replacing legacy components incrementally while your existing system stays live.' },
          { title: 'Migrate', description: 'We rewrite modules one at a time on the modern stack, run old and new systems in parallel, and cut over feature by feature with zero downtime.' },
        ]}
      />

      <FeatureGrid
        label="Migration"
        title="What's included"
        columns={3}
        items={[
          { title: 'Stack Assessment', description: 'Comprehensive evaluation of your legacy system to determine the optimal modern stack and migration path.' },
          { title: 'Migration Strategy', description: 'Detailed roadmap with phased milestones, risk mitigation, and rollback plans at every stage.' },
          { title: 'Incremental Rewrite', description: 'Replace legacy modules one at a time using strangler fig pattern — no big-bang rewrites.' },
          { title: 'API-First Approach', description: 'Build a modern API layer that decouples frontend from backend for independent deployment and scaling.' },
          { title: 'Modern Frontend', description: 'Replace legacy server-rendered views with React, Next.js, or Vue for a fast, modern user experience.' },
          { title: 'DevOps Setup', description: 'CI/CD pipelines, containerization, monitoring, and infrastructure as code for the modernized application.' },
        ]}
      />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Get your free migration audit" buttonText="Book Audit" />
    </>
  );
}
