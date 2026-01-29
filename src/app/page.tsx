import { Hero } from '@/components/sections/Hero';
import { Bento } from '@/components/sections/Bento';
import { Comparison } from '@/components/sections/Comparison';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Bento />
      <Services />
      <Comparison />
      <Testimonials />
      <FAQ />
    </>
  );
}
