import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { localBusinessSchema } from '@/lib/schema';
import { PageHero, SolutionsGrid, FAQ, CTA } from '@/components/sections';
import { LOCATIONS, SOLUTIONS } from '@/lib/page-data';

const location = LOCATIONS.find((l) => l.slug === 'austin')!;

export const metadata: Metadata = {
  title: 'Software Development Agency in Austin | Fetchly',
  description:
    'Austin-based software development agency. Custom web and mobile development, design, QA, and DevOps.',
};

const FAQ_ITEMS = [
  {
    question: 'Do you work with Austin-area startups?',
    answer:
      'Yes — Austin is one of the fastest-growing tech hubs in the country, and we work with startups and scale-ups across the Austin metro area.',
  },
  {
    question: 'Can we meet in person?',
    answer:
      'Of course. Our Austin team is available for in-person meetings, workshops, and collaborative working sessions.',
  },
  {
    question: 'What services does your Austin team offer?',
    answer:
      'Full-stack development, design, QA, project management, DevOps, and AI integration — the complete Fetchly service offering from our Austin location.',
  },
];

export default function AustinPage() {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema(location)]} />
      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations' }, { label: 'Austin' }]} />
      </Container>
      <PageHero
        title="Austin's development partner for growing companies."
        description="Custom software development in Austin. Full-stack engineering, design, QA, and DevOps — built by a team embedded in the Austin tech scene."
        ctaText="Talk to our Austin team"
        ctaHref="/intake/step-1"
        secondaryText="See our work"
        secondaryHref="/case-studies"
      />
      <section className="py-12 md:py-16 bg-surface-alt">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-2 font-bold text-foreground mb-4">Building in the heart of Austin tech</h2>
            <p className="text-lg text-foreground-muted">
              Austin is home to some of the most ambitious tech companies in the country. Our Austin team is at the center of that ecosystem — working with startups, scale-ups, and enterprises building the next generation of products.
            </p>
          </div>
        </Container>
      </section>
      <SolutionsGrid
        title="What we do"
        description="Full-service software development from our Austin team."
        solutions={SOLUTIONS}
        columns={4}
      />
      <FAQ items={FAQ_ITEMS} title="FAQ" label="Austin" />
      <CTA
        title="Work with our Austin team"
        buttonText="Book a Call"
      />
    </>
  );
}
