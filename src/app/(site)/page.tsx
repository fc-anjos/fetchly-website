import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { StatsBar } from '@/components/sections/StatsBar';
import { IndustryGrid } from '@/components/sections/IndustryGrid';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { FeaturedCaseStudy } from '@/components/sections/FeaturedCaseStudy';
import { Bento } from '@/components/sections/Bento';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { Comparison } from '@/components/sections/Comparison';
import { CaseStudyGrid } from '@/components/sections/CaseStudyGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { TechBadgeGrid } from '@/components/sections/TechBadgeGrid';
import { FAQ } from '@/components/sections/FAQ';
import { LocationsBar } from '@/components/sections/LocationsBar';
import { CTA } from '@/components/sections/CTA';
import {
  getAllSolutions,
  getAllIndustries,
  getAllLocations,
  getAllTestimonials,
  getComparison,
  getHomepage,
} from '@/lib/content';

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
    description: 'Comprehensive digital transformation. Rebuilt CRM and a modern, conversion-focused website.',
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

export default async function HomePage() {
  const [solutions, industries, locations, testimonials, comparison, page] = await Promise.all([
    getAllSolutions(),
    getAllIndustries(),
    getAllLocations(),
    getAllTestimonials(),
    getComparison(),
    getHomepage(),
  ]);

  return (
    <>
      <Hero
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        ctaText={page.heroCtaText}
      />
      <StatsBar stats={HOMEPAGE_STATS} />
      <IndustryGrid industries={industries} />
      <SolutionsGrid solutions={solutions.slice(0, 4)} />
      <FeaturedCaseStudy {...page.featuredCaseStudy} />
      <Bento introText={page.bentoIntro} />
      <ProcessSteps title={page.processStepsTitle} steps={[...page.processSteps]} />
      <Comparison data={comparison} />
      <CaseStudyGrid items={HOMEPAGE_CASE_STUDIES} />
      <Testimonials items={testimonials} />
      <TechBadgeGrid badges={TECH_BADGES} columns={8} />
      <FAQ items={page.faqItems} title={page.faqTitle} label={page.faqLabel} />
      <LocationsBar title={page.locationsTitle} locations={locations} />
      <CTA title={page.ctaTitle} buttonText={page.ctaButtonText} />
    </>
  );
}
