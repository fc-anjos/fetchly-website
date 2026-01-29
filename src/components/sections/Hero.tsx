'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

export function Hero() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError(true);
      return;
    }
    setError(false);
    window.location.href = `/intake/step-1?email=${encodeURIComponent(email)}`;
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/abstract-blue-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/abstract-blue.webm" type="video/webm" />
          <source src="/videos/abstract-blue.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950" />
      </div>

      {/* Dotted texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/dotted-texture.webp')",
          backgroundSize: 'cover',
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Heading level="display-1" className="text-white mb-6 animate-fade-in">
            Your Dev Team as a Service™
          </Heading>

          <Text size="xl" className="text-gray-300 mb-10 max-w-2xl mx-auto animate-slide-up">
            Development, Project Management, QA, Design, DevOps, and more
          </Text>

          {/* Email form */}
          <div className="w-full max-w-md mx-auto animate-slide-up">
            <div className="flex flex-col sm:flex-row gap-1 p-1 border border-white/15 rounded-xl bg-white/15 backdrop-blur-[12px]">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="Enter your email"
                maxLength={256}
                id="homepage-email-input"
                className="flex-1 px-4 py-2 bg-transparent text-white placeholder-white/60 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 m-px"
              />
              <button
                type="button"
                onClick={handleSubmit}
                id="homepage-email-button"
                className="px-5 py-2 bg-primary text-gray-900 font-semibold text-sm rounded-[12px] hover:bg-primary/90 transition-colors whitespace-nowrap m-px"
              >
                Scale with Fetchly
              </button>
            </div>

            {/* Error message */}
            {error && (
              <div
                id="homepage-email-error"
                className="mt-3 px-4 py-3 bg-red-100/90 border border-red-300 rounded-md text-red-700 text-sm font-medium"
              >
                Please enter a valid email address
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent z-10" />

      {/* Logo Marquee at bottom of hero */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <LogoMarquee variant="transparent" />
      </div>
    </section>
  );
}

export default Hero;
