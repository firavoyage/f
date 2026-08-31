import { use_bind } from "web/lib/keyboard.use"

import { use_global } from "web/component/app"

type SidebarProps = {
  variant?: 'push' | 'overlay'
  children?: any
}

export function Sidebar({ variant, children }: SidebarProps) {
  variant ??= 'push'

  const [on, toggle] = use_global('appearance.layout.sidebar.is visible')

  // use_bind('ctrl+b', toggle)

  return (
    <>
      <aside {...p({ class: 'sidebar', visible: on, variant })}>
        {children}
      </aside>
      <div className="backdrop" {...p({ onClick: toggle })}></div>
    </>
  );
}
