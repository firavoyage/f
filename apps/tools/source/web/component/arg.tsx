import type { arg } from 'action/tools'

import { use_global } from 'web/component/app'
import { Checkbox } from './checkbox'
import { Switch } from './switch'

export function Arg(props: arg) {
  const [, set_global] = use_global()

  const { name, type, value } = props
  
  function set_value(new_value: any) {
    set_global(() => {
      props.value = new_value
    })
  }

  if (type == 'checkbox') {
    return (
      <div className="arg"></div>
      <Checkbox {...p({ value, set_value })}>{name}</Checkbox>
    )
  } else if (type == 'switch') {
    return (
      <Switch {...p({ value, set_value })}></Switch>
    )
  } 
}