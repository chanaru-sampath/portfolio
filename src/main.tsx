import { StrictMode } from 'react'

import { RouterProvider, createRouter } from '@tanstack/react-router'
import { createRoot } from 'react-dom/client'
import { scan } from 'react-scan'

import './index.css'
import { routeTree } from './routeTree.gen'

if (!import.meta.env.PROD) {
  scan({
    enabled: false,
  })
}

const router = createRouter({ routeTree, notFoundMode: 'root' })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
