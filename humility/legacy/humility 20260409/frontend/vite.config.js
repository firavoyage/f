import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ports } from "../script/ports.js";

export default defineConfig({
  plugins: [react()],
  server: {
    port: ports.frontend,
    proxy: {
      "/ask": `http://localhost:${ports.backend}`,
      "/flow": `http://localhost:${ports.backend}`,
    },
  },
});
