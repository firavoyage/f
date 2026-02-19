import { exec } from 'node:child_process'
import { promisify } from 'node:util'

const run = promisify(exec)

/** @typedef {import('../../types').result} result */
/** @typedef {import('../../types').context} context */

export const tool = {
  name: 'shell',
  docs: {
    description: 'execute a shell command inside working_directory',
    params: { command: 'string — shell command' }
  },

  /**
   * @param {object} params
   * @param {string} params.command
   * @param {context} params.context
   *
   * @returns {Promise<result>}
   */
  fn: async ({ command, context }) => {
    try {
      const { stdout, stderr } = await run(command, { cwd: context.working_directory })
      return { type: 'ok', value: [stdout, stderr].filter(Boolean).join('') }
    } catch (error) {
      return { type: 'err', error: String(error.stderr || error.message || error) }
    }
  }
}
