import { use_sync_theme } from 'lib/web/use sync theme'
import { use_window_active } from 'lib/web/use window active'
import { use_style } from 'lib/web/style'
import theme from 'web/design/utilitarian.yaml'
import 'web/design/utilitarian.css'
import { input } from './input'
import { textarea } from './textarea'
import { scroll } from './scroll'
import { post } from 'lib/web/request'

export function app() {
  use_sync_theme('system')
  use_window_active()
  use_style(theme)

  const [prompt, set_prompt] = use_state('')
  const [foo, set_foo] = use_state()

  use_keyboard('enter', () => {
    set_foo(post('list'))
  })

  use_effect(() => {
    log(foo)
  })

  return h(
    h('title.', 'Humility'),
    h(
      'app',
      h('thread'),
      h(
        'message',
        h(
          'message_field',
          h(
            scroll,
            h(
              'message_textarea',
              h(textarea, { value: prompt, set_value: set_prompt }),
            )
          ),
        ),
      ),
    ),
  )
}
