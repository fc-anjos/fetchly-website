'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Working with Fetchly to build VRTSync has been a positive and collaborative experience. Their project management is strong, and they've helped translate a complex vision into a functional product. We've appreciated their responsiveness and technical capability throughout the process.",
    author: "Randy Mangel",
    role: "Founder of VRTSync",
    logo: "/images/VRTSync.svg",
  },
  {
    quote: "The team at Fetchly has fit our evolving development needs perfectly, giving us the flexibility to allocate talented developers to projects as needed. They consistently deliver high-quality work, and their project managers do a great job keeping everything on track.",
    author: "Spencer Steffen",
    role: "VP of Engineering at Oats Overnight",
    logo: "/images/oats-overnight.svg",
  },
  {
    quote: "I was, without exaggerating, blown away by the quality, appearance, and functionality of the app.",
    author: "Douglas H. Clements, Ph.D",
    role: "Distinguished Professor and Kennedy Endowed Chair University of Denver",
    logo: "/images/university-denver.svg",
  },
  {
    quote: "Fetch.ly was an outstanding development partner. They were responsive, clear communicators, and excellent at breaking down technical concepts so everyone stayed on the same page. They delivered an app our client loves, and I am excited to work with them on future projects!",
    author: "Dan Mulligan",
    role: "Partner at YellowDog Design Print and Marketing",
    image: "/images/image.webp",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section id="testimonials" className="py-24 md:py-32 bg-surface-alt">
      <Container size="lg">
        <ScrollReveal direction="up" distance={30}>
          {/* Section label */}
          <Text size="sm" className="uppercase tracking-widest text-primary font-medium mb-16 text-center">
            Testimonials
          </Text>

          <div className="max-w-3xl mx-auto text-center">
            {/* Em dash as visual anchor */}
            <div className="text-primary mb-8" aria-hidden="true">
              <svg width="48" height="2" viewBox="0 0 48 2" className="mx-auto">
                <rect width="48" height="2" fill="currentColor" />
              </svg>
            </div>

            {/* Quote */}
            <blockquote>
              <p
                className="text-foreground font-medium leading-relaxed"
                style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)' }}
              >
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-10 flex items-center justify-center gap-4">
              {currentTestimonial.logo ? (
                <div className="w-10 h-10 rounded-full flex items-center justify-center p-1.5 bg-overlay">
                  <Image
                    src={currentTestimonial.logo}
                    alt={currentTestimonial.author}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : currentTestimonial.image ? (
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : null}
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">
                  {currentTestimonial.author}
                </p>
                <p className="text-xs text-foreground-muted">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={goToPrevious}
                className="text-foreground-muted hover:text-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      'h-px transition-all duration-300',
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'w-4 bg-foreground/20 hover:bg-foreground/40'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="text-foreground-muted hover:text-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export default Testimonials;
