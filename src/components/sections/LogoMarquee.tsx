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
  theme?: 'light' | 'dark';
  variant?: 'default' | 'transparent';
}

export function LogoMarquee({ theme = 'dark', variant = 'default' }: LogoMarqueeProps) {
  // Duplicate logos for seamless infinite scroll
  const logoTrack = [...LOGOS, ...LOGOS];

  const isTransparent = variant === 'transparent';
  const bgColor = isTransparent ? 'bg-transparent' : (theme === 'light' ? 'bg-gray-100' : 'bg-gray-950');
  const borderColor = isTransparent ? 'border-transparent' : (theme === 'light' ? 'border-gray-200' : 'border-white/5');
  const textColor = theme === 'light' ? 'text-gray-500' : 'text-gray-500';
  const logoFilter = theme === 'light' ? 'invert' : '';

  return (
    <section className={`py-8 ${bgColor} ${isTransparent ? '' : 'border-y'} ${borderColor} overflow-hidden`}>
      <p className={`text-center ${textColor} text-sm uppercase tracking-wider mb-8`}>
        Trusted by innovative companies
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
              {/* Using img tag instead of Image for SVG with currentColor */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className={`h-6 md:h-8 w-auto object-contain opacity-70 ${logoFilter}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoMarquee;
