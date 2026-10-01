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
import { Favicon } from './favicon'
import { Scroll } from 'web/component/scroll'

const storybook = {
  Scroll() {
    return (
      <div {...p({
        style: {
          height: '300px'
        }
      })}>
        <Scroll>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint explicabo ducimus porro quibusdam placeat consequatur voluptatum itaque tempora vel beatae maiores aliquam culpa iusto, ullam dolores illum dolorem odit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint explicabo ducimus porro quibusdam placeat consequatur voluptatum itaque tempora vel beatae maiores aliquam culpa iusto, ullam dolores illum dolorem odit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint explicabo ducimus porro quibusdam placeat consequatur voluptatum itaque tempora vel beatae maiores aliquam culpa iusto, ullam dolores illum dolorem odit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint explicabo ducimus porro quibusdam placeat consequatur voluptatum itaque tempora vel beatae maiores aliquam culpa iusto, ullam dolores illum dolorem odit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint explicabo ducimus porro quibusdam placeat consequatur voluptatum itaque tempora vel beatae maiores aliquam culpa iusto, ullam dolores illum dolorem odit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint explicabo ducimus porro quibusdam placeat consequatur voluptatum itaque tempora vel beatae maiores aliquam culpa iusto, ullam dolores illum dolorem odit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint explicabo ducimus porro quibusdam placeat consequatur voluptatum itaque tempora vel beatae maiores aliquam culpa iusto, ullam dolores illum dolorem odit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint explicabo ducimus porro quibusdam placeat consequatur voluptatum itaque tempora vel beatae maiores aliquam culpa iusto, ullam dolores illum dolorem odit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint explicabo ducimus porro quibusdam placeat consequatur voluptatum itaque tempora vel beatae maiores aliquam culpa iusto, ullam dolores illum dolorem odit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint explicabo ducimus porro quibusdam placeat consequatur voluptatum itaque tempora vel beatae maiores aliquam culpa iusto, ullam dolores illum dolorem odit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint explicabo ducimus porro quibusdam placeat consequatur voluptatum itaque tempora vel beatae maiores aliquam culpa iusto, ullam dolores illum dolorem odit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint explicabo ducimus porro quibusdam placeat consequatur voluptatum itaque tempora vel beatae maiores aliquam culpa iusto, ullam dolores illum dolorem odit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint explicabo ducimus porro quibusdam placeat consequatur voluptatum itaque tempora vel beatae maiores aliquam culpa iusto, ullam dolores illum dolorem odit?
          </p>
        </Scroll>
      </div>
    )
  },
  Favicon,
  Button,
  Checkbox,
  Switch() {
    const [value, set_value] = useState(false)

    return (
      <Switch {...p({ value, set_value })}>

      </Switch>
    )
  },
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
    <Storybook {...p({ storybook })}></Storybook>
  )
}

