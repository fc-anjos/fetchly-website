import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare & MedTech Software Development | Fetchly',
  description:
    'HIPAA-compliant platforms, patient portals, and medical device software from a team that understands healthcare.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
