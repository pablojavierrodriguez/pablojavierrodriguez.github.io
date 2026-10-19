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
  'private-upcoming-oss': { es: 'Privado → Próximo OSS', en: 'Private → Upcoming OSS' },
}

type Lens = 'product' | 'arch'

function SystemRow({
  system,
  isSelected,
  onSelect,
  lens,
  lang,
}: {
  system: SystemProject
  isSelected: boolean
  onSelect: () => void
  lens: Lens
  lang: 'es' | 'en'
}) {
  return (
    <div
      onClick={onSelect}
      className={`w-full text-left py-3.5 px-4 rounded-xl border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group cursor-pointer ${
        isSelected
          ? 'bg-white/[0.05] border-white/20 shadow-lg shadow-white/[0.02]'
          : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/[0.06]'
      }`}
    >
      <div className="flex items-start gap-3 flex-1">
        <span className="font-mono text-xs text-zinc-500 mt-0.5 w-8 shrink-0">{system.index}</span>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-semibold text-sm text-white group-hover:text-zinc-100 transition-colors">
              {system.name}
            </span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                statusColors[system.status]
              }`}
            >
              {visibilityLabel[system.visibility][lang]}
            </span>
            {system.lifecycle[lang] && (
              <span className="text-[10px] font-mono text-zinc-400 hidden sm:inline">
                ({system.lifecycle[lang]})
              </span>
            )}
          </div>

          {/* DYNAMIC ROW CONTENT BASED ON ACTIVE LENS */}
          {lens === 'product' ? (
            <p className="text-xs text-zinc-400 leading-relaxed transition-opacity duration-200">
              {system.tagline[lang]}
            </p>
          ) : (
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5 transition-opacity duration-200">
              {system.stack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
              {system.stack.length > 5 && (
                <span className="text-[10px] font-mono text-zinc-500">
                  +{system.stack.length - 5}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 pl-11 sm:pl-0 font-mono text-[11px] text-zinc-500 shrink-0">
        <span className="text-xs text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1">
          {isSelected ? (lang === 'es' ? 'Inspeccionando' : 'Inspecting') : (lang === 'es' ? 'Ver Ficha' : 'View Spec')}
          <span className={`inline-block transition-transform duration-200 ${isSelected ? 'translate-x-1 text-white' : 'group-hover:translate-x-1'}`}>
            →
          </span>
        </span>
      </div>
    </div>
  )
}

function SpecSheet({
  system,
  lens,
  onLensChange,
  lang,
}: {
  system: SystemProject
  lens: Lens
  onLensChange: (l: Lens) => void
  lang: 'es' | 'en'
}) {
  return (
    <div className="p-6 rounded-2xl bg-black/40 border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-300">
      
      {/* SpecSheet Header: Title + Contextual Lens Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
              {t(lang, 'systems.spec_sheet')} &bull; {system.index}
            </span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${statusColors[system.status]}`}>
              {system.lifecycle[lang]}
            </span>
          </div>
          <h3 className="font-bold text-lg text-white font-mono flex items-center gap-2">
            {system.name}
            <span className="text-xs font-normal text-zinc-400 font-sans">({system.domain[lang]})</span>
          </h3>
        </div>

        {/* INLINE DUAL-LENS TOGGLE (Directly inside Inspector for maximum clarity) */}
        <div className="flex items-center p-1 rounded-xl border border-white/10 bg-white/[0.03] self-start sm:self-auto">
          <button
            onClick={() => onLensChange('product')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
              lens === 'product'
                ? 'bg-white text-zinc-950 font-semibold shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            🎯 {t(lang, 'systems.lens_product')}
          </button>
          <button
            onClick={() => onLensChange('arch')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
              lens === 'arch'
                ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            📐 {t(lang, 'systems.lens_arch')}
          </button>
        </div>
      </div>

      {/* Narrative view */}
      <div className="py-4">
        <p className="text-sm text-zinc-200 leading-relaxed font-light">
          {lens === 'product' ? system.productView[lang] : system.archView[lang]}
        </p>
      </div>

      {/* ARCHITECTURE VIEW: TOPOLOGY & DEEP STACK */}
      {lens === 'arch' && (
        <div className="space-y-4 pt-2 transition-all duration-300">
          <div className="bg-[#08090c] p-4 rounded-xl border border-indigo-500/20 font-mono text-xs text-indigo-200 whitespace-pre-wrap overflow-x-auto leading-relaxed shadow-inner">
            <span className="text-zinc-500 block text-[10px] uppercase tracking-wider mb-2 font-bold">
              📐 {t(lang, 'systems.topology')}
            </span>
            {system.topology}
          </div>

          <div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-2">
              Full Technology Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {system.stack.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-300 font-mono text-xs hover:border-white/20 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Actions row: Demo, GitHub, NPM Package, or Request Spec */}
      <div className="pt-5 mt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
        {system.links.demo && (
          <a
            href={system.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-all duration-200 cursor-pointer shadow-md"
          >
            {t(lang, 'systems.launch_demo')}
          </a>
        )}

        {system.links.github && (
          <a
            href={system.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            GitHub
          </a>
        )}

        {system.links.npm && (
          <a
            href={system.links.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl border border-red-500/30 bg-red-500/5 hover:bg-red-500/10 text-red-300 text-xs font-mono font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5"
          >
            <span>npm</span>
            <span className="text-zinc-500">&bull;</span>
            <span>{system.name === 'gripm' ? '@gripm/board' : '@gripm/playbook'}</span>
          </a>
        )}

        {system.visibility === 'private' && (
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl border border-amber-500/30 bg-amber-400/5 text-amber-300 text-xs font-medium hover:bg-amber-400/10 transition-colors cursor-pointer"
          >
            {t(lang, 'systems.request_teaser')}
          </a>
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
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest block mb-1">01</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{t(lang, 'systems.title')}</h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-lg">{t(lang, 'systems.subtitle')}</p>
          </div>

          {/* Quick toggle at section level too */}
          <div className="flex items-center p-1 rounded-xl border border-white/[0.08] bg-white/[0.02] self-start sm:self-end">
            <button
              onClick={() => setLens('product')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                lens === 'product'
                  ? 'bg-white text-zinc-950 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {t(lang, 'systems.lens_product')}
            </button>
            <button
              onClick={() => setLens('arch')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                lens === 'arch'
                  ? 'bg-indigo-600 text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {t(lang, 'systems.lens_arch')}
            </button>
          </div>
        </div>

        {/* System list */}
        <div className="divide-y divide-white/[0.04] border-y border-white/[0.04] mb-8">
          {systems.map((s) => (
            <SystemRow
              key={s.id}
              system={s}
              isSelected={s.id === selected}
              onSelect={() => setSelected(s.id)}
              lens={lens}
              lang={lang}
            />
          ))}
        </div>

        {/* Spec Sheet Inspector */}
        <SpecSheet
          system={selectedSystem}
          lens={lens}
          onLensChange={setLens}
          lang={lang}
        />
      </div>
    </section>
  )
}
