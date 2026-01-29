'use client';

import { useEffect, useRef, type CSSProperties } from 'react';

interface SplitTextAnimation {
  duration?: number;
  stagger?: number;
  ease?: string;
  y?: number;
  rotateX?: number;
}

interface SplitTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  splitBy?: 'words' | 'chars';
  animation?: SplitTextAnimation;
  trigger?: 'scroll' | 'mount';
  scrollStart?: string;
  delay?: number;
}

const clipStyle: CSSProperties = {
  display: 'inline-block',
  overflow: 'hidden',
  verticalAlign: 'top',
};

const innerStyle: CSSProperties = {
  display: 'inline-block',
};

export function SplitText({
  children,
  className,
  as: Tag = 'div',
  splitBy = 'words',
  animation,
  trigger = 'scroll',
  scrollStart = 'top 85%',
  delay = 0,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      containerRef.current.style.visibility = 'visible';
      return;
    }

    let ctx: any;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;

      const inners = containerRef.current.querySelectorAll('.split-inner');
      if (!inners.length) return;

      const defaults = splitBy === 'words'
        ? { duration: 0.6, stagger: 0.04, ease: 'power3.out', y: 40, rotateX: -15 }
        : { duration: 0.4, stagger: 0.02, ease: 'power2.out', y: 20, rotateX: 0 };

      const config = { ...defaults, ...animation };

      ctx = gsap.context(() => {
        const fromVars: any = {
          opacity: 0,
          y: config.y,
          rotateX: config.rotateX,
        };

        const toVars: any = {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: config.duration,
          stagger: config.stagger,
          ease: config.ease,
          delay,
        };

        if (trigger === 'scroll') {
          toVars.scrollTrigger = {
            trigger: containerRef.current,
            start: scrollStart,
            toggleActions: 'play none none none',
          };
        }

        gsap.fromTo(inners, fromVars, toVars);
      }, containerRef);
    };

    containerRef.current.style.visibility = 'hidden';
    init().then(() => {
      if (containerRef.current) {
        containerRef.current.style.visibility = 'visible';
      }
    });

    return () => {
      ctx?.revert();
    };
  }, [children, splitBy, animation, trigger, scrollStart, delay]);

  const renderSplit = () => {
    if (splitBy === 'chars') {
      return children.split('').map((char, i) => (
        <span key={i} style={clipStyle}>
          <span className="split-inner" style={innerStyle}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ));
    }

    // Words split
    return children.split(' ').map((word, i, arr) => (
      <span key={i}>
        <span style={clipStyle}>
          <span className="split-inner" style={innerStyle}>{word}</span>
        </span>
        {i < arr.length - 1 && ' '}
      </span>
    ));
  };

  return (
    <Tag ref={containerRef as any} className={className}>
      {renderSplit()}
    </Tag>
  );
}

export default SplitText;
