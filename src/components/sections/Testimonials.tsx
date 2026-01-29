'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
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

interface TestimonialsProps {
  theme?: 'dark' | 'light';
}

export function Testimonials({ theme = 'dark' }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDark = theme === 'dark';

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section
      id="testimonials"
      className={cn(
        'py-24 md:py-32',
        isDark ? 'bg-gray-950' : 'bg-light-bg-alt'
      )}
    >
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-4" variant={isDark ? 'default' : 'light'}>
            Testimonials
          </Badge>
          <Heading level="display-2" className={isDark ? 'text-white' : 'text-black'}>
            What our clients say
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative">
            <div
              className={cn(
                'rounded-2xl p-8 md:p-12',
                isDark
                  ? 'bg-gray-900/50 border border-white/10'
                  : 'bg-light-card border border-black/10'
              )}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    className={cn('w-6 h-6', isDark ? 'text-dark' : 'text-primary')}
                  />
                ))}
              </div>

              {/* Quote */}
              <Text
                as="blockquote"
                size="xl"
                className={cn(
                  'font-normal mb-8',
                  isDark ? 'text-white' : 'text-black'
                )}
              >
                &ldquo;{currentTestimonial.quote}&rdquo;
              </Text>

              {/* Author */}
              <div className="flex items-center gap-4">
                {currentTestimonial.logo ? (
                  <div
                    className={cn(
                      'w-12 h-12 rounded-full flex items-center justify-center p-2',
                      isDark ? 'bg-white/5' : 'bg-black/5'
                    )}
                  >
                    <Image
                      src={currentTestimonial.logo}
                      alt={currentTestimonial.author}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : currentTestimonial.image ? (
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : null}
                <div>
                  <p className={cn('font-semibold', isDark ? 'text-white' : 'text-black')}>
                    {currentTestimonial.author}
                  </p>
                  <p className={cn('text-sm', isDark ? 'text-gray-400' : 'text-light-text-muted')}>
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-16 -right-16 justify-between pointer-events-none">
              <button
                onClick={goToPrevious}
                className={cn(
                  'w-12 h-12 rounded-full border flex items-center justify-center transition-colors pointer-events-auto',
                  isDark
                    ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    : 'bg-black/5 border-black/10 text-black hover:bg-black/10'
                )}
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className={cn(
                  'w-12 h-12 rounded-full border flex items-center justify-center transition-colors pointer-events-auto',
                  isDark
                    ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    : 'bg-black/5 border-black/10 text-black hover:bg-black/10'
                )}
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-colors',
                  index === currentIndex
                    ? isDark
                      ? 'bg-white'
                      : 'bg-black'
                    : isDark
                      ? 'bg-white/20 hover:bg-white/40'
                      : 'bg-black/20 hover:bg-black/40'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default Testimonials;
