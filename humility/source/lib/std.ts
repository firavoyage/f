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

// todo: ?
// weird types
export function has<K>(obj: object, key: K): key is K & PropertyKey {
  return obj && typeof obj == 'object' && key !== null && key !== undefined && Object.hasOwn(obj, key as PropertyKey);
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

