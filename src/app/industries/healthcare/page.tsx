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
    question: 'How do you ensure HIPAA compliance in your builds?',
    answer:
      'HIPAA compliance is architected into every layer — encrypted data at rest and in transit, role-based access controls, audit logging, and BAA agreements with all infrastructure providers. We conduct security reviews at every milestone, not just at launch.',
  },
  {
    question: 'Can you build software for FDA-regulated medical devices?',
    answer:
      'Yes. We follow IEC 62304 software lifecycle processes and build with the documentation and traceability required for FDA 510(k) and De Novo submissions. Our development process includes risk analysis, design controls, and validation testing.',
  },
  {
    question: 'Do you integrate with existing EHR/EMR systems?',
    answer:
      'We integrate with Epic, Cerner, Athenahealth, and other major EHR systems using HL7 FHIR, SMART on FHIR, and custom APIs. We handle the complexity of healthcare data standards so your platform works within existing clinical workflows.',
  },
  {
    question: 'How do you handle PHI and patient data security?',
    answer:
      'All protected health information is encrypted, access-controlled, and audit-logged. We use HIPAA-compliant infrastructure (AWS GovCloud or Azure Healthcare), implement minimum necessary access policies, and conduct regular penetration testing.',
  },
] as const;

const CASE_STUDIES = [
  {
    title: 'TrillaMed',
    description:
      'A GSA-compliant medical equipment e-commerce platform serving government healthcare buyers with streamlined procurement and compliance-first architecture.',
    href: '/case-studies/trillamed',
  },
  {
    title: 'Ossera Health',
    description:
      'A clinical platform for orthopedic surgical planning — built with HIPAA-compliant data handling, surgeon collaboration tools, and medical imaging integration.',
  },
];

export default function HealthcarePage() {
  return (
    <>
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Industries' },
            { label: 'Healthcare' },
          ]}
        />
      </Container>

      <PageHero
        title="Healthcare software built on compliance."
        description="We build HIPAA-compliant platforms, patient portals, and medical device software — with compliance architected in from day one."
        ctaText="Start your healthcare project"
      />

      <ParallaxSection speed={0.3}>
        <section className="py-12 md:py-16 bg-surface-alt">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Heading level="h2" className="text-foreground mb-4">
                We understand healthcare compliance isn&apos;t optional — it&apos;s
                architected in from day one.
              </Heading>
              <Text size="lg" className="text-foreground-muted">
                Our team has built HIPAA-compliant platforms, FDA-regulated
                device software, and clinical tools that meet the security and
                regulatory standards healthcare demands.
              </Text>
            </div>
          </Container>
        </section>
      </ParallaxSection>

      <ProcessSteps
        title="How we build healthcare software"
        steps={[
          {
            title: 'Compliance review & architecture',
            description:
              'We start with a thorough compliance assessment — HIPAA, FDA, or both — and design the system architecture around those requirements. Security and audit controls are defined before a line of code is written.',
          },
          {
            title: 'Secure development',
            description:
              'We build with encrypted data handling, role-based access, and audit logging baked into every feature. You get weekly builds with security review checkpoints throughout development.',
          },
          {
            title: 'Validation & deployment',
            description:
              'We conduct thorough validation testing, document everything for regulatory submissions, and deploy to HIPAA-compliant infrastructure with monitoring and incident response in place.',
          },
        ]}
      />

      <FeatureGrid
        label="Capabilities"
        title="What we build for healthcare"
        items={[
          {
            title: 'HIPAA Compliance',
            description:
              'End-to-end HIPAA-compliant architecture with encryption, access controls, audit logging, and BAA agreements across the entire technology stack.',
          },
          {
            title: 'Patient Portals',
            description:
              'Secure patient-facing applications with appointment scheduling, medical records access, secure messaging, and payment processing.',
          },
          {
            title: 'EHR/EMR Integration',
            description:
              'HL7 FHIR and SMART on FHIR integrations with Epic, Cerner, Athenahealth, and other major electronic health record systems.',
          },
          {
            title: 'Telehealth Platforms',
            description:
              'HIPAA-compliant video consultation platforms with waiting rooms, screen sharing, clinical note-taking, and integrated billing.',
          },
          {
            title: 'Medical Device Software',
            description:
              'IEC 62304-compliant software for medical devices, including risk analysis, design controls, and documentation for FDA submissions.',
          },
          {
            title: 'Clinical Data Security',
            description:
              'PHI protection with encryption at rest and in transit, minimum necessary access policies, penetration testing, and compliance monitoring.',
          },
        ]}
      />

      <CaseStudyGrid
        title="Healthcare platforms we've built."
        items={CASE_STUDIES}
      />

      <Testimonials filterIndustry="healthcare" />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA
        title="Let's build your healthcare platform."
        buttonText="Start your healthcare project"
      />
    </>
  );
}
