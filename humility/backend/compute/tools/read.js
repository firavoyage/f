import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const tool = {
  name: 'read',

  docs: {
    description: 'read file content',
    params: {
      name: 'string — file path relative to working_directory'
    }
  },

  /**
   * read file content
   *
   * @param {object} params
   * @param {string} params.name - relative file path
   * @param {object} params.context
   * @param {string} params.context.working_directory - absolute base directory
   *
   * @returns {Promise<
   *   | { type: 'ok', value: string }
   *   | { type: 'err', error: string }
   * >}
   */
  fn: async ({ name, context }) => {
    try {
      const path = join(context.working_directory, name)
      const content = await readFile(path, 'utf8')

      return {
        type: 'ok',
        value: content
      }
    } catch (error) {
      return {
        type: 'err',
        error: String(error.message || error)
      }
    }
  }
}
