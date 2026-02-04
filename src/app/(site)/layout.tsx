import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { NavbarServer } from '@/components/layout/NavbarServer';
import { FooterServer } from '@/components/layout/FooterServer';
import { SmoothScroll } from '@/components/effects/SmoothScroll';
import { CursorProvider, CustomCursor } from '@/components/effects/CustomCursor';
import { Preloader } from '@/components/effects/Preloader';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Preloader />
      <SmoothScroll>
        <CursorProvider>
          <CustomCursor />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <NavbarServer />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <FooterServer />
        </CursorProvider>
      </SmoothScroll>
    </ThemeProvider>
  );
}
