import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
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
  /** Theme variant */
  theme?: 'dark' | 'light';
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
  image = '/images/projects.png',
  imageAlt = 'Project showcase',
  showBadge = true,
  theme = 'dark',
  className,
}: PageHeroProps) {
  const isDark = theme === 'dark';

  return (
    <section
      className={cn(
        'relative min-h-[90vh] flex items-center overflow-hidden',
        isDark ? 'bg-gray-950' : 'bg-light-bg',
        className
      )}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center py-16">
          {/* Left Content */}
          <div className="z-10">
            <Heading
              level="display-1"
              className={cn('mb-4', isDark ? 'text-white' : 'text-black')}
            >
              {title}
            </Heading>
            {subtitle && (
              <div className="mb-4">
                <Text
                  size="base"
                  className={cn(
                    'uppercase tracking-wider font-semibold',
                    isDark ? 'text-white/80' : 'text-black/80'
                  )}
                >
                  {subtitle}
                </Text>
              </div>
            )}
            {description && (
              <Text
                size="lg"
                className={cn(
                  'mb-8',
                  isDark ? 'text-gray-400' : 'text-light-text-muted'
                )}
              >
                {description}
              </Text>
            )}
            <div className="flex flex-wrap gap-4">
              {ctaText && ctaHref && (
                <Button href={ctaHref} size="lg" variant="primary">
                  {ctaText}
                </Button>
              )}
              {secondaryText && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className={cn(
                    'inline-flex items-center gap-2 transition-colors',
                    isDark
                      ? 'text-white hover:text-primary'
                      : 'text-black hover:text-primary'
                  )}
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

          {/* Right Image */}
          <div className="relative z-10">
            <div className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Floating badge */}
            {showBadge && (
              <div className="absolute -top-4 -right-4 w-32 h-32">
                <Image
                  src="/images/badge.svg"
                  alt=""
                  width={127}
                  height={127}
                  className="w-full h-full animate-spin-slow"
                />
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Dotted texture */}
      <Image
        src="/images/dotted-texture.webp"
        alt=""
        fill
        className={cn(
          'object-cover pointer-events-none',
          isDark ? 'opacity-10' : 'opacity-30'
        )}
      />
    </section>
  );
}

export default PageHero;
