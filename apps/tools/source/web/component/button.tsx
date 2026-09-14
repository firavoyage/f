import { Tooltip } from "./tooltip"

type button = {
  onClick: fn
  className?
  tooltip?
  focusable?: boolean
  children?
}

export function Button(props: button) {
  const { className = '',
    tooltip,
    focusable = true,
    ...rest_props } = p(props)

  // prevent undefined ref when passed to multiple
  // const [ref, set_ref] = useState()
  const ref = useRef()

  if (is_given(tooltip)) {
    return (
      <>
        <button {...p({ class: ['button', className], ref, ...rest_props })}
        // <button {...p({ class: ['button', className], ref: set_ref, ...rest_props })}
          {...p(!focusable && { tabIndex: -1 })}></button>
        <Tooltip {...p({ tooltip, ref })}></Tooltip>
        {/* <Tooltip {...p({ tooltip, ref: { current: ref } })}></Tooltip> */}
      </>
    )
  } else {
    return (
      <>
        <button {...p({ class: ['button', className], ...rest_props })}
          {...p(!focusable && { tabIndex: -1 })}></button>
      </>
    )
  }
}

// type button = {
//   onClick: fn
//   children: any
// }

// export function Button(props: button) {
//   // @ts-expect-error 
//   const { className = '', children, ...rest_props } = p(props)

//   return (
//     <button {...p({ class: ['button', className], ...rest_props })}>
//       {children}
//     </button>
//   )
// }

