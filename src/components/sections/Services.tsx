'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

const LEFT_FEATURES = [
  {
    title: 'Cost-Effective Pricing',
    description: 'Save up to 50% compared to similar agencies',
  },
  {
    title: 'Flexible Scaling',
    description: 'Ramp up or scale down your team on a monthly basis',
  },
];

const RIGHT_FEATURES = [
  {
    title: 'Supplemental Services',
    description: 'Project managers, Designers, QA, and DevOps with no extra cost',
  },
  {
    title: 'Dedicated Resources',
    description: 'Full-time expert developers',
  },
];

export function Services() {
  return (
    <Section id="why-fetchly">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="max-w-3xl mx-auto">
            <Heading level="display-2" className="text-white mb-4">Why Fetchly?</Heading>
            <Text size="lg" className="text-gray-400">
              Discover how we&apos;re transforming traditional development services to better serve
              you
            </Text>
          </div>
        </div>

        {/* Content Grid - 3 columns: Left Features | Center Image | Right Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2.5fr_1fr] gap-8 lg:gap-12 items-center">
          {/* Left Features */}
          <div className="flex flex-col gap-12 md:gap-16 order-2 md:order-1">
            {LEFT_FEATURES.map((feature) => (
              <div key={feature.title} className="text-left md:text-left">
                <Heading level="h4" className="text-white mb-2">{feature.title}</Heading>
                <Text className="text-gray-400">{feature.description}</Text>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative order-1 md:order-2 lg:order-2">
            <div className="relative w-full">
              <Image
                src="/images/map-blueprint.webp"
                alt="Exploded isometric diagram of a rectangular device assembly showing multiple components separated along the vertical axis"
                width={1104}
                height={1104}
                className="w-full h-auto object-cover z-10 invert"
              />
              {/* Dotted texture overlay */}
              <Image
                src="/images/dotted-texture.webp"
                alt=""
                width={4096}
                height={4096}
                className="absolute -top-8 -right-8 w-full h-full object-cover opacity-30 pointer-events-none"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-12 md:gap-16 order-3">
            {RIGHT_FEATURES.map((feature) => (
              <div key={feature.title} className="text-left md:text-right">
                <Heading level="h4" className="text-white mb-2">{feature.title}</Heading>
                <Text className="text-gray-400">{feature.description}</Text>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16 md:mt-20">
          <Button href="/intake/step-1" size="lg">
            Get started
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default Services;
