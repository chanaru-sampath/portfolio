import { createFileRoute } from '@tanstack/react-router'

import NewspaperWork from '@/themes/newspaper/pages/work-page'
import TerminalWork from '@/themes/terminal/pages/work-page'
import { type Theme, useTheme } from '@/themes/theme-context'
import Win98Work from '@/themes/win98/pages/work-page'

const pages: Record<Theme, React.ComponentType> = {
  newspaper: NewspaperWork,
  terminal: TerminalWork,
  win98: Win98Work,
}

function PageRouter() {
  const theme = useTheme()
  const Page = pages[theme]
  return <Page />
}

export const Route = createFileRoute('/work')({
  component: PageRouter,
})
