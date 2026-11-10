import { use_sync_theme } from 'lib/web/use sync theme'
import { use_window_active } from 'lib/web/use window active'
import { use_style } from 'lib/web/style'
import theme from 'web/design/utilitarian.yaml'
import 'web/design/utilitarian.css'
import { input } from './input'
import { textarea } from './textarea'

export function app() {
  use_sync_theme('system')
  use_window_active()
  use_style(theme)

  const [prompt, set_prompt] = useState('')

  return h(
    h('title.', 'Humility'),
    h(
      'app',
      h('thread'),
      h(
        'message',
        h('message_field', h(textarea, { value: prompt, set_value: set_prompt })),
      ),
    ),
  )
}
