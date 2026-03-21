import { Outlet, createRootRoute } from '@tanstack/react-router'

import { ErrorBoundary } from '@/components/error-boundary'
import NotFound from '@/components/not-found'
import Header from '@/themes/newspaper/components/header'
import { ThemeProvider, useTheme } from '@/themes/theme-context'

const RootInner = () => {
  const theme = useTheme()

  if (theme === 'newspaper') {
    return (
      <ErrorBoundary>
        <div className="mx-auto max-w-[1200px] px-5 bg-background min-h-screen border-l border-r border-black/10 shadow-2xl">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  )
}

const RootComponent = () => (
  <ThemeProvider>
    <RootInner />
  </ThemeProvider>
)

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
})
