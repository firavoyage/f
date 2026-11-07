import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  logLevel: 'silent',
  plugins: [react(), yaml()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 0,
    open: true,
    proxy: {
      '/api':{
        target: 'http://localhost:9050'
      }
    }
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    emptyOutDir: true,
  },
})
