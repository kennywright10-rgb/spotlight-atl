import { cn } from '@/lib/utils'

type Tier = 'winner' | 'gold' | 'silver' | 'category'

interface BadgeProps {
  tier: Tier
  year?: number
  label?: string
  className?: string
}

const tierStyles: Record<Tier, string> = {
  winner: 'bg-navy-500 text-gold-400 border-2 border-gold-400',
  gold: 'bg-gold-400 text-navy-500 border-2 border-gold-500',
  silver: 'bg-gray-200 text-gray-700 border-2 border-gray-400',
  category: 'bg-navy-50 text-navy-500 border border-navy-200',
}

const tierIcons: Record<Tier, string> = {
  winner: '🏆',
  gold: '🥇',
  silver: '🥈',
  category: '⭐',
}

export function AwardBadge({ tier, year = 2026, label, className }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex flex-col items-center justify-center text-center px-4 py-3 rounded-sm font-semibold shadow-md',
        tierStyles[tier],
        className
      )}
    >
      <span className="text-2xl mb-1">{tierIcons[tier]}</span>
      <span className="text-xs font-bold tracking-widest uppercase">Best of ATL</span>
      <span className="text-lg font-bold">{year}</span>
      {label && <span className="text-xs mt-1 opacity-80">{label}</span>}
    </div>
  )
}

export function CategoryBadge({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase bg-gold-50 text-gold-600 border border-gold-200',
        className
      )}
    >
      {label}
    </span>
  )
}
