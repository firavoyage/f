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

export const {abs, floor, ceil} = Math

type max = typeof max
type min = typeof min
type abs = typeof abs
type floor = typeof floor
type ceil = typeof ceil
declare global {
  var max: max
  var min: min
  var abs: abs
  var floor: floor
  var ceil: ceil
}
