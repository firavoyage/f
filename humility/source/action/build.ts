import { serialize, deserialize, threads_file } from 'action/index'
import { read, write } from 'lib/file'

export function build({
  dir,
  keep = [''],
  ignore = [],
}) {
  let threads = deserialize(read(threads_file))

  let kept_threads = map(threads, ([k, v]) => {
    const {  } = v
  })
}
