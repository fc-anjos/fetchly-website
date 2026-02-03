import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import {
  PageHero,
  PainPoints,
  ProcessSteps,
  FeatureGrid,
  Testimonials,
  FAQ,
  CTA,
} from '@/components/sections';

export const metadata: Metadata = {
  title: 'AI Integration — Add AI to Your Product | Fetchly',
  description:
    'We integrate OpenAI, Azure AI, and custom ML models into existing products — practical AI that solves real problems, not science projects.',
};

const FAQ_ITEMS = [
  {
    question: 'Which AI models do you work with?',
    answer:
      'We work with OpenAI (GPT-4, embeddings), Azure AI, Anthropic Claude, open-source models like Llama and Mistral, and custom fine-tuned models. We pick the right model for your use case based on accuracy, cost, latency, and data privacy requirements.',
  },
  {
    question: 'What data do you need to get started?',
    answer:
      'It depends on the use case. For semantic search or recommendations, we need your existing content or product catalog. For document processing, we need sample documents. We start with whatever you have and build data pipelines to keep everything up to date.',
  },
  {
    question: 'How do you handle data privacy and security?',
    answer:
      'We take data privacy seriously. We support on-premise deployments, private cloud hosting, and data anonymization pipelines. For regulated industries, we work within your compliance framework and ensure no sensitive data leaves your environment.',
  },
  {
    question: 'How much does AI integration cost?',
    answer:
      'Our flat monthly model covers the engineering work. AI infrastructure costs (API calls, hosting) vary by usage but are typically $200-2,000/month for most products. We optimize for cost from day one and give you full visibility into spend.',
  },
];

export default function AIPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'AI Integration',
            description:
              'We integrate OpenAI, Azure AI, and custom ML models into existing products — practical AI that solves real problems, not science projects.',
            url: 'https://www.fetch.ly/solutions/ai',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/services' },
            { label: 'AI Integration' },
          ]}
        />
      </Container>

      <PageHero
        title="Add AI to your product in weeks, not months."
        description="We integrate OpenAI, Azure AI, and custom ML models into existing products — practical AI that solves real problems, not science projects."
        ctaText="Explore AI for your product"
        ctaHref="/intake/request"
        showBadge={false}
      />

      <PainPoints
        items={[
          { title: "You know AI could help, but don't know where to start" },
          { title: 'Proof of concept that never made it to production' },
          { title: 'Data scattered across systems' },
          { title: 'Vendors selling AI hype, not solutions' },
        ]}
      />

      <ProcessSteps
        title="How we add AI to your product"
        steps={[
          {
            title: 'AI feasibility assessment',
            description:
              'We evaluate your product, data, and business goals to identify where AI creates real value — not where it sounds impressive. You get a prioritized list of opportunities with estimated effort and impact.',
          },
          {
            title: 'Prototype & validate',
            description:
              'We build a working prototype in 2-4 weeks using your real data. You see actual results, measure accuracy, and decide whether to move forward before committing to a full build.',
          },
          {
            title: 'Production integration',
            description:
              'We integrate the validated AI features into your existing product with proper error handling, fallbacks, monitoring, and cost controls. It ships as a seamless part of your product, not a bolt-on.',
          },
        ]}
      />

      <FeatureGrid
        label="What you get"
        title="AI capabilities"
        columns={3}
        items={[
          {
            title: 'Semantic Search',
            description:
              'Natural language search that understands intent, not just keywords.',
          },
          {
            title: 'Intelligent Matching',
            description:
              'AI-powered matching for jobs, products, content, or any domain-specific pairing.',
          },
          {
            title: 'Content Generation',
            description:
              'Automated drafting, summarization, and personalization powered by LLMs.',
          },
          {
            title: 'Document Processing',
            description:
              'Extract, classify, and structure data from PDFs, invoices, contracts, and forms.',
          },
          {
            title: 'Chatbots & Assistants',
            description:
              'Conversational AI trained on your knowledge base for support, sales, or internal tools.',
          },
          {
            title: 'Recommendation Engines',
            description:
              'Personalized suggestions that learn from user behavior and improve over time.',
          },
        ]}
      />

      <Testimonials filterSolution="ai" />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA
        title="Book a free AI feasibility session"
        buttonText="Get Started"
      />
    </>
  );
}
