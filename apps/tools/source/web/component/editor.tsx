import { Textarea } from "./textarea"

type editor = {
  type: 'input' | 'output' | 'process'
  value: string
  set_value: (value: string) => void
  readonly?: boolean
  should_show_textarea?: boolean
  children?: any
}

function capitalize(title: string) {
  return title[0].toUpperCase() + title.slice(1)
}

export function Editor(props: editor) {
  const { type, value, set_value, readonly = false, should_show_textarea = true, children } = props
  // const { type, select, readonly = false } = props

  return (
    <div className="editor">
      <div className="title">{capitalize(type)}</div>
      {should_show_textarea && <Textarea {...p({ value, set_value })}></Textarea>}
      {children}
    </div>
  )
}

