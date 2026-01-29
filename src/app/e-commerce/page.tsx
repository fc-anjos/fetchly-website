'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { CTA } from '@/components/sections/CTA';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { PageHero } from '@/components/sections/PageHero';

const FEATURES = [
  {
    title: 'Your design & planning roadmap',
    description:
      'Before we build, we blueprint. Every screen, flow, and feature is mapped to match your e-commerce goals before any code is written.',
  },
  {
    title: 'Feature development that ships fast',
    description:
      "No more 'we'll get to it'. You get weekly mobile test builds and live web links so you can see real progress fast.",
  },
  {
    title: 'Testing & polishing that catches it all',
    description:
      'We break it before your users do. Every feature goes through rigorous testing and refinement for a high-performing launch.',
  },
  {
    title: 'Maintenance that handles the 3AM stuff',
    description:
      'We catch bugs before your customers do and fix them before they cost you sales.',
  },
];

const CAPABILITIES = [
  {
    title: 'Backend that holds the line',
    description:
      'Ensure your store runs smoothly with our reliable backend solutions.',
  },
  {
    title: 'UI/UX that keeps shoppers clicking',
    description:
      "We craft ecommerce interfaces that guide customers to stay and 'Buy Now'.",
  },
  {
    title: 'Shopify without limitations',
    description:
      'We configure, integrate, and optimize your Shopify store for speed, stability, and scale.',
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

export default function EcommercePage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={<>We help build<br />eCommerce brands</>}
        subtitle="We build and manage the technical side, so you can focus on running your brand."
        description="We strategize, design, build, test, launch, and manage custom online stores, all at a low, month-to-month price. From UX to backend, every site and app we build is meticulously optimized to drive revenue."
        ctaText="Talk to us"
        ctaHref="/intake/request"
        secondaryText="Learn more"
        secondaryHref="/our-model"
        image="/images/casper.jpg"
        imageAlt="Casper website homepage highlighting 20% off Dream mattresses, 30% off bundles, pillows, and a bed with call-to-action buttons."
        badgeImage="/images/badge-ecommerce.svg"
        imageOverlay={
          <>
            {/* Casper logo overlay */}
            <div className="absolute top-4 left-4 z-10 w-24">
              <Image
                src="/images/casper-logo.svg"
                alt="Casper"
                width={96}
                height={32}
                className="w-full h-auto"
              />
            </div>
            {/* iPhone mockup */}
            <div className="absolute -bottom-4 -left-8 z-10 w-28 md:w-36">
              <Image
                src="/images/casper-iphone.avif"
                alt="Casper mobile website"
                width={180}
                height={360}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </>
        }
      />

      {/* Trust Section */}
      <section className="py-28 bg-surface-alt">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Text size="sm" className="uppercase tracking-[1px] font-semibold text-foreground-muted mb-6">
              The best web development company
            </Text>
            <Heading level="display-2" className="text-foreground mb-6">
              Trusted by brands that don&apos;t want to build another team.
            </Heading>
            <Text size="lg" className="text-foreground-muted">
              For years, many clients have relied on Fetchly as their only outside dev team. Why? Fetchly gives you more than just code. You get a full-stack team, a tightly managed process, and a smarter way to build and scale your store.
              <br />
              <strong className="text-foreground">70+ applications launched. 7+ years strong.</strong>
            </Text>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <ProcessSteps />

      {/* Testimonials Section */}
      <section className="py-28 bg-surface-alt">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Text size="sm" className="uppercase tracking-[1px] font-semibold text-foreground-muted mb-4">
                What our clients say
              </Text>
              <Heading level="display-2" className="text-foreground">
                Trusted by industry leaders
              </Heading>
            </div>
            {/* Featured testimonial */}
            <div className="p-8 md:p-12 rounded-[1.25rem] bg-surface-card border border-border">
              <Text as="blockquote" size="xl" className="text-foreground leading-relaxed mb-6">
                &ldquo;I was, without exaggerating, blown away by the quality, appearance, and functionality of the app.&rdquo;
              </Text>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/university-denver.svg"
                  alt="University of Denver"
                  width={48}
                  height={48}
                  className="h-12 w-auto dark:invert"
                />
                <div>
                  <Text className="font-semibold text-foreground">Douglas H. Clements, Ph.D</Text>
                  <Text size="sm" className="text-foreground-muted">Distinguished Professor and Kennedy Endowed Chair University of Denver</Text>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Card Section - Always dark card */}
      <section className="py-28 bg-surface">
        <Container>
          <div className="rounded-[3rem] bg-gray-900 text-white overflow-hidden dark:bg-white/5 dark:border dark:border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <Heading level="display-2" className="text-white mb-6">
                  Ready to build
                  <br />
                  something amazing?
                </Heading>
                <Text size="lg" className="text-gray-400 mb-8">
                  Get a high-performing e-commerce platform that&apos;s designed, built, and managed by a team that does this every day.
                </Text>
                <div>
                  <Button href="/intake/step-1" size="lg" variant="primary">
                    Get in Touch
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-full">
                <Image
                  src="/images/tapp.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <FeatureGrid
        label="The only toolkit you'll ever need"
        title="Cross-functional eCommerce team that can help you rapidly scale your DTC Brand."
        items={FEATURES}
        columns={2}
        background="muted"
      />

      {/* Capabilities Section */}
      <FeatureGrid
        label="Your eCommerce development experts"
        title="Built to sell. Engineered to scale."
        description="We design and develop ecommerce platforms with the architecture, performance, and flexibility to grow as you do."
        items={CAPABILITIES}
        columns={3}
        centerText
      />

      {/* FAQ Section */}
      <FAQAccordion
        title="See if we have what you need."
        items={FAQ_ITEMS}
        background="muted"
        layout="two-column"
      />

      {/* Final CTA Section */}
      <CTA />
    </>
  );
}
