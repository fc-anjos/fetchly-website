import type { Metadata } from 'next';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { IndustryGrid } from '@/components/sections/IndustryGrid';
import { StatsGrid } from '@/components/sections/StatsGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { PageHero } from '@/components/sections/PageHero';
import { getAllSolutions, getAllIndustries, getAllTestimonials, getServicesPage } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getServicesPage();
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function ServicesPage() {
  const [solutions, industries, testimonials, page] = await Promise.all([
    getAllSolutions(),
    getAllIndustries(),
    getAllTestimonials(),
    getServicesPage(),
  ]);

  return (
    <>
      <PageHero
        title={page.heroTitle}
        description={page.heroDescription}
        ctaText={page.heroCtaText}
        ctaHref={page.heroCtaHref}
        secondaryText={page.heroSecondaryText}
        secondaryHref={page.heroSecondaryHref}
        showBadge={false}
      />
      <StatsGrid />
      <SolutionsGrid
        title={page.solutionsGridTitle}
        description={page.solutionsGridDescription}
        solutions={solutions}
        columns={4}
      />
      <IndustryGrid industries={industries} />
      <Testimonials items={testimonials} />
      <FAQ items={page.faqItems} title={page.faqTitle} label={page.faqLabel} />
      <CTA title={page.ctaTitle} buttonText={page.ctaButtonText} />
    </>
  );
}
