import type { Metadata } from 'next';
import { PageHero, IndustryGrid, CTA } from '@/components/sections';
import { getAllIndustries, getIndustriesPage } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getIndustriesPage();
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

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
