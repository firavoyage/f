import { ESLintUtils } from '@typescript-eslint/utils';
import ts from 'typescript';

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
        schema: [],
      },
      defaultOptions: [],
      create(context) {
        const services = ESLintUtils.getParserServices(context);
        const checker = services.program.getTypeChecker();

        return {
          VariableDeclarator(node) {
            // Target variable assignments that are direct function calls
            if (node.init && node.init.type === 'CallExpression') {
              
              // Skip if it is already wrapped inside an `await` statement
              if (node.init.parent && node.init.parent.type === 'AwaitExpression') {
                return;
              }

              // Map the ESLint node to a genuine TypeScript Node
              const tsNode = services.esTreeNodeToTSNodeMap.get(node.init);
              const type = checker.getTypeAtLocation(tsNode);

              // 🧠 Check if the type is "Thenable" (meaning it has a .then method, like a Promise)
              const thenProperty = checker.getPropertyOfType(type, 'then');

              if (thenProperty) {
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
