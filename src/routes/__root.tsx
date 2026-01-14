import { Outlet, createRootRoute } from '@tanstack/react-router'

import Header from '@/components/header'
import NotFound from '@/components/not-found'

const RootComponent = () => (
  <>
    <div className="mx-auto max-w-[1200px] px-5 bg-background min-h-screen border-l border-r border-black/10 shadow-2xl">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  </>
)

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
})
