import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

export default defineConfig({
  plugins: [
    monkey({
      entry: "source/main.js",
      userscript: {
        name: "Export Copied Content to Markdown",
        version: "1.0.0",
        description: "Config via menu command",
        match: ["*://*/*"],
        grant: ["GM_registerMenuCommand", "GM_setValue", "GM_getValue"],
      },
    }),
  ],
  build: {
    outDir: "build",
  },
});
