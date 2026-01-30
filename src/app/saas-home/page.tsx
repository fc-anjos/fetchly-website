'use client';

import Image from 'next/image';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { FAQ } from '@/components/sections/FAQ';
import { PageHero } from '@/components/sections/PageHero';

const VALUE_PROPS = [
  {
    title: 'One redesign to rule them all.',
    description:
      'We brought 6 platforms and 1.2k custom components into one simple interface.',
  },
  {
    title: 'Designed to scale with you.',
    description:
      "We rebuilt EventSquid's Event Builder for modern UX, faster onboarding, and a scalable, drag-and-drop experience.",
  },
  {
    title: 'Costs 50% less than agencies.',
    description:
      "A full product team for less than half the cost of hiring in-house. Month-to-month flexibility. No overhead. Specialists in system architecture and development.",
  },
];

const CAPABILITIES = [
  {
    title: 'Custom applications',
    description:
      'We build fast and polished end-to-end apps for web, iOS, and Android from start to launch.',
  },
  {
    title: 'Testing & monitoring',
    description:
      'Everything is tested, tracked, and actively monitored so you can launch stress-free.',
  },
  {
    title: 'Backend & database',
    description:
      'We build the behind-the-scenes engine so your app scales without breaking.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What services do you offer?',
    answer:
      'Everything you need to turn your idea into a working product: design, development, QA, project & product management, architecture, and reporting. One team. One monthly plan. More than one less thing to worry about.',
  },
  {
    question: 'How can I get started?',
    answer:
      "Easy. Just reach out through our contact form, and we'll walk you through the next steps.",
  },
  {
    question: 'Do you offer support?',
    answer:
      "Absolutely. We're with you at every step, from due diligence and design to testing and deployment. You'll always get fast answers, data-backed decisions, and the most comprehensive planning you've seen.",
  },
  {
    question: 'What is your pricing?',
    answer:
      "We offer a low, month-to-month rate that covers everything you need. We don't nickel-and-dime you with hourly rates and surprise fees. We're 50% less than agencies and staff aug and a whole lot easier to scale.",
  },
  {
    question: 'Can I customize your services?',
    answer:
      "Always. Every plan is built around your product, your priorities, and your pace. We change to fit what you're building.",
  },
];

export default function SaaSHomePage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={<>Custom software<br />development as a service</>}
        subtitle="Web, mobile & data software"
        description="A full-stack dev team that builds, tests, and ships your SaaS product. Design, engineering, QA, and DevOps on a month-to-month plan."
        ctaText="Talk to us"
        ctaHref="/intake/request"
        secondaryText="Learn more"
        secondaryHref="/our-model"
        image="/images/saas-hero.jpg"
        imageAlt="SaaS order management dashboard"
        badgeImage="/images/badge-saas.svg"
        imageOverlay={
          <>
            {/* CA logo overlay */}
            <div className="absolute top-4 left-4 z-10 w-20">
              <Image
                src="/images/ca-logo.svg"
                alt="Container Alliance"
                width={80}
                height={32}
                className="w-full h-auto"
              />
            </div>
            {/* Leads portlet floating card */}
            <div className="absolute -bottom-4 -left-8 z-10 w-36 md:w-44">
              <Image
                src="/images/leads-portlet.avif"
                alt="Leads portlet UI card"
                width={220}
                height={160}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </>
        }
      />

      {/* Process Section */}
      <ProcessSteps />

      {/* Value Props Section */}
      <FeatureGrid
        label="The SaaS developers behind your next app"
        title="7+ years in business. 120+ employees. 100+ engineers."
        description="Real products built by a team that stays with you from first commit to launch and beyond."
        items={VALUE_PROPS}
        columns={3}
        background="muted"
      />

      {/* Capabilities Section */}
      <FeatureGrid
        title="We build apps so you don't have to"
        items={CAPABILITIES}
        columns={3}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ
        items={FAQ_ITEMS}
        title="The what, the how, the why."
        label="FAQ"
      />

      {/* CTA Section */}
      <CTA />
    </>
  );
}
