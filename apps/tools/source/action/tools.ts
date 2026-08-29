import type { arg } from 'web/component/process'
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

  

