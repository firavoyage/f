import assert from 'node:assert/strict'
import { parse } from '../parse.js'

const markdown_valid = `
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

const markdown_empty = ``

const markdown_malformed_yaml = `
\`\`\`yaml
- tool: read
  file: notes.md
- tool: write
  content: unbalanced: [1, 2
\`\`\`
`

const markdown_no_yaml = `
# Just text
Nothing to parse
`

const expected_valid = [
  {
    tool: 'read',
    params: { file: 'notes.md' }
  },
  {
    tool: 'ask',
    params: { prompt: 'summarize the intent of this document in one paragraph\n' }
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
  // valid markdown
  const r1 = await parse({ markdown: markdown_valid })
  assert.equal(r1.type, 'ok')
  assert.deepEqual(r1.value, expected_valid)

  // empty markdown
  const r2 = await parse({ markdown: markdown_empty })
  assert.equal(r2.type, 'ok')
  assert.deepEqual(r2.value, [])

  // no YAML
  const r3 = await parse({ markdown: markdown_no_yaml })
  assert.equal(r3.type, 'ok')
  assert.deepEqual(r3.value, [])

  // malformed YAML
  const r4 = await parse({ markdown: markdown_malformed_yaml })
  assert.equal(r4.type, 'err')
  console.log('Malformed YAML test passed, error:', r4.error)
}

run()