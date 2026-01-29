import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { LogoMarquee } from '@/components/sections/LogoMarquee';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Browse case studies of innovative products we\'ve shipped, from MVP to enterprise launches.',
};

const CASE_STUDIES = [
  {
    title: 'VRT Sync',
    category: 'SaaS',
    description:
      'VRT Sync is a forward-thinking client on a greenfield initiative, building a powerful, fully integrated web platform designed to modernize property management and maintenance for HOA boards, property managers, contractors, and community members.',
    tags: ['Web Platform', 'Property Management', 'SaaS'],
    image: '/images/vrt-sync-thumbnail.jpg',
  },
  {
    title: 'Container Alliance',
    category: 'SaaS',
    description:
      'Container Alliance partnered with us for a comprehensive digital transformation, resulting in a completely rebuilt CRM and a modern, conversion-focused website — all designed to streamline operations and elevate the customer experience.',
    tags: ['CRM', 'Website', 'Digital Transformation'],
    image: '/images/container-alliance.png',
  },
  {
    title: 'Oats Overnight',
    category: 'eCommerce',
    description:
      'We developed a comprehensive subscription platform for Oats Overnight that included a customized subscriber portal for easy subscription management, a member dashboard with exclusive perks and seasonal flavor access, and dynamic admin tools for efficient pick-pack shipping and inventory management. The platform featured targeted checkout development to convert customers into subscribers and collect valuable feedback, along with custom theme development to enhance the overall user experience. This solution directly supported Oats Overnight\'s growth to over 250,000 active subscribers and enabled them to achieve 94% of their e-commerce revenue through subscription orders.',
    tags: ['Shopify', 'Subscription', 'E-commerce'],
    image: '/images/oats-case.png',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-(--header-height) overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/videos/case-studies-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/case-studies.webm" type="video/webm" />
            <source src="/videos/case-studies.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gray-950/60" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Heading level="display-1" className="text-white mb-6">
              Proven solutions,
              <br />
              real results
            </Heading>
            <Text size="lg" className="text-gray-300">
              Browse case studies of innovative products
              <br />
              we&apos;ve shipped, from MVP to enterprise launches
            </Text>
          </div>
        </Container>
        {/* Logo Marquee */}
        <div className="dark absolute bottom-8 left-0 right-0 z-10">
          <LogoMarquee variant="transparent" />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="space-y-16">
            {CASE_STUDIES.map((study, index) => (
              <article
                key={study.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800 ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-900/80 text-white backdrop-blur-sm">
                      {study.category}
                    </span>
                  </div>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Text size="sm" className="text-primary font-medium mb-2">{study.category}</Text>
                  <Heading level="h1" className="text-white mb-4">
                    {study.title}
                  </Heading>
                  <Text size="lg" className="text-gray-400 mb-6">{study.description}</Text>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Text
                        key={tag}
                        as="span"
                        size="sm"
                        className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-white/10"
                      >
                        {tag}
                      </Text>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gray-900/50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading level="display-2" className="text-white mb-6">
              Ready to be our next success story?
            </Heading>
            <Text size="lg" className="text-gray-300 mb-8">
              Let&apos;s discuss how we can help bring your vision to life with our proven development
              process.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/intake/step-1" size="lg">
                Get in Touch
              </Button>
              <Button href="/services" variant="outline" size="lg">
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
