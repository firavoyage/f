import { deserialize, serialize, webpage_index_file } from 'action/index'
import { read } from 'lib/file'

export function list(site: string | ((site: string) => boolean)) {
  const webpage_index = deserialize(read(webpage_index_file))

  return map(webpage_index, (result) => {
    
  })
}