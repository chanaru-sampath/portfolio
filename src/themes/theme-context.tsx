// src/themes/ThemeContext.tsx
import { createContext, useContext, useLayoutEffect, useState } from 'react'

export const THEMES = ['newspaper', 'terminal', 'win98'] as const
export type Theme = (typeof THEMES)[number]

function getSessionTheme(): Theme {
  // Dev override: ?theme=terminal (or newspaper, win98)
  const urlParams = new URLSearchParams(window.location.search)
  const urlTheme = urlParams.get('theme') as Theme | null
  if (urlTheme && THEMES.includes(urlTheme)) {
    sessionStorage.setItem('portfolio-theme', urlTheme)
    return urlTheme
  }

  const stored = sessionStorage.getItem('portfolio-theme') as Theme | null
  if (stored && THEMES.includes(stored)) return stored

  const random = THEMES[Math.floor(Math.random() * THEMES.length)]
  sessionStorage.setItem('portfolio-theme', random)
  return random
}

const ThemeContext = createContext<Theme>('newspaper')

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<Theme>(getSessionTheme)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
