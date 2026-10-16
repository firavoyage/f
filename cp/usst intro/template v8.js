const global = this

function print(n) {
  global.print(n+1)
}

print(1)
