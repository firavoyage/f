import { normalize_id } from 'lib/normalize_id';

export * from 'action/maimai'
export * from 'action/json yaml toml xml'
export * from 'action/telegram to journal'

// @ts-expect-error 
import type { items } from 'web/component/list';
// @ts-expect-error 
export const items: items = ["json to yaml", "yaml to json", "yaml", "json", "toml",
  "telegram to journal", "merge journal"]

const flexible_tool_to_args: Record<string, arg[]> = {
  "merge journal": [
    {
      name: 'original text',
      type: 'string',
      value: ''
    }
  ],
  "json to yaml": [
    {
      name: 'parse',
      type: 'string',
      value: union('standard', 'flexible', 'forgiving')
    }
  ]
}

export const tool_to_args = Object.fromEntries(map(flexible_tool_to_args,
  ([key, value]) => ([normalize_id(key), value])))

export type tool = {
  fn: (input: string, options?: any) => string
  args: arg[]
  render_input?: Function
  render_output?: Function
}

export type arg = {
  name: string
  id?: string // = name to lower case rp space w underscore
  type: type
  variant?: string // how it should be rendered (e.g. checkbox or slider for bool?)
  value: any // = default value
  default_value?: any
}

export const tools: tool[] = [
  {

  }
]
