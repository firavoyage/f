import { normalize_id } from 'lib/normalize_id';

export * from 'action/maimai'
import { json_to_yaml, yaml_to_json } from 'action/json yaml toml xml'
import { merge_journal, telegram_to_journal } from 'action/telegram to journal';
export * from 'action/json yaml toml xml'

export const items = ["json to yaml", "yaml to json"]

const flexible_tool_to_args: Record<string, arg[]> = {
  "merge journal": [
    {
      name: 'original text',
      type: 'string',
      value: ''
    }
  ],
}

export const tool_to_args = Object.fromEntries(map(flexible_tool_to_args,
  ([key, value]) => ([normalize_id(key), value])))

export type tool = {
  name?: string // optional?!
  fn: (input: string, options?: any) => string
  args?: arg[]
  render_input?: Function
  render_output?: Function
}

export type arg = {
  name: string
  id?: string // = normalize id name
  type: type // how it should be rendered, not typeof value
  value: any
}

// todo
type type = 'number' | 'string'

export type tool_name = keyof typeof tools

export const tools: Record<string, tool> = {
  "json to yaml": {
    fn: json_to_yaml,
    args: [
      {
        name: 'parse',
        type: 'string',
        value: union('standard', 'flexible', 'forgiving')
      }
    ],
  },
  {
    name: "yaml to json",
    fn: yaml_to_json,
  },
  {
    name: "telegram to journal",
    fn: telegram_to_journal
  },
  {
    name: "merge journal",
    fn: merge_journal,
    args: [
      {
        name: 'original text',
        type: 'string',
        value: ''
      }
    ]
  }
} 

