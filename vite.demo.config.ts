import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Dev-only config for the tiny demo app in demo/. This is separate from the
// library build in vite.config.ts and never ships to dist/.
export default defineConfig({
  root: resolve(import.meta.dirname, 'demo'),
  plugins: [react()],
})
