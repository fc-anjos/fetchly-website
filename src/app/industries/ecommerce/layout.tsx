import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Commerce & Marketplace Development | Fetchly',
  description:
    'From Shopify storefronts to custom marketplaces — we\'ve built commerce platforms that process millions in transactions.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
