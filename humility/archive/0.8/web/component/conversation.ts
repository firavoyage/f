import { copy } from 'lib/web/clipboard'
import { markdown } from './markdown'
import { scroll } from './scroll'
import { textarea } from './textarea'

export function conversation({
  messages,
  folder,
  is_new_thread,
  prompt,
  set_prompt,
  should_show_reasoning,
  prompt_field,
  content,
}) {
  return h(
    is_new_thread && h('status', h('status_folder', folder)),
    h(
      'page',
      h(
        scroll,
        { ref: content },
        h(
          'page_content',
          !is_new_thread &&
            h(
              'messages',
              map(messages, (message) =>
                h(
                  'message',
                  { role: message?.role },
                  h(
                    'message_content',
                    {
                      onclick() {
                        copy(message.content)
                      },
                    },
                    message?.reasoning &&
                      should_show_reasoning &&
                      h(
                        'message_prose_reasoning',
                        h(
                          'details.',
                          h('summary.', 'Reasoning'),
                          h(
                            'message_prose_reasoning_details',
                            h(markdown, { markdown: message?.reasoning ?? '' }),
                          ),
                        ),
                      ),
                    h(
                      'message_prose',
                      h(markdown, { markdown: message?.content ?? '' }),
                    ),
                  ),
                ),
              ),
            ),
        ),
      ),
    ),
    h(
      'prompt',
      h(
        'prompt_field',
        { empty: !prompt },
        h(
          scroll,
          h(
            'prompt_textarea',
            h(textarea, {
              value: prompt,
              set_value: set_prompt,
              ref: prompt_field,
            }),
          ),
        ),
      ),
    ),
  )
}
