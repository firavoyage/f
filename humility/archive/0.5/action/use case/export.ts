import { export_to_dir } from 'action/export'
import { home, data } from 'lib/file'

export_to_dir({
  dir: home('Documents/f/drafts'),
  ignore: ['test'],
})
