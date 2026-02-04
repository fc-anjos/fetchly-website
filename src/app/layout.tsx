import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GA4Script } from '@/components/tracking/GA4Script';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fetch.ly'),
  title: {
    default: 'Fetchly | Your product team, month to month.',
    template: '%s | Fetchly',
  },
  description: 'Fetchly is a custom software and Shopify Plus agency offering design, engineering, QA, and DevOps on a monthly plan.',
  openGraph: {
    title: 'Fetchly - Your product team, month to month.',
    description: 'Fetchly is a custom software and Shopify Plus agency offering design, engineering, QA, and DevOps on a monthly plan.',
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/open-graph.png`],
    type: 'website',
    siteName: 'Fetchly',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fetchly - Your product team, month to month.',
    description: 'Fetchly is a custom software and Shopify Plus agency offering design, engineering, QA, and DevOps on a monthly plan.',
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/social-share.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <GA4Script />
      </body>
    </html>
  );
}
