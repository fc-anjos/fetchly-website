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
    question: 'How do you handle multi-tenant architecture for HR platforms?',
    answer:
      'We build true multi-tenant systems where each client gets isolated data with shared infrastructure. This means separate databases or schemas per tenant, tenant-specific configurations, and role-based access that ensures one client never sees another\'s data.',
  },
  {
    question: 'How does your AI matching differ from keyword-based search?',
    answer:
      'Our AI matching analyzes the full context of a candidate\'s experience, skills, and career trajectory — not just keyword overlap. We use embeddings and semantic similarity to surface candidates who are genuinely qualified, even if their resume doesn\'t use the exact same terminology as the job description.',
  },
  {
    question: 'Can you integrate with existing ATS and payroll systems?',
    answer:
      'Yes. We integrate with major ATS platforms like Greenhouse, Lever, and iCIMS, as well as payroll providers like ADP, Gusto, and Paychex. We handle the API complexity and data mapping so your platform works within existing HR workflows.',
  },
  {
    question: 'How do you handle compliance across different states and jurisdictions?',
    answer:
      'We build compliance engines that track state and local employment regulations — from pay transparency laws to benefits requirements. The system updates rules per jurisdiction and flags compliance issues before they become problems.',
  },
] as const;

const CASE_STUDIES = [
  {
    title: 'AmplifyHR',
    description:
      'A multi-tenant PEO platform managing HR, benefits, and payroll for thousands of employees across multiple client companies — with jurisdiction-specific compliance built in.',
    href: '/case-studies/amplify-hr',
  },
  {
    title: 'Energy Hire',
    description:
      'An AI-powered recruitment platform for the energy sector — matching candidates to roles using semantic analysis, not keyword filters, with integrated ATS workflows.',
    href: '/case-studies/energy-hire',
  },
];

export default function HRTechPage() {
  return (
    <>
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Industries' },
            { label: 'HR Tech' },
          ]}
        />
      </Container>

      <PageHero
        title="HR platforms that actually match people to opportunity."
        description="We've built multi-tenant HR platforms, AI-powered matching algorithms, and ATS integrations that process thousands of candidates."
        ctaText="Start your HR tech project"
      />

      <ParallaxSection speed={0.3}>
        <section className="py-12 md:py-16 bg-surface-alt">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Heading level="h2" className="text-foreground mb-4">
                We&apos;ve built platforms that match thousands of candidates to
                opportunities using AI — not keyword filters.
              </Heading>
              <Text size="lg" className="text-foreground-muted">
                Our team has built PEO platforms, AI-powered recruitment tools,
                and compliance engines that handle the complexity of modern HR
                operations across multiple jurisdictions.
              </Text>
            </div>
          </Container>
        </section>
      </ParallaxSection>

      <ProcessSteps
        title="How we build HR tech platforms"
        steps={[
          {
            title: 'Discovery & compliance review',
            description:
              'We map your workflow requirements, multi-tenant needs, and compliance obligations across jurisdictions. Every architectural decision is informed by real HR operational complexity.',
          },
          {
            title: 'Platform architecture & development',
            description:
              'We build multi-tenant infrastructure, AI matching models, and integration layers in parallel. You get weekly builds with working features you can test with real data.',
          },
          {
            title: 'Integration & launch',
            description:
              'We connect your platform to ATS, payroll, and benefits providers, run load testing with realistic data volumes, and launch with monitoring and support in place.',
          },
        ]}
      />

      <FeatureGrid
        label="Capabilities"
        title="What we build for HR tech"
        items={[
          {
            title: 'Multi-Tenant Platforms',
            description:
              'Isolated tenant architectures where each client gets their own data, configurations, and branding — on shared infrastructure that scales efficiently.',
          },
          {
            title: 'AI-Powered Matching',
            description:
              'Semantic candidate matching using embeddings and contextual analysis — surfacing qualified candidates based on real fit, not keyword overlap.',
          },
          {
            title: 'ATS Integration',
            description:
              'Native integrations with Greenhouse, Lever, iCIMS, and other applicant tracking systems, with bi-directional data sync and workflow automation.',
          },
          {
            title: 'Payroll & Benefits',
            description:
              'Integrations with ADP, Gusto, Paychex, and custom payroll systems, plus benefits enrollment and administration workflows.',
          },
          {
            title: 'Compliance Engine',
            description:
              'Jurisdiction-aware compliance tracking for employment law, pay transparency, benefits requirements, and reporting obligations across states.',
          },
          {
            title: 'Candidate Analytics',
            description:
              'Pipeline analytics, time-to-hire metrics, source attribution, and diversity reporting dashboards for data-driven recruiting decisions.',
          },
        ]}
      />

      <CaseStudyGrid
        title="HR platforms we've built."
        items={CASE_STUDIES}
      />

      <Testimonials filterIndustry="hr-tech" />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA
        title="Let's build your HR platform."
        buttonText="Start your HR tech project"
      />
    </>
  );
}
