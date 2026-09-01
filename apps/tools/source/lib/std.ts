/**
 * Merge objects to target (the first param)
 * 
 * shallow
 * 
 * less quirky than Object.assign
 */
export function merge(target: object, ...sources: object[]) {
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      // @ts-expect-error mutate type
      target[key] = source[key]
    }
  }
  return target
}

export function has<K extends PropertyKey>(obj: any[], key: K): boolean
export function has<K extends PropertyKey>(obj: Set<any>, key: K): boolean
export function has<K extends PropertyKey>(obj: any, key: K): obj is Record<K, any>
export function has<K>(obj: any, key: K): boolean
// export function has<K>(obj: any, key: K): obj is Record<K, any>

/**
 * Check if an object has a key, or an array/set has an element
 */
export function has<K extends PropertyKey>(obj: any, key: K): obj is Record<K, any> {
  if (Array.isArray(obj)) {
    return obj.includes(key)
  }

  if (obj instanceof Set) {
    return obj.has(key)
  }

  return (typeof key == 'string' || typeof key == 'number' || typeof key == 'symbol') &&
    obj && typeof obj == 'object' && Object.hasOwn(obj, key);
}

export function is_given<T>(foo: T): foo is NonNullable<T> {
  const missing_symbol = Symbol('missing')

  if ((foo ?? missing_symbol) == missing_symbol) {
    return false
  }

  return true
}

// export function is_missing(foo: any): foo is undefined | null {
//   const missing_symbol = Symbol('missing')

//   if ((foo ?? missing_symbol) == missing_symbol) {
//     return true
//   }

//   return false
// }

export const nil = null

type merge = typeof merge
type has = typeof has
type is_given = typeof is_given
type nil = typeof nil
declare global {
  var merge: merge
  var has: has
  var is_given: is_given
  var nil: nil
}

