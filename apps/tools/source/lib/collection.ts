export function s(array?: Iterable<any>) {
  return new Set(array)
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
