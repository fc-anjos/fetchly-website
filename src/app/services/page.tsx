import type { Metadata } from 'next';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { IndustryGrid } from '@/components/sections/IndustryGrid';
import { StatsGrid } from '@/components/sections/StatsGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { PageHero } from '@/components/sections/PageHero';
import { SOLUTIONS } from '@/lib/page-data';

export const metadata: Metadata = {
  title: 'Services — Full-Stack Development, Design, QA & More | Fetchly',
  description:
    'One team handles your entire product lifecycle. Strategy, design, development, QA, and ongoing support, all on a flexible month-to-month basis.',
};

const FAQ_ITEMS = [
  {
    question: 'What services does Fetchly offer?',
    answer:
      'The full lifecycle: design, development, QA, software architecture, DevOps, project management, and AI integration. Every role you need, one roof, no juggling vendors.',
  },
  {
    question: 'Do I need to hire separate vendors for design, dev, and QA?',
    answer:
      'No. One team covers everything. Your designer, engineers, QA analysts, and project manager all work together on your product from day one.',
  },
  {
    question: 'Can you work with our existing codebase or tech stack?',
    answer:
      'Yes. We pick up existing projects all the time. We onboard to your codebase, follow your conventions, and start contributing fast.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      "Flat month-to-month rate. No hourly billing, no surprise fees. You get a full team for one predictable price, about 50% less than traditional agencies.",
  },
  {
    question: 'How do I get started?',
    answer:
      "Fill out our contact form and we'll set up a quick consultation. We'll learn about your product, scope the engagement, and show you exactly how we'd work together.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Design, development, and QA under one roof"
        description="One team handles your entire product lifecycle. Strategy, design, development, QA, and ongoing support, all on a flexible month-to-month basis."
        ctaText="Talk to us"
        ctaHref="/intake/request"
        secondaryText="See our work"
        secondaryHref="/case-studies"
        showBadge={false}
      />
      <StatsGrid />
      <SolutionsGrid
        title="Solutions"
        description="Whether you need to build something new, fix something broken, or scale what you have."
        solutions={SOLUTIONS}
        columns={4}
      />
      <IndustryGrid />
      <Testimonials />
      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />
      <CTA />
    </>
  );
}
