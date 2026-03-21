import { createFileRoute } from '@tanstack/react-router'

import { ThemePageRouter } from '@/components/theme-page-router'
import { useTheme } from '@/themes/theme-context'

const ResumeRoute = () => {
  const theme = useTheme()
  return <ThemePageRouter page="resume" theme={theme} />
}

export const Route = createFileRoute('/resume')({
  component: ResumeRoute,
})
