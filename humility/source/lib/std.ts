type merge = typeof merge
type has = typeof has
declare global {
  var merge: merge
  var has: has
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

export function has<K>(obj: object, key: K): key is K & PropertyKey {
  return key !== null && key !== undefined && Object.hasOwn(obj, key as PropertyKey);
}

