import type { options } from 'web/component/select'

// export * from 'action/maimai'
import { json_to_yaml, yaml_to_json } from 'action/json yaml toml xml'
import { merge_journal, telegram_to_journal } from 'action/telegram to journal';
import { maimai } from 'web/component/maimai';
// export * from 'action/json yaml toml xml'

export type tool = {
  name: string
  // name?: string // optional?!
  fn: fn
  // fn: (input: string, options?: any) => string
  args?: arg[]
  args_to_options?: fn
  render_input?: fn
  render_output?: fn
}

export type arg = {
  name: string
  id?: string // = normalize id name
  type: type // how it should be rendered, not typeof value
  value: any
  is_stdin?: boolean
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
        name: 'json',
        type: 'textarea',
        value: '',
        is_stdin: true
      },
      {
        name: 'parse',
        type: 'radio',
        value: union('standard', 'flexible', 'forgiving'),
        options: ['standard', 'flexible', 'forgiving']
      }
    ],
    render_output: maimai
  },
  "yaml to json": {
    fn: yaml_to_json,
    args: [
      {
        name: 'yaml',
        type: 'textarea',
        value: '',
        is_stdin: true
      },
    ],
  },
  "telegram to journal": {
    fn: telegram_to_journal,
    args: [
      {
        name: 'telegram',
        id: 'telegram_text',
        type: 'textarea',
        value: '',
        is_stdin: true
      },
    ],
  },
  "merge journal": {
    fn: merge_journal,
    args: [
      {
        name: 'original',
        id: 'original_text',
        type: 'textarea',
        value: ''
      },
      {
        name: 'addition',
        id: 'addition_text',
        type: 'textarea',
        value: '',
        is_stdin: true
      },
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

declare global {
  type text = Record<string, string>
}
