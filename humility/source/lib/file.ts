/**
 * xdg is in js. no types. and no need to have types.
 */
import desktop from '@folder/xdg';
import { homedir } from 'node:os';
import { join, dirname as dir } from 'node:path';
import { writeFile, readFile, mkdir } from 'node:fs/promises';

/**
 * errors
 */
export const not_found = "not_found"
export const already_initialized = "already_initialized"
export const not_initialized = "not_initialized"

const write_file = handle(writeFile)
const read_file = handle(readFile)

/**
 * state
 */

let is_initialized = false;
let data_folder = ''
let config_folder = ''
let cache_folder = ''

type non_empty_string = `${string}${any}`;

/**
 * todo: dry?
 */
type init = typeof init
type path = typeof path
type data = typeof data
type config = typeof config
type cache = typeof cache
type write = typeof write
type read = typeof read
declare global {
  var init: init
  var path: path
  var data: data
  var config: config
  var cache: cache
  var write: write
  var read: read
}

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

export async function write({ path, content }) {
  /**
   * todo: handle errors
   * 
   * e.g. illegal character, path too long, etc.
   */

  /**
   * create path if needed
   */
  await mkdir(dir(path), { recursive: true });

  await write_file(path, content, 'utf8');
}

export async function read({ path }) {
  /**
   * todo: handle errors
   * 
   * e.g. not_found
   */

  const content = await read_file(path, 'utf8');

  return content
}


