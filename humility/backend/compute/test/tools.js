import { resolve, join, dirname } from 'node:path'
import { rm, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { load } from '../load.js'
import { log } from '../../log.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * simple assertion (no throw)
 *
 * @param {object} params
 * @param {boolean} params.ok
 * @param {string} params.message
 */
const check = async ({ ok, message }) => {
  if (ok) return

  await log({
    level: 'error',
    location: 'test/tools.js:check',
    message
  })

  console.error('FAIL:', message)
  process.exit(1)
}

/**
 * test all core tools against real filesystem
 */
export const test = async () => {
  const location = 'test/tools.js:test'

  await log({
    location,
    message: 'starting tools test'
  })

  const root = resolve(__dirname, '../../')
  const working_directory = resolve(process.env.HOME)
  const context = { working_directory }

  // load tools safely
  const write_result = await load({ tool: 'write', root })
  const read_result = await load({ tool: 'read', root })
  const edit_result = await load({ tool: 'edit', root })
  const shell_result = await load({ tool: 'shell', root })

  await check({
    ok: write_result.type === 'ok',
    message: 'failed to load write'
  })
  await check({
    ok: read_result.type === 'ok',
    message: 'failed to load read'
  })
  await check({
    ok: edit_result.type === 'ok',
    message: 'failed to load edit'
  })
  await check({
    ok: shell_result.type === 'ok',
    message: 'failed to load shell'
  })

  if (
    write_result.type !== 'ok' ||
    read_result.type !== 'ok' ||
    edit_result.type !== 'ok' ||
    shell_result.type !== 'ok'
  ) {
    return
  }

  const write = write_result.value
  const read = read_result.value
  const edit = edit_result.value
  const shell = shell_result.value

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
  const write_op = await write.fn({
    name: file,
    content: 'hello world',
    context
  })

  await check({
    ok: write_op.type === 'ok',
    message: 'write failed'
  })

  // read
  const read_op = await read.fn({
    name: file,
    context
  })

  await check({
    ok: read_op.type === 'ok',
    message: 'read failed'
  })

  if (read_op.type === 'ok') {
    await check({
      ok: read_op.value === 'hello world',
      message: 'read content mismatch'
    })
  }

  // edit
  const edit_op = await edit.fn({
    name: file,
    search: 'world',
    replace: 'fira',
    context
  })

  await check({
    ok: edit_op.type === 'ok',
    message: 'edit failed'
  })

  const read_after_edit = await read.fn({
    name: file,
    context
  })

  await check({
    ok: read_after_edit.type === 'ok',
    message: 'read after edit failed'
  })

  if (read_after_edit.type === 'ok') {
    await check({
      ok: read_after_edit.value === 'hello fira',
      message: 'edit did not apply'
    })
  }

  // shell
  const shell_op = await shell.fn({
    command: `cat ${file}`,
    context
  })

  await check({
    ok: shell_op.type === 'ok',
    message: 'shell failed'
  })

  if (shell_op.type === 'ok') {
    await check({
      ok: shell_op.value.includes('hello fira'),
      message: 'shell output mismatch'
    })
  }

  await rm(join(working_directory, dir), {
    recursive: true,
    force: true
  })

  await log({
    level: 'info',
    location,
    message: 'tools test ok'
  })

  console.log('tools test ok')
}

if (import.meta.url === `file://${process.argv[1]}`)
  test()