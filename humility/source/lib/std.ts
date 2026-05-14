type merge = typeof merge
type has = typeof has
declare global {
  var merge: merge
  var has: has
}

/**
 * merge objects
 * 
 * pure
 * 
 * shallow
 * 
 * for conflicts, the right overwrites the left
 * 
 * break prototype chain
 */
export function merge(...args) {
  return Object.assign({}, ...args)
}

export function has<K>(obj, key: K): key is K & PropertyKey {
  return (key ?? false) !== false && Object.hasOwn(obj, key as PropertyKey)
}
