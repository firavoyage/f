import 'web/design/app.css'
import 'web/design/utilitarian/utilitarian.css'
import { Button } from './button'
import { Checkbox } from './checkbox'
import { Switch } from './switch'
import { Select } from './select'
import { Radio } from './radio'
import { Number } from './number'
import { Input } from './input'
import { Textarea } from './textarea'
import { Storybook } from './storybook'

const storybook = {
  Button,
  Checkbox,
  Switch,
  Select,
  Radio,
  Number,
  Input,
  Textarea,
}

export function App() {
  use_sync_theme('system')

  use_window_active()

  return (
    <div className="app">
      <Storybook {...p({ storybook })}></Storybook>
    </div>
  )
}

