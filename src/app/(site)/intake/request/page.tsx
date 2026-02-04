'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Container } from '@/components/ui/Container';
import { IntakeForm } from '@/components/intake';

const SOLUTION_HEADINGS: Record<string, string> = {
  'build-mvp': "Let's plan your MVP",
  'scale-team': "Let's scale your team",
  'rescue': 'Tell us about your rescue project',
  'modernize': "Let's modernize your stack",
  'qa-testing': "Let's improve your QA",
  'design': "Let's design your product",
  'devops': "Let's optimize your infrastructure",
  'ai': "Let's build your AI integration",
};

function IntakeRequestContent() {
  const searchParams = useSearchParams();
  const solution = searchParams.get('solution') ?? '';
  const email = searchParams.get('email') ?? '';
  const heading = SOLUTION_HEADINGS[solution] || undefined;

  // Map solution query param to project type chip pre-selection
  const TYPE_MAP: Record<string, string> = {
    'build-mvp': 'Build MVP',
    'scale-team': 'Scale Team',
    'rescue': 'Rescue & Replace',
    'modernize': 'Modernize',
    'qa-testing': 'QA & Testing',
    'design': 'Design & UX',
    'devops': 'DevOps',
    'ai': 'AI Integration',
  };

  const preselectedType = TYPE_MAP[solution] || undefined;

  return (
    <IntakeForm
      heading={heading}
      preselectedType={preselectedType}
      initialEmail={email || undefined}
    />
  );
}

export default function IntakeRequestPage() {
  return (
    <section className="py-20 md:py-28">
      <Container size="md">
        <Suspense>
          <IntakeRequestContent />
        </Suspense>
      </Container>
    </section>
  );
}
