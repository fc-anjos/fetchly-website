import type { Metadata } from 'next';
import { PageHero, PainPoints, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Build My MVP — From Idea to Launched Product | Fetchly',
  description:
    "We've built 50+ MVPs for funded startups. Your first version ships in weeks, not months.",
};

const PAIN_POINTS = [
  { title: 'Burning runway on slow development' },
  { title: 'Technical co-founder gap' },
  { title: "Agency delivered code you can't maintain" },
  { title: "Can't hire fast enough" },
];

const PROCESS_STEPS = [
  {
    title: 'Discovery & architecture',
    description:
      'We define scope, prioritize features, and design the technical architecture — so you launch the right thing, built the right way.',
  },
  {
    title: 'Sprint-based development',
    description:
      'Your product takes shape in focused two-week sprints. You see working software every cycle, not just slide decks.',
  },
  {
    title: 'Launch & iterate',
    description:
      'We deploy your MVP, set up monitoring, and help you iterate based on real user feedback. Most clients continue with us to build v2.',
  },
];

const FEATURES = [
  {
    title: 'Product Strategy',
    description: 'We help define scope, prioritize features, and plan your roadmap.',
  },
  {
    title: 'Full-Stack Development',
    description: 'Web and mobile development with modern, scalable tech.',
  },
  {
    title: 'Design & Prototyping',
    description: 'UI/UX design, wireframes, and interactive prototypes.',
  },
  {
    title: 'Code Ownership',
    description: 'You own 100% of the code from day one.',
  },
  {
    title: 'Launch Support',
    description: 'Deployment, monitoring, and post-launch optimization.',
  },
  {
    title: 'Scale Ready',
    description: 'Architecture designed to grow with your user base.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'How much does an MVP cost?',
    answer:
      "It depends on scope, but most MVPs fall in the $40K-$120K range. We'll give you a detailed estimate after discovery.",
  },
  {
    question: 'Do we own the code?',
    answer:
      '100%. You own all code, designs, and intellectual property from day one.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We offer ongoing support and iteration. Most clients continue with us to build v2.',
  },
  {
    question: 'What tech stack do you use?',
    answer:
      'We match the stack to your needs — typically Next.js, Rails, React Native, PostgreSQL, and AWS.',
  },
];

export default function BuildMvpPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Build My MVP — From Idea to Launched Product',
            description:
              "We've built 50+ MVPs for funded startups. Your first version ships in weeks, not months.",
            url: 'https://www.fetch.ly/solutions/build-mvp',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Build My MVP' },
          ]}
        />
      </Container>

      <PageHero
        title="From idea to launched product."
        description="We've built 50+ MVPs for funded startups. Your first version ships in weeks, not months."
        ctaText="Get a free product roadmap"
        ctaHref="/intake/request"
        showBadge={false}
      />

      <PainPoints items={PAIN_POINTS} />

      <ProcessSteps steps={PROCESS_STEPS} />

      <FeatureGrid
        title="Everything you need to launch"
        items={FEATURES}
        columns={3}
        background="muted"
      />

      <Testimonials filterSolution="build-mvp" />

      <FAQ
        items={FAQ_ITEMS}
        title="Common questions about MVP development"
        label="FAQ"
      />

      <CTA
        title="Book your free MVP planning session"
        buttonText="Start Building"
      />
    </>
  );
}
