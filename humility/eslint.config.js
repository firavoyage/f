import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import import_plugin from "eslint-plugin-import";
import globals from "globals";

export default defineConfig([
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/*.log",
      "**/legacy/**",
    ],
  },

  js.configs.recommended,

  {
    plugins: {
      import: import_plugin,
    },

    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      "no-undef": "error",
      "no-unused-vars": ["error", { args: "all" }],
      "no-unreachable": "error",

      "import/no-unresolved": "error",

      "prefer-const": "error",
    },
  },
]);
