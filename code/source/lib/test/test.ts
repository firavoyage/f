// A simple AST to JavaScript converter function
function generateJS(node) {
  if (!node) return '';

  switch (node.type) {
    case 'Program':
      // Map over all top-level statements and join them with newlines
      return node.body.map(generateJS).join('\n');

    case 'VariableDeclaration':
      // E.g., const x = 10;
      const declarations = node.declarations.map(generateJS).join(', ');
      return `${node.kind} ${declarations};`;

    case 'VariableDeclarator':
      // The identifier and initial value assignment
      if (node.init) {
        return `${generateJS(node.id)} = ${generateJS(node.init)}`;
      }
      return generateJS(node.id);

    case 'Identifier':
      // Variable or function names
      return node.name;

    case 'Literal':
      // Numbers, strings, booleans
      if (typeof node.value === 'string') {
        return `'${node.value}'`; // Wrap strings in quotes
      }
      return String(node.value);

    case 'BinaryExpression':
      // E.g., 5 + 10
      return `(${generateJS(node.left)} ${node.operator} ${generateJS(node.right)})`;

    case 'FunctionDeclaration':
      // E.g., function add(a, b) { ... }
      const params = node.params.map(generateJS).join(', ');
      const body = generateJS(node.body);
      return `function ${generateJS(node.id)}(${params}) ${body}`;

    case 'BlockStatement':
      // E.g., { return a + b; }
      const statements = node.body.map(generateJS).join('\n  ');
      return `{\n  ${statements}\n}`;

    case 'ReturnStatement':
      // E.g., return x;
      return `return ${generateJS(node.argument)};`;

    default:
      throw new Error(`Unsupported AST node type: ${node.type}`);
  }
}

// ==========================================
// Example Usage
// ==========================================

// This mock AST represents the code:
// const total = 40 + 2;
// function multiply(a, b) { return a * b; }
const standardAST = {
  type: 'Program',
  body: [
    {
      type: 'VariableDeclaration',
      kind: 'const',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: { type: 'Identifier', name: 'total' },
          init: {
            type: 'BinaryExpression',
            operator: '+',
            left: { type: 'Literal', value: 40 },
            right: { type: 'Literal', value: 2 }
          }
        }
      ]
    },
    {
      type: 'FunctionDeclaration',
      id: { type: 'Identifier', name: 'multiply' },
      params: [
        { type: 'Identifier', name: 'a' },
        { type: 'Identifier', name: 'b' }
      ],
      body: {
        type: 'BlockStatement',
        body: [
          {
            type: 'ReturnStatement',
            argument: {
              type: 'BinaryExpression',
              operator: '*',
              left: { type: 'Identifier', name: 'a' },
              right: { type: 'Identifier', name: 'b' }
            }
          }
        ]
      }
    }
  ]
};

// Generate and log the output string
const outputCode = generateJS(standardAST);
console.log(outputCode);
