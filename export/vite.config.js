import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

export default defineConfig({
  plugins: [
    monkey({
      entry: "source/main.js",
      userscript: {
        name: "Simple Menu Config Demo",
        namespace: "http://tampermonkey.net",
        version: "1.0.0",
        description: "Vite-bundled userscript using GM_registerMenuCommand",
        match: ["*://*/*"],
        // The plugin automatically scans your code for GM_ methods,
        // but declaring grants here enforces proper loading.
        grant: ["GM_registerMenuCommand", "GM_setValue", "GM_getValue"],
      },
    }),
  ],
  build: {
    outDir: "build",
  },
});
