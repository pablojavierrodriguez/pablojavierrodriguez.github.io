'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'
import { t } from '@/lib/translations'
import { profile, thesis } from '@/lib/content'

export function Hero() {
  const { lang } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-14 px-5 overflow-hidden">
      {/* Ambient glow — mineral/graphite, NOT neon */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-zinc-400/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zinc-300/3 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono text-zinc-400 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t(lang, 'hero.badge')}
          </span>
        </div>

        {/* Avatar + Name — editorial layout */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="relative">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={72}
              height={72}
              className="rounded-2xl border border-white/10 grayscale"
              priority
            />
            <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0d0f14]" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
              {profile.name}
            </h1>
            <p className="text-sm font-mono text-zinc-400">
              {t(lang, 'hero.role')}
              <span className="mx-2 text-zinc-600">·</span>
              <span className="text-zinc-500">{profile.location.country}</span>
            </p>
          </div>
        </div>

        {/* Thesis — the centerpiece */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            {thesis[lang]}
          </p>
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#systems"
            className="px-5 py-2.5 rounded-xl bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-200 hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center cursor-pointer shadow-lg shadow-white/5"
          >
            {t(lang, 'hero.cta_systems')} →
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/5 hover:border-white/20 hover:text-white hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center cursor-pointer"
          >
            {t(lang, 'hero.cta_contact')}
          </a>
        </div>

        {/* Divider / Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2">
          <div className="flex items-center gap-6 text-xs font-mono text-zinc-600">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors cursor-pointer">GitHub</a>
            <span>·</span>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors cursor-pointer">LinkedIn</a>
            <span>·</span>
            <span className="text-zinc-700">{profile.location.timezone}</span>
          </div>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-700 to-transparent mt-4" />
        </div>
      </div>
    </section>
  )
}
