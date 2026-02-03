import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Python & Django Development Agency | Fetchly',
  description:
    'Backend services, APIs, and data-driven applications with Python and Django — from startups to enterprise.',
};

const PROCESS_STEPS = [
  {
    title: 'Architecture & API design',
    description:
      'We design your data models, API contracts, and service architecture — whether you need a Django monolith, microservices, or a data pipeline.',
  },
  {
    title: 'Development & testing',
    description:
      'We build with Django, FastAPI, or Flask depending on your needs. Comprehensive test coverage with pytest and type checking with mypy keep your codebase reliable.',
  },
  {
    title: 'Deployment & monitoring',
    description:
      'Containerized deployments to AWS, GCP, or your preferred cloud. We set up logging, alerting, and performance monitoring so you know how your app is running.',
  },
];

const FEATURES = [
  { title: 'Django Applications', description: 'Full-featured web applications with Django — admin panels, ORM, authentication, and the batteries-included ecosystem.' },
  { title: 'REST & GraphQL APIs', description: 'Clean, documented APIs with Django REST Framework or FastAPI — versioned, tested, and ready for your frontend and mobile clients.' },
  { title: 'Data Processing', description: 'ETL pipelines, data transformations, and batch processing with pandas, NumPy, and Apache Airflow.' },
  { title: 'ML Integration', description: 'Machine learning model serving, inference pipelines, and integration with scikit-learn, TensorFlow, and PyTorch.' },
  { title: 'Task Queues', description: 'Celery-powered background processing for long-running tasks, scheduled jobs, and asynchronous workflows.' },
  { title: 'Cloud Deployment', description: 'Docker, Kubernetes, and infrastructure-as-code with Terraform — deployed to AWS, GCP, or Azure.' },
];

const FAQ_ITEMS = [
  {
    question: 'When should I choose Python and Django over Rails or Node?',
    answer:
      'Python excels when your application involves data processing, machine learning, or scientific computing. Django is a strong choice for content-heavy platforms, admin-heavy workflows, and projects where the mature Python ecosystem gives you an advantage.',
  },
  {
    question: 'How experienced is your team with Python?',
    answer:
      'Our Python engineers have built production applications with Django, FastAPI, and Flask across SaaS, healthcare, fintech, and data platforms. We also have experience with data science and ML workflows.',
  },
  {
    question: 'How long does a typical Python project take?',
    answer:
      'A Django API or web application ships in 6-12 weeks. Data pipelines and ML-integrated systems typically take 10-16 weeks depending on the complexity of the data and model requirements.',
  },
  {
    question: 'Can you help with our existing Django application?',
    answer:
      'Yes. We regularly join existing Django projects — upgrading versions, improving performance, refactoring legacy code, adding test coverage, and building new features on top of established codebases.',
  },
];

export default function PythonPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'Python & Django Development Agency',
            description: 'Backend services, APIs, and data-driven applications with Python and Django — from startups to enterprise.',
            url: 'https://www.fetch.ly/technologies/python',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Technologies' }, { label: 'Python & Django' }]} />
      </Container>

      <PageHero
        title="Python for serious applications."
        description="Backend services, APIs, and data-driven applications with Python and Django — from startups to enterprise."
        ctaText="Start your Python project"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <ProcessSteps steps={PROCESS_STEPS} title="How we build with Python" />

      <FeatureGrid items={FEATURES} title="What we build" label="Python" columns={3} background="muted" />

      <Testimonials />

      <FAQ items={FAQ_ITEMS} title="Python development FAQ" label="FAQ" />

      <CTA title="Start your Python project" buttonText="Get Started" />
    </>
  );
}
