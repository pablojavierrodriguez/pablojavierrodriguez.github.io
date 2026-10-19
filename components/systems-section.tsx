'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { t } from '@/lib/translations'
import { systems, type SystemProject } from '@/lib/content'

const statusColors: Record<string, string> = {
  production: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'active-oss': 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
  incubating: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
  'private-teaser': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
}

const visibilityLabel: Record<string, { es: string; en: string }> = {
  'open-source': { es: 'Open Source', en: 'Open Source' },
  private: { es: 'Privado', en: 'Private' },
  'private-upcoming-oss': { es: 'Privado → OSS próximamente', en: 'Private → OSS soon' },
}

type Lens = 'product' | 'arch'

function SystemRow({
  system,
  isSelected,
  onSelect,
  lang,
}: {
  system: SystemProject
  isSelected: boolean
  onSelect: () => void
  lang: 'es' | 'en'
}) {
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left py-3.5 px-4 rounded-xl border transition-all duration-150 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group ${
        isSelected
          ? 'bg-white/[0.04] border-zinc-500/50'
          : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/[0.06]'
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="font-mono text-[11px] text-zinc-600 mt-0.5 w-8 shrink-0">{system.index}</span>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-sm text-white">{system.name}</span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                statusColors[system.status]
              }`}
            >
              {visibilityLabel[system.visibility][lang]}
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5">{system.tagline[lang]}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 pl-11 sm:pl-0 font-mono text-[11px] text-zinc-500 shrink-0">
        <span>{t(lang, `systems.${system.visibility === 'private' ? 'access' : 'lifecycle'}`)}</span>
        <span className="text-zinc-300">{system.lifecycle[lang]}</span>
        <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">→</span>
      </div>
    </button>
  )
}

function SpecSheet({ system, lens, lang }: { system: SystemProject; lens: Lens; lang: 'es' | 'en' }) {
  return (
    <div className="p-5 rounded-xl bg-black/30 border border-white/[0.06] space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-white/[0.06]">
        <div>
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-0.5">
            {t(lang, 'systems.spec_sheet')}
          </span>
          <h4 className="font-bold text-base text-white font-mono">{system.name}</h4>
          <p className="text-xs text-zinc-400">{system.domain[lang]}</p>
        </div>
        <span className={`text-[11px] font-mono px-2.5 py-1 rounded border self-start ${statusColors[system.status]}`}>
          {system.lifecycle[lang]}
        </span>
      </div>

      {/* Content — switches between product and arch view */}
      <p className="text-sm text-zinc-300 leading-relaxed">
        {lens === 'product' ? system.productView[lang] : system.archView[lang]}
      </p>

      {lens === 'arch' && (
        <div className="bg-black/60 p-3 rounded-lg border border-white/[0.05] font-mono text-[11px] text-indigo-300 whitespace-pre-wrap overflow-x-auto">
          <span className="text-zinc-500 block text-[10px] uppercase tracking-wider mb-1">
            {t(lang, 'systems.topology')}
          </span>
          {system.topology}
        </div>
      )}

      {/* Stack */}
      {lens === 'arch' && (
        <div className="flex flex-wrap gap-1.5">
          {system.stack.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-300 font-mono text-[11px]"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="pt-1 flex flex-wrap items-center gap-2">
        {system.links.demo && (
          <a
            href={system.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors"
          >
            {t(lang, 'systems.launch_demo')}
          </a>
        )}
        {system.links.github && (
          <a
            href={system.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-xs font-medium transition-all"
          >
            {t(lang, 'systems.view_github')}
          </a>
        )}
        {system.visibility === 'private' && (
          <button className="px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-400/5 text-amber-300 text-xs font-medium hover:bg-amber-400/10 transition-colors">
            {t(lang, 'systems.request_teaser')}
          </button>
        )}
      </div>
    </div>
  )
}

export function SystemsSection() {
  const { lang } = useLanguage()
  const [selected, setSelected] = useState<string>(systems[0].id)
  const [lens, setLens] = useState<Lens>('product')

  const selectedSystem = systems.find((s) => s.id === selected)!

  return (
    <section id="systems" className="py-24 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest block mb-1">01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{t(lang, 'systems.title')}</h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-md">{t(lang, 'systems.subtitle')}</p>
          </div>

          {/* Lens Switcher */}
          <div className="flex items-center p-1 rounded-xl border border-white/[0.08] bg-white/[0.02] self-start sm:self-end">
            <button
              onClick={() => setLens('product')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                lens === 'product'
                  ? 'bg-white/10 text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {t(lang, 'systems.lens_product')}
            </button>
            <button
              onClick={() => setLens('arch')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                lens === 'arch'
                  ? 'bg-white/10 text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {t(lang, 'systems.lens_arch')}
            </button>
          </div>
        </div>

        {/* System list */}
        <div className="divide-y divide-white/[0.04] border-y border-white/[0.04] mb-6">
          {systems.map((s) => (
            <SystemRow
              key={s.id}
              system={s}
              isSelected={s.id === selected}
              onSelect={() => setSelected(s.id)}
              lang={lang}
            />
          ))}
        </div>

        {/* Spec Sheet Inspector */}
        <SpecSheet system={selectedSystem} lens={lens} lang={lang} />
      </div>
    </section>
  )
}
