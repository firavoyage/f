import desktop from '@folder/xdg';
import { cpSync, existsSync, mkdirSync, readdirSync, renameSync, rmdirSync, rmSync, statSync, unlinkSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import {
  join as _join, resolve as _resolve, relative,
  basename as _basename,
  dirname as _dirname,
  extname as _extname,
} from 'node:path';

export stdin = 0
type stdin = typeof stdin
export const stdout = 1
type stdout = typeof stdout

type path_fs = string

type stream_number = typeof stdin | typeof stdout

// type path = path_fs | stream_number
type path_w = path_fs | typeof stdout
type path_r = path_fs | typeof stdin

// Path

export function pathname(...args: string[]) {
  const parts = list(args)

  return _join(...parts)
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

export function cwd() {
  return process.cwd()
}

export const pwd = cwd
export const getwd = cwd
export const getcwd = cwd

export function expand_path(...args: string[]) {
  const parts = list(args)

  return _resolve(...parts)
}

export const resolve = expand_path

export function relative_path(path: path_fs, base_dir: path_fs) {
  return relative(base_dir, path)
}

export function basename(path: path_fs, suffix?: string) {
  return _basename(path, suffix)
}

export function stemname(path: path_fs) {
  return basename(path, extname(path))
}

export function dirname(path: path_fs) {
  return _dirname(path)
}

export const parent = dirname

export function extname(path: path_fs) {
  return _extname(path)
}

// Queries

export function does_exist(path: path_fs) {
  return existsSync(path)
}

export function is_file(path: path_fs) {
  const stats = statSync(path)

  return stats.isFile()
}

export function is_dir(path: path_fs) {
  const stats = statSync(path)

  return stats.isDirectory()
}

export function is_empty(path: path_fs) {
  const stats = statSync(path)

  return stats.isDirectory() && children(path).length == 0
}

/**
 * size of an individual file
 */
export function size(path: path_fs) {
  const stats = statSync(path)

  return stats.size
}

export function atime(path: path_fs) {
  const stats = statSync(path)

  return stats.atime
}

export function ctime(path: path_fs) {
  const stats = statSync(path)

  return stats.ctime
}

export function mtime(path: path_fs) {
  const stats = statSync(path)

  return stats.mtime
}

export function birthtime(path: path_fs) {
  const stats = statSync(path)

  return stats.birthtime
}

export function children(path: path_fs) {
  return readdirSync(path)
}

// Utils

export function rename(old_path: path_fs, new_path: path_fs) {
  return renameSync(old_path, new_path)
}

export const mv = rename

/**
 * delete an individual file
 * 
 * err when non existing
 */
export function unlink(path: path_fs) {
  return unlinkSync(path)
}

export const rm = unlink
export const remove = unlink

/**
 * delete an empty folder
 * 
 * err when non existing or not empty
 */
export function rmdir(path: path_fs) {
  return rmdirSync(path)
}

/**
 * delete file/folder, iff rm -rf
 */
export function rmtree(path: path_fs) {
  return rmSync(path, { recursive: true, force: true })
}

/**
 * copy file/folder, iff cp -r
 */
export function cp(source: path_fs, destination: path_fs) {
  return cpSync(source, destination, { recursive: true })
}

export function mkpath(path: path_fs) {
  return mkdirSync(path, { recursive: true })
}

// File r/w

export function write(path: path, content: string) {
  if (is(path, 'string')) {
    mkpath(dirname(path))
  }

  return writeFileSync(path, content)
}

export function touch(path: path) {
  
}

/**
 * (Over)write a file
 * 
 * write to stdout when path = 1
 * 
 * iff touch when content is not given
 */
export async function write_(path: path | typeof stdout, content: string = '') {
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
export async function read_(path: path | typeof stdin) {
  // @ts-expect-error incorrect (incomprehensive) typing of builtin libs
  const content = await map_error(() => readFile(path, 'utf8'))

  return content
}

export async function append_(path: path, content: string) {
  await map_error(() => appendFile(path, content))
}

type remove = { must_exist?: boolean }

export async function remove_(path: path, { must_exist = false }: remove = {}) {
  const result = await handle(() => unlink(path))

  // @ts-expect-error stupid ts
  if (is_error(result) && has(map, result.code) && (must_exist || map[result.code] != not_found)) {
    // @ts-expect-error stupid ts
    throw err({ type: map[result.code], message: result })
  }

  // @ts-expect-error stupid ts
  throw err(result)
}


