import { createFileRoute } from '@tanstack/react-router'

import NewspaperResume from '@/themes/newspaper/pages/resume-page'
import TerminalResume from '@/themes/terminal/pages/resume-page'
import { type Theme, useTheme } from '@/themes/theme-context'
import Win98Resume from '@/themes/win98/pages/resume-page'

const pages: Record<Theme, React.ComponentType> = {
  newspaper: NewspaperResume,
  terminal: TerminalResume,
  win98: Win98Resume,
}

function PageRouter() {
  const theme = useTheme()
  const Page = pages[theme]
  return <Page />
}

export const Route = createFileRoute('/resume')({
  component: PageRouter,
})
