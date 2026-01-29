import type { Metadata } from 'next';
import { Comparison } from '@/components/sections/Comparison';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { StatsGrid } from '@/components/sections/StatsGrid';
import { CaseStudyGrid } from '@/components/sections/CaseStudyGrid';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Our diverse range of services is designed to meet your unique needs, ensuring quality and satisfaction at every step. From personalized consultations to innovative solutions, we are here to help you achieve your goals.',
};

const SERVICES = [
  {
    title: 'Quality Assurance',
    description: 'Expertise that drives results and satisfaction.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Software Architecture',
    description: 'Customized plans to meet your unique challenges.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Shopify Development',
    description: 'Partner with us for exceptional service delivery.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: 'Project Management',
    description: 'Our team is always within reach.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Results-Driven Marketing Services',
    description: 'Boost your visibility and engagement with our strategies.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Design',
    description: 'Stay ahead with our advanced tech services.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

const FAQ_ITEMS = [
  {
    question: 'What do you offer for custom ecommerce development?',
    answer:
      'We handle everything: strategy, design, development, QA, Shopify integration, backend architecture, and ongoing support. We dive into due diligence, deliver data-backed planning, and manage the full build.',
  },
  {
    question: 'Can you build my site from scratch?',
    answer:
      'Yes. We design and develop fully custom ecommerce platforms or apps, end-to-end. Everything is tailored to your product, your stack, and your customers.',
  },
  {
    question: 'Do you work with Shopify?',
    answer:
      'Absolutely. We offer Shopify integrations, custom theme development, app connections, and feature enhancements.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'We offer unique month-to-month rates that include everything you need for your online store, from design to maintenance.',
  },
  {
    question: 'How do I get started?',
    answer:
      "Just fill out our contact form. We'll schedule a quick consultation, learn about your goals, and show you exactly how our team would build your ecommerce platform.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Explore our comprehensive service offerings"
        description="Our diverse range of services is designed to meet your unique needs, ensuring quality and satisfaction at every step. From personalized consultations to innovative solutions, we are here to help you achieve your goals."
        ctaText="Talk to us"
        ctaHref="/intake/request"
        secondaryText="Learn more"
        secondaryHref="/case-studies"
        showBadge={false}
      />

      {/* About Us Section */}
      <StatsGrid />

      {/* Services Section */}
      <FeatureGrid
        title="What we offer"
        items={SERVICES}
        columns={3}
        background="muted"
        iconWithBackground
        className="scroll-mt-24"
        id="services"
      />

      {/* Comparison Section */}
      <Comparison />

      {/* Case Studies Section */}
      <CaseStudyGrid
        background="muted"
        items={[
          {
            title: 'VRT Sync',
            description: 'Real products with real results. See how our SaaS development services move the needle.',
            image: '/images/vrt-sync-thumbnail.jpg',
            href: '/case-studies',
          },
          {
            title: 'Container Alliance',
            description: 'See how our all-in-one team handles design, development, QA, and launch so your SaaS works better, looks better, and gets to market faster.',
            image: '/images/container-alliance.png',
            href: '/case-studies',
          },
        ]}
      />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQAccordion
        title="FAQ"
        description="Have questions? We've got answers. If you don't see yours, reach out below."
        items={FAQ_ITEMS}
        showCTA
      />
    </>
  );
}
