// const { min } = Math

function min(...args: (number | boolean)[]) {
  return Math.min(...args.filter(n => !is(n, 'boolean')))
}

function calc(n: number) {
  // Length
  const five = 1 // 5
  const f = 3 // f()
  const g = 3 // g()
  const h = 4 // h(,)

  if (n == 5) {
    return five
  }

  return min(
    f + calc(n - 1),
    n % 2 == 1 && n >= 9 && g + calc((n + 1) / 2),
    ...map(each(1, n.toString().length - 1), (i) => {
      if (n.toString().length < 2) {
        return 
      } 

      const former = n.toString().slice(0, i)
      const latter = n.toString().slice(i)

      if (former.startsWith('0') || latter.startsWith('0')) {
        return 
      } 

      const a = parseInt(former)
      const b = parseInt(latter)
      if (a < 5 || b < 5) {
        return 
      } 

      return h + calc(a) + calc(b)
    })
  )
}

function memo(fn) {
  const cache = new Map()

  // return (...args) => {
  //   if (has(cache, args)) {
  //     return cache.get(args)
  //   } 

  //   const result = fn(...args)

  //   cache.set(args, result)

  //   return result
  // }
  return (n) => {
    if (has(cache, n)) {
      return cache.get(n)
    } 

    const result = fn(n)

    cache.set(n, result)

    return result
  }
}

calc = memo(calc)

log(calc(2026))

