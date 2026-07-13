import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";

export default defineConfig(
  // Config
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Files
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  },

  // Ignores
  {
    ignores: [
      "**/legacy/**",
      "**/ref/**", // readonly references
      "**/temp/**",
    ],
  },

  // Base eslint and ts rules
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // Custom rules
  {
    rules: {
      // do not over engineer
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-floating-promises": "error",
    },
  }
);
