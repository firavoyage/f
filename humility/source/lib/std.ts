type merge = typeof merge
type has = typeof has
/* eslint-disable-next-line */
type _ = typeof _
type is_given = typeof is_given
declare global {
  var merge: merge
  var has: has
  var _: _
  var is_given: is_given
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

export function has<K extends PropertyKey>(obj: any, key: K): obj is Record<K, any> {
  // export function has<K extends PropertyKey>(obj: any, key: K): obj is Record<K, unknown> {
  return (typeof key == 'string' || typeof key == 'number' || typeof key == 'symbol') &&
    obj && typeof obj == 'object' && Object.hasOwn(obj, key);
}

// export function is_missing(foo: any): foo is undefined | null {
//   const missing_symbol = Symbol('missing')

//   if ((foo ?? missing_symbol) == missing_symbol) {
//     return true
//   }

//   return false
// }

export function is_given<T>(foo: T): foo is NonNullable<T> {
  const missing_symbol = Symbol('missing')

  if ((foo ?? missing_symbol) == missing_symbol) {
    return false
  }

  return true
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

