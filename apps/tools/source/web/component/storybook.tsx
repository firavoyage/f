// type name = string
// type label = string

import { Button } from "./button"
import { Sidebar } from "./sidebar"

type component = fn | {
  fn: fn
  props: props
  variants: Record<string, props>
}

type props = Record<string, prop>

export type prop = {
  name: string
  id?: string // = normalize id name
  type: type // how it should be rendered, not typeof value
  value: any
  options?: options // for select/radio
  placeholder?: string // for select/input/textarea
}

export type options = Record<string, string> | string[]

type type = 'checkbox' | 'switch' | 'select' | 'radio' | 'number' | 'input' | 'textarea'

type storybook = {
  storybook: Record<string, component>
}

export function Storybook({ storybook }: storybook) {
  /**
   * sidebar (bind ctrl b)
   *   list (taxonomy for variants, select first instead of expand when click)
   * main
   *   comp
   *   props?
   * 
   * search/command palette ctrl (shift) p
   * 
   * research storybook
   */

  const [component, set_component] = useState()

  const Tag = storybook[component]

  return (
    <>
      <div className="app storybook">
        <Sidebar>
          {
            map(storybook, ([component]) => (
              <Button {...p({ onClick() { set_component(component) } })}>
                {component}
              </Button>
            ))
          }
        </Sidebar>
        <div className="main demo" {...p({
          style: {
            display: 'block',
            // width: '100px',
            // height: '100px'
          }
        })}>
          {
            Tag &&
            <Tag></Tag>
          }
        </div>
      </div>
    </>
  )
}
