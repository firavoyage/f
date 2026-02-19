import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

/** @typedef {import('../../types').result} result */
/** @typedef {import('../../types').context} context */

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
   * @param {object} params
   * @param {string} params.name
   * @param {string} params.search
   * @param {string} params.replace
   * @param {context} params.context
   *
   * @returns {Promise<result>}
   */
  fn: async ({ name, search, replace, context }) => {
    try {
      const path = join(context.working_directory, name)
      const content = await readFile(path, 'utf8')

      if (!content.includes(search)) {
        return { type: 'err', error: 'search text not found' }
      }

      const updated = content.split(search).join(replace)
      await writeFile(path, updated, 'utf8')
      return { type: 'ok' }
    } catch (error) {
      return { type: 'err', error: String(error.message || error) }
    }
  }
}
