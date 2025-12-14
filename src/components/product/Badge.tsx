import type {BadgeProps} from '@/types/front/badge';

export default function Badge ({
  children,
  color,
}: BadgeProps) {
  const colorMap = {
    indigo:"bg-indigo-500",
    red:"bg-red-500",
  }

  return (
    <span className={`rounded-r-lg px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white ${colorMap[color]}`}>
      {children}
    </span>
  )
}