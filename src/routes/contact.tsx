import { createFileRoute } from '@tanstack/react-router'

import NewspaperContact from '@/themes/newspaper/pages/contact-page'
import TerminalContact from '@/themes/terminal/pages/contact-page'
import { type Theme, useTheme } from '@/themes/theme-context'
import Win98Contact from '@/themes/win98/pages/contact-page'

const pages: Record<Theme, React.ComponentType> = {
  newspaper: NewspaperContact,
  terminal: TerminalContact,
  win98: Win98Contact,
}

function PageRouter() {
  const theme = useTheme()
  const Page = pages[theme]
  return <Page />
}

export const Route = createFileRoute('/contact')({
  component: PageRouter,
})
