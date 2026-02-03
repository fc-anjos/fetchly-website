import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { localBusinessSchema } from '@/lib/schema';
import { PageHero, SolutionsGrid, FAQ, CTA } from '@/components/sections';
import { LOCATIONS, SOLUTIONS } from '@/lib/page-data';

const location = LOCATIONS.find((l) => l.slug === 'santa-barbara')!;

export const metadata: Metadata = {
  title: 'Software Development Agency in Santa Barbara | Fetchly',
  description:
    'Santa Barbara-based software development agency. Custom web and mobile development, design, QA, and DevOps from our Santa Barbara office.',
};

const FAQ_ITEMS = [
  {
    question: 'Where is your Santa Barbara office?',
    answer: `Our Santa Barbara office is located at ${location.address}, in the heart of downtown Santa Barbara's business district.`,
  },
  {
    question: 'Do you work with Central Coast companies?',
    answer:
      'Yes — we work with companies across the Central Coast and Southern California, from Santa Barbara to Ventura and beyond.',
  },
  {
    question: 'Can we meet in person?',
    answer:
      'Absolutely. Our Santa Barbara team welcomes in-person meetings and collaborative sessions at our State Street office.',
  },
  {
    question: 'What services does your Santa Barbara team offer?',
    answer:
      'Full-stack development, design, QA, project management, DevOps, and AI integration — the same comprehensive offering available from all Fetchly locations.',
  },
];

export default function SantaBarbaraPage() {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema(location)]} />
      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations' }, { label: 'Santa Barbara' }]} />
      </Container>
      <PageHero
        title="Santa Barbara's development partner."
        description={`Custom software development from our Santa Barbara office at ${location.address}. Full-stack engineering, design, QA, and DevOps — from California's tech corridor.`}
        ctaText="Talk to our Santa Barbara team"
        ctaHref="/intake/step-1"
        secondaryText="See our work"
        secondaryHref="/case-studies"
      />
      <section className="py-12 md:py-16 bg-surface-alt">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-2 font-bold text-foreground mb-4">California's tech corridor</h2>
            <p className="text-lg text-foreground-muted">
              Santa Barbara sits at the intersection of LA's tech scene and Silicon Valley's innovation culture. Our office here gives clients access to California's deep talent pool with the quality of life that attracts top engineers.
            </p>
          </div>
        </Container>
      </section>
      <SolutionsGrid
        title="What we do"
        description="Full-service software development from our Santa Barbara office."
        solutions={SOLUTIONS}
        columns={4}
      />
      <FAQ items={FAQ_ITEMS} title="FAQ" label="Santa Barbara Office" />
      <CTA
        title="Visit us in Santa Barbara"
        description={`${location.address} · ${location.phone}`}
        buttonText="Book a Call"
      />
    </>
  );
}
