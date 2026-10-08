type cli = {
  name: string
  version: string
  description: string

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
