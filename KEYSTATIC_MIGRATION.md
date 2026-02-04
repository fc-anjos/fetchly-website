# Migrating Fetchly Website to Keystatic CMS

## Overview

This document outlines how to convert the Fetchly Next.js site from its current **content-as-code** architecture (hardcoded TypeScript data) to a **Keystatic CMS**-powered setup where content is stored as structured files (YAML/JSON/Markdown) in the git repo and editable through a visual admin UI.

### Deployment Model

The site uses **hybrid rendering** on Vercel or Netlify:

- **Content pages** (solutions, industries, technologies, etc.) are **statically generated** at build time via `generateStaticParams` — identical CDN performance to the current static export
- **Admin UI** (`/keystatic`) is a **dynamic server route** — only used by editors, not end users
- End-user experience is unchanged: all public pages are static and served from the edge

---

## Current Architecture

| Aspect | Current State |
|--------|--------------|
| **Framework** | Next.js 16 (App Router) |
| **Output** | Static export (`output: "export"`) |
| **Content source** | Hardcoded in TypeScript (`/src/lib/page-data.ts`, `/src/lib/constants.ts`, inline in page components) |
| **Content types** | Solutions (8), Industries (6), Technologies (24+), Locations (3), Case Studies (3), Testimonials (8+), Navigation, Services |
| **Styling** | Tailwind CSS 4 |
| **Type safety** | Full TypeScript with strict interfaces in `/src/types/index.ts` |

### Key Files That Hold Content

```
src/lib/page-data.ts    → Solutions, Industries, Technologies, Locations, Testimonials
src/lib/constants.ts     → Navigation, Footer, Case Studies, Services, Client Logos, Comparison Data
src/app/solutions/*/page.tsx   → Per-page pain points, features, process steps, FAQs
src/app/industries/*/page.tsx  → Per-page pain points, features, process steps, FAQs
src/app/technologies/*/page.tsx → Per-page content blocks
```

---

## Why Keystatic

- **Git-backed** — content stays in your repo as files, no external database
- **First-class Next.js App Router support** — native integration
- **Local editing mode** — edit content locally with a UI at `/keystatic`
- **GitHub mode** — edit content on GitHub via Keystatic Cloud (optional)
- **TypeScript-first** — schema definitions are TypeScript, generates typed reader API
- **No build dependency** — if Keystatic disappears, your content files remain

---

## Migration Plan

### Phase 1: Install & Configure Keystatic

#### 1.1 Install Dependencies

```bash
npm install @keystatic/core @keystatic/next
```

#### 1.2 Remove Static Export

The `/keystatic` admin UI requires server-side routes, so `output: "export"` must be removed. This does **not** affect performance — all content pages are still statically generated at build time via `generateStaticParams` and served from the CDN edge. The only dynamic route is `/keystatic` itself.

**`next.config.ts`** — Remove:

```ts
output: "export"
```

No replacement needed — the default Next.js output mode supports both static and dynamic routes. If you need a containerized deployment (Docker), use `output: "standalone"` instead.

#### 1.3 Create Keystatic Config

Create `keystatic.config.ts` at the project root:

```ts
import { config, fields, collection, singleton } from '@keystatic/core'

export default config({
  storage: {
    // Use 'local' for local dev, 'github' for Keystatic Cloud
    kind: 'local',
  },
  // Collections and singletons defined in Phase 2
  collections: {},
  singletons: {},
})
```

#### 1.4 Add Keystatic Route Handlers

Create the API route and admin UI page:

**`src/app/keystatic/layout.tsx`:**

```tsx
import KeystaticApp from './keystatic'

export default function Layout() {
  return <KeystaticApp />
}
```

**`src/app/keystatic/[[...params]]/page.tsx`:**

```tsx
import { makePage } from '@keystatic/next/ui/app'
import config from '../../../../keystatic.config'

export default makePage(config)
```

**`src/app/api/keystatic/[...params]/route.ts`:**

```ts
import { makeRouteHandler } from '@keystatic/next/route-handler'
import config from '../../../../../keystatic.config'

export const { POST, GET } = makeRouteHandler({ config })
```

---

### Phase 2: Define Content Schemas

Each content type in your current TypeScript data maps to a Keystatic **collection** or **singleton**.

#### Collections vs Singletons

| Keystatic Concept | Use For |
|---|---|
| **Collection** | Multiple entries of the same type (solutions, industries, case studies) |
| **Singleton** | One-off structured data (navigation, footer, site settings) |

#### 2.1 Solutions Collection

Maps from: `SOLUTIONS` array in `page-data.ts` + per-page content in `src/app/solutions/*/page.tsx`

```ts
// keystatic.config.ts
collections: {
  solutions: collection({
    label: 'Solutions',
    slugField: 'title',
    path: 'src/content/solutions/*',
    format: { contentField: 'overview' },
    schema: {
      title: fields.text({ label: 'Title', validation: { isRequired: true } }),
      shortTitle: fields.text({ label: 'Short Title' }),
      description: fields.text({ label: 'Description', multiline: true }),
      icon: fields.text({ label: 'Icon Name' }),
      sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 0 }),

      // Hero section
      heroHeadline: fields.text({ label: 'Hero Headline' }),
      heroSubheadline: fields.text({ label: 'Hero Subheadline', multiline: true }),

      // Pain points
      painPoints: fields.array(
        fields.object({
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
          icon: fields.text({ label: 'Icon' }),
        }),
        { label: 'Pain Points', itemLabel: (props) => props.fields.title.value }
      ),

      // Process steps
      processSteps: fields.array(
        fields.object({
          step: fields.text({ label: 'Step Number' }),
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
        }),
        { label: 'Process Steps', itemLabel: (props) => props.fields.title.value }
      ),

      // Features
      features: fields.array(
        fields.object({
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
          icon: fields.text({ label: 'Icon' }),
        }),
        { label: 'Features', itemLabel: (props) => props.fields.title.value }
      ),

      // FAQs
      faqs: fields.array(
        fields.object({
          question: fields.text({ label: 'Question' }),
          answer: fields.text({ label: 'Answer', multiline: true }),
        }),
        { label: 'FAQs', itemLabel: (props) => props.fields.question.value }
      ),

      // Overview (content field — rendered as Markdown body)
      overview: fields.markdoc({ label: 'Overview' }),
    },
  }),
}
```

#### 2.2 Industries Collection

Maps from: `INDUSTRIES` array + per-page content.

```ts
industries: collection({
  label: 'Industries',
  slugField: 'title',
  path: 'src/content/industries/*',
  format: { contentField: 'overview' },
  schema: {
    title: fields.text({ label: 'Title', validation: { isRequired: true } }),
    shortTitle: fields.text({ label: 'Short Title' }),
    description: fields.text({ label: 'Description', multiline: true }),
    icon: fields.text({ label: 'Icon Name' }),
    sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 0 }),

    heroHeadline: fields.text({ label: 'Hero Headline' }),
    heroSubheadline: fields.text({ label: 'Hero Subheadline', multiline: true }),

    painPoints: fields.array(
      fields.object({
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        icon: fields.text({ label: 'Icon' }),
      }),
      { label: 'Pain Points', itemLabel: (props) => props.fields.title.value }
    ),

    processSteps: fields.array(
      fields.object({
        step: fields.text({ label: 'Step Number' }),
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
      }),
      { label: 'Process Steps', itemLabel: (props) => props.fields.title.value }
    ),

    features: fields.array(
      fields.object({
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        icon: fields.text({ label: 'Icon' }),
      }),
      { label: 'Features', itemLabel: (props) => props.fields.title.value }
    ),

    faqs: fields.array(
      fields.object({
        question: fields.text({ label: 'Question' }),
        answer: fields.text({ label: 'Answer', multiline: true }),
      }),
      { label: 'FAQs', itemLabel: (props) => props.fields.question.value }
    ),

    overview: fields.markdoc({ label: 'Overview' }),
  },
}),
```

#### 2.3 Technologies Collection

Maps from: `TECHNOLOGIES` array + per-page content.

```ts
technologies: collection({
  label: 'Technologies',
  slugField: 'title',
  path: 'src/content/technologies/*',
  format: { contentField: 'overview' },
  schema: {
    title: fields.text({ label: 'Title', validation: { isRequired: true } }),
    shortTitle: fields.text({ label: 'Short Title' }),
    category: fields.select({
      label: 'Category',
      options: [
        { label: 'Migration', value: 'migration' },
        { label: 'Build With', value: 'build-with' },
        { label: 'Platform', value: 'platform' },
        { label: 'Capability', value: 'capability' },
      ],
      defaultValue: 'build-with',
    }),
    description: fields.text({ label: 'Description', multiline: true }),
    icon: fields.text({ label: 'Icon Name' }),
    sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 0 }),

    heroHeadline: fields.text({ label: 'Hero Headline' }),
    heroSubheadline: fields.text({ label: 'Hero Subheadline', multiline: true }),

    features: fields.array(
      fields.object({
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        icon: fields.text({ label: 'Icon' }),
      }),
      { label: 'Features', itemLabel: (props) => props.fields.title.value }
    ),

    faqs: fields.array(
      fields.object({
        question: fields.text({ label: 'Question' }),
        answer: fields.text({ label: 'Answer', multiline: true }),
      }),
      { label: 'FAQs', itemLabel: (props) => props.fields.question.value }
    ),

    overview: fields.markdoc({ label: 'Overview' }),
  },
}),
```

#### 2.4 Case Studies Collection

Maps from: `CASE_STUDIES` in `constants.ts`.

```ts
caseStudies: collection({
  label: 'Case Studies',
  slugField: 'title',
  path: 'src/content/case-studies/*',
  format: { contentField: 'body' },
  schema: {
    title: fields.text({ label: 'Title', validation: { isRequired: true } }),
    category: fields.text({ label: 'Category' }),
    description: fields.text({ label: 'Description', multiline: true }),
    shortDescription: fields.text({ label: 'Short Description' }),
    tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
    image: fields.image({
      label: 'Thumbnail Image',
      directory: 'public/images/case-studies',
      publicPath: '/images/case-studies',
    }),
    industry: fields.text({ label: 'Industry Slug' }),
    solution: fields.text({ label: 'Solution Slug' }),

    // Structured results
    results: fields.array(
      fields.object({
        metric: fields.text({ label: 'Metric' }),
        value: fields.text({ label: 'Value' }),
        description: fields.text({ label: 'Description' }),
      }),
      { label: 'Results', itemLabel: (props) => props.fields.metric.value }
    ),

    body: fields.markdoc({ label: 'Full Case Study' }),
  },
}),
```

#### 2.5 Testimonials Collection

Maps from: `TESTIMONIALS_DATA` in `page-data.ts`.

```ts
testimonials: collection({
  label: 'Testimonials',
  slugField: 'author',
  path: 'src/content/testimonials/*',
  schema: {
    author: fields.text({ label: 'Author Name', validation: { isRequired: true } }),
    role: fields.text({ label: 'Role / Title' }),
    company: fields.text({ label: 'Company' }),
    quote: fields.text({ label: 'Quote', multiline: true, validation: { isRequired: true } }),
    logo: fields.image({
      label: 'Company Logo',
      directory: 'public/images/logos',
      publicPath: '/images/logos',
    }),
    avatar: fields.image({
      label: 'Author Avatar',
      directory: 'public/images/avatars',
      publicPath: '/images/avatars',
    }),
    industries: fields.array(fields.text({ label: 'Industry Slug' }), { label: 'Industries' }),
    solutions: fields.array(fields.text({ label: 'Solution Slug' }), { label: 'Solutions' }),
  },
}),
```

#### 2.6 Locations Collection

Maps from: `LOCATIONS` in `page-data.ts`.

```ts
locations: collection({
  label: 'Locations',
  slugField: 'title',
  path: 'src/content/locations/*',
  format: { contentField: 'overview' },
  schema: {
    title: fields.text({ label: 'City Name', validation: { isRequired: true } }),
    shortTitle: fields.text({ label: 'Short Title' }),
    state: fields.text({ label: 'State' }),
    description: fields.text({ label: 'Description', multiline: true }),
    icon: fields.text({ label: 'Icon' }),

    heroHeadline: fields.text({ label: 'Hero Headline' }),
    heroSubheadline: fields.text({ label: 'Hero Subheadline', multiline: true }),

    features: fields.array(
      fields.object({
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
      }),
      { label: 'Features', itemLabel: (props) => props.fields.title.value }
    ),

    faqs: fields.array(
      fields.object({
        question: fields.text({ label: 'Question' }),
        answer: fields.text({ label: 'Answer', multiline: true }),
      }),
      { label: 'FAQs', itemLabel: (props) => props.fields.question.value }
    ),

    overview: fields.markdoc({ label: 'Overview' }),
  },
}),
```

#### 2.7 Singletons (Navigation, Footer, Site Settings)

```ts
singletons: {
  navigation: singleton({
    label: 'Navigation',
    path: 'src/content/navigation',
    schema: {
      links: fields.array(
        fields.object({
          label: fields.text({ label: 'Label' }),
          href: fields.text({ label: 'URL' }),
          hasDropdown: fields.checkbox({ label: 'Has Dropdown' }),
          dropdownType: fields.select({
            label: 'Dropdown Type',
            options: [
              { label: 'None', value: 'none' },
              { label: 'Solutions', value: 'solutions' },
              { label: 'Industries', value: 'industries' },
              { label: 'Technologies', value: 'technologies' },
            ],
            defaultValue: 'none',
          }),
        }),
        { label: 'Nav Links', itemLabel: (props) => props.fields.label.value }
      ),
    },
  }),

  footer: singleton({
    label: 'Footer',
    path: 'src/content/footer',
    schema: {
      columns: fields.array(
        fields.object({
          title: fields.text({ label: 'Column Title' }),
          links: fields.array(
            fields.object({
              label: fields.text({ label: 'Label' }),
              href: fields.text({ label: 'URL' }),
            }),
            { label: 'Links', itemLabel: (props) => props.fields.label.value }
          ),
        }),
        { label: 'Columns', itemLabel: (props) => props.fields.title.value }
      ),
      socialLinks: fields.array(
        fields.object({
          platform: fields.text({ label: 'Platform' }),
          url: fields.text({ label: 'URL' }),
        }),
        { label: 'Social Links', itemLabel: (props) => props.fields.platform.value }
      ),
    },
  }),

  services: singleton({
    label: 'Services',
    path: 'src/content/services',
    schema: {
      items: fields.array(
        fields.object({
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
          icon: fields.text({ label: 'Icon' }),
          href: fields.text({ label: 'URL' }),
        }),
        { label: 'Services', itemLabel: (props) => props.fields.title.value }
      ),
    },
  }),

  clientLogos: singleton({
    label: 'Client Logos',
    path: 'src/content/client-logos',
    schema: {
      logos: fields.array(
        fields.object({
          name: fields.text({ label: 'Client Name' }),
          logo: fields.image({
            label: 'Logo',
            directory: 'public/images/logos',
            publicPath: '/images/logos',
          }),
        }),
        { label: 'Logos', itemLabel: (props) => props.fields.name.value }
      ),
    },
  }),
},
```

---

### Phase 3: Create Content Directory & Seed Data

#### 3.1 Content Directory Structure

```
src/content/
├── solutions/
│   ├── rescue/
│   │   └── index.mdoc        # Front matter (YAML) + Markdoc body
│   ├── scale-team/
│   │   └── index.mdoc
│   ├── build-mvp/
│   │   └── index.mdoc
│   └── ... (8 total)
├── industries/
│   ├── ecommerce/
│   │   └── index.mdoc
│   └── ... (6 total)
├── technologies/
│   ├── nextjs/
│   │   └── index.mdoc
│   └── ... (24+ total)
├── case-studies/
│   ├── vrt-sync/
│   │   └── index.mdoc
│   └── ... (3 total)
├── testimonials/
│   ├── john-doe/
│   │   └── index.yaml
│   └── ... (8+ total)
├── locations/
│   ├── denver/
│   │   └── index.mdoc
│   └── ... (3 total)
├── navigation/
│   └── index.yaml
├── footer/
│   └── index.yaml
├── services/
│   └── index.yaml
└── client-logos/
    └── index.yaml
```

#### 3.2 Example Content File

**`src/content/solutions/rescue/index.mdoc`:**

```yaml
---
title: Rescue & Replace
shortTitle: Rescue
description: Take over and stabilize failing software projects with expert teams.
icon: lifebuoy
sortOrder: 1
heroHeadline: Rescue Your Failing Software Project
heroSubheadline: We take over troubled codebases and turn them into reliable, scalable systems.
painPoints:
  - title: Missed Deadlines
    description: Your current team keeps pushing back delivery dates.
    icon: clock
  - title: Quality Issues
    description: Bugs and regressions are piling up faster than fixes.
    icon: bug
processSteps:
  - step: "1"
    title: Assess
    description: We audit your codebase, infrastructure, and team processes.
  - step: "2"
    title: Stabilize
    description: Fix critical bugs and shore up the foundation.
  - step: "3"
    title: Rebuild
    description: Systematically replace problem areas with solid code.
features:
  - title: Codebase Audit
    description: Comprehensive review of architecture, code quality, and technical debt.
    icon: search
  - title: Team Augmentation
    description: Our senior engineers embed with your team immediately.
    icon: users
faqs:
  - question: How quickly can you start?
    answer: We can begin an assessment within 48 hours of engagement.
  - question: Will you replace our existing team?
    answer: No — we work alongside your team and transfer knowledge throughout.
---

Your detailed overview content goes here as Markdoc...
```

#### 3.3 Write a Seed Script

Create a one-time script to extract current hardcoded data into content files:

```ts
// scripts/seed-keystatic.ts
import fs from 'fs'
import path from 'path'
import { SOLUTIONS, INDUSTRIES, TECHNOLOGIES, LOCATIONS, TESTIMONIALS_DATA } from '../src/lib/page-data'
import { CASE_STUDIES, NAV_LINKS, FOOTER_LINKS, SERVICES, CLIENT_LOGOS } from '../src/lib/constants'
import yaml from 'yaml'

const CONTENT_DIR = path.join(process.cwd(), 'src/content')

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true })
}

// Seed solutions
for (const solution of SOLUTIONS) {
  const dir = path.join(CONTENT_DIR, 'solutions', solution.slug)
  ensureDir(dir)

  // You'll need to manually extract per-page data (painPoints, etc.)
  // from each page component, or start with just the base data
  const frontmatter = {
    title: solution.title,
    shortTitle: solution.shortTitle,
    description: solution.description,
    icon: solution.icon,
    sortOrder: SOLUTIONS.indexOf(solution),
    painPoints: [],   // TODO: extract from page component
    processSteps: [], // TODO: extract from page component
    features: [],     // TODO: extract from page component
    faqs: [],         // TODO: extract from page component
  }

  const content = `---\n${yaml.stringify(frontmatter)}---\n\nOverview content here.\n`
  fs.writeFileSync(path.join(dir, 'index.mdoc'), content)
}

// Repeat for industries, technologies, locations, etc.
// Seed singletons (navigation, footer, services, client-logos)

console.log('Content seeded to src/content/')
```

Run with:

```bash
npx tsx scripts/seed-keystatic.ts
```

---

### Phase 4: Create the Reader & Data Layer

#### 4.1 Keystatic Reader

Create a centralized reader utility:

**`src/lib/keystatic-reader.ts`:**

```ts
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../keystatic.config'

export const reader = createReader(process.cwd(), keystaticConfig)
```

#### 4.2 Type-Safe Data Access Functions

Create convenience functions that replace the old imports:

**`src/lib/content.ts`:**

```ts
import { reader } from './keystatic-reader'

// Solutions
export async function getAllSolutions() {
  const slugs = await reader.collections.solutions.list()
  const solutions = await Promise.all(
    slugs.map(async (slug) => {
      const data = await reader.collections.solutions.read(slug)
      return { slug, ...data }
    })
  )
  return solutions.sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
}

export async function getSolution(slug: string) {
  return reader.collections.solutions.read(slug)
}

// Industries
export async function getAllIndustries() {
  const slugs = await reader.collections.industries.list()
  const industries = await Promise.all(
    slugs.map(async (slug) => {
      const data = await reader.collections.industries.read(slug)
      return { slug, ...data }
    })
  )
  return industries.sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
}

export async function getIndustry(slug: string) {
  return reader.collections.industries.read(slug)
}

// Technologies
export async function getAllTechnologies() {
  const slugs = await reader.collections.technologies.list()
  const technologies = await Promise.all(
    slugs.map(async (slug) => {
      const data = await reader.collections.technologies.read(slug)
      return { slug, ...data }
    })
  )
  return technologies.sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
}

export async function getTechnologiesByCategory(category: string) {
  const all = await getAllTechnologies()
  return all.filter((t) => t.category === category)
}

export async function getTechnology(slug: string) {
  return reader.collections.technologies.read(slug)
}

// Case Studies
export async function getAllCaseStudies() {
  const slugs = await reader.collections.caseStudies.list()
  return Promise.all(
    slugs.map(async (slug) => {
      const data = await reader.collections.caseStudies.read(slug)
      return { slug, ...data }
    })
  )
}

// Testimonials
export async function getAllTestimonials() {
  const slugs = await reader.collections.testimonials.list()
  return Promise.all(
    slugs.map(async (slug) => {
      const data = await reader.collections.testimonials.read(slug)
      return { slug, ...data }
    })
  )
}

export async function getTestimonialsByFilter(options: {
  industry?: string
  solution?: string
}) {
  const all = await getAllTestimonials()
  return all.filter((t) => {
    if (options.industry && !t.industries?.includes(options.industry)) return false
    if (options.solution && !t.solutions?.includes(options.solution)) return false
    return true
  })
}

// Singletons
export async function getNavigation() {
  return reader.singletons.navigation.read()
}

export async function getFooter() {
  return reader.singletons.footer.read()
}

export async function getServices() {
  return reader.singletons.services.read()
}

export async function getClientLogos() {
  return reader.singletons.clientLogos.read()
}
```

---

### Phase 5: Update Page Components

#### 5.1 Dynamic Route Pages

Convert static page files to dynamic routes that read from Keystatic.

**Before** — `src/app/solutions/rescue/page.tsx` (one file per solution):

```tsx
import { SOLUTIONS } from '@/lib/page-data'
const solution = SOLUTIONS.find(s => s.slug === 'rescue')
const PAIN_POINTS = [ /* hardcoded */ ]
```

**After** — `src/app/solutions/[slug]/page.tsx` (single dynamic route):

```tsx
import { getAllSolutions, getSolution } from '@/lib/content'
import { notFound } from 'next/navigation'

// Generate static paths at build time
export async function generateStaticParams() {
  const solutions = await getAllSolutions()
  return solutions.map((s) => ({ slug: s.slug }))
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = await getSolution(slug)
  if (!solution) return {}
  return {
    title: solution.title,
    description: solution.description,
  }
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = await getSolution(slug)
  if (!solution) notFound()

  return (
    <>
      <PageHero
        headline={solution.heroHeadline}
        subheadline={solution.heroSubheadline}
      />
      <PainPoints items={solution.painPoints} />
      <ProcessSteps steps={solution.processSteps} />
      <FeatureGrid features={solution.features} />
      <Testimonials filterSolution={slug} />
      <FAQ items={solution.faqs} />
    </>
  )
}
```

Apply the same pattern to:
- `src/app/industries/[slug]/page.tsx`
- `src/app/technologies/[slug]/page.tsx`
- `src/app/locations/[slug]/page.tsx`
- `src/app/case-studies/[slug]/page.tsx`

#### 5.2 Hub / Index Pages

**Before:**

```tsx
import { SOLUTIONS } from '@/lib/page-data'
// Maps over SOLUTIONS to render cards
```

**After:**

```tsx
import { getAllSolutions } from '@/lib/content'

export default async function SolutionsHub() {
  const solutions = await getAllSolutions()
  return (
    <SolutionsGrid items={solutions} />
  )
}
```

#### 5.3 Layout Components (Navbar, Footer)

**Before** — `Navbar` imports `NAV_LINKS` from `constants.ts`.

**After** — `Navbar` can either:

1. **Read at build time** via a server component wrapper, or
2. **Keep navigation hardcoded** (navigation rarely changes and is structural)

Recommended: Keep navigation as a singleton in Keystatic for consistency, but this is low-priority.

#### 5.4 Section Components (Testimonials, etc.)

Update shared components to accept data via props instead of importing globals:

**Before:**

```tsx
import { TESTIMONIALS_DATA } from '@/lib/page-data'

export function Testimonials({ filterSolution }: { filterSolution?: string }) {
  const items = TESTIMONIALS_DATA.filter(...)
  // ...
}
```

**After:**

```tsx
// Option A: Accept items as props (preferred for flexibility)
export function Testimonials({ items }: { items: TestimonialItem[] }) {
  // Render items
}

// The parent page fetches and filters:
const testimonials = await getTestimonialsByFilter({ solution: slug })
<Testimonials items={testimonials} />
```

---

### Phase 6: Clean Up

#### 6.1 Remove Old Data Files

Once all pages read from Keystatic, delete:

- `src/lib/page-data.ts` (replaced by `src/content/` + `src/lib/content.ts`)
- `src/lib/constants.ts` (replaced by singletons + `src/lib/content.ts`)
- Individual page files under `src/app/solutions/rescue/`, `src/app/solutions/scale-team/`, etc. (replaced by `src/app/solutions/[slug]/`)
- Same for industries, technologies, locations

#### 6.2 Update Types

The TypeScript types in `src/types/index.ts` (`SolutionDefinition`, `IndustryDefinition`, etc.) can be updated to match Keystatic's generated types, or you can keep them and map between them. Keystatic's reader is already typed based on your schema.

#### 6.3 Update `generateStaticParams`

Every dynamic route needs `generateStaticParams` so Next.js knows which pages to build:

```ts
export async function generateStaticParams() {
  const items = await getAllSolutions() // or getAllIndustries, etc.
  return items.map((item) => ({ slug: item.slug }))
}
```

---

### Phase 7: Deploy

#### Recommended: Vercel (or Netlify)

Deploy as a standard Next.js app. The platform automatically handles the hybrid routing:

- **Static pages** (all content pages with `generateStaticParams`) are pre-rendered at build time and served from the CDN edge — same performance as the current static export
- **Dynamic route** (`/keystatic` admin UI) runs as a serverless function — only invoked when editors access the admin panel
- No performance impact on end users

```bash
# Vercel
vercel deploy

# Or connect the GitHub repo in the Vercel dashboard for automatic deploys
```

For Netlify, install the Next.js adapter:

```bash
npm install @netlify/plugin-nextjs
```

#### Self-Hosted (Docker)

Set `output: "standalone"` in `next.config.ts` and build a container:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

#### GitHub Storage Mode (Recommended for Production)

For the deployed admin UI to persist edits, switch from `local` to `github` storage so that edits made through the `/keystatic` admin create commits directly on the repo:

**`keystatic.config.ts`:**

```ts
import { config, fields, collection, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: 'your-org/fetchly-website-next',
  },
  // ... collections and singletons
})
```

How it works:

1. Editor visits `your-site.com/keystatic` and authenticates with GitHub
2. Edits are saved as commits (or branches/PRs, configurable)
3. New commits trigger a rebuild on Vercel/Netlify
4. Updated static pages are deployed automatically

> **Note:** `local` storage works for local development but won't persist edits on a deployed server (the filesystem is ephemeral on serverless platforms). Use `github` storage for any deployed environment.

#### Environment Variables

For GitHub storage mode, set these in your hosting platform:

```env
# GitHub OAuth app credentials (created at github.com/settings/developers)
KEYSTATIC_GITHUB_CLIENT_ID=your_client_id
KEYSTATIC_GITHUB_CLIENT_SECRET=your_client_secret

# Your Keystatic Cloud project (optional, for Keystatic Cloud features)
KEYSTATIC_SECRET=your_secret
```

---

## Migration Checklist

- [ ] Install `@keystatic/core` and `@keystatic/next`
- [ ] Create `keystatic.config.ts` with all collection/singleton schemas
- [ ] Add Keystatic route handlers (`/keystatic`, `/api/keystatic`)
- [ ] Remove `output: "export"` from `next.config.ts`
- [ ] Create `src/content/` directory structure
- [ ] Write and run seed script to extract current data into content files
- [ ] Create `src/lib/keystatic-reader.ts` and `src/lib/content.ts`
- [ ] Convert solution pages to `[slug]` dynamic route
- [ ] Convert industry pages to `[slug]` dynamic route
- [ ] Convert technology pages to `[slug]` dynamic route
- [ ] Convert location pages to `[slug]` dynamic route
- [ ] Convert case study pages to `[slug]` dynamic route
- [ ] Update hub/index pages to use reader API
- [ ] Update section components to accept data via props
- [ ] Update Navbar/Footer to read from singletons (optional)
- [ ] Add `generateStaticParams` to all dynamic routes
- [ ] Update SEO metadata generation on all pages
- [ ] Delete old `page-data.ts` and `constants.ts`
- [ ] Delete individual static page files (replaced by dynamic routes)
- [ ] Test admin UI at `/keystatic`
- [ ] Test full site build
- [ ] Switch storage to `github` mode for production
- [ ] Set up GitHub OAuth credentials (environment variables)
- [ ] Deploy to Vercel/Netlify
- [ ] Verify admin UI works on deployed site
- [ ] Verify all content pages are statically generated (check build output)
