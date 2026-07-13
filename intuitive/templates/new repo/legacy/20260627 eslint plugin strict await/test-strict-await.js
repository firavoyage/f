import { RuleTester } from '@typescript-eslint/rule-tester';
import strictAwaitPlugin from './eslint-plugin-strict-await.js';

// Mock minimal test lifecycle hooks for native node execution
RuleTester.afterAll = (fn) => fn();
RuleTester.describe = (name, fn) => fn();
RuleTester.it = (name, fn) => {
  try {
    fn();
  } catch (error) {
    console.error(`❌ Test failed: ${name}`);
    throw error;
  }
};

// Initialize the tester with strict permissions for virtual test files
const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ['file.ts'], 
      },
      tsconfigRootDir: process.cwd(),
    },
  },
});

ruleTester.run(
  'must-await-async-assignment', 
  strictAwaitPlugin.rules['must-await-async-assignment'], 
  {
    valid: [
      {
        code: `
          async function myasyncfn(): Promise<string> { return 'hello'; }
          async function run() {
            const foo = await myasyncfn();
          }
        `,
      },
      {
        code: `
          function mysyncfn(): string { return 'hello'; }
          function run() {
            const foo = mysyncfn();
          }
        `,
      },
    ],
    invalid: [
      {
        code: `
          async function myasyncfn(): Promise<string> { return 'hello'; }
          async function run() {
            const foo = myasyncfn();
          }
        `,
        errors: [{ messageId: 'missingAwait' }],
      },
    ],
  }
);

console.log('✅ All rule tests passed successfully!');
