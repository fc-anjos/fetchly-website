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
    question: 'Can your platforms handle high-traffic events and peak booking periods?',
    answer:
      'Yes. We architect hospitality platforms for elastic scaling from day one. Whether it\'s a sold-out concert or a holiday booking rush, the platform handles traffic spikes without degradation.',
  },
  {
    question: 'What ticketing and booking systems do you integrate with?',
    answer:
      'We integrate with Eventbrite, Ticketmaster, Square, Toast, OpenTable, and custom POS systems. We also build custom ticketing engines for venues that need full control over their sales flow.',
  },
  {
    question: 'Do you support real-time availability and booking management?',
    answer:
      'Absolutely. We build real-time availability engines with instant booking confirmation, waitlist management, and automated calendar syncing across multiple venues and event types.',
  },
  {
    question: 'Do you build mobile apps for event and venue management?',
    answer:
      'Yes. We build mobile apps for event check-in, ticket scanning, on-site management, and guest communication — all synced with your backend systems in real time.',
  },
] as const;

const CASE_STUDIES = [
  {
    title: 'City Winery',
    description:
      'A venue management platform for a multi-location hospitality brand — featuring event scheduling, ticket sales, and integrated food and beverage operations.',
  },
  {
    title: 'EventSquid',
    description:
      'A full-featured event management platform with registration, ticketing, attendee tracking, and custom page builders for event organizers of all sizes.',
  },
];

export default function HospitalityPage() {
  return (
    <>
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Industries' },
            { label: 'Hospitality' },
          ]}
        />
      </Container>

      <PageHero
        title="Hospitality platforms that handle the chaos."
        description="We build event management platforms, booking systems, and ticketing integrations that work when it matters most."
        ctaText="Start your hospitality project"
      />

      <ParallaxSection speed={0.3}>
        <section className="py-12 md:py-16 bg-surface-alt">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Heading level="h2" className="text-foreground mb-4">
                We build hospitality platforms that handle the chaos of real-world events.
              </Heading>
              <Text size="lg" className="text-foreground-muted">
                We build hospitality platforms that handle the chaos of
                real-world events &mdash; bookings, tickets, pages, and
                payments.
              </Text>
            </div>
          </Container>
        </section>
      </ParallaxSection>

      <ProcessSteps
        title="How we build hospitality platforms"
        steps={[
          {
            title: 'Event & booking discovery',
            description:
              'We map your event workflows, venue operations, and guest experiences to design a platform that fits how your team actually runs events and manages bookings.',
          },
          {
            title: 'Platform development',
            description:
              'We build your booking engines, event pages, and management dashboards with weekly test builds so you can validate every feature against real-world scenarios.',
          },
          {
            title: 'Launch & support',
            description:
              'We launch with load testing, monitoring, and on-call support to ensure your platform performs flawlessly during peak events and high-traffic periods.',
          },
        ]}
      />

      <FeatureGrid
        label="Capabilities"
        title="What we build for hospitality"
        items={[
          {
            title: 'Event Management',
            description:
              'End-to-end event platforms with scheduling, registration, attendee tracking, and post-event analytics for organizers of all sizes.',
          },
          {
            title: 'Booking Systems',
            description:
              'Real-time availability engines with instant confirmation, waitlist management, and automated calendar syncing across multiple venues.',
          },
          {
            title: 'Venue Management',
            description:
              'Multi-location operations platforms with room scheduling, capacity management, staff coordination, and integrated POS systems.',
          },
          {
            title: 'Page Builders',
            description:
              'Drag-and-drop page builders for event landing pages, venue microsites, and branded registration flows — no developer needed after launch.',
          },
          {
            title: 'Ticketing Integration',
            description:
              'Seamless connections to Eventbrite, Ticketmaster, and custom ticketing engines with real-time inventory, pricing tiers, and promo codes.',
          },
          {
            title: 'Payment Processing',
            description:
              'Secure payment flows for ticket sales, deposits, and on-site transactions with support for split payments, refunds, and tipping.',
          },
        ]}
      />

      <CaseStudyGrid
        title="Hospitality platforms we've built."
        items={CASE_STUDIES}
      />

      <Testimonials filterIndustry="hospitality" />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA
        title="Let's build your hospitality platform."
        buttonText="Start your hospitality project"
      />
    </>
  );
}
