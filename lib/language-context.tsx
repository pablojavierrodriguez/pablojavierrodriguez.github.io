'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Language } from '@/lib/translations'

interface LanguageContextType {
  lang: Language
  setLang: (l: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('es')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Language | null
    // Detect browser language; non-English browsers fall back to ES (Pablo's primary language)
    const browser = navigator.language.startsWith('en') ? 'en' : 'es'
    setLangState(saved ?? browser)
    setMounted(true)
  }, [])

  const setLang = (l: Language) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
