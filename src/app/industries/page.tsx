import type { Metadata } from 'next';
import { PageHero, IndustryGrid, CTA } from '@/components/sections';
import { INDUSTRIES } from '@/lib/page-data';

export const metadata: Metadata = {
  title: 'Industries We Serve | Fetchly',
  description:
    'Fetchly builds software for e-commerce, healthcare, HR tech, logistics, fintech, and hospitality companies — with domain expertise and relevant case studies.',
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries"
        description="We don't just write code — we understand your industry. Domain knowledge means fewer wrong turns and faster delivery."
        showBadge={false}
      />

      <IndustryGrid
        title="Who we help"
        description="Six verticals where we've shipped production software and have the case studies to prove it."
        industries={INDUSTRIES}
      />

      <CTA
        title="Don't see your industry?"
        description="We've built software across dozens of verticals. Tell us what you need."
        buttonText="Get in Touch"
      />
    </>
  );
}
