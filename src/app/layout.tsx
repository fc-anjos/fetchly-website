import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/effects/SmoothScroll';
import { CursorProvider, CustomCursor } from '@/components/effects/CustomCursor';
import { Preloader } from '@/components/effects/Preloader';
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
      <body className="min-h-screen flex flex-col bg-surface text-foreground antialiased">
        <ThemeProvider>
          <Preloader />
          <SmoothScroll>
            <CursorProvider>
              <CustomCursor />
              <a href="#main-content" className="skip-link">
                Skip to main content
              </a>
              <Navbar />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
            </CursorProvider>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
