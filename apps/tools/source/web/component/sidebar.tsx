import { use_bind } from "web/lib/keyboard.use"
import { use_global } from "./app"

type SidebarProps = {
  variant?: 'push' | 'overlay'
  children?: any
}

export function Sidebar({ variant, children }: SidebarProps) {
  variant ??= 'push'

  const [on, toggle] = to_toggle(use_global('is_sidebar_on'))

  use_bind('ctrl+b', toggle)

  return (
    <>
      <aside {...p({ class: 'sidebar', visible: on, variant })}>
        {children}
      </aside>
      <div {...p({ class: "backdrop", onclick: toggle })}></div>
    </>
  );
}
