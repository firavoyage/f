import { spawn } from 'node:child_process'
import { parse as parse_yaml } from 'yaml'
import { tool_instructions, type tool_call } from 'utility/tools'

type tool_definition = {
  instructions: string
  run: (args: Record<string, any>, append: (delta: delta) => void) => Promise<string>
}

export const tool_registry: Record<string, tool_definition> = {
  bash: {
    instructions: tool_instructions.bash,
    async run(args, append) {
      const command = args.command
      if (typeof command !== 'string') {
        throw new Error('bash tool requires a string command')
      }

      return await new Promise<string>((resolve, reject) => {
        const child = spawn('bash', ['-lc', command])
        let output = ''

        child.stdout.on('data', (chunk) => {
          const content = chunk.toString()
          output += content
          append({ content })
        })

        child.stderr.on('data', (chunk) => {
          const content = chunk.toString()
          output += content
          append({ content })
        })

        child.once('error', reject)
        child.once('close', (code, signal) => {
          if (code !== 0) {
            const status = `\n[process exited with ${code ?? signal}]`
            output += status
            append({ content: status })
          }
          resolve(output)
        })
      })
    },
  },
}

export function parse_tool_calls(content: string): tool_call[] {
  const calls: tool_call[] = []
  const blocks = content.matchAll(/```tool[ \t]*\r?\n([\s\S]*?)```/g)

  for (const [, source] of blocks) {
    try {
      const value = parse_yaml(source)
      if (!is_record(value)) continue

      if (typeof value.tool === 'string' && is_record(value.args)) {
        calls.push({ tool: value.tool, args: value.args })
        continue
      }

      const names = Object.keys(value)
      if (names.length != 1 || !is_record(value[names[0]])) continue

      calls.push({ tool: names[0], args: value[names[0]] })
    } catch {}
  }

  return calls
}

function is_record(value: any): value is Record<string, any> {
  return value != null && typeof value == 'object' && !Array.isArray(value)
}
