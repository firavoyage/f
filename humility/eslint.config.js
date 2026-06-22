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
      "**/ref/**", // readonly references from other repos w .git removed
      // "**/temp/**",
    ],
  },

  // Base eslint and ts rules
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // Custom rules
  {
    rules: {
      // do not over engineer for maximum robustness
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "error",
      // "no-restricted-syntax": [
      //   "error",
      //   {
      //     selector: "Identifier[name='undefined']",
      //     message:
      //       "The use of 'undefined' is forbidden. Use an alternative pattern.",
      //   },
      //   {
      //     selector: "Literal[value=null]",
      //     message:
      //       "The use of 'null' is forbidden. Use an alternative pattern.",
      //   },
      // ],
    },
  }
);
