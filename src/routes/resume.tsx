import { createFileRoute } from '@tanstack/react-router'

import ComingSoon from '@/components/coming-soon'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

function ResumePage() {
  return <ComingSoon />
}
