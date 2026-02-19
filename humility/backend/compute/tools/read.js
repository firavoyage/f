import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

/** @typedef {import('../../types').result} result */
/** @typedef {import('../../types').context} context */

export const tool = {
  name: 'read',
  docs: {
    description: 'read file content',
    params: { name: 'string — file path relative to working_directory' }
  },

  /**
   * @param {object} params
   * @param {string} params.name
   * @param {context} params.context
   *
   * @returns {Promise<result>}
   */
  fn: async ({ name, context }) => {
    try {
      const content = await readFile(join(context.working_directory, name), 'utf8')
      return { type: 'ok', value: content }
    } catch (error) {
      return { type: 'err', error: String(error.message || error) }
    }
  }
}
