'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { Parallax } from '@/components/effects/Parallax';

export function Bento() {
  return (
    <Section>
      <Container>
        {/* Intro Text */}
        <ScrollReveal direction="up" distance={30} duration={0.7}>
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <Text size="xl" className="text-foreground-muted leading-relaxed">
              Fetchly places developers, designers, PMs, and QA specialists directly into your
              workflow. You keep full ownership of your product, work month-to-month, and get
              supplemental services built into every engagement.
            </Text>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <ScrollReveal stagger={0.08} distance={40} duration={0.6}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Column 1 */}
            <div data-reveal>
              <Parallax speed={0.05} className="flex flex-col gap-4">
                {/* Video Cell */}
                <div className="group relative aspect-square bg-black rounded-[10px] lg:rounded-[20px] overflow-hidden flex items-center justify-center">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/videos/13s-poster.jpg"
                    className="absolute inset-0 w-full h-full object-cover saturate-[0.7] brightness-90 group-hover:saturate-100 group-hover:brightness-110 transition-all duration-300"
                  >
                    <source src="/videos/13s.webm" type="video/webm" />
                    <source src="/videos/13s.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Tapp Image */}
                <div className="relative">
                  <Image
                    src="/images/tapp.png"
                    alt="Tapp project showcase"
                    width={512}
                    height={512}
                    className="w-full h-auto rounded-[10px] lg:rounded-[20px] saturate-[0.7] brightness-90 hover:saturate-100 hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </Parallax>
            </div>

            {/* Column 2 */}
            <div data-reveal>
              <Parallax speed={-0.03} className="flex flex-col gap-4">
                <div className="relative">
                  <Image
                    src="/images/winc.png"
                    alt="Winc project showcase"
                    width={512}
                    height={512}
                    className="w-full h-auto rounded-[10px] lg:rounded-[20px] saturate-[0.7] brightness-90 hover:saturate-100 hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="/images/projects.png"
                    alt="Projects showcase"
                    width={512}
                    height={512}
                    className="w-full h-auto rounded-[10px] lg:rounded-[20px] saturate-[0.7] brightness-90 hover:saturate-100 hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </Parallax>
            </div>

            {/* Column 3 */}
            <div data-reveal>
              <Parallax speed={0.07} className="flex flex-col gap-2.5">
                <div className="relative">
                  <Image
                    src="/images/testimonial.png"
                    alt="Client testimonial"
                    width={512}
                    height={512}
                    className="w-full h-auto rounded-[10px] lg:rounded-[20px] saturate-[0.7] brightness-90 hover:saturate-100 hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="/images/colorado.png"
                    alt="Colorado project"
                    width={512}
                    height={512}
                    className="w-full h-auto rounded-[10px] lg:rounded-[20px] saturate-[0.7] brightness-90 hover:saturate-100 hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="/images/66k.png"
                    alt="66k metric"
                    width={512}
                    height={512}
                    className="w-full h-auto rounded-[10px] lg:rounded-[20px] saturate-[0.7] brightness-90 hover:saturate-100 hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </Parallax>
            </div>

            {/* Column 4 */}
            <div data-reveal>
              <Parallax speed={-0.05} className="flex flex-col gap-4">
                <div className="relative">
                  <Image
                    src="/images/casper.png"
                    alt="Casper project showcase"
                    width={512}
                    height={512}
                    className="w-full h-auto rounded-[10px] lg:rounded-[20px] saturate-[0.7] brightness-90 hover:saturate-100 hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="/images/vast.png"
                    alt="Vast project showcase"
                    width={512}
                    height={512}
                    className="w-full h-auto rounded-[10px] lg:rounded-[20px] saturate-[0.7] brightness-90 hover:saturate-100 hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </Parallax>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export default Bento;
