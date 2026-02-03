import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'AWS Architecture & Cloud Consulting | Fetchly',
  description:
    'Cloud architecture, deployment automation, and cost optimization on AWS — from a team that has deployed hundreds of applications.',
};

const FAQ_ITEMS = [
  {
    question: 'Can you audit our existing AWS setup?',
    answer:
      'Yes. We review your VPC layout, IAM policies, compute and storage choices, and billing to identify security gaps, performance bottlenecks, and cost savings. Most audits surface 20-40% in wasted spend.',
  },
  {
    question: 'Do you manage AWS infrastructure long-term?',
    answer:
      'We can. Many clients keep us on for ongoing infrastructure management, monitoring, and optimization. We also train your team to manage it independently if you prefer.',
  },
  {
    question: 'Should we use ECS, EKS, or Lambda?',
    answer:
      'It depends on your workload. We recommend ECS for containerized apps that need consistent performance, Lambda for event-driven tasks, and EKS only when you need full Kubernetes compatibility.',
  },
  {
    question: 'How do you handle infrastructure as code?',
    answer:
      'We use Terraform or AWS CDK to define all infrastructure as code. Every resource is version-controlled, reviewable, and reproducible across environments.',
  },
];

export default function AwsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'AWS Architecture & Cloud Consulting',
            description:
              'Cloud architecture, deployment automation, and cost optimization on AWS — from a team that has deployed hundreds of applications.',
            url: 'https://www.fetch.ly/technologies/aws',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'AWS' },
          ]}
        />
      </Container>

      <PageHero
        title="AWS architecture that scales."
        description="Cloud architecture, deployment automation, and cost optimization on AWS — from a team that's deployed hundreds of applications."
        ctaText="Get a free AWS audit"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <ProcessSteps
        title="How we deliver AWS projects"
        steps={[
          { title: 'Architecture review', description: 'We audit your current infrastructure, identify bottlenecks and security gaps, and design a target architecture aligned with AWS Well-Architected principles.' },
          { title: 'Infrastructure setup', description: 'We provision and configure your AWS resources using infrastructure as code, set up networking, and deploy your applications with automated pipelines.' },
          { title: 'Monitoring & optimization', description: 'We configure CloudWatch, alerting, and cost dashboards so you have full visibility — then optimize for performance and spend.' },
        ]}
      />

      <FeatureGrid
        label="AWS"
        title="What we build"
        columns={3}
        items={[
          { title: 'EC2 & ECS', description: 'Compute infrastructure with auto-scaling, load balancing, and container orchestration for your applications.' },
          { title: 'RDS & Aurora', description: 'Managed database setup with automated backups, read replicas, and failover for PostgreSQL, MySQL, and more.' },
          { title: 'S3 & CloudFront', description: 'Object storage and CDN configuration for static assets, media delivery, and global content distribution.' },
          { title: 'Lambda & Serverless', description: 'Event-driven functions for background jobs, API endpoints, and data processing without managing servers.' },
          { title: 'VPC & Security', description: 'Network architecture with private subnets, security groups, IAM policies, and encryption at rest and in transit.' },
          { title: 'Cost Optimization', description: 'Reserved instances, right-sizing, spot fleet strategies, and billing alerts to cut your AWS bill without sacrificing performance.' },
        ]}
      />

      <Testimonials />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Get your free AWS architecture audit" buttonText="Get Started" />
    </>
  );
}
