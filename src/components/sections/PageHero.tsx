'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SplitText } from '@/components/effects/SplitText';
import { Text } from '@/components/ui/Text';
import { Parallax } from '@/components/effects/Parallax';
import { cn } from '@/lib/utils';

export interface PageHeroProps {
  /** Main hero title */
  title: ReactNode;
  /** Subtitle displayed below title (uppercase tagline style) */
  subtitle?: string;
  /** Description text */
  description?: string;
  /** Primary CTA button text */
  ctaText?: string;
  /** Primary CTA button href */
  ctaHref?: string;
  /** Secondary link text (shows as text link with arrow) */
  secondaryText?: string;
  /** Secondary link href */
  secondaryHref?: string;
  /** Image URL for the right side */
  image?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Whether to show the floating badge */
  showBadge?: boolean;
  /** Custom badge image path (defaults to /images/badge.svg) */
  badgeImage?: string;
  /** Additional overlay elements rendered on top of the hero image */
  imageOverlay?: ReactNode;
  /** Custom ReactNode rendered in the right column instead of the image */
  rightContent?: ReactNode;
  /** Additional className */
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  description,
  ctaText = 'Talk to us',
  ctaHref = '/intake/request',
  secondaryText,
  secondaryHref = '/our-model',
  image,
  imageAlt = '',
  showBadge = true,
  badgeImage = '/images/badge.svg',
  imageOverlay,
  rightContent,
  className,
}: PageHeroProps) {
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      [subtitleRef, descRef, ctaRef, imageRef].forEach(ref => {
        if (ref.current) ref.current.style.opacity = '1';
      });
      return;
    }

    let ctx: any;
    const animate = async () => {
      const { gsap } = await import('gsap');
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.075 });
        if (subtitleRef.current) {
          tl.fromTo(subtitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            0.1
          );
        }
        if (descRef.current) {
          tl.fromTo(descRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            0.25
          );
        }
        if (ctaRef.current) {
          tl.fromTo(ctaRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            0.4
          );
        }
        if (imageRef.current) {
          const useOpacity = !rightContent;
          tl.fromTo(imageRef.current,
            { opacity: useOpacity ? 0 : 1, x: 60, scale: 0.95 },
            { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' },
            0.2
          );
        }
      });
    };
    animate();
    return () => { ctx?.revert(); };
  }, []);

  // SplitText requires a string child — handle ReactNode title gracefully
  const titleIsString = typeof title === 'string';

  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center pt-(--header-height) overflow-hidden bg-surface',
        className
      )}
    >
      <Container>
        <div className={cn(
          'grid grid-cols-1 items-center py-8',
          (image || rightContent) ? 'lg:grid-cols-2 gap-16 lg:gap-32' : 'max-w-3xl'
        )}>
          {/* Left Content */}
          <div className="z-10">
            {titleIsString ? (
              <SplitText
                as="h1"
                splitBy="words"
                trigger="mount"
                className="text-display-1 page-hero-title font-bold leading-[1.05] tracking-tight mb-4 text-foreground"
                animation={{ duration: 0.7, stagger: 0.05, ease: 'power4.out', y: 45 }}
              >
                {title as string}
              </SplitText>
            ) : (
              <h1 className="text-display-1 page-hero-title font-bold leading-[1.05] tracking-tight mb-4 text-foreground">
                {title}
              </h1>
            )}
            {subtitle && (
              <div ref={subtitleRef} className="mb-4" style={{ opacity: 0 }}>
                <Text
                  size="base"
                  className="uppercase tracking-wider font-semibold text-foreground/80"
                >
                  {subtitle}
                </Text>
              </div>
            )}
            {description && (
              <div ref={descRef} style={{ opacity: 0 }}>
                <Text size="lg" className="mb-8 text-foreground-muted">
                  {description}
                </Text>
              </div>
            )}
            <div ref={ctaRef} className="flex flex-wrap gap-4" style={{ opacity: 0 }}>
              {ctaText && ctaHref && (
                <Button href={ctaHref} size="lg" variant="primary">
                  {ctaText}
                </Button>
              )}
              {secondaryText && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 transition-colors text-foreground hover:text-primary"
                >
                  <Text as="span" size="lg" className="font-medium">
                    {secondaryText}
                  </Text>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          {/* Right Column */}
          {(image || rightContent) && (
            <div ref={imageRef} className="relative z-10" style={{ opacity: rightContent ? 1 : 0 }}>
              {rightContent ? rightContent : (
                <>
                  <Parallax speed={0.5}>
                    <div className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden">
                      <Image
                        src={image!}
                        alt={imageAlt}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </Parallax>
                  {imageOverlay}
                  {showBadge && (
                    <Parallax speed={-0.3} className="absolute -top-4 -right-4 w-32 h-32 z-20">
                      <Image
                        src={badgeImage}
                        alt=""
                        width={127}
                        height={127}
                        className="w-full h-full animate-spin-slow"
                      />
                    </Parallax>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </Container>

      {/* Dotted texture */}
      <Image
        src="/images/dotted-texture.webp"
        alt=""
        fill
        className="object-cover pointer-events-none opacity-[0.14]"
      />
    </section>
  );
}

export default PageHero;
