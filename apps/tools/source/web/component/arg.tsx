import type { arg } from 'action/tools'

import { use_global } from 'web/component/app'

import { Checkbox } from './checkbox'
import { Switch } from './switch'
import { Number } from './number'
import { Select } from './select'
import { Radio } from './radio'
import { Input } from './input'
import { Textarea } from './textarea'

export function Arg(props: arg & {set_value: Function}) {
  const { type, value, set_value, options, placeholder } = props

  const name = <span className="name">{props.name}</span>

  if (type == 'checkbox') {
    return (
      <Checkbox {...p({ value, set_value })}>{name}</Checkbox>
    )
  } else if (type == 'switch') {
    return (
      <>
        {name}
        <Switch {...p({ value, set_value })}></Switch>
      </>
    )
  } else if (type == 'number') {
    return (
      <>
        {name}
        <Number {...p({ value, set_value })}></Number>
      </>
    )
  } else if (type == 'select') {
    if (!is_given(options)) {
      throw err('select must have options')
    } 

    return (
      <>
        {name}
        <Select {...p({ value, set_value, options, placeholder })}>
        </Select>
      </>
    )
  } else if (type == 'radio') {
    if (!is_given(options)) {
      throw err('radio must have options')
    } 

    return (
      <>
        {name}
        <Radio {...p({ value, set_value, options })}>
        </Radio>
      </>
    )
  } else if (type == 'input') {
    return (
      <>
        {name}
        <Input {...p({ value, set_value })}>
        </Input>
      </>
    )
  } else if (type == 'textarea') {
    return (
      <>
        {name}
        <Textarea {...p({ value, set_value })}>
        </Textarea>
      </>
    )
  } 
}