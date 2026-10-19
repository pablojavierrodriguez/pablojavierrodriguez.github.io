'use client'

import { useLanguage } from '@/lib/language-context'
import { t } from '@/lib/translations'
import { roles, enterpriseCases, education } from '@/lib/content'
import { profile } from '@/lib/content'

export function ChronicleSection() {
  const { lang } = useLanguage()

  return (
    <section id="chronicle" className="py-24 px-5 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest block mb-1">02</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{t(lang, 'chronicle.title')}</h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-lg">{t(lang, 'chronicle.subtitle')}</p>
          </div>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors self-start sm:self-end shrink-0"
          >
            {t(lang, 'chronicle.linkedin_cta')}
          </a>
        </div>

        {/* --- ROLE TIMELINE --- */}
        <div className="mb-16 space-y-8">
          {roles.map((role) => (
            <div key={`${role.company}-${role.period.es}`} className="flex gap-4">
              {/* Timeline line */}
              <div className="flex flex-col items-center pt-1.5">
                <div
                  className={`w-2 h-2 rounded-full border-2 shrink-0 ${
                    role.isCurrent
                      ? 'bg-emerald-400 border-emerald-400'
                      : 'bg-transparent border-zinc-600'
                  }`}
                />
                <div className="w-px flex-1 bg-white/[0.05] mt-1" />
              </div>

              <div className="pb-8 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-semibold text-sm text-white">{role.title[lang]}</h3>
                    <p className="text-xs text-zinc-400 font-mono">{role.company}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {role.isCurrent && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                        {t(lang, 'chronicle.current')}
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-zinc-500">{role.period[lang]}</span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {role.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-zinc-400 flex gap-2">
                      <span className="text-zinc-600 mt-0.5 shrink-0">→</span>
                      <span>{h[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* --- ENTERPRISE IMPACT CASES --- */}
        <div className="mb-16">
          <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6 border-b border-white/[0.04] pb-3">
            {lang === 'es' ? 'Casos de Impacto Empresarial' : 'Enterprise Impact Cases'}
          </h3>
          <div className="space-y-6">
            {enterpriseCases.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="font-semibold text-sm text-white">{c.title[lang]}</h4>
                    <p className="text-xs text-zinc-500 font-mono">{c.role[lang]} · {c.company} · {c.period}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:justify-end">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-zinc-400 mb-3 leading-relaxed">{c.description[lang]}</p>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    {t(lang, 'chronicle.outcomes_label')}
                  </span>
                  {c.outcomes.map((o, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                      <span>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- EDUCATION & CREDENTIALS --- */}
        <div>
          <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6 border-b border-white/[0.04] pb-3">
            {t(lang, 'education.title')}
          </h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-3">{t(lang, 'education.degrees')}</p>
              <div className="space-y-4">
                {education.degrees.map((d) => (
                  <div key={d.institution} className="border-l-2 border-white/[0.08] pl-3">
                    <p className="text-xs font-medium text-white">{d.degree[lang]}</p>
                    <p className="text-[11px] text-zinc-500 font-mono">{d.institution}</p>
                    <p className="text-[11px] text-zinc-600 font-mono">{d.period} · {d.status[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-3">{t(lang, 'education.certs')}</p>
              <ul className="space-y-2">
                {education.certifications.map((cert) => (
                  <li key={cert} className="flex gap-2 text-xs text-zinc-400">
                    <span className="text-zinc-600 shrink-0">·</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <p className="text-[11px] font-mono text-zinc-500 mb-1">{t(lang, 'education.continuous')}</p>
            <p className="text-xs text-zinc-400">{t(lang, 'education.continuous_text')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
