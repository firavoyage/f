import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const tool = {
  name: 'read',

  docs: {
    description: 'read a file',
    params: {
      name: 'string — file name or relative path'
    }
  },

  /**
   * read a file relative to working_directory
   *
   * @param {object} params
   * @param {string} params.name
   * @param {object} params.context
   * @param {string} params.context.working_directory
   *
   * @returns {Promise<{type:'ok'|'err',result:string}>}
   */
  fn: async ({ name, context }) => {
    try {
      const path = join(context.working_directory, name)
      const content = await readFile(path, 'utf8')

      return { type: 'ok', result: content }
    } catch (error) {
      return { type: 'err', result: error.message }
    }
  }
}
