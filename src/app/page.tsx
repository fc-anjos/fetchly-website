import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { StatsBar } from '@/components/sections/StatsBar';
import { IndustryGrid } from '@/components/sections/IndustryGrid';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { Bento } from '@/components/sections/Bento';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { Comparison } from '@/components/sections/Comparison';
import { CaseStudyGrid } from '@/components/sections/CaseStudyGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { TechBadgeGrid } from '@/components/sections/TechBadgeGrid';
import { FAQ } from '@/components/sections/FAQ';
import { LocationsBar } from '@/components/sections/LocationsBar';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: { absolute: 'Fetchly | We help companies build great products.' },
  description:
    'Fetchly provides a fully aligned, high-performing web and app development team at a fraction of the cost of traditional agencies or staff augmentation.',
};

const HOMEPAGE_STATS = [
  { value: 100, label: 'Projects Delivered', suffix: '+' },
  { value: 6, label: 'Industries', suffix: '' },
  { value: 50, label: 'Engineers', suffix: '+' },
  { value: 3, label: 'US Offices', suffix: '' },
];

const HOMEPAGE_CASE_STUDIES = [
  {
    title: 'VRT Sync',
    description: 'A fully integrated web platform modernizing property management for HOA boards, property managers, and contractors.',
    image: '/images/vrt-sync-thumbnail.jpg',
    href: '/case-studies',
  },
  {
    title: 'Container Alliance',
    description: 'Comprehensive digital transformation — rebuilt CRM and a modern, conversion-focused website.',
    image: '/images/container-alliance.png',
    href: '/case-studies',
  },
  {
    title: 'Oats Overnight',
    description: 'Subscription platform powering 250K+ active subscribers and 94% subscription revenue.',
    image: '/images/oats-case.png',
    href: '/case-studies',
  },
];

const TECH_BADGES = [
  { name: 'React', icon: <TechIcon label="React" />, href: '/technologies/react' },
  { name: 'Next.js', icon: <TechIcon label="Next.js" />, href: '/technologies/nextjs' },
  { name: 'Rails', icon: <TechIcon label="Rails" />, href: '/technologies/rails' },
  { name: 'Python', icon: <TechIcon label="Python" />, href: '/technologies/python' },
  { name: 'Shopify', icon: <TechIcon label="Shopify" />, href: '/technologies/shopify' },
  { name: 'AWS', icon: <TechIcon label="AWS" />, href: '/technologies/aws' },
  { name: 'Docker', icon: <TechIcon label="Docker" />, href: '/technologies/devops-docker' },
  { name: 'AI/ML', icon: <TechIcon label="AI/ML" />, href: '/technologies/ai-ml' },
];

function TechIcon({ label }: { label: string }) {
  return (
    <span className="text-sm font-bold text-foreground-muted">{label.slice(0, 2).toUpperCase()}</span>
  );
}

const FAQ_ITEMS = [
  {
    question: 'What services do you offer?',
    answer:
      'Everything you need to turn your idea into a working product: design, development, QA, project & product management, architecture, and reporting. One team. One monthly plan. More than one less thing to worry about.',
  },
  {
    question: 'How can I get started?',
    answer:
      "Easy. Just reach out through our contact form, and we'll walk you through the next steps.",
  },
  {
    question: 'Do you offer support?',
    answer:
      "Absolutely. We're with you at every step, from due diligence and design to testing and deployment. You'll always get fast answers, data-backed decisions, and the most comprehensive planning you've seen.",
  },
  {
    question: 'What is your pricing?',
    answer:
      "We offer a low, month-to-month rate that covers everything you need. We don't nickel-and-dime you with hourly rates and surprise fees. We're 50% less than agencies and staff aug and a whole lot easier to scale.",
  },
  {
    question: 'Can I customize your services?',
    answer:
      "Always. Every plan is built around your product, your priorities, and your pace. We change to fit what you're building.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar stats={HOMEPAGE_STATS} />
      <IndustryGrid />
      <SolutionsGrid />
      <Bento />
      <ProcessSteps />
      <Comparison />
      <CaseStudyGrid items={HOMEPAGE_CASE_STUDIES} />
      <Testimonials />
      <TechBadgeGrid badges={TECH_BADGES} columns={8} />
      <FAQ items={FAQ_ITEMS} title="FAQs" label="FAQ" />
      <LocationsBar />
      <CTA />
    </>
  );
}
