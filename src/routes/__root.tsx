import Header from '@/components/header'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      // Lazy load in development
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      }))
    )

const RootComponent = () => (
  <>
    <Header />
    <Outlet />

    <Suspense>
      <TanStackRouterDevtools />
    </Suspense>
  </>
)

export const Route = createRootRoute({
  component: RootComponent,
})
