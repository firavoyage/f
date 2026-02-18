import { exec } from 'node:child_process'
import { promisify } from 'node:util'

const run = promisify(exec)

export const tool = {
  name: 'shell',

  docs: {
    description: 'execute a shell command inside working_directory',
    params: {
      command: 'string — shell command'
    }
  },

  /**
   * execute shell command
   *
   * fails if exit code is non-zero
   *
   * @param {object} params
   * @param {string} params.command - shell command to execute
   * @param {object} params.context
   * @param {string} params.context.working_directory - absolute base directory
   *
   * @returns {Promise<
   *   | { type: 'ok', value: string }
   *   | { type: 'err', error: string }
   * >}
   */
  fn: async ({ command, context }) => {
    try {
      const { stdout, stderr } = await run(command, {
        cwd: context.working_directory
      })

      const output = [stdout, stderr].filter(Boolean).join('')

      return {
        type: 'ok',
        value: output
      }
    } catch (error) {
      return {
        type: 'err',
        error: String(error.stderr || error.message || error)
      }
    }
  }
}
