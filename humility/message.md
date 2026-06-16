type vnode = {
  tag: string | Function,
  props: object,
  children: Array<vnode>
  dispose: undefined | Set<Function>
} | string

function diff(old_vnode, new_vnode, container) {
  if (!old_vnode) {
    container.appendChild(create_node(new_vnode))
    return
  }

  
}