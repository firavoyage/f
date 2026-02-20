import js from "@eslint/js";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/legacy/**",
      "**/.git/**",
      "**/.vscode/**",
    ],
  },

  // Builtin recommended core rules
  js.configs.recommended,

  // Backend (Node environment)
  {
    files: ["backend/**/*.js", "script/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        setTimeout: "readonly",
        URL: "readonly",
        fetch: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["error", { args: "all", vars: "all" }],
      "no-undef": "error",
      "no-unreachable": "error",
      "no-constant-condition": "error",
      "no-fallthrough": "error",
      "no-self-compare": "error",
      "no-shadow": "error",
      "eqeqeq": "error",
      "curly": ["warn", "all"],
      "consistent-return": "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-param-reassign": "error",
      "guard-for-in": "error",
      "no-prototype-builtins": "error",
      // "require-await": "error",
      "no-return-await": "error",
    },
  },

  // Frontend/browser environment
  {
    files: ["frontend/**/*.js", "backend/connect/browser.js", "backend/connect/chatgpt.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        Event: "readonly",
        console: "readonly",
        fetch: "readonly",
        setTimeout: "readonly",
      },
    },
  },

  // Tests (Node environment)
  {
    files: ["**/test/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        setTimeout: "readonly",
      },
    },
    rules: {
      "no-unused-expressions": "error",
    },
  },
];
