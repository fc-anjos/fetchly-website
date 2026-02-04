/**
 * Populate Keystatic content files with full data extracted from the original pages.
 *
 * Usage:  npx tsx scripts/populate-content.ts
 *
 * Reads:
 *   - all-page-data.json  (extracted from the 38 original page files)
 *   - page-data.ts metadata from inline SOLUTIONS/INDUSTRIES/TECHNOLOGIES/LOCATIONS maps
 *
 * Writes:
 *   - src/content/solutions/<slug>/index.mdoc
 *   - src/content/industries/<slug>/index.mdoc
 *   - src/content/technologies/<slug>/index.mdoc
 *   - src/content/locations/<slug>/index.mdoc
 */

import * as fs from 'fs';
import * as path from 'path';

// ── Source data ──────────────────────────────────────────────────────────────

const ROOT = path.resolve(__dirname, '..');
const CONTENT = path.join(ROOT, 'src', 'content');
const DATA_FILE = path.resolve(
  '/private/tmp/claude-501/-Volumes-FelipeSSD-professional-fetchly-website-next-migrated/264b37c6-530a-4d92-bfcb-749553c3df94/scratchpad/all-page-data.json',
);

interface PageData {
  slug: string;
  category: string;
  metadata: { title: string | null; description: string | null };
  hero: {
    title: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    ctaHref?: string;
    showBadge?: boolean;
    secondaryText?: string;
    secondaryHref?: string;
    rightContent?: string;
    breadcrumbs?: { label: string; href?: string }[];
  };
  painPoints?: { title: string }[] | null;
  painPointsLabel?: string | null;
  painPointsTitle?: string | null;
  processSteps?: { title: string; description: string }[] | null;
  processStepsTitle?: string | null;
  features?: { title: string; description: string }[] | null;
  featureGrid?: {
    title?: string | null;
    label?: string | null;
    columns?: number | null;
    background?: string | null;
  } | null;
  capabilities?: { title: string; description: string }[] | null;
  capabilitiesGrid?: {
    title?: string | null;
    label?: string | null;
    description?: string | null;
    columns?: number | null;
    centerText?: boolean;
    background?: string | null;
  } | null;
  caseStudies?: { title: string; description: string; href?: string }[] | null;
  caseStudiesTitle?: string | null;
  testimonials?: { filterSolution?: string | null; filterIndustry?: string | null } | null;
  faqItems?: { question: string; answer: string }[] | null;
  faqTitle?: string | null;
  faqLabel?: string | null;
  cta?: { title?: string | null; buttonText?: string | null } | null;
  schema?: {
    type?: string;
    serviceSchema?: { name: string; description: string; url: string };
    locationSlug?: string;
  } | null;
  overviewTitle?: string | null;
  overviewDescription?: string | null;
  customSections?: Record<string, unknown> | null;
  isCustomPage?: boolean;
  solutionsGrid?: { title?: string; description?: string; columns?: number } | null;
  locationData?: { slug: string; city: string; state: string; stateAbbr: string; href: string } | null;
}

// ── Metadata from page-data.ts (hardcoded since the file is deleted) ────────

interface SolutionMeta { slug: string; title: string; shortTitle: string; description: string; icon: string; sortOrder: number }
interface IndustryMeta { slug: string; title: string; shortTitle: string; description: string; icon: string; sortOrder: number }
interface TechnologyMeta { slug: string; title: string; shortTitle: string; category: string; description: string; icon: string; sortOrder: number }
interface LocationMeta { slug: string; city: string; state: string; stateAbbr: string; sortOrder: number; title: string }

const SOLUTIONS_META: SolutionMeta[] = [
  { slug: 'rescue', title: 'Rescue & Replace', shortTitle: 'Rescue', description: "Your last agency didn't work out. We pick up where they left off — or start fresh.", icon: 'lifebuoy', sortOrder: 0 },
  { slug: 'scale-team', title: 'Scale My Team', shortTitle: 'Scale Team', description: 'Dedicated developers, designers, QA, and PMs who integrate with your team.', icon: 'users', sortOrder: 1 },
  { slug: 'build-mvp', title: 'Build My MVP', shortTitle: 'Build MVP', description: 'From idea to launched product. Your first version ships in weeks, not months.', icon: 'rocket', sortOrder: 2 },
  { slug: 'modernize', title: 'Modernize & Migrate', shortTitle: 'Modernize', description: 'We modernize aging applications incrementally — no big-bang rewrites.', icon: 'refresh', sortOrder: 3 },
  { slug: 'qa-testing', title: 'QA & Testing', shortTitle: 'QA & Testing', description: 'Dedicated QA engineers who find the bugs before your users do.', icon: 'shield-check', sortOrder: 4 },
  { slug: 'design', title: 'Design & UX', shortTitle: 'Design & UX', description: 'Product design, UI/UX, design systems, and prototyping from designers who understand engineering.', icon: 'palette', sortOrder: 5 },
  { slug: 'devops', title: 'DevOps & Infrastructure', shortTitle: 'DevOps', description: 'CI/CD pipelines, containerization, cloud architecture, and monitoring.', icon: 'server', sortOrder: 6 },
  { slug: 'ai', title: 'AI Integration', shortTitle: 'AI', description: 'We integrate OpenAI, Azure AI, and custom ML models into existing products.', icon: 'sparkles', sortOrder: 7 },
];

const INDUSTRIES_META: IndustryMeta[] = [
  { slug: 'ecommerce', title: 'E-Commerce & Marketplaces', shortTitle: 'E-Commerce', description: 'From Shopify storefronts to custom marketplaces processing millions in transactions.', icon: 'shopping-cart', sortOrder: 0 },
  { slug: 'healthcare', title: 'Healthcare & MedTech', shortTitle: 'Healthcare', description: 'HIPAA-compliant platforms, patient portals, and medical device software.', icon: 'heart-pulse', sortOrder: 1 },
  { slug: 'hr-tech', title: 'HR Tech & Recruitment', shortTitle: 'HR Tech', description: 'Multi-tenant HR platforms, AI-powered matching, and ATS integrations.', icon: 'briefcase', sortOrder: 2 },
  { slug: 'logistics', title: 'Logistics & Supply Chain', shortTitle: 'Logistics', description: 'Real-time tracking, rate management, and carrier API integrations.', icon: 'truck', sortOrder: 3 },
  { slug: 'fintech', title: 'FinTech & Real Estate', shortTitle: 'FinTech', description: 'Payment processing, mortgage platforms, and property management software.', icon: 'banknotes', sortOrder: 4 },
  { slug: 'hospitality', title: 'Hospitality & Events', shortTitle: 'Hospitality', description: 'Event management platforms, booking systems, and ticketing integrations.', icon: 'calendar', sortOrder: 5 },
];

const TECHNOLOGIES_META: TechnologyMeta[] = [
  { slug: 'rails-migration', title: 'Rails 5/6 to Rails 7/8 Migration', shortTitle: 'Rails Migration', category: 'migration', description: 'Upgrade your Rails application to the latest version with zero downtime.', icon: 'rails', sortOrder: 0 },
  { slug: 'vue-migration', title: 'Vue 2 to Vue 3 Migration', shortTitle: 'Vue Migration', category: 'migration', description: 'Migrate your Vue 2 application to Vue 3 with Composition API.', icon: 'vue', sortOrder: 1 },
  { slug: 'react-modernization', title: 'Legacy React to Modern React', shortTitle: 'React Modernization', category: 'migration', description: 'Upgrade class components to hooks and modern React patterns.', icon: 'react', sortOrder: 2 },
  { slug: 'heroku-migration', title: 'Heroku to AWS Migration', shortTitle: 'Heroku Migration', category: 'migration', description: 'Migrate off Heroku to AWS or self-hosted infrastructure.', icon: 'cloud', sortOrder: 3 },
  { slug: 'angular-migration', title: 'AngularJS to Modern Framework', shortTitle: 'Angular Migration', category: 'migration', description: 'Migrate from AngularJS to React, Vue, or modern Angular.', icon: 'angular', sortOrder: 4 },
  { slug: 'database-migration', title: 'Database Migration Services', shortTitle: 'Database Migration', category: 'migration', description: 'Migrate between MongoDB, PostgreSQL, and other databases.', icon: 'database', sortOrder: 5 },
  { slug: 'legacy-modernization', title: 'Legacy Stack Modernization', shortTitle: 'Legacy Modernization', category: 'migration', description: 'Migrate from PHP, .NET, or other legacy stacks to modern frameworks.', icon: 'code', sortOrder: 6 },
  { slug: 'nextjs', title: 'Next.js Development', shortTitle: 'Next.js', category: 'build-with', description: 'Full-stack React applications with server-side rendering and static generation.', icon: 'nextjs', sortOrder: 7 },
  { slug: 'rails', title: 'Ruby on Rails Development', shortTitle: 'Rails', category: 'build-with', description: 'Rapid web application development with Ruby on Rails.', icon: 'rails', sortOrder: 8 },
  { slug: 'react', title: 'React Development', shortTitle: 'React', category: 'build-with', description: 'Interactive user interfaces with React and the modern ecosystem.', icon: 'react', sortOrder: 9 },
  { slug: 'react-native', title: 'React Native Development', shortTitle: 'React Native', category: 'build-with', description: 'Cross-platform mobile apps for iOS and Android from a single codebase.', icon: 'mobile', sortOrder: 10 },
  { slug: 'python', title: 'Python & Django Development', shortTitle: 'Python', category: 'build-with', description: 'Backend services, APIs, and data-driven applications with Python.', icon: 'python', sortOrder: 11 },
  { slug: 'vuejs', title: 'Vue.js Development', shortTitle: 'Vue.js', category: 'build-with', description: 'Progressive web applications with Vue.js and Nuxt.', icon: 'vue', sortOrder: 12 },
  { slug: 'shopify', title: 'Shopify Development', shortTitle: 'Shopify', category: 'platform', description: 'Shopify Plus themes, custom apps, and headless commerce.', icon: 'shopify', sortOrder: 13 },
  { slug: 'contentful', title: 'Contentful & Headless CMS', shortTitle: 'Contentful', category: 'platform', description: 'Headless CMS implementation and content architecture.', icon: 'contentful', sortOrder: 14 },
  { slug: 'stripe', title: 'Stripe Integration', shortTitle: 'Stripe', category: 'platform', description: 'Payment processing, subscriptions, and marketplace payouts.', icon: 'stripe', sortOrder: 15 },
  { slug: 'aws', title: 'AWS Architecture', shortTitle: 'AWS', category: 'platform', description: 'Cloud architecture, deployment automation, and cost optimization.', icon: 'aws', sortOrder: 16 },
  { slug: 'ai-ml', title: 'AI & Machine Learning', shortTitle: 'AI/ML', category: 'capability', description: 'OpenAI integration, custom ML models, and intelligent features.', icon: 'sparkles', sortOrder: 17 },
  { slug: 'api-development', title: 'API Development', shortTitle: 'APIs', category: 'capability', description: 'REST and GraphQL API design, development, and integration.', icon: 'code', sortOrder: 18 },
  { slug: 'devops-docker', title: 'DevOps & Docker', shortTitle: 'DevOps', category: 'capability', description: 'CI/CD pipelines, containerization, and infrastructure automation.', icon: 'server', sortOrder: 19 },
  { slug: 'postgresql', title: 'PostgreSQL & Databases', shortTitle: 'PostgreSQL', category: 'capability', description: 'Database design, optimization, and scaling with PostgreSQL.', icon: 'database', sortOrder: 20 },
];

const LOCATIONS_META: LocationMeta[] = [
  { slug: 'denver', city: 'Denver', state: 'Colorado', stateAbbr: 'CO', sortOrder: 0, title: 'Denver Software Development' },
  { slug: 'austin', city: 'Austin', state: 'Texas', stateAbbr: 'TX', sortOrder: 1, title: 'Austin Software Development' },
  { slug: 'santa-barbara', city: 'Santa Barbara', state: 'California', stateAbbr: 'CA', sortOrder: 2, title: 'Santa Barbara Software Development' },
];

// ── YAML helpers ─────────────────────────────────────────────────────────────

function yamlStr(val: string | null | undefined): string {
  if (val == null) return '""';
  // Use double-quotes with escaping for strings containing special chars
  if (val.includes('"') || val.includes("'") || val.includes('\n') || val.includes(':') || val.includes('#') || val.includes('—') || val.includes('–')) {
    return `"${val.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  }
  // Simple strings that don't need quoting
  if (/^[a-zA-Z0-9._\-/@ ]+$/.test(val) && val.length > 0) {
    return val;
  }
  return `"${val}"`;
}

function yamlBool(val: boolean | null | undefined): string {
  return val ? 'true' : 'false';
}

function yamlInt(val: number | null | undefined): string {
  return String(val ?? 0);
}

// Indent every line of a multiline string by `n` spaces
function indent(text: string, n: number): string {
  const pad = ' '.repeat(n);
  return text.split('\n').map(l => pad + l).join('\n');
}

function yamlBreadcrumbs(crumbs: { label: string; href?: string }[] | undefined | null): string {
  if (!crumbs?.length) return 'breadcrumbs: []';
  const lines = crumbs.map(b => {
    const parts = [`  - label: ${yamlStr(b.label)}`];
    parts.push(`    href: ${yamlStr(b.href || '')}`);
    return parts.join('\n');
  });
  return `breadcrumbs:\n${lines.join('\n')}`;
}

function yamlFaqItems(items: { question: string; answer: string }[] | undefined | null): string {
  if (!items?.length) return 'faqItems: []';
  const lines = items.map(item =>
    `  - question: ${yamlStr(item.question)}\n    answer: ${yamlStr(item.answer)}`
  );
  return `faqItems:\n${lines.join('\n')}`;
}

function yamlFeatures(fieldName: string, items: { title: string; description: string }[] | undefined | null): string {
  if (!items?.length) return `${fieldName}: []`;
  const lines = items.map(item =>
    `  - title: ${yamlStr(item.title)}\n    description: ${yamlStr(item.description)}`
  );
  return `${fieldName}:\n${lines.join('\n')}`;
}

function yamlPainPoints(items: { title: string; description?: string }[] | undefined | null): string {
  if (!items?.length) return 'painPoints: []';
  const lines = items.map(item => {
    let s = `  - title: ${yamlStr(item.title)}`;
    s += `\n    description: ""`;
    return s;
  });
  return `painPoints:\n${lines.join('\n')}`;
}

function yamlCaseStudies(items: { title: string; description: string; href?: string }[] | undefined | null): string {
  if (!items?.length) return 'caseStudies: []';
  const lines = items.map(item => {
    let s = `  - title: ${yamlStr(item.title)}\n    description: ${yamlStr(item.description)}`;
    s += `\n    href: ${yamlStr(item.href || '')}`;
    return s;
  });
  return `caseStudies:\n${lines.join('\n')}`;
}

// ── Generators ───────────────────────────────────────────────────────────────

function generateSolution(data: PageData, meta: SolutionMeta): string {
  const bgDefault = (data.featureGrid?.background === 'muted') ? 'muted' : (data.featureGrid?.background || 'muted');
  const lines: string[] = [
    '---',
    `slug: ${yamlStr(meta.slug)}`,
    `title: ${yamlStr(meta.title)}`,
    `shortTitle: ${yamlStr(meta.shortTitle)}`,
    `description: ${yamlStr(meta.description)}`,
    `icon: ${yamlStr(meta.icon)}`,
    `sortOrder: ${yamlInt(meta.sortOrder)}`,
    // SEO
    `metaTitle: ${yamlStr(data.metadata.title)}`,
    `metaDescription: ${yamlStr(data.metadata.description)}`,
    // Hero
    `heroTitle: ${yamlStr(data.hero.title)}`,
    `heroDescription: ${yamlStr(data.hero.description)}`,
    `heroCtaText: ${yamlStr(data.hero.ctaText)}`,
    `heroCtaHref: ${yamlStr(data.hero.ctaHref || '/intake/request')}`,
    `heroShowBadge: ${yamlBool(data.hero.showBadge)}`,
    // Breadcrumbs
    yamlBreadcrumbs(data.hero.breadcrumbs),
    // Pain points
    yamlPainPoints(data.painPoints),
    `painPointsLabel: ${yamlStr(data.painPointsLabel)}`,
    `painPointsTitle: ${yamlStr(data.painPointsTitle)}`,
    // Process steps
    yamlFeatures('processSteps', data.processSteps),
    `processStepsTitle: ${yamlStr(data.processStepsTitle)}`,
    // Features
    yamlFeatures('features', data.features),
    `featureGridTitle: ${yamlStr(data.featureGrid?.title)}`,
    `featureGridLabel: ${yamlStr(data.featureGrid?.label)}`,
    `featureGridColumns: ${yamlInt(data.featureGrid?.columns ?? 3)}`,
    `featureGridBackground: ${bgDefault}`,
    // FAQ
    yamlFaqItems(data.faqItems),
    `faqTitle: ${yamlStr(data.faqTitle)}`,
    `faqLabel: ${yamlStr(data.faqLabel)}`,
    // Testimonials
    `testimonialFilterSolution: ${yamlStr(data.testimonials?.filterSolution)}`,
    // CTA
    `ctaTitle: ${yamlStr(data.cta?.title)}`,
    `ctaButtonText: ${yamlStr(data.cta?.buttonText)}`,
    // Schema
    `schemaName: ${yamlStr(data.schema?.serviceSchema?.name)}`,
    `schemaDescription: ${yamlStr(data.schema?.serviceSchema?.description)}`,
    `schemaUrl: ${yamlStr(data.schema?.serviceSchema?.url)}`,
    '---',
    '',
    '',
  ];
  return lines.join('\n');
}

function generateIndustry(data: PageData, meta: IndustryMeta): string {
  const bgDefault = data.featureGrid?.background || 'default';
  const lines: string[] = [
    '---',
    `slug: ${yamlStr(meta.slug)}`,
    `title: ${yamlStr(meta.title)}`,
    `shortTitle: ${yamlStr(meta.shortTitle)}`,
    `description: ${yamlStr(meta.description)}`,
    `icon: ${yamlStr(meta.icon)}`,
    `sortOrder: ${yamlInt(meta.sortOrder)}`,
    // SEO
    `metaTitle: ${yamlStr(data.metadata.title)}`,
    `metaDescription: ${yamlStr(data.metadata.description)}`,
    // Hero
    `heroTitle: ${yamlStr(data.hero.title)}`,
    `heroDescription: ${yamlStr(data.hero.description)}`,
    `heroCtaText: ${yamlStr(data.hero.ctaText)}`,
    `heroCtaHref: ${yamlStr(data.hero.ctaHref || '/intake/request')}`,
    // Breadcrumbs
    yamlBreadcrumbs(data.hero.breadcrumbs),
    // Overview
    `overviewTitle: ${yamlStr(data.overviewTitle)}`,
    `overviewDescription: ${yamlStr(data.overviewDescription)}`,
    // Process steps
    yamlFeatures('processSteps', data.processSteps),
    `processStepsTitle: ${yamlStr(data.processStepsTitle)}`,
    // Features
    yamlFeatures('features', data.features),
    `featureGridTitle: ${yamlStr(data.featureGrid?.title)}`,
    `featureGridLabel: ${yamlStr(data.featureGrid?.label)}`,
    `featureGridColumns: ${yamlInt(data.featureGrid?.columns ?? 3)}`,
    `featureGridBackground: ${bgDefault}`,
    // Additional features (capabilities for ecommerce)
    yamlFeatures('additionalFeatures', data.capabilities),
    `additionalFeaturesTitle: ${yamlStr(data.capabilitiesGrid?.title)}`,
    `additionalFeaturesLabel: ${yamlStr(data.capabilitiesGrid?.label)}`,
    `additionalFeaturesDescription: ${yamlStr(data.capabilitiesGrid?.description)}`,
    `additionalFeaturesColumns: ${yamlInt(data.capabilitiesGrid?.columns ?? 3)}`,
    // Case studies
    yamlCaseStudies(data.caseStudies),
    `caseStudiesTitle: ${yamlStr(data.caseStudiesTitle)}`,
    // FAQ
    yamlFaqItems(data.faqItems),
    `faqTitle: ${yamlStr(data.faqTitle)}`,
    `faqLabel: ${yamlStr(data.faqLabel)}`,
    // Testimonials
    `testimonialFilterIndustry: ${yamlStr(data.testimonials?.filterIndustry || meta.slug)}`,
    // CTA
    `ctaTitle: ${yamlStr(data.cta?.title)}`,
    `ctaButtonText: ${yamlStr(data.cta?.buttonText)}`,
    // Custom page flag
    `isCustomPage: ${yamlBool(data.isCustomPage)}`,
    '---',
    '',
    '',
  ];
  return lines.join('\n');
}

function generateTechnology(data: PageData, meta: TechnologyMeta): string {
  const bgDefault = data.featureGrid?.background || 'muted';
  const lines: string[] = [
    '---',
    `slug: ${yamlStr(meta.slug)}`,
    `title: ${yamlStr(meta.title)}`,
    `shortTitle: ${yamlStr(meta.shortTitle)}`,
    `category: ${meta.category}`,
    `description: ${yamlStr(meta.description)}`,
    `icon: ${yamlStr(meta.icon)}`,
    `sortOrder: ${yamlInt(meta.sortOrder)}`,
    // SEO
    `metaTitle: ${yamlStr(data.metadata.title)}`,
    `metaDescription: ${yamlStr(data.metadata.description)}`,
    // Hero
    `heroTitle: ${yamlStr(data.hero.title)}`,
    `heroDescription: ${yamlStr(data.hero.description)}`,
    `heroCtaText: ${yamlStr(data.hero.ctaText)}`,
    `heroCtaHref: ${yamlStr(data.hero.ctaHref || '/intake/request')}`,
    `heroShowBadge: ${yamlBool(data.hero.showBadge)}`,
    // Breadcrumbs
    yamlBreadcrumbs(data.hero.breadcrumbs),
    // Pain points (migration techs)
    yamlPainPoints(data.painPoints),
    `painPointsLabel: ${yamlStr(data.painPointsLabel)}`,
    `painPointsTitle: ${yamlStr(data.painPointsTitle)}`,
    // Process steps
    yamlFeatures('processSteps', data.processSteps),
    `processStepsTitle: ${yamlStr(data.processStepsTitle)}`,
    // Features
    yamlFeatures('features', data.features),
    `featureGridTitle: ${yamlStr(data.featureGrid?.title)}`,
    `featureGridLabel: ${yamlStr(data.featureGrid?.label)}`,
    `featureGridColumns: ${yamlInt(data.featureGrid?.columns ?? 3)}`,
    `featureGridBackground: ${bgDefault}`,
    // FAQ
    yamlFaqItems(data.faqItems),
    `faqTitle: ${yamlStr(data.faqTitle)}`,
    `faqLabel: ${yamlStr(data.faqLabel)}`,
    // CTA
    `ctaTitle: ${yamlStr(data.cta?.title)}`,
    `ctaButtonText: ${yamlStr(data.cta?.buttonText)}`,
    // Schema
    `schemaName: ${yamlStr(data.schema?.serviceSchema?.name)}`,
    `schemaDescription: ${yamlStr(data.schema?.serviceSchema?.description)}`,
    `schemaUrl: ${yamlStr(data.schema?.serviceSchema?.url)}`,
    '---',
    '',
    '',
  ];
  return lines.join('\n');
}

function generateLocation(data: PageData, meta: LocationMeta): string {
  const lines: string[] = [
    '---',
    `slug: ${yamlStr(meta.slug)}`,
    `title: ${yamlStr(meta.title)}`,
    `city: ${yamlStr(meta.city)}`,
    `state: ${yamlStr(meta.state)}`,
    `stateAbbr: ${yamlStr(meta.stateAbbr)}`,
    `sortOrder: ${yamlInt(meta.sortOrder)}`,
    // SEO
    `metaTitle: ${yamlStr(data.metadata.title)}`,
    `metaDescription: ${yamlStr(data.metadata.description)}`,
    // Hero
    `heroTitle: ${yamlStr(data.hero.title)}`,
    `heroDescription: ${yamlStr(data.hero.description)}`,
    `heroCtaText: ${yamlStr(data.hero.ctaText)}`,
    `heroCtaHref: ${yamlStr(data.hero.ctaHref || '/intake/request')}`,
    `heroSecondaryText: ${yamlStr(data.hero.secondaryText)}`,
    `heroSecondaryHref: ${yamlStr(data.hero.secondaryHref)}`,
    // Breadcrumbs
    yamlBreadcrumbs(data.hero.breadcrumbs),
    // Overview
    `overviewTitle: ${yamlStr(data.overviewTitle)}`,
    `overviewDescription: ${yamlStr(data.overviewDescription)}`,
    // Solutions grid
    `solutionsGridTitle: ${yamlStr(data.solutionsGrid?.title)}`,
    `solutionsGridDescription: ${yamlStr(data.solutionsGrid?.description)}`,
    // FAQ
    yamlFaqItems(data.faqItems),
    `faqTitle: ${yamlStr(data.faqTitle)}`,
    `faqLabel: ${yamlStr(data.faqLabel)}`,
    // CTA
    `ctaTitle: ${yamlStr(data.cta?.title)}`,
    `ctaButtonText: ${yamlStr(data.cta?.buttonText)}`,
    '---',
    '',
    '',
  ];
  return lines.join('\n');
}

// ── Main ─────────────────────────────────────────────────────────────────────

function main() {
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  const pages: PageData[] = JSON.parse(raw);

  let written = 0;

  for (const page of pages) {
    let content: string;
    let dir: string;

    switch (page.category) {
      case 'solution': {
        const meta = SOLUTIONS_META.find(s => s.slug === page.slug);
        if (!meta) { console.warn(`  SKIP: no metadata for solution ${page.slug}`); continue; }
        content = generateSolution(page, meta);
        dir = path.join(CONTENT, 'solutions', page.slug);
        break;
      }
      case 'industry': {
        const meta = INDUSTRIES_META.find(i => i.slug === page.slug);
        if (!meta) { console.warn(`  SKIP: no metadata for industry ${page.slug}`); continue; }
        content = generateIndustry(page, meta);
        dir = path.join(CONTENT, 'industries', page.slug);
        break;
      }
      case 'technology': {
        const meta = TECHNOLOGIES_META.find(t => t.slug === page.slug);
        if (!meta) { console.warn(`  SKIP: no metadata for technology ${page.slug}`); continue; }
        content = generateTechnology(page, meta);
        dir = path.join(CONTENT, 'technologies', page.slug);
        break;
      }
      case 'location': {
        const meta = LOCATIONS_META.find(l => l.slug === page.slug);
        if (!meta) { console.warn(`  SKIP: no metadata for location ${page.slug}`); continue; }
        content = generateLocation(page, meta);
        dir = path.join(CONTENT, 'locations', page.slug);
        break;
      }
      default:
        console.warn(`  SKIP: unknown category ${page.category} for ${page.slug}`);
        continue;
    }

    fs.mkdirSync(dir, { recursive: true });
    const filepath = path.join(dir, 'index.mdoc');
    fs.writeFileSync(filepath, content, 'utf-8');
    console.log(`  ✓ ${page.category}/${page.slug}`);
    written++;
  }

  console.log(`\nDone. ${written} content files written.`);
}

main();
