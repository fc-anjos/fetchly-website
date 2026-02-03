import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logistics & Supply Chain Software Development | Fetchly',
  description:
    'Real-time tracking, rate management, and carrier API integrations for logistics and supply chain companies.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
