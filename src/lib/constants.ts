// Navigation links — nested structure with dropdown support
import type { NavItemWithDropdown } from '@/types';

export const NAV_LINKS: NavItemWithDropdown[] = [
  {
    label: 'Solutions',
    href: '/solutions',
    items: [
      { label: 'Rescue & Replace', href: '/solutions/rescue', description: 'Your last agency didn\'t work out. We get it.' },
      { label: 'Scale My Team', href: '/solutions/scale-team', description: 'Dedicated developers who integrate with your team.' },
      { label: 'Build My MVP', href: '/solutions/build-mvp', description: 'From idea to launched product, fast.' },
      { label: 'Modernize & Migrate', href: '/solutions/modernize', description: 'Modernize aging applications incrementally.' },
      { label: 'QA & Testing', href: '/solutions/qa-testing', description: 'Find the bugs before your users do.' },
      { label: 'Design & UX', href: '/solutions/design', description: 'Design that converts, not just looks good.' },
      { label: 'DevOps & Infrastructure', href: '/solutions/devops', description: 'Deploy on Friday without sweating.' },
      { label: 'AI Integration', href: '/solutions/ai', description: 'Add AI to your product in weeks.' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    items: [
      { label: 'E-Commerce & Marketplaces', href: '/industries/ecommerce', description: 'Shopify, custom marketplaces, subscriptions.' },
      { label: 'Healthcare & MedTech', href: '/industries/healthcare', description: 'HIPAA-compliant platforms and patient portals.' },
      { label: 'HR Tech & Recruitment', href: '/industries/hr-tech', description: 'AI matching, ATS integrations, PEO platforms.' },
      { label: 'Logistics & Supply Chain', href: '/industries/logistics', description: 'Tracking, rates, and carrier integrations.' },
      { label: 'FinTech & Real Estate', href: '/industries/fintech', description: 'Payments, mortgages, and property management.' },
      { label: 'Hospitality & Events', href: '/industries/hospitality', description: 'Event platforms, bookings, and ticketing.' },
    ],
  },
  {
    label: 'Technologies',
    href: '/technologies',
    items: [
      // Build With
      { label: 'React', href: '/technologies/react' },
      { label: 'Next.js', href: '/technologies/nextjs' },
      { label: 'Ruby on Rails', href: '/technologies/rails' },
      { label: 'React Native', href: '/technologies/react-native' },
      { label: 'Python & Django', href: '/technologies/python' },
      { label: 'Vue.js', href: '/technologies/vuejs' },
      // Capability
      { label: 'AI & Machine Learning', href: '/technologies/ai-ml' },
      { label: 'API Development', href: '/technologies/api-development' },
      { label: 'DevOps & Docker', href: '/technologies/devops-docker' },
      { label: 'PostgreSQL', href: '/technologies/postgresql' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'Our Model', href: '/our-model', description: 'How we work and why it\'s different.' },
      { label: 'Case Studies', href: '/case-studies', description: 'Real products with real results.' },
    ],
  },
];

// Footer links — 3-column structure
export const FOOTER_LINKS = {
  solutions: [
    { label: 'Rescue & Replace', href: '/solutions/rescue' },
    { label: 'Scale My Team', href: '/solutions/scale-team' },
    { label: 'Build My MVP', href: '/solutions/build-mvp' },
    { label: 'Modernize & Migrate', href: '/solutions/modernize' },
  ],
  company: [
    { label: 'Our Model', href: '/our-model' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Services', href: '/services' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Cookies Settings', href: '/privacy-policy' },
  ],
} as const;

// Social links
export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/fetchly-labs',
    icon: 'linkedin',
  },
] as const;

// Services list
export const SERVICES = [
  {
    id: 'development',
    title: 'Development',
    description: 'Full-stack web and mobile development with modern technologies.',
    icon: 'code',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Agile project management to keep your projects on track.',
    icon: 'clipboard',
  },
  {
    id: 'qa',
    title: 'Quality Assurance',
    description: 'Comprehensive testing to ensure your product works flawlessly.',
    icon: 'check-circle',
  },
  {
    id: 'design',
    title: 'Design',
    description: 'UI/UX design that creates exceptional user experiences.',
    icon: 'palette',
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Infrastructure and deployment automation for reliable delivery.',
    icon: 'server',
  },
] as const;

// Comparison table data
export const COMPARISON_DATA = {
  headers: ['', 'Staff Aug', 'Fetchly', 'Agency'],
  rows: [
    {
      feature: 'ENGINEERING',
      staffAug: false,
      fetchly: true,
      agency: true,
    },
    {
      feature: 'PROJECT MANAGEMENT',
      staffAug: false,
      fetchly: true,
      agency: true,
    },
    {
      feature: 'Quality Assurance',
      staffAug: false,
      fetchly: true,
      agency: true,
    },
    {
      feature: 'DESIGN',
      staffAug: false,
      fetchly: true,
      agency: true,
    },
  ],
} as const;

// Client logos
export const CLIENT_LOGOS = [
  { name: 'Colorado', src: '/images/colorado.png', alt: 'Colorado' },
  { name: 'Winc', src: '/images/winc.png', alt: 'Winc' },
  { name: 'Tapp', src: '/images/tapp.png', alt: 'Tapp' },
  { name: 'Vast', src: '/images/vast.png', alt: 'Vast' },
  { name: 'Casper', src: '/images/casper.png', alt: 'Casper' },
  { name: 'University of Denver', src: '/images/university-denver.svg', alt: 'University of Denver' },
  { name: 'Oats Overnight', src: '/images/oats-overnight.svg', alt: 'Oats Overnight' },
  { name: 'VRTSync', src: '/images/VRTSync.svg', alt: 'VRTSync' },
] as const;

// Case studies
export const CASE_STUDIES = [
  {
    title: 'VRT Sync',
    category: 'SaaS',
    description:
      'VRT Sync is a forward-thinking client on a greenfield initiative, building a powerful, fully integrated web platform designed to modernize property management and maintenance for HOA boards, property managers, contractors, and community members.',
    shortDescription:
      'Real products with real results. See how our SaaS development services move the needle.',
    tags: ['Web Platform', 'Property Management', 'SaaS'],
    image: '/images/vrt-sync-thumbnail.jpg',
    href: '/case-studies',
  },
  {
    title: 'Container Alliance',
    category: 'SaaS',
    description:
      'Container Alliance partnered with us for a comprehensive digital transformation, resulting in a completely rebuilt CRM and a modern, conversion-focused website — all designed to streamline operations and elevate the customer experience.',
    shortDescription:
      'See how our all-in-one team handles design, development, QA, and launch so your SaaS works better, looks better, and gets to market faster.',
    tags: ['CRM', 'Website', 'Digital Transformation'],
    image: '/images/container-alliance.png',
    href: '/case-studies',
  },
  {
    title: 'Oats Overnight',
    category: 'eCommerce',
    description:
      'We developed a comprehensive subscription platform for Oats Overnight that included a customized subscriber portal for easy subscription management, a member dashboard with exclusive perks and seasonal flavor access, and dynamic admin tools for efficient pick-pack shipping and inventory management. The platform featured targeted checkout development to convert customers into subscribers and collect valuable feedback, along with custom theme development to enhance the overall user experience. This solution directly supported Oats Overnight\'s growth to over 250,000 active subscribers and enabled them to achieve 94% of their e-commerce revenue through subscription orders.',
    shortDescription:
      'See how we built the subscription platform behind 250K+ active subscribers and 94% subscription revenue.',
    tags: ['Shopify', 'Subscription', 'E-commerce'],
    image: '/images/oats-case.png',
    href: '/case-studies',
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    quote: "Working with Fetchly to build VRTSync has been a positive and collaborative experience. Their project management is strong, and they've helped translate a complex vision into a functional product. We've appreciated their responsiveness and technical capability throughout the process.",
    author: "Randy Mangel",
    role: "Founder of VRTSync",
    image: "/images/testimonial.png",
  },
  {
    quote: "The team at Fetchly has fit our evolving development needs perfectly, giving us the flexibility to allocate talented developers to projects as needed. They consistently deliver high-quality work, and their project managers do a great job keeping everything on track.",
    author: "Spencer Steffen",
    role: "VP of Engineering at Oats Overnight",
    image: "/images/testimonial.png",
  },
  {
    quote: "I was, without exaggerating, blown away by the quality, appearance, and functionality of the app.",
    author: "Douglas H. Clements, Ph.D",
    role: "Distinguished Professor and Kennedy Endowed Chair University of Denver",
    image: "/images/testimonial.png",
  },
  {
    quote: "Fetch.ly was an outstanding development partner. They were responsive, clear communicators, and excellent at breaking down technical concepts so everyone stayed on the same page. They delivered an app our client loves, and I am excited to work with them on future projects!",
    author: "Dan Mulligan",
    role: "Partner at YellowDog Design Print and Marketing",
    image: "/images/testimonial.png",
  },
] as const;
