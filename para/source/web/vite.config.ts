import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  logLevel: 'silent',
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 0,
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    emptyOutDir: true,
  },
})
