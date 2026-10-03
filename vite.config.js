import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // SPA fallback for routing
    middlewareMode: false,
  },
  build: {
    // Use default esbuild minifier (built-in)
    minify: 'esbuild',
  },
  preview: {
    // For testing production build locally
    port: 5174,
  },
})
