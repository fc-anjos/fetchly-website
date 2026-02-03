import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SchemaMarkup, Breadcrumbs } from '@/components/seo';
import { serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero, ProcessSteps, FeatureGrid, Testimonials, FAQ, CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'React Native Development Agency | Fetchly',
  description:
    'Cross-platform mobile apps from a single codebase — native performance, faster development, lower costs.',
};

const PROCESS_STEPS = [
  {
    title: 'Mobile strategy & design',
    description:
      'We define your app architecture, navigation patterns, and platform-specific UX considerations before writing a line of code — iOS and Android, planned together.',
  },
  {
    title: 'Cross-platform development',
    description:
      'One codebase powers both platforms. We build with React Native and Expo, sharing 90%+ of code while delivering native look and feel on each device.',
  },
  {
    title: 'App store launch',
    description:
      'We handle app store submissions, beta testing with TestFlight and Google Play, and post-launch monitoring so your release goes smoothly.',
  },
];

const FEATURES = [
  { title: 'iOS & Android', description: 'A single codebase that delivers native experiences on both platforms — no compromise on performance or UX.' },
  { title: 'Native Modules', description: 'Camera, Bluetooth, biometrics, and platform-specific APIs integrated seamlessly when JavaScript alone is not enough.' },
  { title: 'Push Notifications', description: 'Targeted push notifications with Firebase Cloud Messaging and APNs — segmented, scheduled, and trackable.' },
  { title: 'Offline Support', description: 'Local data persistence and sync strategies that keep your app functional even without a network connection.' },
  { title: 'App Store Optimization', description: 'Metadata, screenshots, and keyword strategy optimized for discoverability on the App Store and Google Play.' },
  { title: 'Performance Tuning', description: 'Frame rate optimization, memory profiling, and startup time reduction for a smooth 60fps experience.' },
];

const FAQ_ITEMS = [
  {
    question: 'Is React Native as good as fully native development?',
    answer:
      'For the vast majority of apps, yes. React Native shares 90-95% of code across platforms while delivering native performance. We use native modules for features that require platform-specific APIs, so you get the best of both worlds.',
  },
  {
    question: 'How experienced is your team with React Native?',
    answer:
      'We have built and shipped 15+ React Native applications to both app stores. Our mobile team has deep experience with Expo, native modules, and the React Native ecosystem.',
  },
  {
    question: 'How long does a typical React Native project take?',
    answer:
      'A focused mobile app ships in 8-12 weeks. Larger apps with complex integrations, offline support, and native modules typically take 12-20 weeks.',
  },
  {
    question: 'What does a mobile app project cost?',
    answer:
      'Most React Native projects range from $50K to $200K depending on complexity. Because you are building one codebase instead of two, costs are typically 30-40% lower than separate native builds.',
  },
];

export default function ReactNativePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: 'React Native Development Agency',
            description: 'Cross-platform mobile apps from a single codebase — native performance, faster development, lower costs.',
            url: 'https://www.fetch.ly/technologies/react-native',
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Technologies' }, { label: 'React Native' }]} />
      </Container>

      <PageHero
        title="One codebase. iOS and Android."
        description="Cross-platform mobile apps from a single codebase — native performance, faster development, lower costs."
        ctaText="Start your mobile project"
        ctaHref="/intake/step-1"
        showBadge={false}
      />

      <ProcessSteps steps={PROCESS_STEPS} title="How we build with React Native" />

      <FeatureGrid items={FEATURES} title="What we build" label="React Native" columns={3} background="muted" />

      <Testimonials />

      <FAQ items={FAQ_ITEMS} title="React Native development FAQ" label="FAQ" />

      <CTA title="Start your mobile project" buttonText="Get Started" />
    </>
  );
}
