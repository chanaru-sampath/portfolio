import { createFileRoute } from '@tanstack/react-router'

import WorkPage from '@/pages/work-page'

export const Route = createFileRoute('/work')({
  component: WorkPage,
})
