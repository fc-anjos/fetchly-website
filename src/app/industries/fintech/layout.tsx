import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FinTech & Real Estate Software Development | Fetchly',
  description:
    'Payment processing, mortgage platforms, and property management software with security and compliance built in.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
