// Navigation links
export const NAV_LINKS = [
  { label: 'eComm', href: '/e-commerce' },
  { label: 'SaaS', href: '/saas-home' },
  { label: 'Our Model', href: '/our-model' },
  { label: 'Our Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
] as const;

// Footer links
export const FOOTER_LINKS = {
  pages: [
    { label: 'eComm', href: '/e-commerce' },
    { label: 'Our Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Our Model', href: '/our-model' },
    { label: 'SaaS', href: '/saas-home' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Cookies Settings', href: '#' },
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

// FAQ items
export const FAQ_ITEMS = [
  {
    question: 'What services do you offer?',
    answer: "Everything you need to turn your idea into a working product: design, development, QA, project & product management, architecture, and reporting. One team. One monthly plan. More than one less thing to worry about.",
  },
  {
    question: 'How can I get started?',
    answer: "Easy. Just reach out through our contact form, and we'll walk you through the next steps.",
  },
  {
    question: 'Do you offer support?',
    answer: "Absolutely. We're with you at every step, from due diligence and design to testing and deployment. You'll always get fast answers, data-backed decisions, and the most comprehensive planning you've seen.",
  },
  {
    question: 'What is your pricing?',
    answer: "We offer a low, month-to-month rate that covers everything you need. We don't nickel-and-dime you with hourly rates and surprise fees. We're 50% less than agencies and staff aug and a whole lot easier to scale.",
  },
  {
    question: 'Can I customize your services?',
    answer: "Always. Every plan is built around your product, your priorities, and your pace. We change to fit what you're building.",
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
