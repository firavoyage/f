import type { arg } from 'action/tools'

import { Checkbox } from './checkbox'
import { Switch } from './switch'
import { Number } from './number'
import { Select } from './select'
import { Radio } from './radio'
import { Input } from './input'
import { Textarea } from './textarea'

export function Arg(props: arg & {set_value: fn}) {
  const { type, value, set_value, options, placeholder } = props

  const label = <span className="label">{props.name}</span>

  if (type == 'checkbox') {
    return (
      <Checkbox {...p({ value, set_value })}>{label}</Checkbox>
    )
  } else if (type == 'switch') {
    return (
      <>
        {label}
        <Switch {...p({ value, set_value })}></Switch>
      </>
    )
  } else if (type == 'number') {
    return (
      <>
        {label}
        <Number {...p({ value, set_value })}></Number>
      </>
    )
  } else if (type == 'select') {
    if (!is_given(options)) {
      throw err('select must have options')
    } 

    return (
      <>
        {label}
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
        {label}
        <Radio {...p({ value, set_value, options })}>
        </Radio>
      </>
    )
  } else if (type == 'input') {
    return (
      <>
        {label}
        <Input {...p({ value, set_value, placeholder })}>
        </Input>
      </>
    )
  } else if (type == 'textarea') {
    return (
      <>
        {label}
        <Textarea {...p({ value, set_value })}>
        </Textarea>
      </>
    )
  } 
}