import { deserialize, serialize } from 'action/index'
import { init_desktop, data, config, cache, touch, mkpath, join } from 'lib/file'

export const browser_profile = data('browser', 'default')

init_desktop('have')

export const object_index_file = data('object', 'index.yaml')
export const webpage_index_file = data('webpage', 'index.yaml')
export const category_index_file = data('category', 'index.yaml')
touch(object_index_file, serialize([]))
touch(webpage_index_file, serialize([]))
touch(category_index_file, serialize([]))

export const log_file = data('log', 'log.log')
touch(log_file)

export const result_folder = data('webpage', 'result')
export const object_folder = data('object', 'storage')
// export const cache_folder = cache('object', 'storage')

mkpath(result_folder)
mkpath(object_folder)
// mkpath(cache_folder)

export function get_result_folder(id: string) {
  return join(result_folder, id)
}
export function get_object_file(id: string) {
  return join(object_folder, id)
}
// export function get_cache_file(id: string) {
//   return join(cache_folder, id)
// }

export type result = {
  id: string
  url: string
  creation_time: number
  
}
