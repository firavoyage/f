export function identity(v) {
  return v
}

export function call(fn: fn) {
  fn?.()
}

export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache_map = new Map<string, ReturnType<T>>()

  return function (...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args)

    if (cache_map.has(key)) {
      return cache_map.get(key)!
    }

    const result = fn(...args)
    cache_map.set(key, result)

    return result
  } as T
}

type identity = typeof identity
type call = typeof call
type memoize = typeof memoize
declare global {
  var identity: identity
  var call: call
  var memoize: memoize
}
