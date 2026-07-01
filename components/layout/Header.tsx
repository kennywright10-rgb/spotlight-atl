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
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-white transition-shadow duration-300',
        scrolled ? 'shadow-md' : 'shadow-sm'
      )}
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-navy-500 via-gold-400 to-navy-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap',
                  pathname === item.href
                    ? 'text-gold-500 border-b-2 border-gold-400'
                    : 'text-gray-600 hover:text-navy-500'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/nominate"
              className="ml-4 px-5 py-2.5 bg-navy-500 text-white text-sm font-bold tracking-wide hover:bg-navy-600 transition-colors duration-200 whitespace-nowrap"
            >
              Get Featured
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-navy-500"
            aria-label="Toggle menu"
          >
            <div className="w-6 space-y-1.5">
              <span
                className={cn(
                  'block h-0.5 bg-current transition-all duration-300',
                  mobileOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 bg-current transition-all duration-300',
                  mobileOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 bg-current transition-all duration-300',
                  mobileOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'block px-4 py-3 text-sm font-semibold rounded transition-colors',
                pathname === item.href
                  ? 'bg-navy-50 text-navy-500'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/nominate"
            className="block mt-3 px-4 py-3 bg-navy-500 text-white text-sm font-bold text-center"
          >
            Get Featured →
          </Link>
        </nav>
      </div>
    </header>
  )
}
