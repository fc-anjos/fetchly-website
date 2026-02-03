import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { localBusinessSchema } from '@/lib/schema';
import { PageHero, SolutionsGrid, FAQ, CTA } from '@/components/sections';
import { LOCATIONS, SOLUTIONS } from '@/lib/page-data';

const location = LOCATIONS.find((l) => l.slug === 'denver')!;

export const metadata: Metadata = {
  title: 'Software Development Agency in Denver | Fetchly',
  description:
    'Denver-based software development agency. Custom web and mobile development, design, QA, and DevOps from our Denver office.',
};

const FAQ_ITEMS = [
  {
    question: 'Where is your Denver office?',
    answer: `Our Denver office is located at ${location.address}. We're in the heart of downtown, easily accessible from LoDo and the surrounding tech corridor.`,
  },
  {
    question: 'Do you work with Denver-area startups?',
    answer:
      'Yes — we work with funded startups and established companies across the Front Range. We\'ve partnered with University of Denver, Colorado-based SaaS companies, and local tech startups.',
  },
  {
    question: 'Can we meet in person?',
    answer:
      'Absolutely. Our Denver team is available for in-person meetings, workshops, and working sessions. We also support remote and hybrid collaboration.',
  },
  {
    question: 'What services does your Denver team offer?',
    answer:
      'Our Denver office provides full-stack development, design, QA, project management, DevOps, and AI integration — the same comprehensive service as all our locations.',
  },
];

export default function DenverPage() {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema(location)]} />
      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations' }, { label: 'Denver' }]} />
      </Container>
      <PageHero
        title="Denver's development partner for ambitious companies."
        description={`Custom software development from our Denver office at ${location.address}. Full-stack engineering, design, QA, and DevOps — all from a team that knows the Colorado tech scene.`}
        ctaText="Talk to our Denver team"
        ctaHref="/intake/step-1"
        secondaryText="See our work"
        secondaryHref="/case-studies"
      />
      <section className="py-12 md:py-16 bg-surface-alt">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-2 font-bold text-foreground mb-4">Rooted in Denver's tech community</h2>
            <p className="text-lg text-foreground-muted">
              From University of Denver research apps to Colorado-based SaaS platforms, we've been building software in Denver for over eight years. Our team understands the local tech ecosystem and is invested in the community.
            </p>
          </div>
        </Container>
      </section>
      <SolutionsGrid
        title="What we do"
        description="Full-service software development from our Denver office."
        solutions={SOLUTIONS}
        columns={4}
      />
      <FAQ items={FAQ_ITEMS} title="FAQ" label="Denver Office" />
      <CTA
        title="Visit us in Denver"
        description={`${location.address} · ${location.phone}`}
        buttonText="Book a Call"
      />
    </>
  );
}
