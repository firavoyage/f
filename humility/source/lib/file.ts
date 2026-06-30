import desktop from '@folder/xdg';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { rm, writeFile, readFile, appendFile, mkdir, unlink, access } from 'node:fs/promises';
import trash_lib from 'trash';

import { app_name, xdg } from 'lib/env';

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

export function home(...args: string[]) {
  return join(homedir(), ...args)
}

export function path(...args: string[]) {
  return join(...args)
}

export function data(...args: string[]) {
  const data_folder = xdg ? desktop({ subdir: app_name }).data : home(`.${app_name}`, 'data')

  return join(data_folder, ...args)
}

export function config(...args: string[]) {
  const config_folder = xdg ? desktop({ subdir: app_name }).config : home(`.${app_name}`, 'config')

  return join(config_folder, ...args)
}

export function cache(...args: string[]) {
  const cache_folder = xdg ? desktop({ subdir: app_name }).cache : home(`.${app_name}`, 'cache')

  return join(cache_folder, ...args)
}

/**
 * (over) write a file
 */
export async function write(path: string, content: string) {
  let _ = await handle(() => mkdir(dirname(path), { recursive: true }))
  if (is_error(_)) {
    if (has(map, _.code)) {
      throw err({ type: map[_.code], message: _ })
    }

    throw _
  }

  _ = await handle(() => writeFile(path, content, 'utf8'))
  if (is_error(_)) {
    if (has(map, _.code)) {
      throw err({ type: map[_.code], message: _ })
    }

    throw _
  }
}

/**
 * read a file
 */
export async function read(path: string) {
  let _ = await handle(() => readFile(path, 'utf8'))

  if (is_error(_)) {
    if (has(map, _.code)) {
      throw err({ type: map[_.code], message: _ })
    }

    throw _
  }

  return _
}

export async function append(path, content) {
  try {
    await appendFile(path, content)
  } catch (e) {
    if (has(map, _.code)) {
      throw err({ type: map[_.code], message: _ })
    }
    throw err(other)
  }
}

export async function edit(path, search, replace) {
  /**
   * todo
   * 
   * perf: positional replace, memory efficient.
   * 
   * more edit modes
   * 
   * regex
   * 
   * replace or replace all
   */

  const content = await read(path)

  if (typeof content != 'string') {
    throw err(non_string_content)
  }

  const updated_content = content.replaceAll(search, replace)

  return await write(path, updated_content)
}

/**
 * remove a file
 * 
 * todo
 * 
 * add an option (dont err for non existence)
 * 
 * a list of files?
 * 
 * do i { path, options } or path, { options }? others?
 */
export async function remove(path, { can_non_exist = false }: { can_non_exist?: boolean } = {}): Promise<Result<void>> {
  // must_exist = true // implicit true is somewhat inconsistent
  try {
    await unlink(path)
  } catch (e) {
    if (has(map, e.code)) {
      if (map[e.code] == not_found && can_non_exist) {
        return;
      }
      throw err({ type: map[e.code], message: e })
    }
    throw err(other)
  }
}

export async function does_exist(path: string) {
  try {
    await access(path);
    return true
  } catch {
    return false
  }
}

export async function clear(path: string) {
  await rm(path, { recursive: true, force: true });
}

export async function trash(path, { can_non_exist = false }) {
  try {
    await trash_lib(path, { glob: false });
  } catch (e) {
    if (has(map, e.code)) {
      if (map[e.code] == not_found && can_non_exist) {
        return;
      }
      throw err({ type: map[e.code], message: e })
    }
    throw err(other)
  }
}
