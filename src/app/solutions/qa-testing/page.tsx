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
  title: 'QA & Testing — Ship With Confidence | Fetchly',
  description:
    'Dedicated QA engineers who find the bugs before your users do. Manual testing, automation, performance, and security testing from Fetchly.',
};

const FAQ_ITEMS = [
  {
    question: 'What kind of test coverage can we expect?',
    answer:
      'We aim for meaningful coverage, not vanity metrics. That means critical user flows are covered first, then we expand to edge cases. Most projects reach 80%+ code coverage within the first engagement period.',
  },
  {
    question: 'What testing frameworks do you use?',
    answer:
      'We work with the frameworks that fit your stack: Cypress and Playwright for end-to-end, Jest and Vitest for unit testing, k6 and Artillery for performance, and OWASP ZAP for security scanning. We adapt to your tooling, not the other way around.',
  },
  {
    question: 'How much does QA testing cost?',
    answer:
      'Our flat monthly model means a predictable cost for a dedicated QA team. No hourly billing, no surprise invoices. We scope the engagement together before work begins.',
  },
  {
    question: 'Can you integrate testing into our existing CI/CD pipeline?',
    answer:
      'Absolutely. We plug automated test suites directly into your CI/CD pipeline so every pull request runs the full suite. Failed tests block merges, and you get a dashboard with pass/fail reports on every build.',
  },
];

export default function QATestingPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'QA & Testing',
            description:
              'Dedicated QA engineers who find the bugs before your users do. Manual testing, automation, performance, and security.',
            url: 'https://www.fetch.ly/solutions/qa-testing',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/services' },
            { label: 'QA & Testing' },
          ]}
        />
      </Container>

      <PageHero
        title="Ship with confidence."
        description="Dedicated QA engineers who find the bugs before your users do. Manual testing, automation, performance, and security."
        ctaText="Start testing today"
        ctaHref="/intake/request"
        showBadge={false}
      />

      <PainPoints
        items={[
          { title: 'Developers testing their own code' },
          { title: 'Bugs found by customers, not QA' },
          { title: 'No test automation' },
          { title: 'Release anxiety' },
        ]}
      />

      <ProcessSteps
        title="How we build your QA process"
        steps={[
          {
            title: 'Test strategy & coverage analysis',
            description:
              'We audit your current test coverage, identify gaps in critical user flows, and build a prioritized test strategy that catches the bugs that matter most.',
          },
          {
            title: 'Build test suites',
            description:
              'We write manual test plans and automated test suites in parallel — unit tests, integration tests, and end-to-end flows — using the frameworks that fit your stack.',
          },
          {
            title: 'Integrate into CI/CD & continuous reporting',
            description:
              'We plug your test suites into your CI/CD pipeline so every commit is validated automatically. You get dashboards, alerts, and confidence that nothing ships broken.',
          },
        ]}
      />

      <FeatureGrid
        label="What you get"
        title="Testing capabilities"
        columns={3}
        items={[
          {
            title: 'Manual Testing',
            description:
              'Exploratory and scripted testing by experienced QA engineers who think like users.',
          },
          {
            title: 'Automated Testing',
            description:
              'Cypress, Playwright, Selenium — end-to-end suites that run on every build.',
          },
          {
            title: 'Performance Testing',
            description:
              'Load testing, stress testing, and bottleneck analysis so your app scales under pressure.',
          },
          {
            title: 'Accessibility Testing',
            description:
              'WCAG compliance audits and assistive technology testing to reach every user.',
          },
          {
            title: 'Security Testing',
            description:
              'Vulnerability scanning, penetration testing basics, and OWASP top-10 coverage.',
          },
          {
            title: 'CI/CD Integration',
            description:
              'Automated test gates in your pipeline so broken code never reaches production.',
          },
        ]}
      />

      <Testimonials filterSolution="qa-testing" />

      <FAQ items={FAQ_ITEMS} title="FAQ" label="FAQ" />

      <CTA
        title="Get a free test coverage audit"
        buttonText="Get Started"
      />
    </>
  );
}
