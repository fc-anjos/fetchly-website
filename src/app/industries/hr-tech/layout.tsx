import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR Tech & Recruitment Platform Development | Fetchly',
  description:
    'Multi-tenant HR platforms, AI-powered matching, and ATS integrations from a team that\'s built platforms matching thousands of candidates.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
