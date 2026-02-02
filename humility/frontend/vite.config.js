import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // proxy all API requests to backend
      "/ask": "http://localhost:3000",
      "/flow": "http://localhost:3000",
    },
  },
});
