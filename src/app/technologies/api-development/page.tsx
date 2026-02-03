import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'API Development — REST & GraphQL | Fetchly',
  description:
    'REST and GraphQL API design, development, and integration — performant, documented, and built to evolve.',
};

const FAQ_ITEMS = [
  {
    question: 'Should we use REST or GraphQL?',
    answer:
      'REST is simpler and works well for most CRUD applications. GraphQL shines when you have multiple clients with different data needs or deeply nested relationships. We help you choose based on your use case.',
  },
  {
    question: 'Do you write API documentation?',
    answer:
      'Yes. Every API we build ships with OpenAPI (Swagger) specs for REST or schema documentation for GraphQL. We also generate interactive docs so your frontend team and partners can explore endpoints easily.',
  },
  {
    question: 'How do you handle API versioning?',
    answer:
      'We design APIs with versioning from the start — typically URL-based versioning for REST and schema evolution for GraphQL. This lets you ship breaking changes without disrupting existing consumers.',
  },
  {
    question: 'Can you integrate with third-party APIs?',
    answer:
      'Yes. We integrate with payment providers, CRMs, ERPs, shipping APIs, and any service with a documented API. We build resilient integrations with retry logic, circuit breakers, and proper error handling.',
  },
];

export default function ApiDevelopmentPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'API Development — REST & GraphQL',
            description:
              'REST and GraphQL API design, development, and integration — performant, documented, and built to evolve.',
            url: 'https://www.fetch.ly/technologies/api-development',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'API Development' },
          ]}
        />
      </Container>

      <PageHero
        title="APIs built for the long haul."
        description="REST and GraphQL API design, development, and integration — performant, documented, and built to evolve."
        ctaText="Start your API project"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <ProcessSteps
        title="How we deliver API projects"
        steps={[
          { title: 'API design & specification', description: 'We define your resources, endpoints, authentication, and data contracts in an OpenAPI or GraphQL schema before writing any implementation code.' },
          { title: 'Development & testing', description: 'We build the API with comprehensive test coverage, proper error responses, pagination, and filtering — ready for real-world consumption.' },
          { title: 'Documentation & deployment', description: 'We generate interactive API docs, set up monitoring and rate limiting, and deploy with CI/CD for safe, repeatable releases.' },
        ]}
      />

      <FeatureGrid
        label="API"
        title="What we build"
        columns={3}
        items={[
          { title: 'REST APIs', description: 'Resource-oriented APIs with proper HTTP methods, status codes, pagination, and HATEOAS links for discoverability.' },
          { title: 'GraphQL', description: 'Schema-first GraphQL APIs with resolvers, data loaders, subscriptions, and automatic query complexity analysis.' },
          { title: 'API Documentation', description: 'Auto-generated interactive docs from OpenAPI specs or GraphQL introspection for developers and partners.' },
          { title: 'Authentication & Authorization', description: 'JWT, OAuth 2.0, API keys, and role-based access control tailored to your security requirements.' },
          { title: 'Rate Limiting', description: 'Request throttling, quota management, and abuse prevention to protect your API from misuse and ensure fair usage.' },
          { title: 'Versioning Strategy', description: 'API versioning with backward compatibility, deprecation policies, and migration paths for existing consumers.' },
        ]}
      />

      <Testimonials />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Let's design your API" buttonText="Get Started" />
    </>
  );
}
