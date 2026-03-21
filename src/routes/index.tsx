import { createFileRoute } from '@tanstack/react-router'

import { ThemePageRouter } from '@/components/theme-page-router'
import { useTheme } from '@/themes/theme-context'

const HomeRoute = () => {
  const theme = useTheme()
  return <ThemePageRouter page="home" theme={theme} />
}

export const Route = createFileRoute('/')({
  component: HomeRoute,
})
