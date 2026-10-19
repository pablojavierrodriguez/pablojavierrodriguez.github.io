'use client'

import { useLanguage } from '@/lib/language-context'
import { t } from '@/lib/translations'
import { principles } from '@/lib/content'

export function PrinciplesSection() {
  const { lang } = useLanguage()

  return (
    <section id="principles" className="py-24 px-5 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest block mb-1">03</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{t(lang, 'principles.title')}</h2>
          <p className="text-sm text-zinc-400 mt-1">{t(lang, 'principles.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {principles.map((p) => (
            <div
              key={p.id}
              className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.10] transition-all"
            >
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-mono text-[11px] text-zinc-600">{p.number}</span>
                <h3 className="font-semibold text-sm text-white">{p.title[lang]}</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{p.body[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
