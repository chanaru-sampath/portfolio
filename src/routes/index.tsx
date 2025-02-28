import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-400">
          I'm working hard to bring something amazing. Stay tuned!
        </p>
      </div>
    </div>
  )
}
