import type { Metadata } from 'next';
import { PageHero, PainPoints, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Rescue & Replace — Fix Your Failed Project | Fetchly',
  description:
    "Your last agency didn't work out. We rescue failing projects, audit codebases, and get you back on track.",
};

const PAIN_POINTS = [
  { title: 'Agency ghosted you mid-project' },
  { title: 'Code is unmaintainable' },
  { title: 'Budget blown, product half-built' },
  { title: 'No documentation, no tests, no handoff' },
];

const PROCESS_STEPS = [
  {
    title: 'Codebase audit & honest assessment',
    description:
      'We dig into your existing code, architecture, and infrastructure to understand exactly where things stand — and give you a straight answer on what to do next.',
  },
  {
    title: 'Triage: fix, refactor, or rebuild',
    description:
      'Based on the audit, we recommend the fastest path forward. Sometimes that means fixing what exists; sometimes it means starting fresh on the parts that matter.',
  },
  {
    title: 'Get back on track with a real team',
    description:
      'A dedicated team picks up where your last agency left off — with clear milestones, weekly updates, and no surprises.',
  },
];

const FEATURES = [
  {
    title: 'Codebase Audit',
    description: 'We review architecture, test coverage, and technical debt.',
  },
  {
    title: 'Agency Transition',
    description: 'Smooth handoff from previous vendors with zero downtime.',
  },
  {
    title: 'Honest Assessment',
    description: "We'll tell you the truth — even if it means don't hire us.",
  },
  {
    title: 'Rapid Stabilization',
    description: 'Fix critical bugs and security issues first.',
  },
  {
    title: 'Incremental Rebuild',
    description: 'Refactor or rebuild module by module, not big-bang.',
  },
  {
    title: 'Full Documentation',
    description: "We document everything so you're never stuck again.",
  },
];

const FAQ_ITEMS = [
  {
    question: 'Can you work with our existing codebase?',
    answer:
      "Yes — we start with a thorough audit and give you an honest assessment of what's salvageable and what needs rebuilding.",
  },
  {
    question: 'How do you handle agency transitions?',
    answer:
      "We've done this dozens of times. We review all existing code, documentation, and infrastructure, then create a transition plan.",
  },
  {
    question: 'What if the code is unsalvageable?',
    answer:
      "We'll tell you honestly. Sometimes a targeted rebuild is faster and cheaper than fixing a broken foundation.",
  },
  {
    question: 'How quickly can you stabilize a failing project?',
    answer:
      'Most rescue projects see critical bugs resolved within the first two weeks. Full stabilization depends on scope.',
  },
];

export default function RescuePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Rescue & Replace — Fix Your Failed Project',
            description:
              "Your last agency didn't work out. We rescue failing projects, audit codebases, and get you back on track.",
            url: 'https://www.fetch.ly/solutions/rescue',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Rescue & Replace' },
          ]}
        />
      </Container>

      <PageHero
        title="Your last agency didn't work out."
        description="We've rescued dozens of projects from failed agencies, abandoned codebases, and missed deadlines. We'll pick up where they left off — or start fresh."
        ctaText="Get a free codebase assessment"
        ctaHref="/intake/request"
        showBadge={false}
      />

      <PainPoints items={PAIN_POINTS} />

      <ProcessSteps steps={PROCESS_STEPS} />

      <FeatureGrid
        title="What we bring to rescue projects"
        items={FEATURES}
        columns={3}
        background="muted"
      />

      <Testimonials filterSolution="rescue" />

      <FAQ
        items={FAQ_ITEMS}
        title="Common questions about project rescue"
        label="FAQ"
      />

      <CTA
        title="Get your free codebase assessment"
        buttonText="Book Assessment"
      />
    </>
  );
}
