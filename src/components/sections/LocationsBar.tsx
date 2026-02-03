import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { cn } from '@/lib/utils';
import { LOCATIONS } from '@/lib/page-data';
import type { LocationDefinition } from '@/types';

export interface LocationsBarProps {
  locations?: LocationDefinition[];
  className?: string;
}

export function LocationsBar({ locations = LOCATIONS, className }: LocationsBarProps) {
  return (
    <Section background="muted" className={cn('py-10 md:py-12', className)}>
      <Container>
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center mb-8">
            <Heading level="h3" className="text-foreground">
              Serving clients across the US
            </Heading>
          </div>
        </ScrollReveal>
        <ScrollReveal stagger={0.1} direction="up" distance={20}>
          <div className="flex flex-wrap justify-center gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={loc.href}
                data-reveal
                data-cursor="hover"
                className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-surface-card hover:border-primary/30 hover:bg-surface-card-hover transition-all duration-200"
              >
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <Text className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {loc.city}, {loc.stateAbbr}
                  </Text>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export default LocationsBar;
