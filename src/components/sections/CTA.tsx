'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/13s-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/13s.webm" type="video/webm" />
          <source src="/videos/13s.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/80" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <Heading level="display-2" className="text-white mb-6">
            Ready to build
            <br />
            something amazing?
          </Heading>
          <Button href="/intake/step-1" size="lg">
            Get in Touch
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
