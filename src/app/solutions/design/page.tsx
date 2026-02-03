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
  title: 'Design & UX — Product Design That Converts | Fetchly',
  description:
    'Product design, UI/UX, design systems, and prototyping from designers who understand engineering constraints. Design that converts, not just looks good.',
};

const FAQ_ITEMS = [
  {
    question: 'What does your design process look like?',
    answer:
      'We start with research — understanding your users, your market, and your goals. Then we move into wireframes and prototypes, testing with real users before polishing the visual design. Nothing goes to engineering until it has been validated.',
  },
  {
    question: 'What tools do you use for design?',
    answer:
      'Figma is our primary design tool for UI/UX, components, and prototyping. We also use FigJam for workshops, Maze for usability testing, and Lottie for micro-animations. Everything is organized in shared libraries your team can access.',
  },
  {
    question: 'How does design-to-dev handoff work?',
    answer:
      'Our designers and engineers work on the same team, so handoff is continuous, not a one-time event. We use Figma dev mode with annotated specs, a shared design token system, and regular sync meetings to make sure what gets built matches what was designed.',
  },
  {
    question: 'Can you create a design system for our existing product?',
    answer:
      'Yes. We audit your current UI, identify inconsistencies, and build a component library with tokens, patterns, and documentation. The result is a living design system that scales with your product.',
  },
];

export default function DesignPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Design & UX',
            description:
              'Product design, UI/UX, design systems, and prototyping from designers who understand engineering constraints.',
            url: 'https://www.fetch.ly/solutions/design',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/services' },
            { label: 'Design & UX' },
          ]}
        />
      </Container>

      <PageHero
        title="Design that converts, not just looks good."
        description="Product design, UI/UX, design systems, and prototyping — from designers who understand engineering constraints."
        ctaText="Start a design project"
        ctaHref="/intake/request"
        showBadge={false}
      />

      <PainPoints
        items={[
          { title: "Beautiful mockups that can't be built" },
          { title: 'Design and dev are out of sync' },
          { title: 'No design system, inconsistent UI' },
          { title: "Users can't figure out your product" },
        ]}
      />

      <ProcessSteps
        title="How we design your product"
        steps={[
          {
            title: 'Research & discovery',
            description:
              'We interview stakeholders, audit your current product, and study your users. We identify pain points, map user journeys, and define success metrics before sketching a single screen.',
          },
          {
            title: 'Design & prototype',
            description:
              'We create wireframes, high-fidelity mockups, and interactive prototypes in Figma. Real users test the prototypes so we validate ideas before committing to code.',
          },
          {
            title: 'Build & iterate',
            description:
              'Our designers work alongside engineers through implementation, ensuring pixel-perfect execution. We iterate based on real usage data, not assumptions.',
          },
        ]}
      />

      <FeatureGrid
        label="What you get"
        title="Design capabilities"
        columns={3}
        items={[
          {
            title: 'UI/UX Design',
            description:
              'User research, wireframes, and high-fidelity interfaces grounded in real user behavior.',
          },
          {
            title: 'Design Systems',
            description:
              'Component libraries, design tokens, and documentation that keep your UI consistent at scale.',
          },
          {
            title: 'Prototyping & User Testing',
            description:
              'Interactive prototypes tested with real users so you validate ideas before writing code.',
          },
          {
            title: 'Mobile App Design',
            description:
              'Native iOS and Android design patterns that feel right on every device.',
          },
          {
            title: 'Dashboard & Data Visualization',
            description:
              'Complex data made clear through thoughtful layout, hierarchy, and interactive charts.',
          },
          {
            title: 'Brand Identity',
            description:
              'Logo, color systems, typography, and brand guidelines that carry through every touchpoint.',
          },
        ]}
      />

      <Testimonials filterSolution="design" />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA
        title="Book a free design consultation"
        buttonText="Get Started"
      />
    </>
  );
}
