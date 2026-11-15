import { deserialize, serialize, webpage_index_file, result } from 'action/index'
import { read } from 'lib/file'

export function list(site: string | ((site: string) => boolean)): result[] {
  function does_match(current_site: string) {
    if (is(site, 'string')) {
      return site == current_site
    } else {
      return site(current_site)
    } 
  }

  const webpage_index = deserialize(read(webpage_index_file))

  return map(webpage_index, (result: result) => {
    if (does_match(result.url)) {
      return result
    }     
  })
}