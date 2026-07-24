import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";

const throw_err = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce that 'throw' is followed by a function call named 'err'.",
    },
    messages: {
      mustUseErrFunction: "You must throw using the 'err()' function. Example: throw err('Message')",
    },
  },
  create(context) {
    return {
      // Targets 'throw' statements where the argument is NOT a CallExpression named 'err'
      "ThrowStatement:not(ThrowStatement[argument.type='CallExpression'][argument.callee.name='err'])"(node) {
        context.report({
          node,
          messageId: "mustUseErrFunction",
        });
      },
    };
  },
};

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
      "**/build/**",
      "**/.build/**",
    ],
  },

  // Plugins
  {
    plugins: {
      local: {
        rules: {
          "throw-err": throw_err,
        },
      },
    },
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

      // throw 'foo' has no stack trace
      "local/throw-err": "warn",
    },
  }
);
