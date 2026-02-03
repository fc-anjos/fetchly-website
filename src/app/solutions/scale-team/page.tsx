import type { Metadata } from 'next';
import { PageHero, PainPoints, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Scale My Team — Dedicated Developers on Demand | Fetchly',
  description:
    'Dedicated developers, designers, QA, and PMs who integrate with your team — not a revolving door of freelancers.',
};

const PAIN_POINTS = [
  { title: "Can't hire fast enough for your roadmap" },
  { title: 'Freelancers disappear mid-project' },
  { title: 'Onboarding takes months' },
  { title: 'Your team is stretched too thin' },
];

const PROCESS_STEPS = [
  {
    title: 'Team planning & skills matching',
    description:
      'We learn your stack, your workflow, and the gaps in your team — then match you with dedicated engineers, designers, and PMs who fit.',
  },
  {
    title: 'Seamless integration with your workflow',
    description:
      'Your new team members join your Slack, attend your standups, and work in your tools. No separate processes or handoff friction.',
  },
  {
    title: 'Dedicated delivery with weekly syncs',
    description:
      'Consistent output from the same people every sprint. Weekly syncs keep everyone aligned and moving forward.',
  },
];

const FEATURES = [
  {
    title: 'Dedicated Engineers',
    description: '150+ hrs/month of focused development from assigned team members.',
  },
  {
    title: 'Project Management',
    description: 'Experienced PMs keep everything on track and transparent.',
  },
  {
    title: 'Quality Assurance',
    description: 'Dedicated QA engineers testing every sprint.',
  },
  {
    title: 'Design & UX',
    description: 'Product designers embedded in your team.',
  },
  {
    title: 'Architecture',
    description: 'Senior architects guiding technical decisions.',
  },
  {
    title: 'DevOps',
    description: 'Infrastructure and deployment automation included.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can you ramp up?',
    answer: 'Most teams are fully integrated within 1-2 weeks.',
  },
  {
    question: 'Do we get the same developers?',
    answer: 'Yes — dedicated team members, not a rotating bench.',
  },
  {
    question: 'How does communication work?',
    answer:
      'Your team joins your Slack, attends your standups, and works in your timezone.',
  },
  {
    question: "What's the minimum engagement?",
    answer: 'Month-to-month, no long-term contracts required.',
  },
];

export default function ScaleTeamPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Scale My Team — Dedicated Developers on Demand',
            description:
              'Dedicated developers, designers, QA, and PMs who integrate with your team — not a revolving door of freelancers.',
            url: 'https://www.fetch.ly/solutions/scale-team',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Scale My Team' },
          ]}
        />
      </Container>

      <PageHero
        title="Your engineering team, extended."
        description="Dedicated developers, designers, QA, and PMs who integrate with your team — not a revolving door of freelancers."
        ctaText="Build your team"
        ctaHref="/intake/request"
        showBadge={false}
      />

      <PainPoints items={PAIN_POINTS} />

      <ProcessSteps steps={PROCESS_STEPS} />

      <FeatureGrid
        title="Your extended team, fully loaded"
        items={FEATURES}
        columns={3}
        background="muted"
      />

      <Testimonials filterSolution="scale-team" />

      <FAQ
        items={FAQ_ITEMS}
        title="Common questions about team scaling"
        label="FAQ"
      />

      <CTA
        title="Start scaling your team this week"
        buttonText="Build Your Team"
      />
    </>
  );
}
