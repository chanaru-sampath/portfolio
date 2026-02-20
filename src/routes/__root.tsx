import { Outlet, createRootRoute } from '@tanstack/react-router'

import NotFound from '@/components/not-found'
import Header from '@/themes/newspaper/components/header'
import { ThemeProvider, useTheme } from '@/themes/theme-context'

const RootInner = () => {
  const theme = useTheme()

  if (theme === 'newspaper') {
    return (
      <div className="mx-auto max-w-[1200px] px-5 bg-background min-h-screen border-l border-r border-black/10 shadow-2xl">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    )
  }

  // Other themes handle their own layout in their pages
  return <Outlet />
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
