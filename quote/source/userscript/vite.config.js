import { defineConfig } from 'vite'
import monkey from 'vite-plugin-monkey'

export default defineConfig({
  logLevel: 'silent',
  plugins: [
    monkey({
      entry: 'main.js',
      userscript: {
        name: 'Quote page content',
        version: '1.0.0',
        description: 'Send quote to backend when q is pressed on selection',
        match: ['*://*/*'],
        grant: ['GM_registerMenuCommand', 'GM_setValue', 'GM_getValue'],
      },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    emptyOutDir: true,
  },
})
