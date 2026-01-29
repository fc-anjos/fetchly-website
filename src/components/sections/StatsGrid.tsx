'use client';

import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';
import { SectionHeader } from './SectionHeader';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';

export interface StatItem {
  /** The stat value (number or string) */
  value: string | number;
  /** Description of the stat */
  label: string;
}

export interface StatsGridProps {
  /** Section title */
  title?: string;
  /** Optional description */
  description?: string;
  /** Array of stat items (defaults to DEFAULT_STATS) */
  stats?: StatItem[];
  /** Background variant */
  background?: 'default' | 'muted';
  /** Additional className */
  className?: string;
}

/** Default company stats used across multiple pages */
export const DEFAULT_STATS: StatItem[] = [
  { value: '8', label: 'Years of history and running' },
  { value: '128', label: 'Team members across the globe' },
  { value: '103', label: 'Successfully launched web, mobile and eComm platforms' },
];

function AnimatedNumber({ value }: { value: string | number }) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!numberRef.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const numericValue = parseInt(String(value), 10);
    if (isNaN(numericValue)) return;

    let ctx: any;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!numberRef.current) return;

      const obj = { val: 0 };
      ctx = gsap.context(() => {
        gsap.to(obj, {
          val: numericValue,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: numberRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            if (numberRef.current) {
              numberRef.current.textContent = String(Math.round(obj.val));
            }
          },
        });
      });
    };

    init();
    return () => { ctx?.revert(); };
  }, [value]);

  return <span ref={numberRef}>{value}</span>;
}

export function StatsGrid({
  title = 'About us',
  description = 'For over eight years, we have helped businesses deliver innovative platforms.',
  stats = DEFAULT_STATS,
  background = 'default',
  className,
}: StatsGridProps) {
  return (
    <Section
      background={background}
      className={cn('py-24 md:py-32', className)}
    >
      <Container>
        <SectionHeader title={title} description={description} />
        <ScrollReveal stagger={0.15} direction="up" distance={30}>
          <div className="flex flex-col md:flex-row md:items-start">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-reveal
                className={cn(
                  'flex-1',
                  // Vertical divider between items on desktop
                  index > 0 && 'md:border-l md:border-border',
                  // Horizontal divider between items on mobile
                  index > 0 && 'border-t border-border md:border-t-0',
                  // Spacing: padding instead of gap for divider alignment
                  index > 0 && 'pt-10 md:pt-0 mt-10 md:mt-0',
                  index > 0 && 'md:pl-12',
                  index < stats.length - 1 && 'pb-10 md:pb-0 md:pr-12',
                )}
              >
                <div
                  className="text-foreground font-bold tracking-tighter"
                  style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', lineHeight: 1 }}
                >
                  <AnimatedNumber value={stat.value} />
                  <span className="text-primary">+</span>
                </div>
                <Text className="text-foreground-muted mt-4 max-w-[16rem]">
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

export default StatsGrid;
