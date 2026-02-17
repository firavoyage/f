import { load } from '../load.js'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(
  fileURLToPath(import.meta.url),
  '../../..'
)

/**
 * test load success
 */
const test_load = async () => {
  const tool = await load({
    tool: 'write',
    root
  })

  if (!tool || tool.name !== 'write')
    throw new Error('failed to load write')

  console.log('ok — load write')
}

/**
 * test load failure
 */
const test_missing = async () => {
  let error = false

  try {
    await load({
      tool: 'missing',
      root
    })
  } catch {
    error = true
  }

  if (!error)
    throw new Error('missing tool did not throw')

  console.log('ok — missing tool throws')
}

await test_load()
await test_missing()
