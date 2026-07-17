const steps = [
  [4, 0.5],
  [12, 1],
  [16, 2],
  [64, 4],
  [80, 8],
  [96, 16],
]

function main() {
  let beg = 0

  for (const [end, step] of steps) {
    for (const value of each(beg + step, end, step)) {
      log(`${value}: ${value * 0.25}rem`)
    }

    beg = end
  }
}

main()