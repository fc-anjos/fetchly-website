import { Badge } from '@/components/ui/Badge';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  /** Small label displayed above the title (shown as badge in dark theme, uppercase text in light) */
  label?: string;
  /** Main section title */
  title: string;
  /** Optional description below the title */
  description?: string;
  /** Alignment of the header content */
  align?: 'left' | 'center';
  /** Size variant affecting title size */
  size?: 'default' | 'large';
  /** Theme variant for styling */
  theme?: 'dark' | 'light';
  /** Additional className for the container */
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  size = 'default',
  theme = 'dark',
  className,
}: SectionHeaderProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        'mb-16',
        align === 'center' && 'text-center',
        align === 'center' && 'max-w-3xl mx-auto',
        className
      )}
    >
      {label && (
        isDark ? (
          <Badge className="mb-4">{label}</Badge>
        ) : (
          <Text size="sm" className="uppercase tracking-[1px] font-semibold text-black/60 mb-4">
            {label}
          </Text>
        )
      )}
      <Heading
        level={size === 'large' ? 'display-1' : 'display-2'}
        className={cn('mb-4', isDark ? 'text-white' : 'text-black')}
      >
        {title}
      </Heading>
      {description && (
        <Text
          size="lg"
          className={isDark ? 'text-gray-300' : 'text-light-text-muted'}
        >
          {description}
        </Text>
      )}
    </div>
  );
}

export default SectionHeader;
