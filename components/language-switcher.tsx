'use client'

import { useLanguage } from '@/lib/language-context'

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <button
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  )
}
