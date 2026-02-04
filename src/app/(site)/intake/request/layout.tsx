import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get in Touch',
  description: 'Tell us about your project and we\'ll get back to you within 24 hours.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/intake/request' },
};

export default function IntakeRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
