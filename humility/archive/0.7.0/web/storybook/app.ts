import { button } from 'web/component/button'
import { checkbox } from 'web/component/checkbox'
import { input } from 'web/component/input'
import { radio_group } from 'web/component/radio_group'
import { select } from 'web/component/select'
import { slider } from 'web/component/slider'
import { switch_toggle } from 'web/component/switch'
import { textarea } from 'web/component/textarea'

import { storybook } from './storybook'

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
]

export function app() {
  use_sync_theme('system')
  use_window_active()

  const [input_value, set_input_value] = use_state('')
  const [textarea_value, set_textarea_value] = use_state('')
  const [checkbox_checked, set_checkbox_checked] = use_state(false)
  const [switch_checked, set_switch_checked] = use_state(false)
  const [select_value, set_select_value] = use_state('one')
  const [radio_value, set_radio_value] = use_state('one')
  const [slider_value, set_slider_value] = use_state(50)

  const components = {
    button: h(button, { children: 'Button' }),
    input: h(input, {
      value: input_value,
      set_value: set_input_value,
      placeholder: 'Type something',
    }),
    textarea: h(textarea, {
      value: textarea_value,
      set_value: set_textarea_value,
      placeholder: 'Write a message',
    }),
    checkbox: h(checkbox, {
      checked: checkbox_checked,
      set_checked: set_checkbox_checked,
    }),
    switch: h(switch_toggle, {
      checked: switch_checked,
      set_checked: set_switch_checked,
      children: 'Enable feature',
    }),
    select: h(select, {
      value: select_value,
      set_value: set_select_value,
      options,
    }),
    radio_group: h(radio_group, {
      value: radio_value,
      set_value: set_radio_value,
      options,
    }),
    slider: h(slider, {
      value: slider_value,
      set_value: set_slider_value,
    }),
  }

  return h(storybook, { components })
}
