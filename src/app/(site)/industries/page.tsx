import type { Metadata } from 'next';
import { PageHero, IndustryGrid, CTA } from '@/components/sections';
import { getAllIndustries, getIndustriesPage } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Industries We Serve | Fetchly',
  description:
    'Fetchly builds software for e-commerce, healthcare, HR tech, logistics, fintech, and hospitality companies — with domain expertise and relevant case studies.',
};

export default async function IndustriesPage() {
  const [industries, page] = await Promise.all([
    getAllIndustries(),
    getIndustriesPage(),
  ]);

  return (
    <>
      <PageHero
        title={page.heroTitle}
        description={page.heroDescription}
        showBadge={false}
      />

      <IndustryGrid
        title={page.industryGridTitle}
        description={page.industryGridDescription}
        industries={industries}
      />

      <CTA
        title={page.ctaTitle}
        description={page.ctaDescription}
        buttonText={page.ctaButtonText}
      />
    </>
  );
}
