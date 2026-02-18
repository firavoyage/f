import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

export const tool = {
  name: 'write',

  docs: {
    description: 'create or overwrite a file with content',
    params: {
      name: 'string — file path relative to working_directory',
      content: 'string — full file content'
    }
  },

  /**
   * create directories if missing and write file
   *
   * @param {object} params
   * @param {string} params.name - relative file path (e.g. "docs.md" or "path/to/docs.md")
   * @param {string} params.content - full content to write
   * @param {object} params.context
   * @param {string} params.context.working_directory - absolute base directory
   *
   * @returns {Promise<
   *   | { type: 'ok' }
   *   | { type: 'err', error: string }
   * >}
   */
  fn: async ({ name, content, context }) => {
    try {
      const path = join(context.working_directory, name)
      const dir = dirname(path)

      await mkdir(dir, { recursive: true })
      await writeFile(path, content, 'utf8')

      return { type: 'ok' }
    } catch (error) {
      return {
        type: 'err',
        error: String(error.message || error)
      }
    }
  }
}
