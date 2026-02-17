import { writeFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'

export const tool = {
  name: 'write',

  docs: {
    description: 'create or overwrite a file',
    params: {
      name: 'string — file name or relative path',
      content: 'string — full file content'
    }
  },

  /**
   * create or overwrite a file
   *
   * - creates missing directories
   * - overwrites existing file
   * - path is always relative to working_directory
   *
   * @param {object} params
   * @param {string} params.name
   * @param {string} params.content
   * @param {object} params.context
   * @param {string} params.context.working_directory
   *
   * @returns {Promise<{type:'ok'|'err',result:null|string}>}
   */
  fn: async ({ name, content, context }) => {
    try {
      const path = join(context.working_directory, name)
      const folder = dirname(path)

      await mkdir(folder, { recursive: true })
      await writeFile(path, content, 'utf8')

      return { type: 'ok', result: null }
    } catch (error) {
      return { type: 'err', result: error.message }
    }
  }
}
