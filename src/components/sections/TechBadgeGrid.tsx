import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';
import { SectionHeader } from './SectionHeader';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';

export interface TechBadge {
  name: string;
  icon: React.ReactNode;
  href?: string;
}

export interface TechBadgeGridProps {
  title?: string;
  description?: string;
  badges: TechBadge[];
  columns?: 4 | 6 | 8;
  className?: string;
}

export function TechBadgeGrid({
  title = 'Technologies we work with',
  description,
  badges,
  columns = 4,
  className,
}: TechBadgeGridProps) {
  const colClass =
    columns === 8
      ? 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-8'
      : columns === 6
        ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
        : 'grid-cols-2 sm:grid-cols-4';

  return (
    <Section className={cn('py-12 md:py-16', className)}>
      <Container>
        {title && <SectionHeader title={title} description={description} />}
        <ScrollReveal stagger={0.05} direction="up" distance={20}>
          <div className={cn('grid gap-6', colClass)}>
            {badges.map((badge) => {
              const inner = (
                <div
                  data-reveal
                  className={cn(
                    'flex flex-col items-center gap-3 p-5 rounded-xl border border-border bg-surface-card transition-all duration-200',
                    badge.href && 'hover:border-primary/30 hover:bg-surface-card-hover',
                  )}
                >
                  <div className="w-10 h-10 flex items-center justify-center text-foreground-muted">
                    {badge.icon}
                  </div>
                  <Text size="sm" className="text-foreground font-medium text-center">
                    {badge.name}
                  </Text>
                </div>
              );

              return badge.href ? (
                <Link key={badge.name} href={badge.href} data-cursor="hover">
                  {inner}
                </Link>
              ) : (
                <div key={badge.name}>{inner}</div>
              );
            })}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export default TechBadgeGrid;
