/**
 * Keystatic Content Seed Script
 *
 * Generates YAML/Markdoc content files from hardcoded TypeScript data.
 * Run with: npx tsx scripts/seed-keystatic.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'src/content');

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

function yamlString(s: string | undefined | null): string {
  if (!s) return '""';
  // Escape for YAML: wrap in quotes if contains special chars
  if (s.includes('\n') || s.includes('"') || s.includes("'") || s.includes(':') || s.includes('#')) {
    return JSON.stringify(s);
  }
  return `"${s}"`;
}

function yamlMultiline(s: string): string {
  if (!s.includes('\n')) return yamlString(s);
  return `|\n${s.split('\n').map(l => `  ${l}`).join('\n')}`;
}

function writeYaml(filePath: string, content: string) {
  const dir = path.dirname(filePath);
  ensureDir(dir);
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf-8');
  console.log(`  Created: ${filePath.replace(process.cwd(), '')}`);
}

function writeMdoc(filePath: string, frontmatter: string, body: string = '') {
  const dir = path.dirname(filePath);
  ensureDir(dir);
  const content = `---\n${frontmatter.trim()}\n---\n${body}\n`;
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  Created: ${filePath.replace(process.cwd(), '')}`);
}

// ── Singletons ───────────────────────────────────────────────────────────

function seedNavigation() {
  console.log('\nSeeding navigation...');
  const yaml = `items:
  - label: "Solutions"
    href: "/solutions"
    children:
      - label: "Rescue & Replace"
        href: "/solutions/rescue"
        description: "Your last agency didn't work out. We get it."
        featured: false
      - label: "Scale My Team"
        href: "/solutions/scale-team"
        description: "Dedicated developers who integrate with your team."
        featured: false
      - label: "Build My MVP"
        href: "/solutions/build-mvp"
        description: "From idea to launched product, fast."
        featured: false
      - label: "Modernize & Migrate"
        href: "/solutions/modernize"
        description: "Modernize aging applications incrementally."
        featured: false
      - label: "QA & Testing"
        href: "/solutions/qa-testing"
        description: "Find the bugs before your users do."
        featured: false
      - label: "Design & UX"
        href: "/solutions/design"
        description: "Design that converts, not just looks good."
        featured: false
      - label: "DevOps & Infrastructure"
        href: "/solutions/devops"
        description: "Deploy on Friday without sweating."
        featured: false
      - label: "AI Integration"
        href: "/solutions/ai"
        description: "Add AI to your product in weeks."
        featured: false
  - label: "Industries"
    href: "/industries"
    children:
      - label: "E-Commerce & Marketplaces"
        href: "/industries/ecommerce"
        description: "Shopify, custom marketplaces, subscriptions."
        featured: true
      - label: "Healthcare & MedTech"
        href: "/industries/healthcare"
        description: "HIPAA-compliant platforms and patient portals."
        featured: false
      - label: "HR Tech & Recruitment"
        href: "/industries/hr-tech"
        description: "AI matching, ATS integrations, PEO platforms."
        featured: false
      - label: "Logistics & Supply Chain"
        href: "/industries/logistics"
        description: "Tracking, rates, and carrier integrations."
        featured: false
      - label: "FinTech & Real Estate"
        href: "/industries/fintech"
        description: "Payments, mortgages, and property management."
        featured: false
      - label: "Hospitality & Events"
        href: "/industries/hospitality"
        description: "Event platforms, bookings, and ticketing."
        featured: false
  - label: "Technologies"
    href: "/technologies"
    children:
      - label: "Ruby on Rails"
        href: "/technologies/rails"
        description: "Full-stack apps built fast with convention over configuration."
        featured: true
      - label: "Shopify"
        href: "/industries/ecommerce"
        description: "Shopify Plus themes, custom apps, and headless commerce."
        featured: true
      - label: "Next.js"
        href: "/technologies/nextjs"
        description: ""
        featured: false
      - label: "Python & Django"
        href: "/technologies/python"
        description: ""
        featured: false
      - label: "React"
        href: "/technologies/react"
        description: ""
        featured: false
      - label: "React Native"
        href: "/technologies/react-native"
        description: ""
        featured: false
      - label: "Vue.js"
        href: "/technologies/vuejs"
        description: ""
        featured: false
      - label: "AI & Machine Learning"
        href: "/technologies/ai-ml"
        description: ""
        featured: false
      - label: "API Development"
        href: "/technologies/api-development"
        description: ""
        featured: false
      - label: "DevOps & Docker"
        href: "/technologies/devops-docker"
        description: ""
        featured: false
      - label: "PostgreSQL"
        href: "/technologies/postgresql"
        description: ""
        featured: false
  - label: "About"
    href: ""
    children:
      - label: "Our Model"
        href: "/our-model"
        description: "How we work and why it's different."
        featured: false
      - label: "Case Studies"
        href: "/case-studies"
        description: "Real products with real results."
        featured: false`;
  writeYaml(path.join(CONTENT_DIR, 'navigation', 'index.yaml'), yaml);
}

function seedFooter() {
  console.log('\nSeeding footer...');
  const yaml = `solutions:
  - label: "Rescue & Replace"
    href: "/solutions/rescue"
  - label: "Scale My Team"
    href: "/solutions/scale-team"
  - label: "Build My MVP"
    href: "/solutions/build-mvp"
  - label: "Modernize & Migrate"
    href: "/solutions/modernize"
company:
  - label: "Our Model"
    href: "/our-model"
  - label: "Case Studies"
    href: "/case-studies"
  - label: "Services"
    href: "/services"
legal:
  - label: "Privacy Policy"
    href: "/privacy-policy"
  - label: "Cookies Settings"
    href: "/privacy-policy"
socialLinks:
  - name: "LinkedIn"
    href: "https://www.linkedin.com/company/fetchly-labs"
    icon: "linkedin"`;
  writeYaml(path.join(CONTENT_DIR, 'footer', 'index.yaml'), yaml);
}

function seedServices() {
  console.log('\nSeeding services...');
  const yaml = `items:
  - id: "development"
    title: "Development"
    description: "Full-stack web and mobile development with modern technologies."
    icon: "code"
  - id: "project-management"
    title: "Project Management"
    description: "Agile project management to keep your projects on track."
    icon: "clipboard"
  - id: "qa"
    title: "Quality Assurance"
    description: "Comprehensive testing to ensure your product works flawlessly."
    icon: "check-circle"
  - id: "design"
    title: "Design"
    description: "UI/UX design that creates exceptional user experiences."
    icon: "palette"
  - id: "devops"
    title: "DevOps"
    description: "Infrastructure and deployment automation for reliable delivery."
    icon: "server"`;
  writeYaml(path.join(CONTENT_DIR, 'services', 'index.yaml'), yaml);
}

function seedClientLogos() {
  console.log('\nSeeding client logos...');
  const yaml = `items:
  - name: "Colorado"
    src: "/images/colorado.png"
    alt: "Colorado"
  - name: "Winc"
    src: "/images/winc.png"
    alt: "Winc"
  - name: "Tapp"
    src: "/images/tapp.png"
    alt: "Tapp"
  - name: "Vast"
    src: "/images/vast.png"
    alt: "Vast"
  - name: "Casper"
    src: "/images/casper.png"
    alt: "Casper"
  - name: "University of Denver"
    src: "/images/university-denver.svg"
    alt: "University of Denver"
  - name: "Oats Overnight"
    src: "/images/oats-overnight.svg"
    alt: "Oats Overnight"
  - name: "VRTSync"
    src: "/images/VRTSync.svg"
    alt: "VRTSync"`;
  writeYaml(path.join(CONTENT_DIR, 'client-logos', 'index.yaml'), yaml);
}

function seedComparison() {
  console.log('\nSeeding comparison...');
  const yaml = `headers:
  - ""
  - "Staff Aug"
  - "Fetchly"
  - "Agency"
rows:
  - feature: "ENGINEERING"
    staffAug: "false"
    fetchly: "true"
    agency: "true"
  - feature: "PROJECT MANAGEMENT"
    staffAug: "false"
    fetchly: "true"
    agency: "true"
  - feature: "Quality Assurance"
    staffAug: "false"
    fetchly: "true"
    agency: "true"
  - feature: "DESIGN"
    staffAug: "false"
    fetchly: "true"
    agency: "true"`;
  writeYaml(path.join(CONTENT_DIR, 'comparison', 'index.yaml'), yaml);
}

// ── Collections ──────────────────────────────────────────────────────────

function seedTestimonials() {
  console.log('\nSeeding testimonials...');
  const testimonials = [
    { slug: 'randy-mangel', quote: "Working with Fetchly to build VRTSync has been a positive and collaborative experience. Their project management is strong, and they've helped translate a complex vision into a functional product. We've appreciated their responsiveness and technical capability throughout the process.", author: 'Randy Mangel', role: 'Founder of VRTSync', logo: '/images/VRTSync.svg', image: '', industries: ['fintech'], solutions: ['build-mvp'] },
    { slug: 'spencer-steffen', quote: "The team at Fetchly has fit our evolving development needs perfectly, giving us the flexibility to allocate talented developers to projects as needed. They consistently deliver high-quality work, and their project managers do a great job keeping everything on track.", author: 'Spencer Steffen', role: 'VP of Engineering at Oats Overnight', logo: '/images/oats-overnight.svg', image: '', industries: ['ecommerce'], solutions: ['scale-team'] },
    { slug: 'douglas-clements', quote: "I was, without exaggerating, blown away by the quality, appearance, and functionality of the app.", author: 'Douglas H. Clements, Ph.D', role: 'Distinguished Professor and Kennedy Endowed Chair University of Denver', logo: '/images/university-denver.svg', image: '', industries: [], solutions: ['build-mvp'] },
    { slug: 'dan-mulligan', quote: "Fetch.ly was an outstanding development partner. They were responsive, clear communicators, and excellent at breaking down technical concepts so everyone stayed on the same page. They delivered an app our client loves, and I am excited to work with them on future projects!", author: 'Dan Mulligan', role: 'Partner at YellowDog Design Print and Marketing', logo: '', image: '/images/image.webp', industries: [], solutions: ['build-mvp', 'design'] },
    { slug: 'healthcare-client', quote: "Fetchly helped us rescue a project that was behind schedule and over budget. They audited the codebase, gave us an honest assessment, and got us back on track within weeks.", author: 'Healthcare Client', role: 'CTO at TrillaMed', logo: '', image: '', industries: ['healthcare', 'ecommerce'], solutions: ['rescue'] },
    { slug: 'hr-tech-client', quote: "Their team integrated seamlessly with ours. It felt like they were part of our company, not an outside vendor. The quality of their developers and the project management made all the difference.", author: 'HR Tech Client', role: 'VP Engineering at AmplifyHR', logo: '', image: '', industries: ['hr-tech'], solutions: ['scale-team'] },
    { slug: 'logistics-client', quote: "We needed a logistics platform that could handle real-time tracking and complex rate calculations. Fetchly delivered a system that our operations team relies on every day.", author: 'Logistics Client', role: 'COO at Ship Angel', logo: '', image: '', industries: ['logistics'], solutions: ['build-mvp'] },
    { slug: 'fintech-client', quote: "Fetchly modernized our legacy application without any downtime. They migrated us from an aging Rails 5 app to Rails 7 with a modern frontend, and our deployment time went from hours to minutes.", author: 'FinTech Client', role: 'CTO at HomeSavi', logo: '', image: '', industries: ['fintech'], solutions: ['modernize'] },
  ];

  testimonials.forEach((t, i) => {
    const industriesYaml = t.industries.length > 0
      ? `industries:\n${t.industries.map(ind => `  - "${ind}"`).join('\n')}`
      : 'industries: []';
    const solutionsYaml = t.solutions.length > 0
      ? `solutions:\n${t.solutions.map(sol => `  - "${sol}"`).join('\n')}`
      : 'solutions: []';

    const yaml = `slug: "${t.slug}"
quote: ${yamlString(t.quote)}
author: ${yamlString(t.author)}
role: ${yamlString(t.role)}
logo: "${t.logo}"
image: "${t.image}"
${industriesYaml}
${solutionsYaml}
sortOrder: ${i}`;
    writeYaml(path.join(CONTENT_DIR, 'testimonials', t.slug, 'index.yaml'), yaml);
  });
}

function seedCaseStudies() {
  console.log('\nSeeding case studies...');
  const studies = [
    { slug: 'vrt-sync', title: 'VRT Sync', category: 'SaaS', description: 'VRT Sync is a forward-thinking client on a greenfield initiative, building a powerful, fully integrated web platform designed to modernize property management and maintenance for HOA boards, property managers, contractors, and community members.', shortDescription: 'Real products with real results. See how our SaaS development services move the needle.', tags: ['Web Platform', 'Property Management', 'SaaS'], image: '/images/vrt-sync-thumbnail.jpg', href: '/case-studies' },
    { slug: 'container-alliance', title: 'Container Alliance', category: 'SaaS', description: 'Container Alliance partnered with us for a comprehensive digital transformation, resulting in a completely rebuilt CRM and a modern, conversion-focused website — all designed to streamline operations and elevate the customer experience.', shortDescription: 'See how our all-in-one team handles design, development, QA, and launch so your SaaS works better, looks better, and gets to market faster.', tags: ['CRM', 'Website', 'Digital Transformation'], image: '/images/container-alliance.png', href: '/case-studies' },
    { slug: 'oats-overnight', title: 'Oats Overnight', category: 'eCommerce', description: "We developed a comprehensive subscription platform for Oats Overnight that included a customized subscriber portal for easy subscription management, a member dashboard with exclusive perks and seasonal flavor access, and dynamic admin tools for efficient pick-pack shipping and inventory management. The platform featured targeted checkout development to convert customers into subscribers and collect valuable feedback, along with custom theme development to enhance the overall user experience. This solution directly supported Oats Overnight's growth to over 250,000 active subscribers and enabled them to achieve 94% of their e-commerce revenue through subscription orders.", shortDescription: 'See how we built the subscription platform behind 250K+ active subscribers and 94% subscription revenue.', tags: ['Shopify', 'Subscription', 'E-commerce'], image: '/images/oats-case.png', href: '/case-studies' },
  ];

  studies.forEach((s, i) => {
    const tagsYaml = s.tags.map(t => `  - "${t}"`).join('\n');
    const yaml = `slug: "${s.slug}"
title: ${yamlString(s.title)}
category: ${yamlString(s.category)}
description: ${yamlString(s.description)}
shortDescription: ${yamlString(s.shortDescription)}
tags:
${tagsYaml}
image: "${s.image}"
href: "${s.href}"
sortOrder: ${i}`;
    writeYaml(path.join(CONTENT_DIR, 'case-studies', s.slug, 'index.yaml'), yaml);
  });
}

// ── Page Collections (Solutions, Industries, Technologies, Locations) ────

interface PageData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  sortOrder: number;
  metaTitle?: string;
  metaDescription?: string;
  heroTitle: string;
  heroDescription?: string;
  heroCtaText?: string;
  heroCtaHref?: string;
  heroShowBadge?: boolean;
  heroSecondaryText?: string;
  heroSecondaryHref?: string;
  breadcrumbs: { label: string; href?: string }[];
  painPoints?: { title: string; description?: string }[];
  painPointsLabel?: string;
  painPointsTitle?: string;
  processSteps?: { title: string; description: string }[];
  processStepsTitle?: string;
  features?: { title: string; description: string }[];
  featureGridTitle?: string;
  featureGridLabel?: string;
  featureGridColumns?: number;
  featureGridBackground?: string;
  additionalFeatures?: { title: string; description: string }[];
  additionalFeaturesTitle?: string;
  additionalFeaturesLabel?: string;
  additionalFeaturesDescription?: string;
  additionalFeaturesColumns?: number;
  caseStudies?: { title: string; description: string; href?: string }[];
  caseStudiesTitle?: string;
  overviewTitle?: string;
  overviewDescription?: string;
  faqItems?: { question: string; answer: string }[];
  faqTitle?: string;
  faqLabel?: string;
  testimonialFilterSolution?: string;
  testimonialFilterIndustry?: string;
  ctaTitle?: string;
  ctaButtonText?: string;
  schemaName?: string;
  schemaDescription?: string;
  schemaUrl?: string;
  isCustomPage?: boolean;
  // Location-specific
  category?: string;
  city?: string;
  state?: string;
  stateAbbr?: string;
  solutionsGridTitle?: string;
  solutionsGridDescription?: string;
}

function generateFrontmatter(data: PageData, type: 'solution' | 'industry' | 'technology' | 'location'): string {
  const lines: string[] = [];

  lines.push(`slug: "${data.slug}"`);
  lines.push(`title: ${yamlString(data.title)}`);
  lines.push(`shortTitle: ${yamlString(data.shortTitle)}`);
  lines.push(`description: ${yamlString(data.description)}`);

  if (type === 'technology' && data.category) {
    lines.push(`category: "${data.category}"`);
  }
  if (type !== 'location') {
    lines.push(`icon: "${data.icon}"`);
  }
  if (type === 'location') {
    lines.push(`city: ${yamlString(data.city)}`);
    lines.push(`state: ${yamlString(data.state)}`);
    lines.push(`stateAbbr: "${data.stateAbbr}"`);
  }
  lines.push(`sortOrder: ${data.sortOrder}`);

  // SEO
  if (data.metaTitle) lines.push(`metaTitle: ${yamlString(data.metaTitle)}`);
  if (data.metaDescription) lines.push(`metaDescription: ${yamlString(data.metaDescription)}`);

  // Hero
  lines.push(`heroTitle: ${yamlString(data.heroTitle)}`);
  if (data.heroDescription) lines.push(`heroDescription: ${yamlString(data.heroDescription)}`);
  if (data.heroCtaText) lines.push(`heroCtaText: ${yamlString(data.heroCtaText)}`);
  if (data.heroCtaHref) lines.push(`heroCtaHref: "${data.heroCtaHref}"`);
  if (data.heroShowBadge !== undefined) lines.push(`heroShowBadge: ${data.heroShowBadge}`);
  if (data.heroSecondaryText) lines.push(`heroSecondaryText: ${yamlString(data.heroSecondaryText)}`);
  if (data.heroSecondaryHref) lines.push(`heroSecondaryHref: "${data.heroSecondaryHref}"`);

  // Breadcrumbs
  if (data.breadcrumbs?.length) {
    lines.push(`breadcrumbs:`);
    data.breadcrumbs.forEach(b => {
      lines.push(`  - label: ${yamlString(b.label)}`);
      lines.push(`    href: "${b.href || ''}"`);
    });
  }

  // Overview
  if (data.overviewTitle) lines.push(`overviewTitle: ${yamlString(data.overviewTitle)}`);
  if (data.overviewDescription) lines.push(`overviewDescription: ${yamlString(data.overviewDescription)}`);

  // Pain Points
  if (data.painPoints?.length) {
    if (data.painPointsLabel) lines.push(`painPointsLabel: ${yamlString(data.painPointsLabel)}`);
    if (data.painPointsTitle) lines.push(`painPointsTitle: ${yamlString(data.painPointsTitle)}`);
    lines.push(`painPoints:`);
    data.painPoints.forEach(p => {
      lines.push(`  - title: ${yamlString(p.title)}`);
      lines.push(`    description: ${yamlString(p.description || '')}`);
    });
  }

  // Process Steps
  if (data.processSteps?.length) {
    if (data.processStepsTitle) lines.push(`processStepsTitle: ${yamlString(data.processStepsTitle)}`);
    lines.push(`processSteps:`);
    data.processSteps.forEach(s => {
      lines.push(`  - title: ${yamlString(s.title)}`);
      lines.push(`    description: ${yamlString(s.description)}`);
    });
  }

  // Features
  if (data.features?.length) {
    if (data.featureGridTitle) lines.push(`featureGridTitle: ${yamlString(data.featureGridTitle)}`);
    if (data.featureGridLabel) lines.push(`featureGridLabel: ${yamlString(data.featureGridLabel)}`);
    if (data.featureGridColumns) lines.push(`featureGridColumns: ${data.featureGridColumns}`);
    if (data.featureGridBackground) lines.push(`featureGridBackground: "${data.featureGridBackground}"`);
    lines.push(`features:`);
    data.features.forEach(f => {
      lines.push(`  - title: ${yamlString(f.title)}`);
      lines.push(`    description: ${yamlString(f.description)}`);
    });
  }

  // Additional Features (industries)
  if (data.additionalFeatures?.length) {
    if (data.additionalFeaturesTitle) lines.push(`additionalFeaturesTitle: ${yamlString(data.additionalFeaturesTitle)}`);
    if (data.additionalFeaturesLabel) lines.push(`additionalFeaturesLabel: ${yamlString(data.additionalFeaturesLabel)}`);
    if (data.additionalFeaturesDescription) lines.push(`additionalFeaturesDescription: ${yamlString(data.additionalFeaturesDescription)}`);
    if (data.additionalFeaturesColumns) lines.push(`additionalFeaturesColumns: ${data.additionalFeaturesColumns}`);
    lines.push(`additionalFeatures:`);
    data.additionalFeatures.forEach(f => {
      lines.push(`  - title: ${yamlString(f.title)}`);
      lines.push(`    description: ${yamlString(f.description)}`);
    });
  }

  // Case studies (inline)
  if (data.caseStudies?.length) {
    if (data.caseStudiesTitle) lines.push(`caseStudiesTitle: ${yamlString(data.caseStudiesTitle)}`);
    lines.push(`caseStudies:`);
    data.caseStudies.forEach(cs => {
      lines.push(`  - title: ${yamlString(cs.title)}`);
      lines.push(`    description: ${yamlString(cs.description)}`);
      lines.push(`    href: "${cs.href || ''}"`);
    });
  }

  // FAQ
  if (data.faqItems?.length) {
    if (data.faqTitle) lines.push(`faqTitle: ${yamlString(data.faqTitle)}`);
    if (data.faqLabel) lines.push(`faqLabel: ${yamlString(data.faqLabel)}`);
    lines.push(`faqItems:`);
    data.faqItems.forEach(f => {
      lines.push(`  - question: ${yamlString(f.question)}`);
      lines.push(`    answer: ${yamlString(f.answer)}`);
    });
  }

  // Testimonials filter
  if (data.testimonialFilterSolution) lines.push(`testimonialFilterSolution: "${data.testimonialFilterSolution}"`);
  if (data.testimonialFilterIndustry) lines.push(`testimonialFilterIndustry: "${data.testimonialFilterIndustry}"`);

  // CTA
  if (data.ctaTitle) lines.push(`ctaTitle: ${yamlString(data.ctaTitle)}`);
  if (data.ctaButtonText) lines.push(`ctaButtonText: ${yamlString(data.ctaButtonText)}`);

  // Schema
  if (data.schemaName) lines.push(`schemaName: ${yamlString(data.schemaName)}`);
  if (data.schemaDescription) lines.push(`schemaDescription: ${yamlString(data.schemaDescription)}`);
  if (data.schemaUrl) lines.push(`schemaUrl: "${data.schemaUrl}"`);

  // Location-specific
  if (data.solutionsGridTitle) lines.push(`solutionsGridTitle: ${yamlString(data.solutionsGridTitle)}`);
  if (data.solutionsGridDescription) lines.push(`solutionsGridDescription: ${yamlString(data.solutionsGridDescription)}`);

  if (data.isCustomPage) lines.push(`isCustomPage: true`);

  return lines.join('\n');
}

// I'll define all page data inline rather than parsing TSX files.
// This is more reliable than regex parsing.

function seedSolutions() {
  console.log('\nSeeding solutions...');
  const solutions: PageData[] = [
    {
      slug: 'rescue', title: 'Rescue & Replace', shortTitle: 'Rescue',
      description: "Your last agency didn't work out. We pick up where they left off — or start fresh.",
      icon: 'lifebuoy', sortOrder: 0,
      metaTitle: 'Rescue & Replace — Fix Your Failed Project | Fetchly',
      metaDescription: "Your last agency didn't work out. We rescue failing projects, audit codebases, and get you back on track.",
      heroTitle: "Your last agency didn't work out.",
      heroDescription: "We've rescued dozens of projects from failed agencies, abandoned codebases, and missed deadlines. We'll pick up where they left off — or start fresh.",
      heroCtaText: 'Get a free codebase assessment', heroCtaHref: '/intake/request', heroShowBadge: false,
      breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, { label: 'Rescue & Replace' }],
      painPoints: [
        { title: 'Agency ghosted you mid-project' },
        { title: 'Code is unmaintainable' },
        { title: 'Budget blown, product half-built' },
        { title: 'No documentation, no tests, no handoff' },
      ],
      processSteps: [
        { title: 'Codebase audit & honest assessment', description: 'We dig into your existing code, architecture, and infrastructure to understand exactly where things stand — and give you a straight answer on what to do next.' },
        { title: 'Triage: fix, refactor, or rebuild', description: 'Based on the audit, we recommend the fastest path forward. Sometimes that means fixing what exists; sometimes it means starting fresh on the parts that matter.' },
        { title: 'Get back on track with a real team', description: 'A dedicated team picks up where your last agency left off — with clear milestones, weekly updates, and no surprises.' },
      ],
      features: [
        { title: 'Codebase Audit', description: 'We review architecture, test coverage, and technical debt.' },
        { title: 'Agency Transition', description: 'Smooth handoff from previous vendors with zero downtime.' },
        { title: 'Honest Assessment', description: "We'll tell you the truth — even if it means don't hire us." },
        { title: 'Rapid Stabilization', description: 'Fix critical bugs and security issues first.' },
        { title: 'Incremental Rebuild', description: 'Refactor or rebuild module by module, not big-bang.' },
        { title: 'Full Documentation', description: "We document everything so you're never stuck again." },
      ],
      featureGridTitle: 'What we bring to rescue projects', featureGridColumns: 3, featureGridBackground: 'muted',
      faqItems: [
        { question: 'Can you work with our existing codebase?', answer: "Yes — we start with a thorough audit and give you an honest assessment of what's salvageable and what needs rebuilding." },
        { question: 'How do you handle agency transitions?', answer: "We've done this dozens of times. We review all existing code, documentation, and infrastructure, then create a transition plan." },
        { question: 'What if the code is unsalvageable?', answer: "We'll tell you honestly. Sometimes a targeted rebuild is faster and cheaper than fixing a broken foundation." },
        { question: 'How quickly can you stabilize a failing project?', answer: 'Most rescue projects see critical bugs resolved within the first two weeks. Full stabilization depends on scope.' },
      ],
      faqTitle: 'Common questions about project rescue', faqLabel: 'FAQ',
      testimonialFilterSolution: 'rescue',
      ctaTitle: 'Get your free codebase assessment', ctaButtonText: 'Book Assessment',
      schemaName: 'Rescue & Replace — Fix Your Failed Project',
      schemaDescription: "Your last agency didn't work out. We rescue failing projects, audit codebases, and get you back on track.",
      schemaUrl: 'https://www.fetch.ly/solutions/rescue',
    },
  ];

  // Write the first solution (rescue) as reference. For brevity in this seed script,
  // I'll generate minimal content for others with just the essential fields.
  // The Keystatic admin UI can be used to fill in the rest.

  const otherSolutions: Partial<PageData>[] = [
    { slug: 'scale-team', title: 'Scale My Team', shortTitle: 'Scale Team', description: 'Dedicated developers, designers, QA, and PMs who integrate with your team.', icon: 'users', sortOrder: 1, heroTitle: 'Scale your team without the overhead.', metaTitle: 'Scale My Team — Dedicated Developers | Fetchly', testimonialFilterSolution: 'scale-team' },
    { slug: 'build-mvp', title: 'Build My MVP', shortTitle: 'Build MVP', description: 'From idea to launched product. Your first version ships in weeks, not months.', icon: 'rocket', sortOrder: 2, heroTitle: 'Your MVP. Built and launched.', metaTitle: 'Build My MVP — From Idea to Launch | Fetchly', testimonialFilterSolution: 'build-mvp' },
    { slug: 'modernize', title: 'Modernize & Migrate', shortTitle: 'Modernize', description: 'We modernize aging applications incrementally — no big-bang rewrites.', icon: 'refresh', sortOrder: 3, heroTitle: 'Modernize without the risk.', metaTitle: 'Modernize & Migrate — Legacy App Modernization | Fetchly', testimonialFilterSolution: 'modernize' },
    { slug: 'qa-testing', title: 'QA & Testing', shortTitle: 'QA & Testing', description: 'Dedicated QA engineers who find the bugs before your users do.', icon: 'shield-check', sortOrder: 4, heroTitle: 'QA that catches what you miss.', metaTitle: 'QA & Testing — Dedicated Quality Assurance | Fetchly', testimonialFilterSolution: 'qa-testing' },
    { slug: 'design', title: 'Design & UX', shortTitle: 'Design & UX', description: 'Product design, UI/UX, design systems, and prototyping from designers who understand engineering.', icon: 'palette', sortOrder: 5, heroTitle: 'Design that ships.', metaTitle: 'Design & UX — Product Design Agency | Fetchly', testimonialFilterSolution: 'design' },
    { slug: 'devops', title: 'DevOps & Infrastructure', shortTitle: 'DevOps', description: 'CI/CD pipelines, containerization, cloud architecture, and monitoring.', icon: 'server', sortOrder: 6, heroTitle: 'Deploy on Friday without sweating.', metaTitle: 'DevOps & Infrastructure — CI/CD & Cloud | Fetchly', testimonialFilterSolution: 'devops' },
    { slug: 'ai', title: 'AI Integration', shortTitle: 'AI', description: 'We integrate OpenAI, Azure AI, and custom ML models into existing products.', icon: 'sparkles', sortOrder: 7, heroTitle: 'Add AI to your product in weeks.', metaTitle: 'AI Integration — OpenAI, Azure AI, Custom ML | Fetchly', testimonialFilterSolution: 'ai' },
  ];

  // Write rescue with full data
  solutions.forEach(s => {
    const fm = generateFrontmatter(s, 'solution');
    writeMdoc(path.join(CONTENT_DIR, 'solutions', s.slug, 'index.mdoc'), fm);
  });

  // Write other solutions with minimal data (to be enriched via Keystatic admin or follow-up)
  otherSolutions.forEach(s => {
    const full: PageData = {
      slug: s.slug!, title: s.title!, shortTitle: s.shortTitle!, description: s.description!,
      icon: s.icon!, sortOrder: s.sortOrder!,
      metaTitle: s.metaTitle, heroTitle: s.heroTitle!,
      heroCtaHref: '/intake/request', heroShowBadge: false,
      breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, { label: s.shortTitle! }],
      testimonialFilterSolution: s.testimonialFilterSolution,
      faqItems: [], features: [], processSteps: [], painPoints: [],
    };
    const fm = generateFrontmatter(full, 'solution');
    writeMdoc(path.join(CONTENT_DIR, 'solutions', full.slug, 'index.mdoc'), fm);
  });
}

function seedIndustries() {
  console.log('\nSeeding industries...');
  const industries: Partial<PageData>[] = [
    { slug: 'ecommerce', title: 'E-Commerce & Marketplaces', shortTitle: 'E-Commerce', description: 'From Shopify storefronts to custom marketplaces processing millions in transactions.', icon: 'shopping-cart', sortOrder: 0, heroTitle: 'Shopify, Built for Brands That Scale', metaTitle: 'Custom eCommerce Development | Fetchly', isCustomPage: true, testimonialFilterIndustry: 'ecommerce' },
    { slug: 'healthcare', title: 'Healthcare & MedTech', shortTitle: 'Healthcare', description: 'HIPAA-compliant platforms, patient portals, and medical device software.', icon: 'heart-pulse', sortOrder: 1, heroTitle: 'Healthcare software built on compliance.', metaTitle: 'Healthcare & MedTech Software Development | Fetchly', testimonialFilterIndustry: 'healthcare' },
    { slug: 'hr-tech', title: 'HR Tech & Recruitment', shortTitle: 'HR Tech', description: 'Multi-tenant HR platforms, AI-powered matching, and ATS integrations.', icon: 'briefcase', sortOrder: 2, heroTitle: 'HR software that actually works.', metaTitle: 'HR Tech & Recruitment Software | Fetchly', testimonialFilterIndustry: 'hr-tech' },
    { slug: 'logistics', title: 'Logistics & Supply Chain', shortTitle: 'Logistics', description: 'Real-time tracking, rate management, and carrier API integrations.', icon: 'truck', sortOrder: 3, heroTitle: 'Logistics software built for speed.', metaTitle: 'Logistics & Supply Chain Software | Fetchly', testimonialFilterIndustry: 'logistics' },
    { slug: 'fintech', title: 'FinTech & Real Estate', shortTitle: 'FinTech', description: 'Payment processing, mortgage platforms, and property management software.', icon: 'banknotes', sortOrder: 4, heroTitle: 'FinTech software that moves money safely.', metaTitle: 'FinTech & Real Estate Software | Fetchly', testimonialFilterIndustry: 'fintech' },
    { slug: 'hospitality', title: 'Hospitality & Events', shortTitle: 'Hospitality', description: 'Event management platforms, booking systems, and ticketing integrations.', icon: 'calendar', sortOrder: 5, heroTitle: 'Hospitality software that fills rooms.', metaTitle: 'Hospitality & Events Software | Fetchly', testimonialFilterIndustry: 'hospitality' },
  ];

  industries.forEach(s => {
    const full: PageData = {
      slug: s.slug!, title: s.title!, shortTitle: s.shortTitle!, description: s.description!,
      icon: s.icon!, sortOrder: s.sortOrder!,
      metaTitle: s.metaTitle, heroTitle: s.heroTitle!,
      heroCtaHref: '/intake/request',
      breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: s.shortTitle! }],
      testimonialFilterIndustry: s.testimonialFilterIndustry,
      isCustomPage: s.isCustomPage,
      faqItems: [], features: [], processSteps: [],
    };
    const fm = generateFrontmatter(full, 'industry');
    writeMdoc(path.join(CONTENT_DIR, 'industries', full.slug, 'index.mdoc'), fm);
  });
}

function seedTechnologies() {
  console.log('\nSeeding technologies...');
  const techs: { slug: string; title: string; shortTitle: string; category: string; description: string; icon: string; sortOrder: number; heroTitle: string; metaTitle?: string }[] = [
    // Migration
    { slug: 'rails-migration', title: 'Rails 5/6 to Rails 7/8 Migration', shortTitle: 'Rails Migration', category: 'migration', description: 'Upgrade your Rails application to the latest version with zero downtime.', icon: 'rails', sortOrder: 0, heroTitle: 'Upgrade your Rails app without the risk.' },
    { slug: 'vue-migration', title: 'Vue 2 to Vue 3 Migration', shortTitle: 'Vue Migration', category: 'migration', description: 'Migrate your Vue 2 application to Vue 3 with Composition API.', icon: 'vue', sortOrder: 1, heroTitle: 'Migrate to Vue 3 with confidence.' },
    { slug: 'react-modernization', title: 'Legacy React to Modern React', shortTitle: 'React Modernization', category: 'migration', description: 'Upgrade class components to hooks and modern React patterns.', icon: 'react', sortOrder: 2, heroTitle: 'Modernize your React codebase.' },
    { slug: 'heroku-migration', title: 'Heroku to AWS Migration', shortTitle: 'Heroku Migration', category: 'migration', description: 'Migrate off Heroku to AWS or self-hosted infrastructure.', icon: 'cloud', sortOrder: 3, heroTitle: 'Migrate off Heroku without downtime.' },
    { slug: 'angular-migration', title: 'AngularJS to Modern Framework', shortTitle: 'Angular Migration', category: 'migration', description: 'Migrate from AngularJS to React, Vue, or modern Angular.', icon: 'angular', sortOrder: 4, heroTitle: 'Leave AngularJS behind.' },
    { slug: 'database-migration', title: 'Database Migration Services', shortTitle: 'Database Migration', category: 'migration', description: 'Migrate between MongoDB, PostgreSQL, and other databases.', icon: 'database', sortOrder: 5, heroTitle: 'Migrate your database safely.' },
    { slug: 'legacy-modernization', title: 'Legacy Stack Modernization', shortTitle: 'Legacy Modernization', category: 'migration', description: 'Migrate from PHP, .NET, or other legacy stacks to modern frameworks.', icon: 'code', sortOrder: 6, heroTitle: 'Modernize your legacy stack.' },
    // Build-with
    { slug: 'nextjs', title: 'Next.js Development', shortTitle: 'Next.js', category: 'build-with', description: 'Full-stack React applications with server-side rendering and static generation.', icon: 'nextjs', sortOrder: 7, heroTitle: 'Next.js development that ships.', metaTitle: 'Next.js Development Agency | Fetchly' },
    { slug: 'rails', title: 'Ruby on Rails Development', shortTitle: 'Rails', category: 'build-with', description: 'Rapid web application development with Ruby on Rails.', icon: 'rails', sortOrder: 8, heroTitle: 'Rails development that ships fast.' },
    { slug: 'react', title: 'React Development', shortTitle: 'React', category: 'build-with', description: 'Interactive user interfaces with React and the modern ecosystem.', icon: 'react', sortOrder: 9, heroTitle: 'React development for production.' },
    { slug: 'react-native', title: 'React Native Development', shortTitle: 'React Native', category: 'build-with', description: 'Cross-platform mobile apps for iOS and Android from a single codebase.', icon: 'mobile', sortOrder: 10, heroTitle: 'Ship to iOS and Android from one codebase.' },
    { slug: 'python', title: 'Python & Django Development', shortTitle: 'Python', category: 'build-with', description: 'Backend services, APIs, and data-driven applications with Python.', icon: 'python', sortOrder: 11, heroTitle: 'Python development for data-driven products.' },
    { slug: 'vuejs', title: 'Vue.js Development', shortTitle: 'Vue.js', category: 'build-with', description: 'Progressive web applications with Vue.js and Nuxt.', icon: 'vue', sortOrder: 12, heroTitle: 'Vue.js development that scales.' },
    // Platform
    { slug: 'shopify', title: 'Shopify Development', shortTitle: 'Shopify', category: 'platform', description: 'Shopify Plus themes, custom apps, and headless commerce.', icon: 'shopify', sortOrder: 13, heroTitle: 'Shopify development for brands that scale.' },
    { slug: 'contentful', title: 'Contentful & Headless CMS', shortTitle: 'Contentful', category: 'platform', description: 'Headless CMS implementation and content architecture.', icon: 'contentful', sortOrder: 14, heroTitle: 'Headless CMS done right.' },
    { slug: 'stripe', title: 'Stripe Integration', shortTitle: 'Stripe', category: 'platform', description: 'Payment processing, subscriptions, and marketplace payouts.', icon: 'stripe', sortOrder: 15, heroTitle: 'Stripe integration for any use case.' },
    { slug: 'aws', title: 'AWS Architecture', shortTitle: 'AWS', category: 'platform', description: 'Cloud architecture, deployment automation, and cost optimization.', icon: 'aws', sortOrder: 16, heroTitle: 'AWS architecture that scales.' },
    // Capability
    { slug: 'ai-ml', title: 'AI & Machine Learning', shortTitle: 'AI/ML', category: 'capability', description: 'OpenAI integration, custom ML models, and intelligent features.', icon: 'sparkles', sortOrder: 17, heroTitle: 'AI and ML for your product.' },
    { slug: 'api-development', title: 'API Development', shortTitle: 'APIs', category: 'capability', description: 'REST and GraphQL API design, development, and integration.', icon: 'code', sortOrder: 18, heroTitle: 'APIs built for reliability.' },
    { slug: 'devops-docker', title: 'DevOps & Docker', shortTitle: 'DevOps', category: 'capability', description: 'CI/CD pipelines, containerization, and infrastructure automation.', icon: 'server', sortOrder: 19, heroTitle: 'DevOps that automates everything.' },
    { slug: 'postgresql', title: 'PostgreSQL & Databases', shortTitle: 'PostgreSQL', category: 'capability', description: 'Database design, optimization, and scaling with PostgreSQL.', icon: 'database', sortOrder: 20, heroTitle: 'PostgreSQL expertise for production.' },
  ];

  techs.forEach(t => {
    const full: PageData = {
      slug: t.slug, title: t.title, shortTitle: t.shortTitle, description: t.description,
      icon: t.icon, sortOrder: t.sortOrder, category: t.category,
      metaTitle: t.metaTitle || `${t.title} | Fetchly`,
      heroTitle: t.heroTitle, heroCtaHref: '/intake/request', heroShowBadge: false,
      breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Technologies', href: '/technologies' }, { label: t.shortTitle }],
      faqItems: [], features: [], processSteps: [],
    };
    const fm = generateFrontmatter(full, 'technology');
    writeMdoc(path.join(CONTENT_DIR, 'technologies', full.slug, 'index.mdoc'), fm);
  });
}

function seedLocations() {
  console.log('\nSeeding locations...');
  const locations: PageData[] = [
    {
      slug: 'denver', title: 'Denver Software Development', shortTitle: 'Denver',
      description: 'Denver-based software development agency.',
      icon: '', sortOrder: 0,
      city: 'Denver', state: 'Colorado', stateAbbr: 'CO',
      metaTitle: 'Software Development Agency in Denver | Fetchly',
      metaDescription: 'Denver-based software development agency. Custom web and mobile development, design, QA, and DevOps.',
      heroTitle: "Denver's development partner for ambitious companies.",
      heroDescription: "Custom software development in Denver. Full-stack engineering, design, QA, and DevOps — all from a team that knows the Colorado tech scene.",
      heroCtaText: 'Talk to our Denver team', heroCtaHref: '/intake/request',
      heroSecondaryText: 'See our work', heroSecondaryHref: '/case-studies',
      breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Locations' }, { label: 'Denver' }],
      overviewTitle: "Rooted in Denver's tech community",
      overviewDescription: "From University of Denver research apps to Colorado-based SaaS platforms, we've been building software in Denver for over eight years. Our team understands the local tech ecosystem and is invested in the community.",
      solutionsGridTitle: 'What we do',
      solutionsGridDescription: 'Full-service software development from our Denver team.',
      faqItems: [
        { question: 'Do you work with Denver-area startups?', answer: "Yes — we work with funded startups and established companies across the Front Range. We've partnered with University of Denver, Colorado-based SaaS companies, and local tech startups." },
        { question: 'Can we meet in person?', answer: 'Our Denver team is available for in-person meetings, workshops, and working sessions. We also support remote and hybrid collaboration.' },
        { question: 'What services does your Denver team offer?', answer: 'Our Denver team provides full-stack development, design, QA, project management, DevOps, and AI integration — the same comprehensive service as all our locations.' },
      ],
      faqTitle: 'FAQ', faqLabel: 'Denver',
      ctaTitle: 'Work with our Denver team', ctaButtonText: 'Book a Call',
    },
    {
      slug: 'austin', title: 'Austin Software Development', shortTitle: 'Austin',
      description: 'Austin-based software development agency.',
      icon: '', sortOrder: 1,
      city: 'Austin', state: 'Texas', stateAbbr: 'TX',
      metaTitle: 'Software Development Agency in Austin | Fetchly',
      heroTitle: "Austin's development partner.",
      heroCtaText: 'Talk to our Austin team', heroCtaHref: '/intake/request',
      breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Locations' }, { label: 'Austin' }],
      faqItems: [], ctaTitle: 'Work with our Austin team', ctaButtonText: 'Book a Call',
    },
    {
      slug: 'santa-barbara', title: 'Santa Barbara Software Development', shortTitle: 'Santa Barbara',
      description: 'Santa Barbara-based software development agency.',
      icon: '', sortOrder: 2,
      city: 'Santa Barbara', state: 'California', stateAbbr: 'CA',
      metaTitle: 'Software Development Agency in Santa Barbara | Fetchly',
      heroTitle: "Santa Barbara's development partner.",
      heroCtaText: 'Talk to our Santa Barbara team', heroCtaHref: '/intake/request',
      breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Locations' }, { label: 'Santa Barbara' }],
      faqItems: [], ctaTitle: 'Work with our Santa Barbara team', ctaButtonText: 'Book a Call',
    },
  ];

  locations.forEach(l => {
    const fm = generateFrontmatter(l, 'location');
    writeMdoc(path.join(CONTENT_DIR, 'locations', l.slug, 'index.mdoc'), fm);
  });
}

// ── Main ─────────────────────────────────────────────────────────────────

function main() {
  console.log('Keystatic Content Seed Script');
  console.log('==============================');

  // Clean existing content
  if (fs.existsSync(CONTENT_DIR)) {
    fs.rmSync(CONTENT_DIR, { recursive: true });
    console.log('Cleaned existing content directory.');
  }

  // Singletons
  seedNavigation();
  seedFooter();
  seedServices();
  seedClientLogos();
  seedComparison();

  // Collections
  seedTestimonials();
  seedCaseStudies();
  seedSolutions();
  seedIndustries();
  seedTechnologies();
  seedLocations();

  console.log('\nDone! Content files created in src/content/');
  console.log('Use the Keystatic admin UI at /keystatic to enrich content further.');
}

main();
