function debug(...args) {
  log(...args)
}

log(map(m({1: 2, 3: 4}), (...args) => debug))