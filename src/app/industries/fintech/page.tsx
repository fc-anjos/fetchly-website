'use client';

import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Breadcrumbs } from '@/components/seo';
import {
  PageHero,
  ProcessSteps,
  FeatureGrid,
  CaseStudyGrid,
  Testimonials,
  FAQ,
  CTA,
} from '@/components/sections';
import { ParallaxSection } from '@/components/effects/ParallaxSection';

const FAQ_ITEMS = [
  {
    question: 'How do you handle security for financial applications?',
    answer:
      'Security is built into every layer — encrypted data at rest and in transit, role-based access control, penetration testing, and SOC 2-aligned development practices. We treat security as architecture, not a checklist.',
  },
  {
    question: 'What compliance frameworks do you work with?',
    answer:
      'We build platforms that meet PCI DSS, SOC 2, TILA-RESPA, state lending regulations, and fair housing requirements. We work with your compliance team to ensure every feature meets regulatory standards before launch.',
  },
  {
    question: 'Which payment processors do you integrate with?',
    answer:
      'We integrate with Stripe, Plaid, Dwolla, and custom payment rails. Whether you need ACH transfers, card processing, escrow accounts, or real-time payment splitting, we build the integration to fit your model.',
  },
  {
    question: 'How do you protect sensitive financial data?',
    answer:
      'We implement end-to-end encryption, tokenization for sensitive fields, audit logging for every data access event, and infrastructure hardening. Your data architecture is designed for compliance from day one.',
  },
] as const;

const CASE_STUDIES = [
  {
    title: 'Home Loan Gurus',
    description:
      'A mortgage platform connecting borrowers with lenders — featuring automated rate comparison, document management, and compliance-first loan processing.',
  },
  {
    title: 'HomeSavi',
    description:
      'A real estate platform with property search, mortgage calculators, and agent matching — built for homebuyers navigating complex purchasing decisions.',
  },
];

export default function FinTechPage() {
  return (
    <>
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Industries' },
            { label: 'FinTech' },
          ]}
        />
      </Container>

      <PageHero
        title="Financial software where security is the foundation."
        description="We build payment processing, mortgage platforms, and property management software — with security and compliance as the foundation, not an afterthought."
        ctaText="Start your fintech project"
      />

      <ParallaxSection speed={0.3}>
        <section className="py-12 md:py-16 bg-surface-alt">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Heading level="h2" className="text-foreground mb-4">
                Financial software where security and compliance aren&apos;t afterthoughts.
              </Heading>
              <Text size="lg" className="text-foreground-muted">
                Financial software where security and compliance aren&apos;t
                afterthoughts &mdash; they&apos;re the foundation.
              </Text>
            </div>
          </Container>
        </section>
      </ParallaxSection>

      <ProcessSteps
        title="How we build financial platforms"
        steps={[
          {
            title: 'Security & compliance architecture',
            description:
              'We start by mapping regulatory requirements, data sensitivity levels, and security boundaries. Every architectural decision is made with compliance in mind before any code is written.',
          },
          {
            title: 'Secure development',
            description:
              'We build with encryption, access controls, and audit logging baked in from the start. You see working builds weekly with security testing at every milestone.',
          },
          {
            title: 'Audit & deployment',
            description:
              'We conduct thorough security reviews, penetration testing, and compliance audits before launch — then deploy with monitoring and incident response procedures in place.',
          },
        ]}
      />

      <FeatureGrid
        label="Capabilities"
        title="What we build for fintech"
        items={[
          {
            title: 'Payment Processing',
            description:
              'Secure payment flows with Stripe, Plaid, and custom payment rails — including ACH, card processing, escrow, and real-time settlement.',
          },
          {
            title: 'Mortgage Platforms',
            description:
              'End-to-end mortgage origination systems with automated rate comparison, document management, and compliance-first loan processing workflows.',
          },
          {
            title: 'Property Management',
            description:
              'Tenant portals, lease management, rent collection, and maintenance tracking systems built for property managers and real estate companies.',
          },
          {
            title: 'Financial Data Security',
            description:
              'End-to-end encryption, tokenization, role-based access control, and audit logging designed to protect sensitive financial data at every layer.',
          },
          {
            title: 'Regulatory Compliance',
            description:
              'Platforms built to meet PCI DSS, SOC 2, TILA-RESPA, and state-level lending regulations with automated compliance reporting.',
          },
          {
            title: 'Real-Time Analytics',
            description:
              'Dashboards and reporting engines for loan pipelines, payment volumes, risk metrics, and portfolio performance — updated in real time.',
          },
        ]}
      />

      <CaseStudyGrid
        title="Financial platforms we've built."
        items={CASE_STUDIES}
      />

      <Testimonials filterIndustry="fintech" />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA
        title="Let's build your financial platform."
        buttonText="Start your fintech project"
      />
    </>
  );
}
