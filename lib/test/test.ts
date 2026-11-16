function cache<T extends (...args: any[]) => any>(fn: T): T {
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

function add(a: number, b: number): number {
  console.log('computing...')
  return a + b
}

const cached_add = cache(add)

const log_add = (...args) => log(cached_add(...args))

log_add(1, 2) // computes: 3
log_add(1, 2) // cached: 3
log_add(2, 3) // computes: 5
