import type { Metadata } from 'next';
import { PageHero, SolutionsGrid, CTA } from '@/components/sections';
import { getAllSolutions, getSolutionsPage } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getSolutionsPage();
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function SolutionsPage() {
  const [solutions, page] = await Promise.all([
    getAllSolutions(),
    getSolutionsPage(),
  ]);

  return (
    <>
      <PageHero
        title={page.heroTitle}
        description={page.heroDescription}
        showBadge={false}
      />

      <SolutionsGrid
        title={page.solutionsGridTitle}
        description={page.solutionsGridDescription}
        solutions={solutions}
        columns={4}
      />

      <CTA
        title={page.ctaTitle}
        description={page.ctaDescription}
        buttonText={page.ctaButtonText}
      />
    </>
  );
}
