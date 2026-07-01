import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'navy' | 'gold' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  children: React.ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  navy: 'bg-navy-500 text-white hover:bg-navy-600 border border-navy-500',
  gold: 'bg-gold-400 text-navy-500 hover:bg-gold-500 border border-gold-400 font-bold',
  outline: 'bg-transparent text-navy-500 border-2 border-navy-500 hover:bg-navy-500 hover:text-white',
  ghost: 'bg-transparent text-navy-500 hover:text-gold-400 border border-transparent',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  variant = 'navy',
  size = 'md',
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition-all duration-200 whitespace-nowrap'
  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
