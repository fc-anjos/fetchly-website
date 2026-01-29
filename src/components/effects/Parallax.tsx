'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

export function Parallax({
  children,
  speed = 0.5,
  className,
  direction = 'vertical',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ctx: any;
    const setup = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const distance = speed * 100;
      const prop = direction === 'vertical' ? 'y' : 'x';

      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { [prop]: -distance },
          {
            [prop]: distance,
            ease: 'none',
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          }
        );
      });
    };
    setup();

    return () => { ctx?.revert(); };
  }, [speed, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default Parallax;
