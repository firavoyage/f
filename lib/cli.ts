type cli = {
  name: string
  version: string
  description: string
  usage: Record<string, string>
  commands?: command[]
  options?: option[]
  tip?: string
}

type command = {
  command: string
  description: string
  fn: fn
  args?: arg[]
  options?: option[]
}

type arg = {
  name: string
  type?: fn
  is_rest?: boolean
}

type option = {
  name: string
  type?: 'boolean' | fn // = string? or boolean?
}

/**
- name
- version
- description
- usage
  - ""
  - "<name>"
  - "<command>" <!-- resolves top to bottom (well... what if you list differently for ux. fine, have an explicit priority instead) -->
  - "[flag]"
- priority?: usage[]
- commands
- options
- tip
 */

export function evaluate(cli: cli, args?: any) {
  
}

// export function parse(cli: cli, args?: any) {
  
// }

/**
 * parse (multiple layer),
 * 
 * help options
 */

type help = {
  // desc gap in spaces
  description_gap: number
  align: 'all' | 'heading' | 'off'
}
