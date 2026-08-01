import { Textarea } from "./textarea"

type EditorProps = {
  type: 'input' | 'output'
  // select?: ''
  readonly?: boolean
  value: string
  set_value: (value: string) => void
}

function capitalize(title: string) {
  return title[0].toUpperCase() + title.slice(1)
}

export function Editor(props: EditorProps) {
  const { type, readonly = false, value, set_value } = props
  // const { type, select, readonly = false } = props

  return (
    <div className="editor">
      <div className="title">{capitalize(type)}</div>
      <Textarea {...p({ value, set_value })}></Textarea>
    </div>
  )
}

