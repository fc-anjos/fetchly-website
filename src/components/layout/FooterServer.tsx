import { getFooter } from '@/lib/content';
import { Footer } from './Footer';

export async function FooterServer() {
  const footer = await getFooter();
  return (
    <Footer
      footerLinks={{
        solutions: [...footer.solutions],
        company: [...footer.company],
        legal: [...footer.legal],
      }}
    />
  );
}
