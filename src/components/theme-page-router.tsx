import { Suspense, lazy, memo } from 'react'

import type { Theme } from '@/themes/theme-context'

const lazyPages = {
  newspaper: {
    home: lazy(() => import('@/themes/newspaper/pages/home-page')),
    work: lazy(() => import('@/themes/newspaper/pages/work-page')),
    resume: lazy(() => import('@/themes/newspaper/pages/resume-page')),
    contact: lazy(() => import('@/themes/newspaper/pages/contact-page')),
  },
  terminal: {
    home: lazy(() => import('@/themes/terminal/pages/home-page')),
    work: lazy(() => import('@/themes/terminal/pages/work-page')),
    resume: lazy(() => import('@/themes/terminal/pages/resume-page')),
    contact: lazy(() => import('@/themes/terminal/pages/contact-page')),
  },
  win98: {
    home: lazy(() => import('@/themes/win98/pages/home-page')),
    work: lazy(() => import('@/themes/win98/pages/work-page')),
    resume: lazy(() => import('@/themes/win98/pages/resume-page')),
    contact: lazy(() => import('@/themes/win98/pages/contact-page')),
  },
}

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
)

type ThemePageRouterProps = {
  page: keyof (typeof lazyPages)['newspaper']
  theme: Theme
}

const ThemePageRouter = memo(function ThemePageRouter({
  page,
  theme,
}: ThemePageRouterProps) {
  const Page = lazyPages[theme][page]
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Page />
    </Suspense>
  )
})

export { ThemePageRouter }
export type { ThemePageRouterProps }
