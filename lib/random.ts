const { min, max, floor, random: _random } = Math;

export function randint(a, b) {
  ([a, b] = [min(a, b), max(a, b)])

  return floor(_random() * (b - a + 1)) + a
}

export function random() {
  return _random()
}

export function random_id() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  )
}
