import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Library build config: bundles src/index.ts into dist/ for consumers of the
// package. The demo app has its own config (vite.demo.config.ts) and is not
// part of this build.
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'SoftUI',
      fileName: (format) => (format === 'es' ? 'soft-ui.mjs' : 'soft-ui.cjs'),
      formats: ['es', 'cjs'],
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
