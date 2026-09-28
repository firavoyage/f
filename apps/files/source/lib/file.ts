import desktop from '@folder/xdg';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { rm, writeFile, readFile, appendFile, mkdir, unlink, access } from 'node:fs/promises';
import trash_lib from 'trash';

import { app_id, xdg } from 'config.json';

// Errors
export const non_string_content = "non string content"

export const not_found = "not_found"
export const permission_denied = "permission_denied"
export const already_exists = "already_exists"
export const is_a_directory = "is_a_directory"
export const not_a_directory = "not_a_directory"
export const out_of_memory = "out_of_memory"
export const storage_full = "storage_full"
export const resource_busy = "resource_busy"
export const invalid_filename = "invalid_filename"
export const read_only_filesystem = "read_only_filesystem"
export const quota_exceeded = "quota_exceeded"
export const file_too_large = "file_too_large"
export const other = "other"
export const executable_file_busy = "executable_file_busy"
export const deadlock = "deadlock"
export const would_block = "would_block"
export const directory_not_empty = "directory_not_empty"
export const filesystem_loop = "filesystem_loop"
export const not_seekable = "not_seekable"
export const broken_pipe = "broken_pipe"
export const interrupted = "interrupted"
export const not_connected = "not_connected"
export const connection_reset = "connection_reset"
export const unsupported = "unsupported"
export const invalid_input = "invalid_input"
export const stale_network_file_handle = "stale_network_file_handle"

const map = {
  // File & Directory Existence
  ENOENT: not_found,
  EEXIST: already_exists,

  // Permissions & Ownership
  EACCES: permission_denied,
  EPERM: permission_denied,
  EROFS: read_only_filesystem,

  // Path & Filename Formats
  ENOTDIR: not_a_directory,
  EISDIR: is_a_directory,
  ENAMETOOLONG: invalid_filename,
  EINVAL: invalid_filename,

  // Resource Exhaustion & Limits
  ENOSPC: storage_full,
  EDQUOT: quota_exceeded,
  EFBIG: file_too_large,
  EMFILE: other,
  ENFILE: other,
  ENOMEM: out_of_memory,

  // State, Locks, & Concurrent Blocks
  EBUSY: resource_busy,
  ETXTBSY: executable_file_busy,
  EDEADLK: deadlock,
  EAGAIN: would_block,
  EWOULDBLOCK: would_block,

  // Structural Directory Rules
  ENOTEMPTY: directory_not_empty,
  EXDEV: other,
  ELOOP: filesystem_loop,

  // Hard Drives & Physical Operations
  EIO: other,
  ENODEV: not_found,
  ENXIO: not_found,
  ESPIPE: not_seekable,

  // Streams, Pipes, & Buffers
  EPIPE: broken_pipe,
  EINTR: interrupted,
  ENOTCONN: not_connected,
  ESHUTDOWN: broken_pipe,
  ECONNRESET: connection_reset,

  // Fallbacks
  ENOSYS: unsupported,
  ENOTSUP: unsupported,
  EFAULT: invalid_input,
  ESTALE: stale_network_file_handle
}

/**
 * Standardize fs error code to readable error msgs
 */
export async function map_error<F extends (...args: any[]) => any>(fn: F) {
  const result = await handle(fn)
  if (is_error(result)) {
    // @ts-expect-error stupid ts
    if (has(map, result.code)) {
      // @ts-expect-error stupid ts
      throw err({ type: map[result.code], message: result })
    }

    throw err(result)
  }

  return result
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

type trash = { must_exist?: boolean }

export async function trash(path: string, { must_exist = false }: remove = {}) {
  const result = await handle(() => trash_lib(path, { glob: false }))

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