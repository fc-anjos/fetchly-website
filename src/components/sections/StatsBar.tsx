'use client';

import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';

export interface StatsBarStat {
  value: number;
  label: string;
  suffix?: string;
}

export interface StatsBarProps {
  stats: StatsBarStat[];
  background?: 'default' | 'muted';
  className?: string;
}

function AnimatedCounter({ value, suffix = '+' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ctx: any;
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current) return;

      const obj = { val: 0 };
      ctx = gsap.context(() => {
        gsap.to(obj, {
          val: value,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            if (ref.current) {
              ref.current.textContent = `${Math.round(obj.val)}${suffix}`;
            }
          },
        });
      });
    };
    init();
    return () => { ctx?.revert(); };
  }, [value, suffix]);

  return <span ref={ref}>{value}{suffix}</span>;
}

export function StatsBar({ stats, background = 'muted', className }: StatsBarProps) {
  return (
    <Section background={background} className={cn('py-8 md:py-10', className)}>
      <Container>
        <ScrollReveal stagger={0.1} direction="up" distance={20}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} data-reveal className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix ?? '+'} />
                </div>
                <Text size="sm" className="text-foreground-muted mt-1">
                  {stat.label}
                </Text>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export default StatsBar;
