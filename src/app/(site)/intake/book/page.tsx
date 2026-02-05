import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { CalendlyEmbed } from '@/components/intake';

export const metadata: Metadata = {
  title: 'Book a Call',
  description: 'Schedule a free consultation with the Fetchly team.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/intake/book' },
};

export default function IntakeBookPage() {
  return (
    <section className="py-20 md:py-28">
      <Container size="lg">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
          <div className="lg:sticky lg:top-32">
            <h1 className="text-h2 font-bold text-foreground mb-3">
              Book a Call
            </h1>
            <p className="text-body-lg text-foreground-subtle">
              Pick a time that works. We&apos;ll come prepared.
            </p>
          </div>
          <CalendlyEmbed />
        </div>
      </Container>
    </section>
  );
}
