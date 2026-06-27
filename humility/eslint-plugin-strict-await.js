import { ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://yourdomain.com{name}`
);

export default {
  rules: {
    'must-await-async-assignment': createRule({
      name: 'must-await-async-assignment',
      meta: {
        type: 'problem',
        docs: {
          description: 'Enforce that all async function assignments must be immediately awaited.',
          recommended: 'error',
        },
        messages: {
          missingAwait: 'Async function call result assigned to a variable must use "await".',
        },
        schema: [], // No options needed
      },
      defaultOptions: [],
      create(context) {
        // 1. Grab the TypeScript type checker services from ESLint
        const services = ESLintUtils.getParserServices(context);
        const checker = services.program.getTypeChecker();

        return {
          // 2. Target Variable Declarators (e.g., const foo = ...)
          VariableDeclarator(node) {
            // Only look at it if the initialization side is a function call
            if (node.init && node.init.type === 'CallExpression') {
              
              // Skip if it is already wrapped in an AwaitExpression (e.g., await myasyncfn())
              if (node.init.parent && node.init.parent.type === 'AwaitExpression') {
                return;
              }

              // 3. Convert the ESLint AST node to a TypeScript node
              const tsNode = services.esTreeNodeToTSNodeMap.get(node.init);
              
              // 4. Ask TypeScript for the type of the function's returned value
              const type = checker.getTypeAtLocation(tsNode);

              // 5. Inspect the type properties to see if it is a Promise object
              if (type && type.symbol && type.symbol.name === 'Promise') {
                context.report({
                  node: node.init,
                  messageId: 'missingAwait',
                });
              }
            }
          },
        };
      },
    }),
  },
};
