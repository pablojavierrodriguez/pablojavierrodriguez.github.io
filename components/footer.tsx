'use client'

import { useLanguage } from '@/lib/language-context'
import { t } from '@/lib/translations'
import { profile } from '@/lib/content'

export function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="border-t border-white/[0.04] py-10 px-5">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
        <div>
          <p className="text-zinc-400 font-medium">{profile.name}</p>
          <p>{t(lang, 'footer.role')}</p>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-1">
          <div className="flex items-center gap-3">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">GitHub</a>
            <span>·</span>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
          </div>
          <p>{t(lang, 'footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
