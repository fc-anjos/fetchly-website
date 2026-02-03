import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'DevOps & Docker Consulting | Fetchly',
  description:
    'Docker containerization, CI/CD pipelines, and infrastructure automation — so your team focuses on code, not servers.',
};

const FAQ_ITEMS = [
  {
    question: 'Do we need Docker if we already use Heroku or Vercel?',
    answer:
      'Not necessarily. Docker adds value when you need environment parity, complex multi-service architectures, or plan to move to AWS or GCP. We help you decide whether containerization is worth the investment for your setup.',
  },
  {
    question: 'Can you set up CI/CD for our existing project?',
    answer:
      'Yes. We set up CI/CD pipelines on GitHub Actions, GitLab CI, CircleCI, or AWS CodePipeline. We configure automated testing, linting, security scanning, and deployment for every push.',
  },
  {
    question: 'How long does a DevOps setup typically take?',
    answer:
      'A basic CI/CD pipeline with Docker takes 1-2 weeks. A full infrastructure overhaul with monitoring, alerting, and infrastructure as code typically takes 4-8 weeks depending on complexity.',
  },
  {
    question: 'Will our developers need to learn Docker?',
    answer:
      'We write Dockerfiles and docker-compose configs that work out of the box. Your developers run one command to start the entire stack locally. We also provide documentation and training if needed.',
  },
];

export default function DevopsDockerPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'DevOps & Docker Consulting',
            description:
              'Docker containerization, CI/CD pipelines, and infrastructure automation — so your team focuses on code, not servers.',
            url: 'https://www.fetch.ly/technologies/devops-docker',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Technologies' },
            { label: 'DevOps & Docker' },
          ]}
        />
      </Container>

      <PageHero
        title="Infrastructure you don't have to think about."
        description="Docker containerization, CI/CD pipelines, and infrastructure automation — so your team focuses on code, not servers."
        ctaText="Get a free DevOps audit"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <ProcessSteps
        title="How we deliver DevOps projects"
        steps={[
          { title: 'Infrastructure audit', description: 'We review your current deployment process, hosting setup, and development workflow to identify bottlenecks, risks, and automation opportunities.' },
          { title: 'Containerization & automation', description: 'We Dockerize your applications, build CI/CD pipelines, and provision infrastructure as code so deployments are fast, safe, and repeatable.' },
          { title: 'Monitoring & handoff', description: 'We set up logging, metrics, and alerting so you have full visibility — then document everything and train your team to run it independently.' },
        ]}
      />

      <FeatureGrid
        label="DevOps"
        title="What we build"
        columns={3}
        items={[
          { title: 'Docker Containers', description: 'Production-ready Dockerfiles, multi-stage builds, and docker-compose setups for consistent local and production environments.' },
          { title: 'CI/CD Pipelines', description: 'Automated build, test, and deploy pipelines on GitHub Actions, GitLab CI, or AWS CodePipeline with rollback support.' },
          { title: 'Infrastructure as Code', description: 'Terraform and AWS CDK configurations that make your infrastructure version-controlled, reviewable, and reproducible.' },
          { title: 'Monitoring Stack', description: 'Application and infrastructure monitoring with Datadog, Grafana, or CloudWatch — dashboards, alerts, and SLO tracking.' },
          { title: 'Log Aggregation', description: 'Centralized logging with structured output, search, and retention policies using ELK, CloudWatch Logs, or Datadog.' },
          { title: 'Security Scanning', description: 'Automated vulnerability scanning for Docker images, dependencies, and infrastructure with Trivy, Snyk, or Dependabot.' },
        ]}
      />

      <Testimonials />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA title="Get your free DevOps audit" buttonText="Get Started" />
    </>
  );
}
