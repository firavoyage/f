import { parse, stringify } from 'yaml';
import { data, write, read, does_exist, remove } from 'lib/file';
import { not_found } from 'lib/file';

const database_folder = 'data'

// no need to care whether `data/data` or `data/storage` 
// (it might not be wise to just `data`, as you might have other non kv data, e.g. binaries)
// no need to care whether `key.key.key` or `key/key/key`
// you can change your mind later!

// it would override globalThis.has (check obj key) i guess
// i would not overload with the std lib has
/**
 * wait! 
 * 
 * in std lib, i might has or !has
 * 
 * but for this, i guess i would always if lacks early return
 * 
 * if has... and i stop... what can i do?
 */
export async function lacks(key: string) {
  return !(await does_exist(data(database_folder, key)))
}

/**
 * todo: 
 * - ensure valid key
 * - type guard (overload must exist)
 * 
 */

export async function get(key: string, { must_exist = false, plain = false }: { must_exist?: boolean, plain?: boolean } = {}) {
  const value = await handle(() => read(data(database_folder, key)))
  if (is_error(value)) {
    // do not catch on low level, let it propagate by default
    // at least it should be a flag
    // unlike js, you will not just get(key) || fallback

    // no. you will have get(key) || fallback
    // you can check not_found by lacks. 
    // if you call get, you already know what you are doing

    if (!must_exist && value.type == not_found) {
      return
    }

    throw value
  }

  return plain ? value : parse(value)
}

export async function set(key: string, value: any, { plain = false }: { plain?: boolean } = {}) {
  return write(data(database_folder, key), plain ? value : stringify(value))
}

export async function del(key: string) {
  return remove(data(database_folder, key))
}

/**
 * key(...args) = args.join('.')?
 * 
 * just template string i guess
 * 
 * thread_key = 'thread' is weird. esp when it's clear, not any prone, 
 * and not widely reused (even so, it might not be wise to import everywhere)
 */

