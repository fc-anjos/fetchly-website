'use client';

import {
  useEffect,
  useRef,
  useCallback,
  createContext,
  useContext,
  type ReactNode,
} from 'react';
import { usePathname } from 'next/navigation';

interface TransitionContextValue {
  triggerExit: (onMidpoint: () => void) => void;
}

export const TransitionContext = createContext<TransitionContextValue>({
  triggerExit: () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  // Enter animation on pathname change
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      content.style.opacity = '1';
      content.style.transform = 'none';
      isAnimating.current = false;
      return;
    }

    if (!isAnimating.current) return;

    let ctx: any;
    const enter = async () => {
      const { gsap } = await import('gsap');
      ctx = gsap.context(() => {
        gsap.fromTo(
          content,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => {
              isAnimating.current = false;
            },
          }
        );
      });
    };
    enter();

    return () => { ctx?.revert(); };
  }, [pathname]);

  const triggerExit = useCallback((onMidpoint: () => void) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const content = contentRef.current;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !content) {
      onMidpoint();
      return;
    }

    const run = async () => {
      const { gsap } = await import('gsap');
      gsap.to(content, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          onMidpoint();
        },
      });
    };
    run();
  }, []);

  return (
    <TransitionContext.Provider value={{ triggerExit }}>
      <div ref={contentRef} className="flex flex-col flex-1 min-h-screen">
        {children}
      </div>
    </TransitionContext.Provider>
  );
}

export default PageTransition;
