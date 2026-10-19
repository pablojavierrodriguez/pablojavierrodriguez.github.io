'use client'

import { useLanguage } from '@/lib/language-context'
import { t } from '@/lib/translations'
import { profile } from '@/lib/content'

export function ContactSection() {
  const { lang } = useLanguage()
  const items = [
    { title: lang === 'es' ? 'Advisory técnico o de producto' : 'Technical or product advisory', desc: lang === 'es' ? 'Arquitectura de sistemas, estrategia de producto, OKRs' : 'Systems architecture, product strategy, OKRs' },
    { title: lang === 'es' ? 'Proyectos con impacto real' : 'Real-impact projects', desc: lang === 'es' ? 'Transformación digital, automatización, IA agentica' : 'Digital transformation, automation, agentic AI' },
    { title: lang === 'es' ? 'Co-fundación o construcción conjunta' : 'Co-founding or joint ventures', desc: lang === 'es' ? 'Si tenés una idea ambiciosa y necesitás quien la arquitecte' : "If you have an ambitious idea that needs an architect" },
  ]

  return (
    <section id="contact" className="py-24 px-5 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest block mb-1">04</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{t(lang, 'contact.title')}</h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl">{t(lang, 'contact.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          {/* Contact channels */}
          <div className="space-y-5">
            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.01]">
              <p className="text-[11px] font-mono text-zinc-500 mb-1">{t(lang, 'contact.email_label')}</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-white hover:text-zinc-200 transition-colors font-medium"
              >
                {profile.email}
              </a>
              <p className="text-[11px] text-zinc-600 mt-1 font-mono">{t(lang, 'contact.response_time')}</p>
            </div>

            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.01]">
              <p className="text-[11px] font-mono text-zinc-500 mb-1">{t(lang, 'contact.linkedin_label')}</p>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
              >
                {t(lang, 'contact.linkedin_cta')}
              </a>
            </div>

            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.01]">
              <p className="text-[11px] font-mono text-zinc-500 mb-1">{t(lang, 'contact.location_label')}</p>
              <p className="text-sm text-white">{profile.location.city}, {profile.location.province} — {profile.location.timezone}</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">{t(lang, 'contact.location_detail')}</p>
            </div>
          </div>

          {/* What I'm looking for */}
          <div>
            <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-4">{t(lang, 'contact.looking_for')}</p>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-zinc-600 shrink-0 mt-0.5 font-mono text-xs">→</span>
                  <div>
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="text-xs text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <p className="text-xs text-zinc-400 leading-relaxed italic">{t(lang, 'contact.closing')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
