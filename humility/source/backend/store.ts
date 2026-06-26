import { data, write, read, does_exist } from 'lib/file';
import { not_found } from 'lib/file';

const database_folder = 'data'

// no need to care whether `data/data` or `data/storage` 
// (it might not be wise to just `data`, as you might have other non kv data, e.g. binaries)
// no need to care whether `key.key.key` or `key/key/key`
// you can change your mind later!

// it would override globalThis.has (check obj key) i guess
export async function has(key: string) {
  return does_exist(data(database_folder, key))
}

// todo: ensure valid key
export async function get(key: string) {
  const value = await read(data(database_folder, key))
  if (is_error(value)) {
    if (value.type == not_found) {
      return
    }

    return value
  }

  return value
}

export async function set(key: string, value: string) {
  return write(data(database_folder, key), value)
}

// delete?
