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
 */
export function merge(target: object, ...sources: object[]) {
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      /* eslint-disable-next-line */ // @ts-expect-error 
      target[key] = source[key]
    }
  }
  return target
  // return Object.assign({}, ...sources)
}

export function has<K extends PropertyKey>(obj: any, key: K): obj is Record<K, unknown> {
// export function has<K extends PropertyKey>(obj: any, key: K): obj is Record<K, unknown> {
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

