/**
 * xdg is in js. no types. and no need to have types.
 * 
 * config maxNodeModuleJsDepth in tsconfig to normalize it
 */
import desktop from '@folder/xdg';
import { homedir } from 'node:os';
import { join, dirname as dir } from 'node:path';
import { writeFile, readFile, appendFile, mkdir, unlink } from 'node:fs/promises';

const make_dir = handle(mkdir)
const write_file = handle(writeFile)
const read_file = handle(readFile)
const append_file = handle(appendFile)
const delete_file = handle(unlink)

/**
 * errors
 */
export const already_initialized = "already_initialized"
export const not_initialized = "not_initialized"

export const not_string = "not_string"

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
  // --- File & Directory Existence ---
  ENOENT: not_found,
  EEXIST: already_exists,

  // --- Permissions & Ownership ---
  EACCES: permission_denied,
  EPERM: permission_denied,
  EROFS: read_only_filesystem,

  // --- Path & Filename Formats ---
  ENOTDIR: not_a_directory,
  EISDIR: is_a_directory,
  ENAMETOOLONG: invalid_filename,
  EINVAL: invalid_filename,

  // --- Resource Exhaustion & Limits ---
  ENOSPC: storage_full,
  EDQUOT: quota_exceeded,
  EFBIG: file_too_large,
  EMFILE: other,
  ENFILE: other,
  ENOMEM: out_of_memory,

  // --- State, Locks, & Concurrent Blocks ---
  EBUSY: resource_busy,
  ETXTBSY: executable_file_busy,
  EDEADLK: deadlock,
  EAGAIN: would_block,
  EWOULDBLOCK: would_block,

  // --- Structural Directory Rules ---
  ENOTEMPTY: directory_not_empty,
  EXDEV: other,
  ELOOP: filesystem_loop,

  // --- Hard Drives & Physical Operations ---
  EIO: other,
  ENODEV: not_found,
  ENXIO: not_found,
  ESPIPE: not_seekable,

  // --- Streams, Pipes, & Buffers ---
  EPIPE: broken_pipe,
  EINTR: interrupted,
  ENOTCONN: not_connected,
  ESHUTDOWN: broken_pipe,
  ECONNRESET: connection_reset,

  // --- Fallbacks ---
  ENOSYS: unsupported,
  ENOTSUP: unsupported,
  EFAULT: invalid_input,
  ESTALE: stale_network_file_handle
}

/**
 * state
 */

let is_initialized = false;
let data_folder = ''
let config_folder = ''
let cache_folder = ''

type non_empty_string = `${string}${any}`;

// /**
//  * todo: dry?
//  */
// type init = typeof init
// type path = typeof path
// type data = typeof data
// type config = typeof config
// type cache = typeof cache
// type write = typeof write
// type read = typeof read
// declare global {
//   var init: init
//   var path: path
//   var data: data
//   var config: config
//   var cache: cache
//   var write: write
//   var read: read
// }

/**
 * init paths
 * 
 * do not care whether it's valid
 */
export function init({ name, xdg = true }: { name: non_empty_string, xdg?: boolean }) {
  if (is_initialized) {
    return err(already_initialized)
  }

  is_initialized = true

  if (xdg) {
    const { data, config, cache } = desktop({ subdir: name })

    data_folder = data
    config_folder = config
    cache_folder = cache
  } else {
    const home = homedir()

    data_folder = join(home, `.${name}`, 'data')
    config_folder = join(home, `.${name}`, 'config')
    cache_folder = join(home, `.${name}`, 'cache')
  }
}

export function home() {
  return homedir()
}

// todo: handle ~
export function path(...args) {
  return join(...args)
}

export function data(...args) {
  if (!is_initialized) {
    return err(not_initialized)
  }
  return join(data_folder, ...args)
}

export function config(...args) {
  if (!is_initialized) {
    return err(not_initialized)
  }
  return join(config_folder, ...args)
}

export function cache(...args) {
  if (!is_initialized) {
    return err(not_initialized)
  }
  return join(cache_folder, ...args)
}

/**
 * (over) write a file
 */
export async function write({ path, content }): Promise<result<void>> {
  /**
   * todo: handle errors
   * 
   * e.g. illegal character, path too long, etc.
   */

  /**
   * create path if needed
   */
  const make_dir_result = await make_dir(dir(path), { recursive: true });
  if (is_error(make_dir_result)) {
    if (has(map, make_dir_result.code)) {
      return err({ type: map[make_dir_result.code], message: make_dir_result })
    }
  }

  const write_file_result = await write_file(path, content, 'utf8');
  if (is_error(write_file_result)) {
    if (has(map, write_file_result.code)) {
      return err({ type: map[write_file_result.code], message: write_file_result })
    }
  }

  return write_file_result
}

/**
 * read a file
 * 
 * use object params anyway for consistency, 
 * even though there is only one param currently
 */
export async function read({ path }) {
  /**
   * todo: handle errors
   * 
   * e.g. not_found
   * 
   * handle non string files (?)
   */

  const content = await read_file(path, 'utf8');

  if (is_error(content)) {
    /**
     * todo
     * 
     * - invalid filename does not work well, whether node or sys. rather check in ts.
     * - fact check the mappings, rather resolve to others than having an incorrect mapping
     */
    if (has(map, content.code)) {
      return err({ type: map[content.code], message: content })
    }
  }

  return content
}

export async function append({ path, content }) {
  await append_file(path, content)
}

export async function edit({ path, find, replace }) {
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

  const content = await read({ path })

  if (typeof content != 'string') {
    return err(not_string)
  } 

  const updated_content = content.replaceAll(find, replace)

  return await write({ path, content: updated_content })
}

/**
 * remove a file
 * 
 * delete is reserved by ts
 * 
 * todo
 * 
 * add an option (dont err for non existence)
 * 
 * a list of files?
 * 
 * do i { path, options } or path, { options }? others?
 */
export async function remove({ path }): Promise<result<void>> {
  const _ = await delete_file(path)

  if (is_error(_)) {
    if (has(map, _.code)) {
      return err({ type: map[_.code], message: _ })
    }
  }

  return _
}

