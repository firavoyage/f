import { use_bind } from "web/lib/use keyboard"

import { use_global } from "web/component/app"

type sidebar = {
  variant?: 'push' | 'overlay'
  children?: any
}

export function Sidebar(props: sidebar) {
  const { variant = 'push', children } = props

  const [open, toggle] = use_global('appearance.layout.sidebar.is visible')

  // use_bind('ctrl+b', toggle)

  return (
    <>
      <aside {...p({ class: 'sidebar', open, variant })}>
        {children}
      </aside>
      {
        variant == 'overlay' &&
        // variant == 'overlay' && on &&
        <div className="sidebar_backdrop" {...p({ onClick: toggle })}></div>
      }
    </>
  );
}
