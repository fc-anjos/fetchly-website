// Component prop types

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'muted' | 'dark';
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  ogImage?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ClientLogo {
  name: string;
  src: string;
  alt: string;
}

export interface ComparisonRow {
  feature: string;
  fetchly: boolean | 'partial';
  staffAug: boolean | 'partial';
  agency: boolean | 'partial';
}

// Funnel-based site restructure types

export interface SolutionDefinition {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  href: string;
}

export interface IndustryDefinition {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  href: string;
}

export interface TechnologyDefinition {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'migration' | 'build-with' | 'platform' | 'capability';
  description: string;
  icon: string;
  href: string;
}

export interface LocationDefinition {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  href: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  logo?: string;
  image?: string;
  industries?: string[];
  solutions?: string[];
}

export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavItemWithDropdown {
  label: string;
  href?: string;
  items?: NavDropdownItem[];
}

export interface PageSEO {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}
