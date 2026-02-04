import { reader } from './keystatic-reader';
import type {
  SolutionDefinition,
  IndustryDefinition,
  TechnologyDefinition,
  LocationDefinition,
  TestimonialItem,
  NavItemWithDropdown,
} from '@/types';

// ── Solutions ─────────────────────────────────────────────────────────────────

export async function getAllSolutions(): Promise<SolutionDefinition[]> {
  const entries = await reader.collections.solutions.all();
  return entries
    .map((e) => ({
      slug: e.slug,
      title: e.entry.title,
      shortTitle: e.entry.shortTitle,
      description: e.entry.description,
      icon: e.entry.icon,
      href: `/solutions/${e.slug}`,
      sortOrder: e.entry.sortOrder ?? 0,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getSolution(slug: string) {
  const entry = await reader.collections.solutions.read(slug);
  if (!entry) return null;
  return { ...entry, slug };
}

// ── Industries ────────────────────────────────────────────────────────────────

export async function getAllIndustries(): Promise<IndustryDefinition[]> {
  const entries = await reader.collections.industries.all();
  return entries
    .map((e) => ({
      slug: e.slug,
      title: e.entry.title,
      shortTitle: e.entry.shortTitle,
      description: e.entry.description,
      icon: e.entry.icon,
      href: `/industries/${e.slug}`,
      sortOrder: e.entry.sortOrder ?? 0,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getIndustry(slug: string) {
  const entry = await reader.collections.industries.read(slug);
  if (!entry) return null;
  return { ...entry, slug };
}

// ── Technologies ──────────────────────────────────────────────────────────────

export async function getAllTechnologies(): Promise<TechnologyDefinition[]> {
  const entries = await reader.collections.technologies.all();
  return entries
    .map((e) => ({
      slug: e.slug,
      title: e.entry.title,
      shortTitle: e.entry.shortTitle,
      category: e.entry.category as TechnologyDefinition['category'],
      description: e.entry.description,
      icon: e.entry.icon,
      href: `/technologies/${e.slug}`,
      sortOrder: e.entry.sortOrder ?? 0,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getTechnologiesByCategory(category: string): Promise<TechnologyDefinition[]> {
  const all = await getAllTechnologies();
  return all.filter((t) => t.category === category);
}

export async function getTechnology(slug: string) {
  const entry = await reader.collections.technologies.read(slug);
  if (!entry) return null;
  return { ...entry, slug };
}

// ── Locations ─────────────────────────────────────────────────────────────────

export async function getAllLocations(): Promise<LocationDefinition[]> {
  const entries = await reader.collections.locations.all();
  return entries
    .map((e) => ({
      slug: e.slug,
      city: e.entry.city,
      state: e.entry.state,
      stateAbbr: e.entry.stateAbbr,
      href: `/locations/${e.slug}`,
      sortOrder: e.entry.sortOrder ?? 0,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getLocation(slug: string) {
  const entry = await reader.collections.locations.read(slug);
  if (!entry) return null;
  return { ...entry, slug };
}

// ── Testimonials ──────────────────────────────────────────────────────────────

export async function getAllTestimonials(): Promise<TestimonialItem[]> {
  const entries = await reader.collections.testimonials.all();
  return entries
    .map((e) => ({
      quote: e.entry.quote,
      author: e.entry.author,
      role: e.entry.role,
      logo: e.entry.logo || undefined,
      image: e.entry.image || undefined,
      industries: e.entry.industries?.length ? [...e.entry.industries] : undefined,
      solutions: e.entry.solutions?.length ? [...e.entry.solutions] : undefined,
      sortOrder: e.entry.sortOrder ?? 0,
    }))
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export async function getFilteredTestimonials(opts?: {
  filterIndustry?: string;
  filterSolution?: string;
}): Promise<TestimonialItem[]> {
  const all = await getAllTestimonials();
  let filtered = all;

  if (opts?.filterIndustry) {
    filtered = filtered.filter((t) => t.industries?.includes(opts.filterIndustry!));
  }
  if (opts?.filterSolution) {
    filtered = filtered.filter((t) => t.solutions?.includes(opts.filterSolution!));
  }

  return filtered.length > 0 ? filtered : all.slice(0, 4);
}

// ── Case Studies ──────────────────────────────────────────────────────────────

export async function getAllCaseStudies() {
  const entries = await reader.collections['case-studies'].all();
  return entries
    .map((e) => ({
      slug: e.slug,
      title: e.entry.title,
      category: e.entry.category,
      description: e.entry.description,
      shortDescription: e.entry.shortDescription || undefined,
      tags: e.entry.tags || [],
      image: e.entry.image,
      href: e.entry.href || `/case-studies`,
      sortOrder: e.entry.sortOrder ?? 0,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

// ── Navigation ────────────────────────────────────────────────────────────────

export async function getNavigation(): Promise<NavItemWithDropdown[]> {
  const data = await reader.singletons.navigation.read();
  if (!data) throw new Error('Missing Keystatic singleton: navigation (expected at src/content/navigation)');
  return data.items.map((item) => ({
    label: item.label,
    href: item.href || undefined,
    items: item.children?.map((child) => ({
      label: child.label,
      href: child.href,
      description: child.description || undefined,
      featured: child.featured || undefined,
    })),
  }));
}

// ── Footer ────────────────────────────────────────────────────────────────────

export async function getFooter() {
  const data = await reader.singletons.footer.read();
  if (!data) throw new Error('Missing Keystatic singleton: footer (expected at src/content/footer.yaml)');
  return {
    solutions: data.solutions,
    company: data.company,
    legal: data.legal,
    socialLinks: data.socialLinks,
  };
}

// ── Services ──────────────────────────────────────────────────────────────────

export async function getServices() {
  const data = await reader.singletons.services.read();
  if (!data) throw new Error('Missing Keystatic singleton: services (expected at src/content/services.yaml)');
  return data.items;
}

// ── Client Logos ──────────────────────────────────────────────────────────────

export async function getClientLogos() {
  const data = await reader.singletons['client-logos'].read();
  if (!data) throw new Error('Missing Keystatic singleton: client-logos (expected at src/content/client-logos.yaml)');
  return data.items;
}

// ── Comparison ────────────────────────────────────────────────────────────────

export async function getComparison() {
  const data = await reader.singletons.comparison.read();
  if (!data) throw new Error('Missing Keystatic singleton: comparison (expected at src/content/comparison.yaml)');
  return {
    headers: [...data.headers],
    rows: data.rows.map((row) => ({
      feature: row.feature,
      staffAug: row.staffAug === 'true' ? true : row.staffAug === 'partial' ? ('partial' as const) : false,
      fetchly: row.fetchly === 'true' ? true : row.fetchly === 'partial' ? ('partial' as const) : false,
      agency: row.agency === 'true' ? true : row.agency === 'partial' ? ('partial' as const) : false,
    })),
  };
}

// ── Page Singletons ──────────────────────────────────────────────────────────

function requireSingleton<T>(name: string, data: T | null): T {
  if (!data) throw new Error(`Missing Keystatic singleton: ${name} (expected at src/content/${name}.yaml)`);
  return data;
}

export async function getHomepage() {
  const data = requireSingleton('homepage', await reader.singletons.homepage.read());
  return {
    heroTitle: data.heroTitle,
    heroSubtitle: data.heroSubtitle,
    heroCtaText: data.heroCtaText,
    bentoIntro: data.bentoIntro,
    processStepsTitle: data.processStepsTitle,
    processSteps: data.processSteps,
    featuredCaseStudy: {
      title: data.featuredCaseStudyTitle,
      description: data.featuredCaseStudyDescription,
      logoSrc: data.featuredCaseStudyLogoSrc,
      ctaText: data.featuredCaseStudyCtaText,
      ctaHref: data.featuredCaseStudyCtaHref,
      label: data.featuredCaseStudyLabel,
    },
    faqTitle: data.faqTitle,
    faqLabel: data.faqLabel,
    faqItems: data.faqItems,
    locationsTitle: data.locationsTitle,
    ctaTitle: data.ctaTitle,
    ctaButtonText: data.ctaButtonText,
  };
}

export async function getServicesPage() {
  const data = requireSingleton('services-page', await reader.singletons['services-page'].read());
  return {
    heroTitle: data.heroTitle,
    heroDescription: data.heroDescription,
    heroCtaText: data.heroCtaText,
    heroCtaHref: data.heroCtaHref,
    heroSecondaryText: data.heroSecondaryText,
    heroSecondaryHref: data.heroSecondaryHref,
    solutionsGridTitle: data.solutionsGridTitle,
    solutionsGridDescription: data.solutionsGridDescription,
    faqTitle: data.faqTitle,
    faqLabel: data.faqLabel,
    faqItems: data.faqItems,
    ctaTitle: data.ctaTitle,
    ctaButtonText: data.ctaButtonText,
  };
}

export async function getOurModelPage() {
  const data = requireSingleton('our-model-page', await reader.singletons['our-model-page'].read());
  return {
    heroTitle: data.heroTitle,
    heroSubtitle: data.heroSubtitle,
    heroDescription: data.heroDescription,
    heroCtaText: data.heroCtaText,
    heroCtaHref: data.heroCtaHref,
    heroSecondaryText: data.heroSecondaryText,
    heroSecondaryHref: data.heroSecondaryHref,
    heroImage: data.heroImage,
    heroImageAlt: data.heroImageAlt,
    iconGridTitle: data.iconGridTitle,
    iconGridDescription: data.iconGridDescription,
    processStepsTitle: data.processStepsTitle,
    processSteps: data.processSteps,
    faqTitle: data.faqTitle,
    faqLabel: data.faqLabel,
    faqItems: data.faqItems,
  };
}

export async function getIndustriesPage() {
  const data = requireSingleton('industries-page', await reader.singletons['industries-page'].read());
  return {
    heroTitle: data.heroTitle,
    heroDescription: data.heroDescription,
    industryGridTitle: data.industryGridTitle,
    industryGridDescription: data.industryGridDescription,
    ctaTitle: data.ctaTitle,
    ctaDescription: data.ctaDescription,
    ctaButtonText: data.ctaButtonText,
  };
}

export async function getSolutionsPage() {
  const data = requireSingleton('solutions-page', await reader.singletons['solutions-page'].read());
  return {
    heroTitle: data.heroTitle,
    heroDescription: data.heroDescription,
    solutionsGridTitle: data.solutionsGridTitle,
    solutionsGridDescription: data.solutionsGridDescription,
    ctaTitle: data.ctaTitle,
    ctaDescription: data.ctaDescription,
    ctaButtonText: data.ctaButtonText,
  };
}

export async function getTechnologiesPage() {
  const data = requireSingleton('technologies-page', await reader.singletons['technologies-page'].read());
  return {
    heroTitle: data.heroTitle,
    heroDescription: data.heroDescription,
    categories: data.categories,
    ctaTitle: data.ctaTitle,
    ctaDescription: data.ctaDescription,
    ctaButtonText: data.ctaButtonText,
  };
}

export async function getCaseStudiesPage() {
  const data = requireSingleton('case-studies-page', await reader.singletons['case-studies-page'].read());
  return {
    heroTitle: data.heroTitle,
    heroDescription: data.heroDescription,
    ctaTitle: data.ctaTitle,
    ctaDescription: data.ctaDescription,
    ctaButtonText: data.ctaButtonText,
    ctaSecondaryText: data.ctaSecondaryText,
    ctaSecondaryHref: data.ctaSecondaryHref,
  };
}
