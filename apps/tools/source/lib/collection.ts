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

type s = typeof s
type m = typeof m
declare global {
  var s: s
  var m: m
}
