import { readdir } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

/**
 * dynamically load a tool by name
 *
 * @param {object} params
 * @param {string} params.tool
 * @param {string} params.root
 *
 * @returns {Promise<object>}
 */
export const load = async ({ tool, root }) => {
  const directories = [
    resolve(root, 'compute/tools')
  ]

  for (const directory of directories) {
    const entries = await readdir(directory)
    const match = entries.find(name => name === `${tool}.js`)

    if (!match) continue

    const full_path = join(directory, match)
    const module = await import(pathToFileURL(full_path).href)

    if (!module.tool)
      throw new Error(`tool "${tool}" has no export "tool"`)

    if (typeof module.tool.fn !== 'function')
      throw new Error(`tool "${tool}" missing fn`)

    return module.tool
  }

  throw new Error(`tool "${tool}" not found`)
}
