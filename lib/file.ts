import desktop from '@folder/xdg';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { rm, writeFile, readFile, appendFile, mkdir, unlink, access } from 'node:fs/promises';

let app_id = 'app'
let xdg = false

export function init(options) {
  ({ app_id, xdg } = options)
}

export function home(...args: string[]) {
  return join(homedir(), ...args)
}

export function path(...args: string[]) {
  return join(...args)
}

export function data(...args: string[]) {
  // @ts-expect-error false positive on untyped js
  const data_folder = xdg ? desktop({ subdir: app_id }).data : home(`.${app_id}`, 'data')

  return join(data_folder, ...args)
}

export function config(...args: string[]) {
  // @ts-expect-error false positive on untyped js
  const config_folder = xdg ? desktop({ subdir: app_id }).config : home(`.${app_id}`, 'config')

  return join(config_folder, ...args)
}

export function cache(...args: string[]) {
  // @ts-expect-error false positive on untyped js
  const cache_folder = xdg ? desktop({ subdir: app_id }).cache : home(`.${app_id}`, 'cache')

  return join(cache_folder, ...args)
}

export async function does_exist(path: string) {
  const result = await handle(() => access(path))
  return is_error(result) ? false : true
}

export const stdout = 1

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
  // @ts-expect-error incorrect (incomprehensive) typing of builtin libs
  await map_error(() => writeFile(path, content, 'utf8'))
}

export const stdin = 0

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