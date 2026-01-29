'use client';

import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
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

function StatCard({ stat }: { stat: StatItem }) {
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!numberRef.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const numericValue = parseInt(String(stat.value), 10);
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
  }, [stat.value]);

  return (
    <div
      data-reveal
      className="text-center p-8 rounded-2xl bg-surface-card border border-border"
    >
      <Heading
        level="display-1"
        as="div"
        className="mb-2 text-primary"
      >
        <div ref={numberRef}>{stat.value}</div>
      </Heading>
      <Text className="text-foreground-muted">
        {stat.label}
      </Text>
    </div>
  );
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
        <ScrollReveal stagger={0.2} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export default StatsGrid;
