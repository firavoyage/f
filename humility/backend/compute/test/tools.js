import { resolve, join, dirname } from 'node:path'
import { rm, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { load } from '../load.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * simple assertion
 *
 * @param {object} params
 * @param {boolean} params.ok
 * @param {string} params.message
 */
const check = ({ ok, message }) => {
  if (!ok) throw new Error(message)
}

/**
 * test all core tools against real filesystem
 */
export const test = async () => {
  // backend directory
  const root = resolve(__dirname, '../../')

  const working_directory = resolve(process.env.HOME)

  const context = { working_directory }

  const write = await load({ tool: 'write', root })
  const read = await load({ tool: 'read', root })
  const edit = await load({ tool: 'edit', root })
  const shell = await load({ tool: 'shell', root })

  const dir = 'humility_test'
  const file = join(dir, 'file.txt')

  await rm(join(working_directory, dir), {
    recursive: true,
    force: true
  })

  await mkdir(join(working_directory, dir), {
    recursive: true
  })

  // write
  const write_result = await write.fn({
    name: file,
    content: 'hello world',
    context
  })

  check({ ok: write_result.type === 'ok', message: 'write failed' })

  // read
  const read_result = await read.fn({
    name: file,
    context
  })

  check({ ok: read_result.type === 'ok', message: 'read failed' })
  check({
    ok: read_result.value === 'hello world',
    message: 'read content mismatch'
  })

  // edit
  const edit_result = await edit.fn({
    name: file,
    search: 'world',
    replace: 'fira',
    context
  })

  check({ ok: edit_result.type === 'ok', message: 'edit failed' })

  const read_after_edit = await read.fn({
    name: file,
    context
  })

  check({
    ok: read_after_edit.value === 'hello fira',
    message: 'edit did not apply'
  })

  // shell
  const shell_result = await shell.fn({
    command: `cat ${file}`,
    context
  })

  check({ ok: shell_result.type === 'ok', message: 'shell failed' })
  check({
    ok: shell_result.value.includes('hello fira'),
    message: 'shell output mismatch'
  })

  await rm(join(working_directory, dir), {
    recursive: true,
    force: true
  })

  console.log('tools test ok')
}

if (import.meta.url === `file://${process.argv[1]}`)
  test()
