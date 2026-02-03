import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Contentful & Headless CMS Development | Fetchly',
  description:
    'Headless CMS implementation with Contentful — structured content, flexible delivery, and developer-friendly architecture.',
};

const FAQ_ITEMS = [
  {
    question: 'Why Contentful over a traditional CMS like WordPress?',
    answer:
      'Contentful separates content from presentation. Your team manages content in one place and delivers it to web, mobile, kiosks, and any future channel without rebuilding anything.',
  },
  {
    question: 'Can you migrate our existing content to Contentful?',
    answer:
      'Yes. We build custom migration scripts that map your existing content structure into a clean Contentful content model, preserving relationships, media assets, and localized content.',
  },
  {
    question: 'What frontend frameworks do you use with Contentful?',
    answer:
      'We typically pair Contentful with Next.js, Gatsby, or Remix. We choose the framework based on your performance needs, team skills, and deployment requirements.',
  },
  {
    question: 'How does Contentful handle localization?',
    answer:
      'Contentful has built-in localization at the field level. We configure locale fallbacks, translation workflows, and multi-region delivery so your content team can manage translations efficiently.',
  },
];

export default function ContentfulPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Contentful & Headless CMS Development',
            description:
              'Headless CMS implementation with Contentful — structured content, flexible delivery, and developer-friendly architecture.',
            url: 'https://www.fetch.ly/technologies/contentful',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'Contentful' },
          ]}
        />
      </Container>

      <PageHero
        title="Content architecture done right."
        description="Headless CMS implementation with Contentful — structured content, flexible delivery, and developer-friendly architecture."
        ctaText="Start your CMS project"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <ProcessSteps
        title="How we deliver Contentful projects"
        steps={[
          { title: 'Content modeling', description: 'We design your content types, relationships, and validation rules so editors have a clean, intuitive authoring experience from day one.' },
          { title: 'Frontend development', description: 'We build your frontend with Next.js or your framework of choice, wired to Contentful via the Content Delivery and Preview APIs.' },
          { title: 'Integration & migration', description: 'We migrate existing content, set up webhooks for automated workflows, and integrate with your marketing and analytics tools.' },
        ]}
      />

      <FeatureGrid
        label="Contentful"
        title="What we build"
        columns={3}
        items={[
          { title: 'Content Modeling', description: 'Structured content types with validations, references, and rich text designed for your editorial workflow.' },
          { title: 'Multi-Channel Delivery', description: 'One content source powering web, mobile apps, digital signage, and any API-connected channel.' },
          { title: 'Localization', description: 'Field-level localization with locale fallbacks, translation workflows, and region-specific content delivery.' },
          { title: 'Webhooks & Automation', description: 'Event-driven workflows that trigger builds, sync data, and notify teams when content changes.' },
          { title: 'Migration Tools', description: 'Custom scripts to migrate content from WordPress, Drupal, or legacy CMS platforms into Contentful.' },
          { title: 'Preview Environments', description: 'Live preview for editors to see draft content exactly as it will appear before publishing.' },
        ]}
      />

      <Testimonials />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Let's architect your content" buttonText="Get Started" />
    </>
  );
}
