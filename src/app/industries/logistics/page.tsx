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
    question: 'What carrier APIs can you integrate with?',
    answer:
      'We integrate with all major carrier APIs including FedEx, UPS, USPS, DHL, and dozens of regional carriers. We also build custom integrations for freight brokers, 3PLs, and proprietary TMS platforms.',
  },
  {
    question: 'How do you handle real-time tracking and visibility?',
    answer:
      'We build real-time tracking systems using webhooks, polling, and event-driven architectures. Your team and your customers get live visibility into shipment status, ETAs, and exceptions as they happen.',
  },
  {
    question: 'Do you build mobile apps for drivers and warehouse teams?',
    answer:
      'Yes. We build native and cross-platform mobile apps for driver dispatch, proof of delivery, warehouse commissioning, and barcode scanning — all synced with your backend in real time.',
  },
  {
    question: 'Can your platforms scale with growing shipment volume?',
    answer:
      'Absolutely. We architect logistics platforms for horizontal scaling from day one. Whether you process hundreds or hundreds of thousands of shipments per day, the platform grows with you.',
  },
] as const;

const CASE_STUDIES = [
  {
    title: 'Ship Angel',
    description:
      'A full-service logistics platform with real-time rate comparison, label generation, and shipment tracking across multiple carriers.',
  },
  {
    title: 'Freight130',
    description:
      'A freight management platform connecting shippers with carriers, featuring automated quoting, load matching, and compliance tracking.',
  },
];

export default function LogisticsPage() {
  return (
    <>
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Industries' },
            { label: 'Logistics' },
          ]}
        />
      </Container>

      <PageHero
        title="Logistics software for the real world."
        description="We build platforms that handle the complexity of real-world supply chains — rates, routes, tracking, and compliance."
        ctaText="Start your logistics project"
      />

      <ParallaxSection speed={0.3}>
        <section className="py-12 md:py-16 bg-surface-alt">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Heading level="h2" className="text-foreground mb-4">
                We build logistics platforms that handle the complexity of real-world supply chains.
              </Heading>
              <Text size="lg" className="text-foreground-muted">
                We build logistics platforms that handle the complexity of
                real-world supply chains &mdash; rates, routes, tracking, and
                compliance.
              </Text>
            </div>
          </Container>
        </section>
      </ParallaxSection>

      <ProcessSteps
        title="How we build logistics platforms"
        steps={[
          {
            title: 'Operations discovery',
            description:
              'We map your shipping workflows, carrier relationships, and compliance requirements to design a platform that fits how your team actually operates.',
          },
          {
            title: 'Platform development',
            description:
              'We build your tracking dashboards, rate engines, and carrier integrations with weekly test builds so you can validate every feature against real-world scenarios.',
          },
          {
            title: 'Integration & deployment',
            description:
              'We connect your platform to carrier APIs, warehouse systems, and ERP tools — then deploy with monitoring and support to ensure smooth operations from day one.',
          },
        ]}
      />

      <FeatureGrid
        label="Capabilities"
        title="What we build for logistics"
        items={[
          {
            title: 'Real-Time Tracking',
            description:
              'Live shipment visibility with GPS tracking, status updates, and automated exception alerts across all carriers and modes.',
          },
          {
            title: 'Rate Management',
            description:
              'Dynamic rate comparison engines that pull live quotes from multiple carriers and apply your negotiated pricing rules automatically.',
          },
          {
            title: 'Carrier API Integration',
            description:
              'Seamless connections to FedEx, UPS, USPS, DHL, and custom carrier systems for quoting, booking, labeling, and tracking.',
          },
          {
            title: 'Mobile Commissioning',
            description:
              'Mobile apps for warehouse teams and drivers — barcode scanning, proof of delivery, and real-time sync with your operations dashboard.',
          },
          {
            title: 'Warehouse Management',
            description:
              'Inventory tracking, pick-pack-ship workflows, and bin management systems that integrate with your existing warehouse infrastructure.',
          },
          {
            title: 'Compliance Reporting',
            description:
              'Automated reporting for BOL generation, customs documentation, hazmat compliance, and audit-ready record keeping.',
          },
        ]}
      />

      <CaseStudyGrid
        title="Logistics platforms we've built."
        items={CASE_STUDIES}
      />

      <Testimonials filterIndustry="logistics" />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA
        title="Let's build your logistics platform."
        buttonText="Start your logistics project"
      />
    </>
  );
}
