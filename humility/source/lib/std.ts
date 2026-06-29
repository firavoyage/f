type merge = typeof merge
type has = typeof has
/* eslint-disable-next-line */
type _ = typeof _
type is_missing = typeof is_missing
declare global {
  var merge: merge
  var has: has
  var _: _
  var is_missing: is_missing
}

/**
 * merge objects
 * 
 * pure, shallow, right > left when conflicting
 * 
 * break prototype chain
 */
export function merge(...args: object[]) {
  return Object.assign({}, ...args)
}

export function has<K extends PropertyKey>(obj: any, key: K): obj is Record<K, unknown> {
  return obj && typeof obj == 'object' && Object.hasOwn(obj, key);
}

const missing_symbol = Symbol('missing')

export function is_missing(foo: any): foo is undefined | null {
  if ((foo ?? missing_symbol) == missing_symbol) {
    return true
  }

  return false
}

export let _: any = ''
/**
 * usage:
 * 
 * _ = await void result fn
 * ise _ early return
 * 
 * (iff result? in rustk)
 */

