// log('a' in ['a', 'b', 'c'])
// log(['a', 'b', 'c'].includes('a'))

for (const [key, value] of entries([1,2,3])) {
  log(key, value)
}

for (const [key, value] of Object.entries([1,2,3])) {
  log(key, value)
}