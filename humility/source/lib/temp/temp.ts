/**
 * err, rescue, and handle are preloaded into global this, reference directly
 */

// define possible errors on top
export const failed_to_read = 'failed_to_read'
export const permission_denied = "permission_denied"

const parse = handle(JSON.parse)

async function read(path: string): Promise<result<string>> {
  let failed = true

  if (failed) {
    return err({ type: failed_to_read, message: `failed to read file on ${path}` })
  } else {
    return `some data on ${path}`
  }
}

async function write(path: string): Promise<result<void>> {
  let failed = true

  if (failed) {
    return err(permission_denied)
  } else {
    // write something
  }
}

/**
 * no need to err if it just checks wo doing anything real
 */
function is_even(n: number): boolean {
  return n % 2 == 0
}

export async function test() {
  const data = parse('{')

  if (rescue(data)) {
    if (data.type == SyntaxError) {
      log('expected')
    } else {
      log('will not run')
    }

    return // early return to narrow
  }

  const valid_data = parse('{"key":123}')
  if (rescue(valid_data)) {
    log('unexpected')

    return
  }
  log(valid_data.key)

  const content = await read('somewhere')
  if (rescue(content)) {
    if (content.type == failed_to_read) {
      log(content.message) // will output failed to read file on somewhere
    }

    return
  }
  // process content

  const write_result = await write('somewhere')
  if (rescue(write_result)) {
    if (write_result.type == permission_denied) {
      log('try again with sudo')
    }

    return
  }
  // tell the user write successfully
}

await test()
