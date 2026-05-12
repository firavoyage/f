import { join } from 'node:path';

export const not_found = "not_found"

let app_name: string

// get from a config instead i think?

// app name
export function init(name: string) {
  app_name = name
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


