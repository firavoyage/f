import desktop from '@folder/xdg';
import { homedir } from 'node:os';
import { join } from 'node:path';

export const not_found = "not_found"
export const already_initialized = "already_initialized"

let app_name: string

let is_initialized = false;
let data_folder = ''
let config_folder = ''
let cache_folder = ''

// get from a config instead i think?

type non_empty_string = `${string}${any}`;

/**
 * init paths
 * 
 * do not care whether it's valid
 */
export function init({ name, xdg = true }: { name: non_empty_string, xdg: boolean }) {
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

export function path(...args) {
  return join(...args)
}

export function path(...args) {
  return join(...args)
}

export function path(...args) {
  return join(...args)
}

export function data() {

}

export function config() {

}

export function cache() {

}

// path, config (e.g. auto create path)

export function write() {

}

export function read() {

}


