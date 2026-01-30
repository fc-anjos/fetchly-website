import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { assetPath } from '@/lib/utils';

// Client logos extracted from original Webflow design
const LOGOS = [
  { src: '/logos/logo-1.svg', alt: 'Casper' },
  { src: '/logos/logo-2.svg', alt: 'Colorado' },
  { src: '/logos/logo-3.svg', alt: 'Client Logo' },
  { src: '/logos/logo-4.svg', alt: 'Tapp' },
  { src: '/logos/logo-5.svg', alt: 'Client Logo' },
  { src: '/logos/logo-6.svg', alt: 'Client Logo' },
  { src: '/logos/logo-7.svg', alt: 'Client Logo' },
  { src: '/logos/logo-8.svg', alt: 'Oats Overnight' },
  { src: '/logos/logo-9.svg', alt: 'Client Logo' },
];

interface LogoMarqueeProps {
  variant?: 'default' | 'transparent';
}

export function LogoMarquee({ variant = 'default' }: LogoMarqueeProps) {
  // Duplicate logos for seamless infinite scroll
  const logoTrack = [...LOGOS, ...LOGOS];

  const isTransparent = variant === 'transparent';

  return (
    <ScrollReveal direction="none" duration={1}>
      <section className={`dark py-8 ${isTransparent ? 'bg-transparent' : 'bg-[#0a0a0a]'} ${isTransparent ? '' : 'border-y border-border'} overflow-hidden`}>
        <p className="text-center text-foreground-muted text-xs uppercase tracking-wider mb-4">
          TRUSTED BY
        </p>

        {/* Marquee wrapper - overflow hidden */}
        <div className="relative w-full overflow-hidden">
          {/* Animated track - duplicated logos for seamless loop */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {logoTrack.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex items-center justify-center px-6 md:px-10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetPath(logo.src)}
                  alt={logo.alt}
                  className="h-7 md:h-9 w-auto object-contain opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default LogoMarquee;
