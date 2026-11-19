import { home, append } from 'lib/file'
const { stringify, parse } = JSON

let file = home('foo.jsonl')

for (const i of each(3)) {
  append(
    file,
    stringify({
      type: 'hello',
      foo: 'bar',
    }),
  )
  append(file, '\n')
}
