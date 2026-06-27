type merge = typeof merge
type has = typeof has
type _ = typeof _
declare global {
  var merge: merge
  var has: has
  var _: _
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


export let _: any = '' 
/**
 * usage:
 * 
 * _ = await void result fn
 * ise _ early return
 * 
 * (iff result? in rustk)
 */

