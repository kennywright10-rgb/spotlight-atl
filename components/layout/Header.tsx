'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/ui/Logo'
import { navItems } from '@/lib/config'
import { cn } from '@/lib/utils'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Filter out "Home" and "Nominate" from nav — handled separately
  const mainNav = navItems.filter((i) => i.href !== '/' && i.href !== '/nominate')

  return (
    <header className={cn(
      'sticky top-0 z-50 bg-white transition-all duration-300',
      scrolled ? 'border-b border-gray-100 shadow-[0_1px_12px_rgba(0,0,0,0.06)]' : 'border-b border-gray-50'
    )}>
      {/* Thin gold top line */}
      <div className="h-[2px] bg-gold-400 w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16 gap-8">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="sm" />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-[11px] font-bold tracking-[0.18em] uppercase transition-colors duration-200 whitespace-nowrap pb-0.5',
                  pathname === item.href || pathname.startsWith(item.href + '/')
                    ? 'text-navy-500 border-b border-gold-400'
                    : 'text-gray-400 hover:text-navy-500'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA — right */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/nominate"
              className="text-[11px] font-bold tracking-[0.18em] uppercase px-5 py-2.5 border border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white transition-all duration-200 whitespace-nowrap"
            >
              Get Featured
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-navy-500 ml-auto"
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-[5px]">
              <span className={cn('block h-px bg-current transition-all duration-300', mobileOpen && 'rotate-45 translate-y-[6px]')} />
              <span className={cn('block h-px bg-current transition-all duration-300', mobileOpen && 'opacity-0')} />
              <span className={cn('block h-px bg-current transition-all duration-300', mobileOpen && '-rotate-45 -translate-y-[6px]')} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        'lg:hidden overflow-hidden transition-all duration-300 bg-white',
        mobileOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'
      )}>
        <nav className="px-6 py-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'block py-3 text-[11px] font-bold tracking-[0.18em] uppercase border-b border-gray-50 transition-colors',
                pathname === item.href ? 'text-navy-500' : 'text-gray-400 hover:text-navy-500'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
