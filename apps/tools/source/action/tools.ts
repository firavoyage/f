import type { options } from 'web/component/select'

// export * from 'action/maimai'
import { json_to_yaml, yaml_to_json } from 'action/json yaml toml xml'
import { merge_journal, telegram_to_journal } from 'action/telegram to journal';
// export * from 'action/json yaml toml xml'

export type tool = {
  name: string
  // name?: string // optional?!
  fn: (input: string, options?: any) => string
  args?: arg[]
  args_to_options?: Function
  render_input?: Function
  render_output?: Function
}

export type arg = {
  name: string
  id?: string // = normalize id name
  type: type // how it should be rendered, not typeof value
  value: any
  options?: options // for select/radio
  placeholder?: string // for select
}

type type = 'checkbox' | 'switch' | 'select' | 'radio' | 'number' | 'input' | 'textarea'

export type tool_name = keyof typeof tools

export const tools: Record<string, Optional<tool, 'name'>> = {
// export const tools = {
  "json to yaml": {
    fn: json_to_yaml,
    args: [
      {
        name: 'parse',
        type: 'select',
        value: union('standard', 'flexible', 'forgiving'),
        options: ['standard', 'flexible', 'forgiving']
      }
    ],
  },
  "yaml to json": {
    fn: yaml_to_json,
  },
  "telegram to journal": {
    fn: telegram_to_journal
  },
  "merge journal": {
    fn: merge_journal,
    args: [
      {
        name: 'original text',
        type: 'textarea',
        value: ''
      }
    ]
  }
}

// const tools_typecheck: Record<string, Optional<tool, 'name'>> = tools

export const tools_taxonomy = [
  "json to yaml",
  "yaml to json",
  "telegram to journal",
  "merge journal"
]

