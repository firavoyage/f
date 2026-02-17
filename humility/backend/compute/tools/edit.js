import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

export const tool = {
  name: 'edit',

  docs: {
    description: 'replace text inside a file',
    params: {
      name: 'string — file name or relative path',
      search: 'string — text that must exist in the file',
      replace: 'string — replacement text'
    }
  },

  /**
   * replace all occurrences of search with replace
   *
   * - fails if file does not exist
   * - fails if search string is not found
   * - operates relative to working_directory
   *
   * @param {object} params
   * @param {string} params.name
   * @param {string} params.search
   * @param {string} params.replace
   * @param {object} params.context
   * @param {string} params.context.working_directory
   *
   * @returns {Promise<{type:'ok'|'err',result:null|string}>}
   */
  fn: async ({ name, search, replace, context }) => {
    try {
      const path = join(context.working_directory, name)
      const content = await readFile(path, 'utf8')

      if (!content.includes(search)) {
        return {
          type: 'err',
          result: `text not found in "${name}"`
        }
      }

      const updated = content.split(search).join(replace)

      await writeFile(path, updated, 'utf8')

      return { type: 'ok', result: null }
    } catch (error) {
      return { type: 'err', result: error.message }
    }
  }
}
