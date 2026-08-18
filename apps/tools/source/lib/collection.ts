export function s(array?: Iterable<any>) {
  return new Set(array)
}

export function toggle(set: Set<any>, key: Key) {
  if (has(set, key)) {
    set.delete(key)
  } else {
    set.add(key)
  } 
}

export function m(entries?: ReturnType<typeof Object.entries>) {
  return new Map(entries)
}

export function reverse_map(obj: object) {
  return map(obj, ([key, value]) => [value, key])
}

type s = typeof s
type m = typeof m
type toggle = typeof toggle
type reverse_map = typeof reverse_map
declare global {
  var s: s
  var m: m
  var toggle: toggle
  var reverse_map: reverse_map
}
