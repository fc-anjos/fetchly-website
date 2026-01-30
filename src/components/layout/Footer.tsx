import Link from 'next/link';
import Image from 'next/image';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { assetPath } from '@/lib/utils';

const PAGES_LINKS = [
  { label: 'eComm', href: '/e-commerce' },
  { label: 'Our Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Our Model', href: '/our-model' },
  { label: 'SaaS', href: '/saas-home' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookies Settings', href: '/privacy-policy' },
];

export function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full brightness-[0.85]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={assetPath("/videos/abstract-glass-poster.jpg")}
          className="w-full h-full object-cover"
        >
          <source src={assetPath("/videos/abstract-glass.mp4")} type="video/mp4" />
          <source src={assetPath("/videos/abstract-glass.webm")} type="video/webm" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.5fr] gap-6 lg:gap-8 items-stretch">

          {/* Left Content */}
          <div className="flex flex-col justify-between max-w-sm">
            <div className="flex flex-col items-start gap-4">
              <Link href="/">
                <Image
                  src="/images/fetchly-logo.svg"
                  alt="Fetchly"
                  width={180}
                  height={72}
                  className="h-[72px] w-auto"
                />
              </Link>
              <Heading level="h4" className="leading-tight">
                Ready to build
                <br />
                something amazing?
              </Heading>
              <Link
                href="/intake/request"
                className="flex items-center justify-center w-full py-2.5 bg-black/40 hover:bg-black/60 backdrop-blur-xl border border-white/10 rounded-lg text-sm text-white font-bold transition-colors shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between text-left lg:text-right">
            {/* Menu Links */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {/* Pages Column */}
              <div className="flex flex-col gap-0.5 items-start lg:items-end">
                <div className="text-xs text-white/60 mb-1">PAGES</div>
                {PAGES_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white py-0.5 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Legal Column */}
              <div className="flex flex-col gap-0.5 items-start lg:items-end">
                <div className="text-xs text-white/60 mb-1">LEGAL</div>
                {LEGAL_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white py-0.5 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-2 items-start lg:items-end">
              {/* Social Links */}
              <div className="flex gap-2">
                {/* X/Twitter */}
                <a
                  href="https://x.com/fetchlylabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 text-white hover:text-white/80 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z" fill="currentColor"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/fetchly-labs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 text-white hover:text-white/80 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819V16.9818V16.9816V16.9815V16.9812C12.4203 15.9674 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292V17.0294C15.6567 17.3992 15.6561 17.769 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591V16.759V16.7588C18.327 15.6293 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77019 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2797 10.9557V9.76176ZM5.68164 18.3244H8.33242V9.76733H5.68164V18.3244Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
              <div className="text-xs text-white/60">© 2025 Fetchly All rights reserved.</div>
              <div className="text-xs text-white px-3 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg">Austin, TX | Denver, CO | Santa Barbara, CA</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
