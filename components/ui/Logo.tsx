import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className, variant = 'dark', size = 'md' }: LogoProps) {
  const isLight = variant === 'light'
  const sizes = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' }

  return (
    <Link href="/" className={cn('flex items-center gap-3 group', className)}>
      {/* Spotlight icon */}
      <div className="relative flex-shrink-0">
        <div
          className={cn(
            'w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden',
            isLight ? 'bg-white/10 border border-white/20' : 'bg-navy-500 border border-gold-400/30'
          )}
        >
          {/* Spotlight beam */}
          <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full" fill="none">
            <circle cx="20" cy="20" r="20" fill={isLight ? 'rgba(255,255,255,0.1)' : '#0B1F3A'} />
            {/* Beam lines */}
            <path d="M20 8 L28 32 L12 32 Z" fill="#D4AF37" opacity="0.9" />
            <circle cx="20" cy="9" r="4" fill="#D4AF37" />
          </svg>
        </div>
      </div>

      {/* Wordmark */}
      <div className={cn('leading-tight', sizes[size])}>
        <div
          className={cn(
            'font-bold tracking-wider uppercase',
            isLight ? 'text-white' : 'text-navy-500',
            size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-xs'
          )}
        >
          LOCAL
        </div>
        <div
          className={cn(
            'font-serif font-bold tracking-wide leading-none',
            isLight ? 'text-white' : 'text-navy-500',
            size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-xl'
          )}
        >
          SPOTLIGHT
        </div>
        <div
          className={cn(
            'font-bold tracking-widest',
            'text-gold-400',
            size === 'sm' ? 'text-xs' : 'text-sm'
          )}
        >
          ATL
        </div>
      </div>
    </Link>
  )
}
