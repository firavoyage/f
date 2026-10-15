export function max(...args) {
  if (args.length == 2 && is(args[0], 'numeric') && is(args[1], 'function')) {
    const [array, fn] = args
    let maximum = array[0]
    map(array, (n) => {
      if (fn(n, maximum)) {
        maximum = n
      }
    })
    return maximum
  } else if (args.length == 1 && is(args[0], 'iterable')) {
    const [array] = args
    function compare(a, b) {
      return a > b
    }
    return max(array, compare)
  } else {
    return max(args)
  } 
}

export function min(...args) {
  if (args.length == 2 && is(args[0], 'numeric') && is(args[1], 'function')) {
    const [array, fn] = args
    let minimum = array[0]
    map(array, (n) => {
      if (fn(n, minimum)) {
        minimum = n
      }
    })
    return minimum
  } else if (args.length == 1 && is(args[0], 'iterable')) {
    const [array] = args
    function compare(a, b) {
      return a < b
    }
    return min(array, compare)
  } else {
    return min(args)
  } 
}
