/**
 * Toggle the presense of an element in a set
 */
export function toggle<T>(set: Set<T>, element: T) {
  if (set.has(element)) {
    set.delete(element)
  } else {
    set.add(element)
  } 
}

export function reverse_map(obj: object) {
  return Object.fromEntries(map(obj, ([key, value]) => [value, key]))
}

type toggle = typeof toggle
type reverse_map = typeof reverse_map
declare global {
  var toggle: toggle
  var reverse_map: reverse_map
}
