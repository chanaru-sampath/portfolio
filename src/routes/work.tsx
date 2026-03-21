import { createFileRoute } from '@tanstack/react-router'

import { ThemePageRouter } from '@/components/theme-page-router'
import { useTheme } from '@/themes/theme-context'

const WorkRoute = () => {
  const theme = useTheme()
  return <ThemePageRouter page="work" theme={theme} />
}

export const Route = createFileRoute('/work')({
  component: WorkRoute,
})
