import {
  serialize,
  deserialize,
  thread_index_file,
  get_thread_file,
} from 'action/index'
import { read, write, join, santinize } from 'lib/file'
import { at } from 'lib/time'
import { build_context } from 'utility/thread'

type export_to_dir = {
  dir: string
  include?: string[]
  ignore?: string[]
}

export function export_to_dir({
  dir,
  include = [''],
  ignore = [],
}: export_to_dir) {
  let threads = deserialize(read(thread_index_file))

  let included_threads = set(
    map(threads, ([thread, { folder = '' }]) => {
      for (const parent of include) {
        if (does_match(parent, folder)) {
          return thread
        }
      }
    }),
  )

  let non_ignored_threads = set(
    map(threads, ([thread, { folder = '', is_hidden }]) => {
      if (is_hidden) {
        return
      }

      for (const parent of ignore) {
        if (does_match(parent, folder)) {
          return
        }
      }

      return thread
    }),
  )

  included_threads = included_threads.intersection(non_ignored_threads)

  let folders = {}

  for (const thread of included_threads) {
    let { title, folder = '', creation_time } = threads[thread]

    if (folder == '') {
      folder = title
    }

    if (!has(folders, folder)) {
      folders[folder] = {
        creation_time,
        threads: [thread],
      }
    } else {
      folders[folder].threads.push(thread)
    }
  }

  for (const [folder, { creation_time, threads: current_threads }] of entries(
    folders,
  )) {
    let santinized_folder = santinize(folder)

    let filename = `${at(creation_time).format(
      '%Y%m%d %H%M',
    )} ${santinized_folder}.md`

    let contents = []

    for (const thread of current_threads) {
      const { title } = threads[thread]

      contents.push(`# ${title}`)

      let thread_structure = deserialize(read(get_thread_file(thread)))
      let messages = build_context(thread_structure)

      for (const message of messages) {
        const { role, content } = message

        if (role == 'user') {
          contents.push(`## ${content}`)
        } else if (role == 'assistant') {
          contents.push(content)
        }
      }
    }

    let content = contents.join('\n\n')

    write(join(dir, filename), content)
  }
}

function does_match(parent: string, folder: string) {
  if (parent == '') {
    return true
  }

  return parent == folder || folder.startsWith(`${parent}/`)
}
