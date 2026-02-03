# Fetchly Funnel-Based Marketing Strategy

## Overview

Restructure the Fetchly website from a general services site into a funnel-based marketing engine with multiple entry points. Every page serves as a self-contained mini funnel that captures visitors based on how they found us — by industry, by situation, by technology, or by location.

---

## Current State

**7 pages:** Homepage, E-Commerce, SaaS, Services, Our Model, Case Studies, Privacy Policy

**Current nav:** eComm | SaaS | Our Model | Our Services | Case Studies

**Conversion points:** Homepage email capture, ChatForm on e-commerce page, "Get in Touch" buttons → `/intake/step-1`

---

## New Site Architecture

### Navigation Structure

```
┌──────────────────────────────────────────────────────────────────┐
│  Logo    Solutions ▾    Industries ▾    Resources    About ▾     │
│                                                [Book a Call]    │
└──────────────────────────────────────────────────────────────────┘
```

**Solutions (mega menu)**
- Build My MVP
- Scale My Team
- Rescue & Replace
- Modernize & Migrate
- QA & Testing
- Design & UX
- DevOps & Infrastructure
- AI Integration

**Industries (mega menu)**
- Healthcare & MedTech
- HR Tech & Recruitment
- E-Commerce & Marketplaces
- Logistics & Supply Chain
- FinTech & Real Estate
- Hospitality & Events

**About**
- Our Model
- Case Studies
- Careers (future)

**Resources** (future — blog, guides, etc.)

---

## Page Types & Funnel Structure

### A. SOLUTION PAGES (By Need / Situation)

These target visitors who know their problem but not necessarily their solution. Each page is a self-contained funnel optimized for a specific buyer situation.

---

#### A1. `/solutions/build-mvp` — Build My MVP

**Target search terms:**
- "mvp development agency"
- "startup development partner"
- "build my saas mvp"
- "custom software for startups"

**Funnel structure:**

| Section | Content |
|---------|---------|
| Hero | "From idea to launched product." / Subtext: "We've built 50+ MVPs for funded startups. Your first version ships in weeks, not months." / CTA: "Get a free product roadmap session" |
| Pain Points | "Burning runway on slow development" / "Technical co-founder gap" / "Agency delivered code you can't maintain" / "Can't hire fast enough" |
| Process | 1. Discovery & Architecture → 2. Sprint-based development → 3. Launch & iterate |
| Proof | Mini case study: Colorado Seed App, Energy Hire, or similar early-stage project |
| Stack | Tech badges: Next.js, Rails, React Native, PostgreSQL, AWS |
| FAQ | "How much does an MVP cost?" / "Do we own the code?" / "What happens after launch?" |
| CTA | "Book your free MVP planning session" |

**Relevant case studies:** Colorado Seed App, Energy Hire, Upskls, HomeSavi

---

#### A2. `/solutions/scale-team` — Scale My Team

**Target search terms:**
- "dedicated development team"
- "staff augmentation agency"
- "hire remote developers"
- "extend my engineering team"
- "nearshore development team"
- "nearshoring software development"

**Funnel structure:**

| Section | Content |
|---------|---------|
| Hero | "Your engineering team, extended." / Subtext: "Dedicated developers, designers, QA, and PMs who integrate with your team — not a revolving door of freelancers." / CTA: "Build your team" |
| Pain Points | "Can't hire fast enough for your roadmap" / "Freelancers disappear mid-project" / "Onboarding takes months" / "Your team is stretched too thin" |
| Model | The Fetchly model explained: dedicated engineer (150hrs) + 50 supplemental hrs + architect + designer + DevOps + PM + QA |
| Comparison | Staff Augmentation vs. Fetchly vs. Traditional Agency (existing component, reused) |
| Nearshore angle | US-based management, nearshore execution. Denver, Austin, Santa Barbara offices. Same timezone collaboration. |
| Proof | Testimonial from long-term engagement client |
| FAQ | "How fast can you ramp up?" / "Do we get the same developers?" / "How does communication work?" |
| CTA | "Start scaling your team this week" |

---

#### A3. `/solutions/rescue` — Rescue & Replace

**Target search terms:**
- "replace development agency"
- "fired my dev agency"
- "agency handoff"
- "rescue failing software project"
- "take over existing codebase"
- "fix broken software project"
- "development agency replacement"

**Funnel structure:**

| Section | Content |
|---------|---------|
| Hero | "Your last agency didn't work out. We get it." / Subtext: "We've rescued dozens of projects from failed agencies, abandoned codebases, and missed deadlines. We'll pick up where they left off — or start fresh." / CTA: "Get a free codebase assessment" |
| Pain Points | "Agency ghosted you mid-project" / "Code is unmaintainable" / "Budget blown, product half-built" / "No documentation, no tests, no handoff" |
| Our approach | 1. Codebase audit & honest assessment → 2. Triage: fix, refactor, or rebuild → 3. Get back on track with a real team |
| Trust signals | "We'll tell you the truth about your code — even if it means recommending you don't hire us" |
| Proof | Case study of a rescue project (if available from portfolio) |
| FAQ | "Can you work with our existing codebase?" / "How do you handle agency transitions?" / "What if the code is unsalvageable?" |
| CTA | "Get your free codebase assessment" |

---

#### A4. `/solutions/modernize` — Modernize & Migrate

**Target search terms:**
- "legacy code modernization"
- "software migration agency"
- "replatform legacy application"
- "technical debt reduction"

**Funnel structure:**

| Section | Content |
|---------|---------|
| Hero | "Your legacy stack is holding you back." / Subtext: "We modernize aging applications incrementally — no big-bang rewrites, no downtime, no drama." / CTA: "Get a free modernization roadmap" |
| Pain Points | "Can't hire developers for your outdated stack" / "Security patches have stopped" / "New features take 10x longer than they should" / "Deployment is manual and terrifying" |
| Approach | Incremental migration: audit → plan → migrate module by module → verify → cutover |
| Technologies | Links to specific technology migration pages (see Section C) |
| Proof | Migration case study with metrics |
| CTA | "Book your free modernization assessment" |

---

#### A5. `/solutions/qa-testing` — QA & Testing

**Target search terms:**
- "outsource QA testing"
- "software testing agency"
- "hire QA team"
- "automated testing services"
- "manual testing company"

**Funnel structure:**

| Section | Content |
|---------|---------|
| Hero | "Ship with confidence." / Subtext: "Dedicated QA engineers who find the bugs before your users do. Manual testing, automation, performance, and security." / CTA: "Start testing today" |
| Pain Points | "Developers testing their own code" / "Bugs found by customers, not QA" / "No test automation" / "Release anxiety" |
| Services | Manual testing / Automated testing (Cypress, Playwright) / Performance testing / Accessibility testing / Security testing |
| Process | 1. Test strategy & coverage analysis → 2. Build test suites → 3. Integrate into CI/CD → 4. Continuous reporting |
| Proof | Metrics: bugs caught pre-release, test coverage improvements |
| CTA | "Get a free test coverage audit" |

---

#### A6. `/solutions/design` — Design & UX

**Target search terms:**
- "ui ux design agency"
- "product design services"
- "saas design agency"
- "app design company"

**Funnel structure:**

| Section | Content |
|---------|---------|
| Hero | "Design that converts, not just looks good." / Subtext: "Product design, UI/UX, design systems, and prototyping — from designers who understand engineering constraints." / CTA: "Start a design project" |
| Pain Points | "Beautiful mockups that can't be built" / "Design and dev are out of sync" / "No design system, inconsistent UI" / "Users can't figure out your product" |
| Services | UI/UX Design / Design Systems / Prototyping & User Testing / Mobile App Design / Dashboard & Data Visualization |
| Differentiator | "Our designers code. Our developers design. No handoff gaps." |
| Proof | Visual showcase of design work |
| CTA | "Book a free design consultation" |

---

#### A7. `/solutions/devops` — DevOps & Infrastructure

**Target search terms:**
- "devops consulting agency"
- "cloud infrastructure setup"
- "ci cd pipeline setup"
- "docker kubernetes consulting"

**Funnel structure:**

| Section | Content |
|---------|---------|
| Hero | "Deploy on Friday without sweating." / Subtext: "CI/CD pipelines, containerization, cloud architecture, and monitoring — so your team ships faster and sleeps better." / CTA: "Get a free infrastructure audit" |
| Pain Points | "Manual deployments" / "No staging environment" / "'It works on my machine'" / "AWS bill is a mystery" |
| Services | CI/CD (GitHub Actions) / Docker & containerization / AWS architecture / Monitoring & alerting / Cost optimization |
| Stack | Docker, AWS, GitHub Actions, Dokku, Heroku, Terraform |
| CTA | "Book your free DevOps assessment" |

---

#### A8. `/solutions/ai` — AI Integration

**Target search terms:**
- "ai integration development"
- "openai integration agency"
- "add ai to my product"
- "ai features development"
- "llm integration services"

**Funnel structure:**

| Section | Content |
|---------|---------|
| Hero | "Add AI to your product in weeks, not months." / Subtext: "We integrate OpenAI, Azure AI, and custom ML models into existing products — practical AI that solves real problems, not science projects." / CTA: "Explore AI for your product" |
| Use cases | Semantic search / Intelligent matching / Content generation / Document processing / Chatbots & assistants / Recommendation engines |
| Proof | Energy Hire case study: AI-powered job matching with OpenAI + PGVector |
| Stack | OpenAI, Azure OpenAI, PGVector, LangChain, embeddings |
| FAQ | "Do we need our own model?" / "How much data do we need?" / "What about data privacy?" |
| CTA | "Book a free AI feasibility session" |

---

### B. INDUSTRY PAGES (By Vertical)

These target visitors who identify by their industry. Each page features industry-specific language, relevant case studies, and compliance/domain knowledge proof.

---

#### B1. `/industries/healthcare` — Healthcare & MedTech

**Target search terms:**
- "healthcare software development"
- "medtech development agency"
- "hipaa compliant app development"
- "medical device software"
- "health tech startup development"

**Content focus:**
- HIPAA compliance awareness
- EHR/EMR integrations
- Patient portal development
- Medical device software (FDA considerations)
- Telehealth platforms

**Proof:** TrillaMed (GSA medical equipment e-commerce), Ossera Health, CareTracker

**Unique selling point:** "We understand healthcare compliance isn't optional — it's architected in from day one."

---

#### B2. `/industries/hr-tech` — HR Tech & Recruitment

**Target search terms:**
- "hr tech development company"
- "recruitment platform development"
- "build hr software"
- "talent acquisition platform"
- "peo software development"

**Content focus:**
- Multi-tenant HR platforms
- AI-powered matching algorithms
- ATS integrations
- Payroll/benefits system connections
- Compliance (labor law, data privacy)

**Proof:** AmplifyHR (PEO platform), Energy Hire (AI matching), Upskls (skills-based hiring)

**Unique selling point:** "We've built platforms that match thousands of candidates to opportunities using AI — not keyword filters."

---

#### B3. `/industries/ecommerce` — E-Commerce & Marketplaces

**Evolves from existing `/e-commerce` page.**

**Target search terms:**
- "shopify plus development agency"
- "custom ecommerce development"
- "marketplace development"
- "headless commerce development"
- "shopify app development"

**Content focus:**
- Shopify Plus partner expertise
- Custom marketplace development
- Headless commerce (Shopify + Next.js)
- Subscription commerce
- Payment processing integration

**Proof:** Oats Overnight (250K+ subscribers, 94% subscription revenue), Ministry of Tattoos, Vintage Cards, Travel Stamps, TrillaMed

**Unique selling point:** "From Shopify storefronts to custom marketplaces — we've built commerce platforms that process millions in transactions."

---

#### B4. `/industries/logistics` — Logistics & Supply Chain

**Target search terms:**
- "logistics software development"
- "supply chain app development"
- "freight management software"
- "shipping platform development"

**Content focus:**
- Real-time tracking systems
- Rate management platforms
- Mobile commissioning apps
- API integrations with carriers
- Warehouse/inventory management

**Proof:** Ship Angel, Freight130, Armada Power (mobile commissioning)

**Unique selling point:** "We build logistics platforms that handle the complexity of real-world supply chains — rates, routes, tracking, and compliance."

---

#### B5. `/industries/fintech` — FinTech & Real Estate

**Target search terms:**
- "fintech development company"
- "real estate software development"
- "mortgage platform development"
- "proptech development agency"
- "financial app development"

**Content focus:**
- Payment processing (Stripe, custom gateways)
- Mortgage/lending platforms
- Property management software
- Financial data security
- Regulatory compliance

**Proof:** Home Loan Gurus, HomeSavi, Colorado Seed App, Simpler Trading, State Affairs

**Unique selling point:** "Financial software where security and compliance aren't afterthoughts — they're the foundation."

---

#### B6. `/industries/hospitality` — Hospitality & Events

**Target search terms:**
- "event management software development"
- "hospitality tech development"
- "restaurant technology platform"
- "event platform development"

**Content focus:**
- Event management platforms
- Booking and reservation systems
- Venue management
- Page builders for events
- Ticketing integrations

**Proof:** City Winery, EventSquid (page builder), Events Web

**Unique selling point:** "We build hospitality platforms that handle the chaos of real-world events — bookings, tickets, pages, and payments."

---

### C. TECHNOLOGY PAGES (By Stack)

These target visitors with a specific technical need. They function as SEO-driven mini funnels with high conversion intent. Grouped into four categories.

---

#### Category 1: Migration Pages (Highest intent)

Each migration page follows this funnel structure:
1. **Pain hook** — "Still running [old version]?"
2. **Risk amplification** — Security, hiring difficulty, ecosystem decay
3. **Our approach** — Audit → Plan → Incremental migration → Verify
4. **Proof** — Project count, specific migration example
5. **FAQ** — Timeline, downtime, cost questions
6. **CTA** — "Get a free migration audit"

| Route | Page | Target searches |
|-------|------|-----------------|
| `/technologies/rails-migration` | Rails 5/6 → Rails 7/8 | "rails migration agency", "upgrade rails version", "rails 5 to 7" |
| `/technologies/vue-migration` | Vue 2 → Vue 3 | "vue 2 to vue 3 migration", "vue migration service" |
| `/technologies/react-modernization` | Legacy React → Modern React | "react class to hooks migration", "upgrade react app" |
| `/technologies/heroku-migration` | Heroku → AWS / Self-hosted | "migrate off heroku", "heroku alternative", "heroku to aws" |
| `/technologies/angular-migration` | AngularJS → Modern Framework | "angularjs migration", "angularjs to react", "angular upgrade" |
| `/technologies/database-migration` | MongoDB ↔ PostgreSQL | "mongodb to postgresql migration", "database migration service" |
| `/technologies/legacy-modernization` | PHP/Legacy → Modern Stack | "php to node migration", "legacy app modernization" |

---

#### Category 2: "Build With" Pages (Mid intent)

Each page positions Fetchly as experts in that specific technology with:
1. **Value prop** — Why this technology for your project
2. **Our expertise** — Project count, years of experience
3. **What we build** — Types of applications in this stack
4. **Proof** — Relevant case study
5. **CTA** — "Start your [technology] project"

| Route | Page | Target searches |
|-------|------|-----------------|
| `/technologies/nextjs` | Next.js Development | "next.js development agency", "nextjs developers for hire" |
| `/technologies/rails` | Ruby on Rails Development | "rails development company", "ruby on rails agency" |
| `/technologies/react` | React Development | "react development agency", "hire react developers" |
| `/technologies/react-native` | React Native / Mobile | "react native development company", "mobile app agency" |
| `/technologies/python` | Python / Django | "python development agency", "django developers" |
| `/technologies/vuejs` | Vue.js Development | "vue.js development company", "hire vue developers" |

---

#### Category 3: Platform Pages (Niche, high-converting)

| Route | Page | Target searches |
|-------|------|-----------------|
| `/technologies/shopify` | Shopify Development | "shopify plus agency", "custom shopify development", "shopify app developer" |
| `/technologies/contentful` | Contentful / Headless CMS | "contentful developer", "headless cms implementation" |
| `/technologies/stripe` | Stripe Integration | "stripe integration developer", "payment system development" |
| `/technologies/aws` | AWS Architecture | "aws consulting agency", "aws architecture design" |

---

#### Category 4: Capability Pages (Broader intent)

| Route | Page | Target searches |
|-------|------|-----------------|
| `/technologies/ai-ml` | AI/ML Integration | "openai integration", "add ai to my app", "ml development agency" |
| `/technologies/api-development` | API Development | "api development company", "rest api development", "graphql agency" |
| `/technologies/devops-docker` | DevOps & Docker | "docker consulting", "ci cd setup service", "devops agency" |
| `/technologies/postgresql` | PostgreSQL & Databases | "postgresql consulting", "database optimization", "database design" |

---

### D. LOCATION PAGES (Local SEO)

Three location pages targeting local search. Each page is a full landing page (not just metatags) with location-specific content.

---

#### D1. `/locations/denver` — Software Development Agency in Denver

**Target search terms:**
- "software development agency denver"
- "denver web development company"
- "app development denver colorado"
- "denver tech company"
- "custom software denver"

**Content:**

| Section | Content |
|---------|---------|
| Hero | "Denver's development partner for ambitious companies." / Office address, team photo |
| Local proof | Denver-area clients (University of Denver, Colorado-based projects) |
| Denver tech scene | Brief positioning within Denver's tech ecosystem |
| Services summary | Quick grid linking to solution pages |
| Team | Denver-based team members |
| CTA | "Visit us in Denver" / "Book a call with our Denver team" |

**Schema markup:** LocalBusiness, address, geo coordinates, office hours

---

#### D2. `/locations/austin` — Software Development Agency in Austin

**Target search terms:**
- "software development agency austin"
- "austin web development company"
- "app development austin texas"
- "austin tech agency"

**Content:** Same structure as Denver, with Austin-specific clients, tech scene positioning, and local team.

**Schema markup:** LocalBusiness with Austin address

---

#### D3. `/locations/santa-barbara` — Software Development Agency in Santa Barbara

**Target search terms:**
- "software development agency santa barbara"
- "santa barbara web development"
- "tech company santa barbara"

**Content:** Same structure, emphasizing the CA tech corridor angle.

**Schema markup:** LocalBusiness with Santa Barbara address

---

## Homepage Restructure

The homepage becomes the hub that routes visitors into the right funnel.

### New Homepage Section Flow

```
1.  HERO
    "Your Dev Team as a Service"
    Email capture (keep existing)
    [Book a Call] [See How It Works]

2.  LOGO MARQUEE
    Client logos (existing component)

3.  STATS BAR (new)
    "100+ Projects" | "6 Industries" | "50+ Engineers" | "3 US Offices"

4.  WHO WE HELP — Industry Cards (new)
    6 industry cards linking to vertical pages
    Healthcare | HR Tech | E-Commerce | Logistics | FinTech | Hospitality

5.  SOLUTIONS GRID (new)
    "What brings you here?"
    Build MVP | Scale Team | Rescue & Replace | Modernize
    Each links to the relevant solution page

6.  BENTO GRID (existing)
    Visual portfolio proof

7.  HOW IT WORKS — Process Steps (new/moved)
    3-step process on homepage
    1. Discovery → 2. Build → 3. Launch & Scale

8.  COMPARISON TABLE (existing, moved up)
    Staff Aug vs Fetchly vs Agency

9.  CASE STUDIES (existing)
    2-3 featured case studies with ROI numbers

10. TESTIMONIALS (existing)
    Client quotes carousel

11. TECHNOLOGIES (new)
    "Technologies we work with"
    Logo/badge grid: Rails, React, Next.js, Shopify, Python, Docker, AWS, OpenAI
    Link: "See all technologies →"

12. FAQ (existing)
    Objection handling

13. LOCATIONS BAR (new)
    "Offices in Denver, Austin & Santa Barbara"
    Links to location pages

14. FINAL CTA (existing)
    "Ready to build?"
```

---

## SEO Strategy

### Meta Tags & Structured Data

**Every page gets:**
- Unique `<title>` optimized for primary search term
- Unique `<meta description>` with CTA language
- Open Graph tags (title, description, image)
- Twitter Card tags
- Canonical URL

**Solution pages add:**
- `Service` schema markup
- `FAQ` schema markup (from FAQ section)
- `BreadcrumbList` schema

**Industry pages add:**
- `Service` schema with industry-specific `areaServed`
- `FAQ` schema
- Related case study `Article` schema

**Technology pages add:**
- `Service` schema with technology in name
- `FAQ` schema
- `TechArticle` schema where appropriate

**Location pages add:**
- `LocalBusiness` schema with full NAP (Name, Address, Phone)
- `GeoCoordinates`
- `openingHoursSpecification`
- `areaServed`

### Internal Linking Strategy

Every page should link to related pages across axes:

- Industry page → relevant technology pages ("We build healthcare apps with Next.js and Rails")
- Technology page → relevant industry pages ("Used by our healthcare and fintech clients")
- Solution page → relevant case studies and industry pages
- Location page → all solution pages with local framing

This creates a web of internal links that strengthens SEO for all pages.

### Title Tag Patterns

| Page Type | Title Pattern | Example |
|-----------|--------------|---------|
| Solution | `[Solution] - [Benefit] | Fetchly` | "Scale My Team - Dedicated Developers on Demand \| Fetchly" |
| Industry | `[Industry] Software Development | Fetchly` | "Healthcare Software Development \| Fetchly" |
| Technology | `[Technology] Development Agency | Fetchly` | "Next.js Development Agency \| Fetchly" |
| Migration | `[From] to [To] Migration Services | Fetchly` | "Rails 5 to 7 Migration Services \| Fetchly" |
| Location | `Software Development Agency in [City] | Fetchly` | "Software Development Agency in Denver \| Fetchly" |

---

## Conversion Architecture

### CTA Hierarchy (per page)

Every funnel page has exactly **two CTAs** at different commitment levels:

| Placement | CTA Type | Example | Commitment |
|-----------|----------|---------|------------|
| Hero | Soft CTA | "Get a free [X] audit" | Low — lead capture |
| Final section | Hard CTA | "Start your project" / "Book a call" | High — sales conversation |

### Lead Capture Offers (by page type)

| Page Type | Lead Magnet / Soft CTA |
|-----------|----------------------|
| Build MVP | Free product roadmap session |
| Scale Team | Free team planning consultation |
| Rescue | Free codebase assessment |
| Modernize | Free modernization roadmap |
| QA | Free test coverage audit |
| Design | Free design consultation |
| DevOps | Free infrastructure audit |
| AI | Free AI feasibility session |
| Migration (any) | Free migration audit |
| Industry (any) | Free discovery call |
| Location (any) | Free in-person consultation |

### Shared Hard CTA

All pages converge to the same conversion endpoint: `/intake/step-1` (existing multi-step form) or a Calendly/booking link for "Book a Call."

---

## Implementation Priority

### Phase 1 — Foundation (implement first)
1. Homepage restructure (add stats bar, industry cards, solutions grid, technologies section, locations bar)
2. Navigation restructure (Solutions, Industries, About mega menus)
3. SEO infrastructure (metadata patterns, schema markup utilities)

### Phase 2 — Highest-Converting Pages
4. `/solutions/rescue` — Rescue & Replace (unique positioning, low competition)
5. `/solutions/scale-team` — Scale My Team (bread and butter offering)
6. `/solutions/build-mvp` — Build My MVP (high volume search)
7. Evolve `/e-commerce` → `/industries/ecommerce` (strongest case studies)

### Phase 3 — Technology & Migration Pages
8. `/technologies/rails-migration` (strongest portfolio evidence)
9. `/technologies/shopify` (Shopify Plus partner positioning)
10. `/technologies/nextjs` (modern stack, high search volume)
11. `/technologies/rails` (32 projects of proof)
12. Remaining technology pages

### Phase 4 — Industry Verticals
13. `/industries/healthcare` (TrillaMed, Ossera, CareTracker)
14. `/industries/hr-tech` (AmplifyHR, Energy Hire, Upskls)
15. `/industries/logistics` (Ship Angel, Freight130, Armada Power)
16. `/industries/fintech` (Home Loan Gurus, HomeSavi, Simpler Trading)
17. `/industries/hospitality` (City Winery, EventSquid)

### Phase 5 — Location & Remaining
18. `/locations/denver`
19. `/locations/austin`
20. `/locations/santa-barbara`
21. Remaining solution pages (QA, Design, DevOps, AI)

---

## Page Count Summary

| Category | Pages | Priority |
|----------|-------|----------|
| Homepage (restructured) | 1 | Phase 1 |
| Solution pages | 8 | Phase 2-5 |
| Industry pages | 6 | Phase 2-4 |
| Technology: Migration | 7 | Phase 3 |
| Technology: Build With | 6 | Phase 3 |
| Technology: Platform | 4 | Phase 3 |
| Technology: Capability | 4 | Phase 3 |
| Location pages | 3 | Phase 5 |
| **Total new pages** | **38** | |
| **Total site pages** | **~45** (including existing) | |

---

## Mini Funnel Template (Universal Page Structure)

Every new page follows this structure, customized per category:

```
┌─────────────────────────────────────────────┐
│  1. HERO                                    │
│     Headline (pain-aware or aspiration)      │
│     Subtext (proof + specificity)            │
│     [Soft CTA]  [Secondary link]            │
├─────────────────────────────────────────────┤
│  2. PAIN POINTS / PROBLEM STATEMENT         │
│     3-4 specific problems with icons         │
│     (validates why they're on this page)     │
├─────────────────────────────────────────────┤
│  3. OUR APPROACH / PROCESS                  │
│     3-step numbered process                  │
│     (makes the solution feel manageable)     │
├─────────────────────────────────────────────┤
│  4. SERVICES or CAPABILITIES                │
│     Feature grid of what's included          │
│     (scope clarity)                          │
├─────────────────────────────────────────────┤
│  5. PROOF                                   │
│     Mini case study with metrics             │
│     OR testimonial from relevant client      │
│     (builds confidence)                      │
├─────────────────────────────────────────────┤
│  6. CREDIBILITY BAR                         │
│     Stats, tech badges, or logo wall         │
│     (authority signal)                       │
├─────────────────────────────────────────────┤
│  7. FAQ                                     │
│     4-6 objection-handling questions         │
│     (removes friction)                       │
├─────────────────────────────────────────────┤
│  8. FINAL CTA                               │
│     Hard CTA with urgency framing            │
│     (conversion)                             │
└─────────────────────────────────────────────┘
```

---

## Technical Implementation Notes

### Component Reuse

All new pages are built from existing section components:
- `PageHero` — hero with title, subtitle, description, CTA buttons, optional image
- `FeatureGrid` — pain points, capabilities, services (configurable columns and icons)
- `ProcessSteps` — numbered process steps
- `CaseStudyGrid` — filtered case studies
- `Testimonials` — testimonials carousel (filterable)
- `FAQ` — accordion FAQ with progress animation
- `CTA` — final call-to-action section
- `StatsGrid` — statistics display
- `LogoMarquee` — client logo scroll
- `Comparison` — comparison table

### New Components Needed

1. **`StatsBar`** — Horizontal stats counter bar (animated numbers)
2. **`IndustryGrid`** — Card grid linking to industry pages (icon + title + description)
3. **`SolutionsGrid`** — Card grid linking to solution pages
4. **`TechBadgeGrid`** — Technology logo/badge grid
5. **`LocationsBar`** — Footer-area section with office locations + links
6. **`MegaMenu`** — Navigation mega menu for Solutions and Industries dropdowns
7. **`Breadcrumbs`** — Breadcrumb navigation for SEO and UX
8. **`SchemaMarkup`** — Utility component for injecting JSON-LD structured data

### Data Architecture

Extend `/src/lib/constants.ts` with:
- `SOLUTIONS` — solution page definitions
- `INDUSTRIES` — industry page definitions
- `TECHNOLOGIES` — technology page definitions
- `LOCATIONS` — location data (addresses, coordinates)
- Per-page FAQ, features, process steps defined locally in each page file (current pattern)

### Routing Structure

```
/src/app/
├── page.tsx                          # Homepage (restructured)
├── solutions/
│   ├── build-mvp/page.tsx
│   ├── scale-team/page.tsx
│   ├── rescue/page.tsx
│   ├── modernize/page.tsx
│   ├── qa-testing/page.tsx
│   ├── design/page.tsx
│   ├── devops/page.tsx
│   └── ai/page.tsx
├── industries/
│   ├── healthcare/page.tsx
│   ├── hr-tech/page.tsx
│   ├── ecommerce/page.tsx           # Evolved from /e-commerce
│   ├── logistics/page.tsx
│   ├── fintech/page.tsx
│   └── hospitality/page.tsx
├── technologies/
│   ├── rails-migration/page.tsx
│   ├── vue-migration/page.tsx
│   ├── react-modernization/page.tsx
│   ├── heroku-migration/page.tsx
│   ├── angular-migration/page.tsx
│   ├── database-migration/page.tsx
│   ├── legacy-modernization/page.tsx
│   ├── nextjs/page.tsx
│   ├── rails/page.tsx
│   ├── react/page.tsx
│   ├── react-native/page.tsx
│   ├── python/page.tsx
│   ├── vuejs/page.tsx
│   ├── shopify/page.tsx
│   ├── contentful/page.tsx
│   ├── stripe/page.tsx
│   ├── aws/page.tsx
│   ├── ai-ml/page.tsx
│   ├── api-development/page.tsx
│   ├── devops-docker/page.tsx
│   └── postgresql/page.tsx
├── locations/
│   ├── denver/page.tsx
│   ├── austin/page.tsx
│   └── santa-barbara/page.tsx
├── our-model/page.tsx                # Existing
├── services/page.tsx                 # Existing (may redirect to /solutions)
├── case-studies/page.tsx             # Existing
├── saas-home/page.tsx                # Existing (may evolve or redirect)
└── privacy-policy/page.tsx           # Existing
```
