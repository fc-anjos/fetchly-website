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
  title: 'DevOps & Infrastructure — Deploy Without Sweating | Fetchly',
  description:
    'CI/CD pipelines, containerization, cloud architecture, and monitoring — so your team ships faster and sleeps better. DevOps done right by Fetchly.',
};

const FAQ_ITEMS = [
  {
    question: 'Which cloud providers do you work with?',
    answer:
      'We work primarily with AWS, but we also support GCP and Azure. If you are already on a provider, we optimize what you have. If you are starting fresh, we help you pick the right platform for your workload and budget.',
  },
  {
    question: 'Can you migrate our infrastructure without downtime?',
    answer:
      'Yes. We plan migrations with blue-green deployments, database replication, and incremental traffic shifting so your users experience zero interruption during the cutover.',
  },
  {
    question: 'How much can you reduce our cloud costs?',
    answer:
      'Most teams we audit are overspending by 30-50% due to oversized instances, idle resources, and missing reserved capacity. We right-size your infrastructure and set up cost alerts so you know exactly where every dollar goes.',
  },
  {
    question: 'Do you provide ongoing DevOps support or just setup?',
    answer:
      'Both. We can do a one-time infrastructure setup and hand off to your team with documentation, or we can provide ongoing managed DevOps as part of your monthly engagement. Most clients start with setup and keep us for ongoing optimization.',
  },
];

export default function DevOpsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'DevOps & Infrastructure',
            description:
              'CI/CD pipelines, containerization, cloud architecture, and monitoring so your team ships faster and sleeps better.',
            url: 'https://www.fetch.ly/solutions/devops',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/services' },
            { label: 'DevOps & Infrastructure' },
          ]}
        />
      </Container>

      <PageHero
        title="Deploy on Friday without sweating."
        description="CI/CD pipelines, containerization, cloud architecture, and monitoring — so your team ships faster and sleeps better."
        ctaText="Get a free infrastructure audit"
        ctaHref="/intake/request"
        showBadge={false}
      />

      <PainPoints
        items={[
          { title: 'Manual deployments' },
          { title: 'No staging environment' },
          { title: "'It works on my machine'" },
          { title: 'AWS bill is a mystery' },
        ]}
      />

      <ProcessSteps
        title="How we level up your infrastructure"
        steps={[
          {
            title: 'Infrastructure audit',
            description:
              'We review your current architecture, deployment process, monitoring gaps, and cloud spend. You get a detailed report with prioritized recommendations and quick wins.',
          },
          {
            title: 'Pipeline & automation setup',
            description:
              'We build CI/CD pipelines, containerize your applications, set up staging environments, and automate everything that is currently manual. Every deployment becomes repeatable and safe.',
          },
          {
            title: 'Monitoring & optimization',
            description:
              'We instrument your stack with logging, metrics, and alerting so you know when something breaks before your users do. Then we continuously optimize for cost and performance.',
          },
        ]}
      />

      <FeatureGrid
        label="What you get"
        title="DevOps capabilities"
        columns={3}
        items={[
          {
            title: 'CI/CD Pipelines',
            description:
              'GitHub Actions, GitLab CI — automated build, test, and deploy on every push.',
          },
          {
            title: 'Docker & Containerization',
            description:
              'Consistent environments from local dev to production with Docker and orchestration.',
          },
          {
            title: 'AWS Architecture',
            description:
              'VPCs, load balancers, auto-scaling, RDS, Lambda — designed for your workload.',
          },
          {
            title: 'Monitoring & Alerting',
            description:
              'Datadog, CloudWatch, PagerDuty — real-time visibility into your entire stack.',
          },
          {
            title: 'Cost Optimization',
            description:
              'Right-sized instances, reserved capacity, and spend dashboards that cut waste.',
          },
          {
            title: 'Security Hardening',
            description:
              'IAM policies, secrets management, network segmentation, and compliance audits.',
          },
        ]}
      />

      <Testimonials filterSolution="devops" />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA
        title="Book your free DevOps assessment"
        buttonText="Get Started"
      />
    </>
  );
}
