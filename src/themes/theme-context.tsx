import {
  createContext,
  memo,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'

export const THEMES = ['newspaper', 'terminal', 'win98'] as const
export type Theme = (typeof THEMES)[number]

function getSessionTheme(): Theme {
  if (typeof window === 'undefined') return 'newspaper'

  const urlParams = new URLSearchParams(window.location.search)
  const urlTheme = urlParams.get('theme') as Theme | null
  if (urlTheme && (THEMES as readonly string[]).includes(urlTheme)) {
    sessionStorage.setItem('portfolio-theme', urlTheme)
    return urlTheme
  }

  const stored = sessionStorage.getItem('portfolio-theme') as Theme | null
  if (stored && (THEMES as readonly string[]).includes(stored)) return stored

  const random = THEMES[Math.floor(Math.random() * THEMES.length)]
  sessionStorage.setItem('portfolio-theme', random)
  return random
}

const ThemeContext = createContext<Theme>('newspaper')

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider = memo(function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const [theme] = useState<Theme>(getSessionTheme)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const contextValue = useMemo(() => theme, [theme])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
})

function useTheme(): Theme {
  const context = useContext(ThemeContext)
  return context
}

function useThemeActions() {
  const setTheme = useCallback((theme: Theme) => {
    sessionStorage.setItem('portfolio-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [])
  return { setTheme }
}

export { ThemeProvider, useTheme, useThemeActions }
export type { ThemeProviderProps }
