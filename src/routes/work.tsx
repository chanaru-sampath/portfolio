import { createFileRoute } from '@tanstack/react-router'

import ComingSoon from '@/components/coming-soon'

export const Route = createFileRoute('/work')({
  component: WorkPage,
})

function WorkPage() {
  return <ComingSoon />
}
