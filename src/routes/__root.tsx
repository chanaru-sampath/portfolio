import { lazy, Suspense } from 'react'
import { createRootRoute, Outlet } from '@tanstack/react-router'

import Header from '@/components/header'
import NotFound from '@/components/not-found'

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      }))
    )

const RootComponent = () => (
  <>
    <div className="mx-auto max-w-[1200px] px-5">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>

    <Suspense>
      <TanStackRouterDevtools />
    </Suspense>
  </>
)

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
})
