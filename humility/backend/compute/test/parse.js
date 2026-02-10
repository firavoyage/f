import assert from 'node:assert/strict'
import { parse } from '../parse.js'

const markdown = `
some text

\`\`\`yaml
- tool: read
  file: notes.md

- tool: ask
  prompt: |
    summarize the intent of this document in one paragraph
\`\`\`

more text

\`\`\`yaml
- tool: write
  file: hello_world.cpp
  content: |
    #include <iostream>

    int main() {
        std::cout << "Hello, world!" << std::endl;
        return 0;
    }
\`\`\`
`

const expected = [
  {
    tool: 'read',
    params: { file: 'notes.md' }
  },
  {
    tool: 'ask',
    params: {
      prompt: 'summarize the intent of this document in one paragraph\n'
    }
  },
  {
    tool: 'write',
    params: {
      file: 'hello_world.cpp',
      content:
        '#include <iostream>\n\nint main() {\n    std::cout << "Hello, world!" << std::endl;\n    return 0;\n}\n'
    }
  }
]

const run = async () => {
  const result = await parse({ markdown })
  assert.deepEqual(result, expected)
}

run()
