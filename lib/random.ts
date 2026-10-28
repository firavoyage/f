const { min, max, floor, random: _random } = Math;

export function randint(a, b) {
  ([a, b] = [min(a, b), max(a, b)])

  return floor(_random() * (b - a + 1)) + a
}

export function random() {
  return _random()
}
