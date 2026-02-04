import { getNavigation } from '@/lib/content';
import { Navbar } from './Navbar';

export async function NavbarServer() {
  const navLinks = await getNavigation();
  return <Navbar navLinks={navLinks} />;
}
