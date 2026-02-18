import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

export const tool = {
  name: 'edit',

  docs: {
    description: 'replace text inside a file',
    params: {
      name: 'string — file path relative to working_directory',
      search: 'string — text to find',
      replace: 'string — replacement text'
    }
  },

  /**
   * replace text in file
   *
   * fails if search string not found
   *
   * @param {object} params
   * @param {string} params.name - relative file path
   * @param {string} params.search - exact text to replace
   * @param {string} params.replace - replacement text
   * @param {object} params.context
   * @param {string} params.context.working_directory - absolute base directory
   *
   * @returns {Promise<
   *   | { type: 'ok' }
   *   | { type: 'err', error: string }
   * >}
   */
  fn: async ({ name, search, replace, context }) => {
    try {
      const path = join(context.working_directory, name)
      const content = await readFile(path, 'utf8')

      if (!content.includes(search)) {
        return {
          type: 'err',
          error: 'search text not found'
        }
      }

      const updated = content.split(search).join(replace)

      await writeFile(path, updated, 'utf8')

      return { type: 'ok' }
    } catch (error) {
      return {
        type: 'err',
        error: String(error.message || error)
      }
    }
  }
}
