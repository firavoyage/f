import { export_to_dir } from 'action/export'
import { home, data } from 'lib/file'

export_to_dir({
  dir: data('chat/test/export'),
  ignore: ['test'],
})

