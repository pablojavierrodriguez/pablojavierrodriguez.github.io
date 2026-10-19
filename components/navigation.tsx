'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { t } from '@/lib/translations'
import { LanguageSwitcher } from '@/components/language-switcher'
import { profile } from '@/lib/content'

export function Navigation() {
  const { lang } = useLanguage()

  const links = [
    { href: '#systems', label: t(lang, 'nav.systems') },
    { href: '#chronicle', label: t(lang, 'nav.chronicle') },
    { href: '#principles', label: t(lang, 'nav.principles') },
    { href: '#contact', label: t(lang, 'nav.contact') },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0d0f14]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-1 group cursor-pointer"
          aria-label="Home"
        >
          <span className="font-mono text-sm font-bold text-white tracking-tight group-hover:text-zinc-300 transition-colors">
            /{profile.handle}
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-md hover:bg-white/5 transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right: status + lang + CTA */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t(lang, 'status.available')}
          </span>
          <LanguageSwitcher />
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-lg bg-white text-zinc-900 text-xs font-semibold hover:bg-zinc-100 transition-colors"
          >
            {t(lang, 'nav.contact')}
          </a>
        </div>
      </div>
    </header>
  )
}
