import { createFileRoute } from '@tanstack/react-router'

import ResumePage from '@/pages/resume-page'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})
