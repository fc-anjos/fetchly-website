import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom eCommerce Development | Fetchly',
  description:
    'We strategize, design, build, test, launch, and manage custom Shopify stores on a flexible month-to-month basis. From UX to backend, every store we build is optimized to drive revenue.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
