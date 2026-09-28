// const { min } = Math

function min(...args: (number | boolean)[]) {
  return Math.min(args.filter(n => !is(n, 'boolean')))
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
    n % 2 == 1 && n >= 9 && g + calc((n + 1) / 2)
  )
}

// log(calc(2026))

log('012345'.slice(0, 1))
