import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config'; // Import the modern core utility

export default defineConfig(
  // Global Ignores
  {
    ignores: [
      '**/legacy/**',
      '**/temp/**',
      /**
       * it's fine if it just works
       */
      'scripts/br/**',
    ],
  },

  // Base ESLint & TypeScript Configurations
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // Custom Rule Overrides
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      /**
       * todo
       * 
       * clean up all any
       */
      // '@typescript-eslint/no-explicit-any': 'warn',
      /**
       * todo
       * 
       * separate dev and prod
       */
      // 'no-console': 'error',
    },
  },
);
