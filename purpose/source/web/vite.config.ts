import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function randint(a, b) {
  const { min, max, floor, random } = Math;
  ([a, b] = [min(a, b), max(a, b)])

  return floor(random() * (b - a + 1)) + a
}

export default defineConfig({
  logLevel: 'silent',
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: randint(9000, 9999),
    open: true,
    strictPort: false
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    emptyOutDir: true,
  },
})
