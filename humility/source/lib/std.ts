type merge = typeof merge
declare global {
  var merge: merge
}

/**
 * merge objects
 * 
 * pure
 * 
 * shallow
 * 
 * for conflicts, the right overwrites the left
 */
export function merge(...args) {
  return Object.assign({}, ...args)
}