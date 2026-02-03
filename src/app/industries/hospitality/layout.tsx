import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospitality & Events Software Development | Fetchly',
  description:
    'Event management platforms, booking systems, and ticketing integrations for the hospitality industry.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
