'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  ease?: string;
  scale?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  direction = 'up',
  distance = 60,
  duration = 0.8,
  delay = 0,
  stagger,
  start = 'top 85%',
  ease = 'power3.out',
  scale,
  once = true,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Show immediately
      containerRef.current.style.visibility = 'visible';
      return;
    }

    let ctx: any;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;

      ctx = gsap.context(() => {
        const fromVars: any = { opacity: 0 };
        if (direction === 'up') fromVars.y = distance;
        else if (direction === 'down') fromVars.y = -distance;
        else if (direction === 'left') fromVars.x = -distance;
        else if (direction === 'right') fromVars.x = distance;
        if (scale !== undefined) fromVars.scale = scale;

        const toVars: any = {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        };

        if (stagger !== undefined) {
          const items = containerRef.current!.querySelectorAll('[data-reveal]');
          if (items.length > 0) {
            toVars.stagger = stagger;
            gsap.fromTo(items, fromVars, toVars);
          } else {
            gsap.fromTo(containerRef.current!, fromVars, toVars);
          }
        } else {
          gsap.fromTo(containerRef.current!, fromVars, toVars);
        }
      }, containerRef);
    };

    // Set initial hidden state
    containerRef.current.style.visibility = 'hidden';
    init().then(() => {
      if (containerRef.current) {
        containerRef.current.style.visibility = 'visible';
      }
    });

    return () => {
      ctx?.revert();
    };
  }, [direction, distance, duration, delay, stagger, start, ease, scale, once]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

export default ScrollReveal;
