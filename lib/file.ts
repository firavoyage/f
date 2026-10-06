import desktop from '@folder/xdg';
import { homedir } from 'node:os';
import { join as join_, dirname as dirname_ } from 'node:path';

export const stdin = 0
export const stdout = 1

export function pathname(...args: string[]) {
  const parts = list(args)

  return join_(...parts)
}

export const join = pathname

let data_folder, config_folder, cache_folder

export function init_desktop(app: string, xdg = false) {
  if (xdg) {
    (
      { data: data_folder, config: config_folder, cache: cache_folder } = desktop({ subdir: app })
    )
  } else {
    data_folder = home(`.${app}`, 'data')
    config_folder = home(`.${app}`, 'config')
    cache_folder = home(`.${app}`, 'cache')
  }
}

export function home(...args: string[]) {
  const parts = list(args)

  return join(homedir(), ...parts)
}

export function data(...args: string[]) {
  const parts = list(args)

  if (is(data_folder, 'undefined')) {
    throw err('desktop folders should be initialized')
  }

  return join(data_folder, ...parts)
}

export function config(...args: string[]) {
  const parts = list(args)

  if (is(config_folder, 'undefined')) {
    throw err('desktop folders should be initialized')
  }

  return join(config_folder, ...parts)
}

export function cache(...args: string[]) {
  const parts = list(args)

  if (is(cache_folder, 'undefined')) {
    throw err('desktop folders should be initialized')
  }

  return join(cache_folder, ...parts)
}

export async function does_exist(path: string) {
  const result = await handle(() => access(path))
  return is_error(result) ? false : true
}

/**
 * (Over)write a file
 * 
 * write to stdout when path = 1
 * 
 * iff touch when content is not given
 */
export async function write(path: string | typeof stdout, content: string = '') {
  if (typeof path == 'string') {
    await map_error(() => mkdir(dirname(path), { recursive: true }))
  }
  await map_error(() => writeFile(path, content, 'utf8'))
}

/**
 * Read a file
 * 
 * read from stdin when path = 0
 */
export async function read(path: string | typeof stdin) {
  // @ts-expect-error incorrect (incomprehensive) typing of builtin libs
  const content = await map_error(() => readFile(path, 'utf8'))

  return content
}

export async function append(path: string, content: string) {
  await map_error(() => appendFile(path, content))
}

type remove = { must_exist?: boolean }

export async function remove(path: string, { must_exist = false }: remove = {}) {
  const result = await handle(() => unlink(path))

  // @ts-expect-error stupid ts
  if (is_error(result) && has(map, result.code) && (must_exist || map[result.code] != not_found)) {
    // @ts-expect-error stupid ts
    throw err({ type: map[result.code], message: result })
  }

  // @ts-expect-error stupid ts
  throw err(result)
}

/**
 * Delete a folder along with all files and subfolders inside
 */
export async function clear_folder(path: string) {
  await map_error(() => rm(path, { recursive: true, force: true }))
}