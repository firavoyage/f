import yaml from 'yaml';

const a = yaml.stringify({foo: 'bar', bar: 123, baz: true})

const b = yaml.stringify(['bar', 123, false])

log(a)

log(b)

const obj = yaml.parse(a)

const arr = yaml.parse(b)

log(obj)
log(arr)
