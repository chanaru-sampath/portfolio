import { createFileRoute } from '@tanstack/react-router'

import { ThemePageRouter } from '@/components/theme-page-router'
import { useTheme } from '@/themes/theme-context'

const ContactRoute = () => {
  const theme = useTheme()
  return <ThemePageRouter page="contact" theme={theme} />
}

export const Route = createFileRoute('/contact')({
  component: ContactRoute,
})
