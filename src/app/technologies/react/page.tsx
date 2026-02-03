import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'React Development Agency | Fetchly',
  description:
    'Interactive, performant user interfaces with React and the modern ecosystem — hooks, TypeScript, and component-driven architecture.',
};

const PROCESS_STEPS = [
  {
    title: 'Component architecture',
    description:
      'We define your component hierarchy, state management approach, and design system integration before writing code — so your UI scales without spaghetti.',
  },
  {
    title: 'Development & testing',
    description:
      'We build in TypeScript with hooks and modern patterns. Every component gets unit tests and visual regression coverage. You review working features each sprint.',
  },
  {
    title: 'Optimization & launch',
    description:
      'Bundle analysis, code splitting, lazy loading, and accessibility audits. Your React app launches fast and stays fast under real-world usage.',
  },
];

const FEATURES = [
  { title: 'Component Libraries', description: 'Reusable, documented component systems that keep your UI consistent and speed up future development.' },
  { title: 'State Management', description: 'The right tool for the job — Redux, Zustand, or React Context — chosen based on your application complexity.' },
  { title: 'TypeScript Integration', description: 'Full type safety across your entire frontend, catching bugs at compile time instead of in production.' },
  { title: 'Testing Suite', description: 'Jest, React Testing Library, and Playwright for unit, integration, and end-to-end test coverage.' },
  { title: 'Performance Optimization', description: 'Memoization, virtualization, and lazy loading strategies that keep your app responsive at scale.' },
  { title: 'Accessibility', description: 'WCAG 2.1 AA compliance built into every component — keyboard navigation, screen reader support, and semantic HTML.' },
];

const FAQ_ITEMS = [
  {
    question: 'Should I use React or Next.js?',
    answer:
      'If you need SEO, server-side rendering, or a full-stack framework, choose Next.js. If you are building a dashboard, internal tool, or single-page app behind authentication, a standalone React app is often simpler and sufficient.',
  },
  {
    question: 'How experienced is your team with React?',
    answer:
      'React is our primary frontend technology. Our engineers have built production React applications for over six years, across SaaS platforms, e-commerce, healthcare, and fintech.',
  },
  {
    question: 'How long does a typical React project take?',
    answer:
      'A component library or internal dashboard ships in 4-8 weeks. A full customer-facing application typically takes 8-14 weeks depending on the scope of features and integrations.',
  },
  {
    question: 'Can you migrate our existing frontend to React?',
    answer:
      'Yes. We have migrated applications from Angular, jQuery, and vanilla JavaScript to React. We use an incremental approach so your app stays live throughout the migration.',
  },
];

export default function ReactPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'React Development Agency',
            description: 'Interactive, performant user interfaces with React and the modern ecosystem — hooks, TypeScript, and component-driven architecture.',
            url: 'https://www.fetch.ly/technologies/react',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Technologies' }, { label: 'React' }]} />
      </Container>

      <PageHero
        title="React interfaces that users love."
        description="Interactive, performant user interfaces with React and the modern ecosystem — hooks, TypeScript, and component-driven architecture."
        ctaText="Start your React project"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <ProcessSteps steps={PROCESS_STEPS} title="How we build with React" />

      <FeatureGrid items={FEATURES} title="What we build" label="React" columns={3} background="muted" />

      <Testimonials />

      <FAQ items={FAQ_ITEMS} title="React development FAQ" label="FAQ" />

      <CTA title="Start your React project" buttonText="Get Started" />
    </>
  );
}
