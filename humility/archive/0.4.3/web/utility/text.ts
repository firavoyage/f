export function text(s: string) {
  return map(s.split('_'), (word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1)
  }).join(' ')
}
