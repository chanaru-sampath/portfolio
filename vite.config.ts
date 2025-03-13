import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    tailwindcss(),
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      registerType: 'autoUpdate',
      injectManifest: {
        swDest: 'dist/sw.js',
      },
      manifest: {
        name: 'Chanaru Sampath',
        short_name: 'CS.',
        theme_color: 'oklch(87.91% 0.2134 155.95)',
        background_color: 'oklch(20.99% 0.0341 263.44)',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
      },
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
