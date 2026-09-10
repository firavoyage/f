import { use_bind } from "web/lib/use keyboard"

import { use_global } from "web/component/app"

type sidebar = {
  variant?: 'push' | 'overlay'
  children?: any
}

export function Sidebar(props: sidebar) {
  const { variant = 'overlay', children } = props

  const [on, toggle] = use_global('appearance.layout.sidebar.is visible')

  // use_bind('ctrl+b', toggle)

  return (
    <>
      <aside {...p({ class: 'sidebar', visible: on, variant })}>
        {children}
      </aside>
      {
        // variant == 'overlay' &&
        variant == 'overlay' && on &&
        <div className="backdrop" {...p({ onClick: toggle })}></div>
      }
    </>
  );
}
