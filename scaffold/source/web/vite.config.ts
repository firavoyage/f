import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import yaml from '@rollup/plugin-yaml'

export default defineConfig({
  logLevel: 'silent',
  plugins: [react(), yaml()],
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    exclude: ['lib'],
  },
  server: {
    port: 0,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8192',
      },
    },
    watch: {
      ignored: ['!**/node_modules/lib/**'],
    },
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    emptyOutDir: true,
  },
})
