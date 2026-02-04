import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { assetPath } from '@/lib/utils';
import { getAllCaseStudies, getCaseStudiesPage } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Browse case studies of innovative products we\'ve shipped, from MVP to enterprise launches.',
};

export default async function CaseStudiesPage() {
  const [CASE_STUDIES, page] = await Promise.all([
    getAllCaseStudies(),
    getCaseStudiesPage(),
  ]);

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
            poster={assetPath("/videos/case-studies-poster.jpg")}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={assetPath("/videos/case-studies.webm")} type="video/webm" />
            <source src={assetPath("/videos/case-studies.mp4")} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gray-950/60" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Heading level="display-1" className="text-white mb-6">
              {page.heroTitle}
            </Heading>
            <Text size="lg" className="text-gray-300">
              {page.heroDescription}
            </Text>
          </div>
        </Container>
        {/* Logo Marquee */}
        <div className="dark absolute bottom-8 left-0 right-0 z-10">
          <LogoMarquee variant="transparent" />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="space-y-16">
            {CASE_STUDIES.map((study) => (
              <article
                key={study.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800">
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
                <div>
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
      <section className="py-12 md:py-16 bg-gray-900/50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading level="display-2" className="text-white mb-6">
              {page.ctaTitle}
            </Heading>
            <Text size="lg" className="text-gray-300 mb-8">
              {page.ctaDescription}
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/intake/request" size="lg">
                {page.ctaButtonText}
              </Button>
              {page.ctaSecondaryText && (
                <Button href={page.ctaSecondaryHref} variant="outline" size="lg">
                  {page.ctaSecondaryText}
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
