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
    // Allow Render deployment hosts
    host: '0.0.0.0',
    port: 5174,
    allowedHosts: ['murugan-pvc.onrender.com', 'murugan-pvc-6.onrender.com'],
  },
})