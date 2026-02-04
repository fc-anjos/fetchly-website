'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';
import type { TestimonialItem } from '@/types';

export interface TestimonialsProps {
  items: TestimonialItem[];
}

export function Testimonials({ items }: TestimonialsProps) {
  const testimonials = items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isProgrammaticScroll = useRef(false);

  const scrollToIndex = useCallback((index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    isProgrammaticScroll.current = true;
    setCurrentIndex(index);

    card.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });

    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 600);
  }, []);

  // Detect which card is centered during manual scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId: number;

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const viewportCenter = window.innerWidth / 2;
        let closestIndex = 0;
        let closestDistance = Infinity;

        cardRefs.current.forEach((card, index) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const distance = Math.abs(viewportCenter - cardCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setCurrentIndex(closestIndex);
      });
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const goToPrevious = () => {
    scrollToIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    scrollToIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <Section id="testimonials" className="py-12 md:py-16 bg-surface-alt overflow-hidden">
      <ScrollReveal direction="up" distance={30}>
        {/* Section label */}
        <Text size="sm" className="uppercase tracking-widest text-primary font-medium mb-16 text-center">
          Testimonials
        </Text>

        {/* Scrollable carousel track */}
        <div
          ref={trackRef}
          className={cn(
            'flex overflow-x-auto snap-x snap-mandatory',
            '[&::-webkit-scrollbar]:hidden',
            '[--card-width:85vw] md:[--card-width:60vw]',
            '[--gap:1rem] md:[--gap:1.5rem]',
          )}
          style={{
            scrollbarWidth: 'none',
            gap: 'var(--gap)',
            paddingInline: 'calc((100vw - var(--card-width)) / 2)',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
              className={cn(
                'flex-shrink-0 snap-center transition-all duration-300',
                index === currentIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-30 scale-[0.97] cursor-pointer',
              )}
              style={{ width: 'var(--card-width)' }}
              onClick={() => scrollToIndex(index)}
            >
              <div className="text-center px-6 md:px-16">
                {/* Em dash accent */}
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
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Author */}
                <div className="mt-10 flex items-center justify-center gap-4">
                  {testimonial.logo ? (
                    <div className="w-10 h-10 rounded-full flex items-center justify-center p-1.5 bg-overlay">
                      <Image
                        src={testimonial.logo}
                        alt={testimonial.author}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : null}
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-foreground-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                onClick={() => scrollToIndex(index)}
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
      </ScrollReveal>
    </Section>
  );
}

export default Testimonials;
