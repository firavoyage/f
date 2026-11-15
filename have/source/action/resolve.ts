import {
  deserialize,
  result,
  serialize,
  webpage_index_file,
  list,
} from 'action/index'
import { read } from 'lib/file'

// resolve url based on id

export function resolve_url(id: string) {
  const webpage_index: result[] = deserialize(read(webpage_index_file))

  for (const result of webpage_index) {
    if (result.id == id) {
      return result.url
    }
  }

  return nil
}

export function resolve_id(
  url: string,
  webpage_index = deserialize(read(webpage_index_file)),
) {
  // if (is(webpage_index, Map)) {
  //   return webpage_index.get(url)
  // } 

  const pages = list(url, webpage_index)
  // const webpage_index: result[] = deserialize(file.read(webpage_index_file))

  if (pages.length == 0) {
    return nil
  } else {
    const last_index = pages.length - 1
    return pages[last_index].id
  }
}
