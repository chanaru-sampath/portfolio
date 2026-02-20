import { createFileRoute } from '@tanstack/react-router'

import NewspaperHome from '@/themes/newspaper/pages/home-page'
import TerminalHome from '@/themes/terminal/pages/home-page'
import { type Theme, useTheme } from '@/themes/theme-context'
import Win98Home from '@/themes/win98/pages/home-page'

const pages: Record<Theme, React.ComponentType> = {
  newspaper: NewspaperHome,
  terminal: TerminalHome,
  win98: Win98Home,
}

function PageRouter() {
  const theme = useTheme()
  const Page = pages[theme]
  return <Page />
}

export const Route = createFileRoute('/')({
  component: PageRouter,
})
