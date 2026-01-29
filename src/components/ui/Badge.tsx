import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'light';
  className?: string;
}

const variants = {
  default: 'bg-primary/10 text-primary border-primary/20',
  accent: 'bg-accent/10 text-accent border-accent/20',
  outline: 'bg-transparent text-white border-white/30',
  light: 'bg-black/5 text-black/80 border-black/10',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
