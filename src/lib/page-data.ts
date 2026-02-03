import type {
  SolutionDefinition,
  IndustryDefinition,
  TechnologyDefinition,
  LocationDefinition,
  TestimonialItem,
} from '@/types';

// ── Solutions ────────────────────────────────────────────────────────────────

export const SOLUTIONS: SolutionDefinition[] = [
  {
    slug: 'rescue',
    title: 'Rescue & Replace',
    shortTitle: 'Rescue',
    description: 'Your last agency didn\'t work out. We pick up where they left off — or start fresh.',
    icon: 'lifebuoy',
    href: '/solutions/rescue',
  },
  {
    slug: 'scale-team',
    title: 'Scale My Team',
    shortTitle: 'Scale Team',
    description: 'Dedicated developers, designers, QA, and PMs who integrate with your team.',
    icon: 'users',
    href: '/solutions/scale-team',
  },
  {
    slug: 'build-mvp',
    title: 'Build My MVP',
    shortTitle: 'Build MVP',
    description: 'From idea to launched product. Your first version ships in weeks, not months.',
    icon: 'rocket',
    href: '/solutions/build-mvp',
  },
  {
    slug: 'modernize',
    title: 'Modernize & Migrate',
    shortTitle: 'Modernize',
    description: 'We modernize aging applications incrementally — no big-bang rewrites.',
    icon: 'refresh',
    href: '/solutions/modernize',
  },
  {
    slug: 'qa-testing',
    title: 'QA & Testing',
    shortTitle: 'QA & Testing',
    description: 'Dedicated QA engineers who find the bugs before your users do.',
    icon: 'shield-check',
    href: '/solutions/qa-testing',
  },
  {
    slug: 'design',
    title: 'Design & UX',
    shortTitle: 'Design & UX',
    description: 'Product design, UI/UX, design systems, and prototyping from designers who understand engineering.',
    icon: 'palette',
    href: '/solutions/design',
  },
  {
    slug: 'devops',
    title: 'DevOps & Infrastructure',
    shortTitle: 'DevOps',
    description: 'CI/CD pipelines, containerization, cloud architecture, and monitoring.',
    icon: 'server',
    href: '/solutions/devops',
  },
  {
    slug: 'ai',
    title: 'AI Integration',
    shortTitle: 'AI',
    description: 'We integrate OpenAI, Azure AI, and custom ML models into existing products.',
    icon: 'sparkles',
    href: '/solutions/ai',
  },
];

// ── Industries ───────────────────────────────────────────────────────────────

export const INDUSTRIES: IndustryDefinition[] = [
  {
    slug: 'ecommerce',
    title: 'E-Commerce & Marketplaces',
    shortTitle: 'E-Commerce',
    description: 'From Shopify storefronts to custom marketplaces processing millions in transactions.',
    icon: 'shopping-cart',
    href: '/industries/ecommerce',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & MedTech',
    shortTitle: 'Healthcare',
    description: 'HIPAA-compliant platforms, patient portals, and medical device software.',
    icon: 'heart-pulse',
    href: '/industries/healthcare',
  },
  {
    slug: 'hr-tech',
    title: 'HR Tech & Recruitment',
    shortTitle: 'HR Tech',
    description: 'Multi-tenant HR platforms, AI-powered matching, and ATS integrations.',
    icon: 'briefcase',
    href: '/industries/hr-tech',
  },
  {
    slug: 'logistics',
    title: 'Logistics & Supply Chain',
    shortTitle: 'Logistics',
    description: 'Real-time tracking, rate management, and carrier API integrations.',
    icon: 'truck',
    href: '/industries/logistics',
  },
  {
    slug: 'fintech',
    title: 'FinTech & Real Estate',
    shortTitle: 'FinTech',
    description: 'Payment processing, mortgage platforms, and property management software.',
    icon: 'banknotes',
    href: '/industries/fintech',
  },
  {
    slug: 'hospitality',
    title: 'Hospitality & Events',
    shortTitle: 'Hospitality',
    description: 'Event management platforms, booking systems, and ticketing integrations.',
    icon: 'calendar',
    href: '/industries/hospitality',
  },
];

// ── Technologies ─────────────────────────────────────────────────────────────

export const TECHNOLOGIES: TechnologyDefinition[] = [
  // Migration pages
  { slug: 'rails-migration', title: 'Rails 5/6 to Rails 7/8 Migration', shortTitle: 'Rails Migration', category: 'migration', description: 'Upgrade your Rails application to the latest version with zero downtime.', icon: 'rails', href: '/technologies/rails-migration' },
  { slug: 'vue-migration', title: 'Vue 2 to Vue 3 Migration', shortTitle: 'Vue Migration', category: 'migration', description: 'Migrate your Vue 2 application to Vue 3 with Composition API.', icon: 'vue', href: '/technologies/vue-migration' },
  { slug: 'react-modernization', title: 'Legacy React to Modern React', shortTitle: 'React Modernization', category: 'migration', description: 'Upgrade class components to hooks and modern React patterns.', icon: 'react', href: '/technologies/react-modernization' },
  { slug: 'heroku-migration', title: 'Heroku to AWS Migration', shortTitle: 'Heroku Migration', category: 'migration', description: 'Migrate off Heroku to AWS or self-hosted infrastructure.', icon: 'cloud', href: '/technologies/heroku-migration' },
  { slug: 'angular-migration', title: 'AngularJS to Modern Framework', shortTitle: 'Angular Migration', category: 'migration', description: 'Migrate from AngularJS to React, Vue, or modern Angular.', icon: 'angular', href: '/technologies/angular-migration' },
  { slug: 'database-migration', title: 'Database Migration Services', shortTitle: 'Database Migration', category: 'migration', description: 'Migrate between MongoDB, PostgreSQL, and other databases.', icon: 'database', href: '/technologies/database-migration' },
  { slug: 'legacy-modernization', title: 'Legacy Stack Modernization', shortTitle: 'Legacy Modernization', category: 'migration', description: 'Migrate from PHP, .NET, or other legacy stacks to modern frameworks.', icon: 'code', href: '/technologies/legacy-modernization' },

  // Build-with pages
  { slug: 'nextjs', title: 'Next.js Development', shortTitle: 'Next.js', category: 'build-with', description: 'Full-stack React applications with server-side rendering and static generation.', icon: 'nextjs', href: '/technologies/nextjs' },
  { slug: 'rails', title: 'Ruby on Rails Development', shortTitle: 'Rails', category: 'build-with', description: 'Rapid web application development with Ruby on Rails.', icon: 'rails', href: '/technologies/rails' },
  { slug: 'react', title: 'React Development', shortTitle: 'React', category: 'build-with', description: 'Interactive user interfaces with React and the modern ecosystem.', icon: 'react', href: '/technologies/react' },
  { slug: 'react-native', title: 'React Native Development', shortTitle: 'React Native', category: 'build-with', description: 'Cross-platform mobile apps for iOS and Android from a single codebase.', icon: 'mobile', href: '/technologies/react-native' },
  { slug: 'python', title: 'Python & Django Development', shortTitle: 'Python', category: 'build-with', description: 'Backend services, APIs, and data-driven applications with Python.', icon: 'python', href: '/technologies/python' },
  { slug: 'vuejs', title: 'Vue.js Development', shortTitle: 'Vue.js', category: 'build-with', description: 'Progressive web applications with Vue.js and Nuxt.', icon: 'vue', href: '/technologies/vuejs' },

  // Platform pages
  { slug: 'shopify', title: 'Shopify Development', shortTitle: 'Shopify', category: 'platform', description: 'Shopify Plus themes, custom apps, and headless commerce.', icon: 'shopify', href: '/technologies/shopify' },
  { slug: 'contentful', title: 'Contentful & Headless CMS', shortTitle: 'Contentful', category: 'platform', description: 'Headless CMS implementation and content architecture.', icon: 'contentful', href: '/technologies/contentful' },
  { slug: 'stripe', title: 'Stripe Integration', shortTitle: 'Stripe', category: 'platform', description: 'Payment processing, subscriptions, and marketplace payouts.', icon: 'stripe', href: '/technologies/stripe' },
  { slug: 'aws', title: 'AWS Architecture', shortTitle: 'AWS', category: 'platform', description: 'Cloud architecture, deployment automation, and cost optimization.', icon: 'aws', href: '/technologies/aws' },

  // Capability pages
  { slug: 'ai-ml', title: 'AI & Machine Learning', shortTitle: 'AI/ML', category: 'capability', description: 'OpenAI integration, custom ML models, and intelligent features.', icon: 'sparkles', href: '/technologies/ai-ml' },
  { slug: 'api-development', title: 'API Development', shortTitle: 'APIs', category: 'capability', description: 'REST and GraphQL API design, development, and integration.', icon: 'code', href: '/technologies/api-development' },
  { slug: 'devops-docker', title: 'DevOps & Docker', shortTitle: 'DevOps', category: 'capability', description: 'CI/CD pipelines, containerization, and infrastructure automation.', icon: 'server', href: '/technologies/devops-docker' },
  { slug: 'postgresql', title: 'PostgreSQL & Databases', shortTitle: 'PostgreSQL', category: 'capability', description: 'Database design, optimization, and scaling with PostgreSQL.', icon: 'database', href: '/technologies/postgresql' },
];

// ── Locations ────────────────────────────────────────────────────────────────

export const LOCATIONS: LocationDefinition[] = [
  {
    slug: 'denver',
    city: 'Denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    href: '/locations/denver',
  },
  {
    slug: 'austin',
    city: 'Austin',
    state: 'Texas',
    stateAbbr: 'TX',
    href: '/locations/austin',
  },
  {
    slug: 'santa-barbara',
    city: 'Santa Barbara',
    state: 'California',
    stateAbbr: 'CA',
    href: '/locations/santa-barbara',
  },
];

// ── Testimonials (expanded with filter tags) ─────────────────────────────────

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: "Working with Fetchly to build VRTSync has been a positive and collaborative experience. Their project management is strong, and they've helped translate a complex vision into a functional product. We've appreciated their responsiveness and technical capability throughout the process.",
    author: 'Randy Mangel',
    role: 'Founder of VRTSync',
    logo: '/images/VRTSync.svg',
    industries: ['fintech'],
    solutions: ['build-mvp'],
  },
  {
    quote: "The team at Fetchly has fit our evolving development needs perfectly, giving us the flexibility to allocate talented developers to projects as needed. They consistently deliver high-quality work, and their project managers do a great job keeping everything on track.",
    author: 'Spencer Steffen',
    role: 'VP of Engineering at Oats Overnight',
    logo: '/images/oats-overnight.svg',
    industries: ['ecommerce'],
    solutions: ['scale-team'],
  },
  {
    quote: "I was, without exaggerating, blown away by the quality, appearance, and functionality of the app.",
    author: 'Douglas H. Clements, Ph.D',
    role: 'Distinguished Professor and Kennedy Endowed Chair University of Denver',
    logo: '/images/university-denver.svg',
    solutions: ['build-mvp'],
  },
  {
    quote: "Fetch.ly was an outstanding development partner. They were responsive, clear communicators, and excellent at breaking down technical concepts so everyone stayed on the same page. They delivered an app our client loves, and I am excited to work with them on future projects!",
    author: 'Dan Mulligan',
    role: 'Partner at YellowDog Design Print and Marketing',
    image: '/images/image.webp',
    solutions: ['build-mvp', 'design'],
  },
  {
    quote: "Fetchly helped us rescue a project that was behind schedule and over budget. They audited the codebase, gave us an honest assessment, and got us back on track within weeks.",
    author: 'Healthcare Client',
    role: 'CTO at TrillaMed',
    industries: ['healthcare', 'ecommerce'],
    solutions: ['rescue'],
  },
  {
    quote: "Their team integrated seamlessly with ours. It felt like they were part of our company, not an outside vendor. The quality of their developers and the project management made all the difference.",
    author: 'HR Tech Client',
    role: 'VP Engineering at AmplifyHR',
    industries: ['hr-tech'],
    solutions: ['scale-team'],
  },
  {
    quote: "We needed a logistics platform that could handle real-time tracking and complex rate calculations. Fetchly delivered a system that our operations team relies on every day.",
    author: 'Logistics Client',
    role: 'COO at Ship Angel',
    industries: ['logistics'],
    solutions: ['build-mvp'],
  },
  {
    quote: "Fetchly modernized our legacy application without any downtime. They migrated us from an aging Rails 5 app to Rails 7 with a modern frontend, and our deployment time went from hours to minutes.",
    author: 'FinTech Client',
    role: 'CTO at HomeSavi',
    industries: ['fintech'],
    solutions: ['modernize'],
  },
];
