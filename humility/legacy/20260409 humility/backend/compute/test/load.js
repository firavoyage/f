import { load } from '../load.js'

/**
 * simple assertion
 *
 * @param {object} params
 * @param {boolean} params.ok
 * @param {string} params.message
 */
const check = ({ ok, message }) => {
  if (!ok) {
    console.error('FAIL:', message)
    process.exit(1)
  }
}

/**
 * test load success
 */
const test_load = async () => {
  const result = await load({ tool: 'write' }) // no root passed

  check({
    ok: result.type === 'ok',
    message: 'failed to load write'
  })

  if (result.type === 'ok') {
    check({
      ok: result.value.name === 'write',
      message: 'write tool name mismatch'
    })
  }

  console.log('ok — load write')
}

/**
 * test load failure
 */
const test_missing = async () => {
  const result = await load({ tool: 'missing' }) // no root passed

  check({
    ok: result.type === 'err',
    message: 'missing tool did not return err'
  })

  console.log('ok — missing tool returns err')
}

await test_load()
await test_missing()