import type { Metadata } from 'next';
import { PageHero, SolutionsGrid, CTA } from '@/components/sections';
import { SOLUTIONS } from '@/lib/page-data';

export const metadata: Metadata = {
  title: 'Software Development Solutions | Fetchly',
  description:
    'From rescuing failed projects to building MVPs and scaling teams — explore Fetchly\'s full range of software development solutions.',
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Solutions"
        description="Whether you need to build something new, fix something broken, or scale what you have — we have a team and a playbook for it."
        showBadge={false}
      />

      <SolutionsGrid
        title="What brings you here?"
        description="Every engagement starts with understanding your problem. Pick the one that fits."
        solutions={SOLUTIONS}
        columns={4}
      />

      <CTA
        title="Not sure which solution fits?"
        description="Tell us what you're dealing with. We'll point you in the right direction."
        buttonText="Talk to Us"
      />
    </>
  );
}
