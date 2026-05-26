import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config"; // Import the modern core utility

export default defineConfig(
  // Global Ignores
  {
    ignores: [
      "**/legacy/**",
      // "**/temp/**",
      /**
       * it's fine if it just works
       */
      "scripts/br/**",
    ],
  },

  // Base ESLint & TypeScript Configurations
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // Custom Rule Overrides
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      /**
       * any, whether implicit or explicit, are expected
       *
       * there are issues way more critical, e.g. unused vars
       */
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "error",
      /**
       * todo
       *
       * separate dev and prod
       */
      // 'no-console': 'error',
    },
  }
);
