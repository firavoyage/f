import { json_to_yaml, yaml_to_json } from 'action/json yaml toml xml'
import { merge_journal, telegram_to_journal } from 'action/telegram to journal';
import { note_loss_table, single_chart_rating_table } from './maimai';
import { MaimaiGraph } from 'web/component/maimai';
import { apca } from './color contrast';
import { render_table } from 'web/component/table';
import { type_to_args } from './typescript';

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

// id (value) -> name (label)
export type options = Record<string, string> | string[]

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
        name: 'parsing',
        type: 'radio',
        value: union('standard', 'rigid', 'flexible', 'forgiving'),
        options: ['rigid', 'standard', 'flexible', 'forgiving']
      }
    ],
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
  },
  "maimai single chart rating table": {
    fn: single_chart_rating_table,
    render_output: render_table
  },
  "maimai single chart rating graph": {
    fn: single_chart_rating_table,
    render_output: MaimaiGraph
  },
  "maimai note loss table": {
    fn: note_loss_table,
    render_output: render_table,
    args: [{ "name": "tap", "type": "number", "value": 0 }, { "name": "hold", "type": "number", "value": 0 }, { "name": "slide", "type": "number", "value": 0 }, { "name": "touch", "type": "number", "value": 0 }, { "name": "break", "type": "number", "value": 0 }]
  },
  "perpetual": {
    fn: apca,
    args: [
      {
        name: 'foreground',
        type: 'input',
        value: '',
        placeholder: 'hex',
      },
      {
        name: 'background',
        type: 'input',
        value: '',
        placeholder: 'hex',
      },
    ],
  },
  "type to args": {
    fn: type_to_args,
    args: [
      {
        name: 'yaml',
        type: 'textarea',
        value: '',
      },
    ],
  },
}
// } as const satisfies Record<string, Optional<tool, 'name'>>
// } as const
// } satisfies Record<string, Optional<tool, 'name'>>

// const tools_typecheck: Record<string, Optional<tool, 'name'>> = tools

export const tools_taxonomy = [
  "json to yaml",
  "yaml to json",
  "telegram to journal",
  "merge journal",
  "maimai single chart rating table",
  "maimai single chart rating graph",
  "maimai note loss table",
  "perpetual",
  "type to args",
]

declare global {
  type text = Record<string, string>
}
