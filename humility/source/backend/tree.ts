import { get, set } from 'backend/store';

export const no_focused_item = 'no focused item'
// export const no_focused_item = Symbol('no focused item')

declare global {
  type key = string // store, e.g. thread.1
  type id = string | number // nodeid, e.g. node.[nodeid]
}
// type id = number

export async function init(tree: key) {
  const tree_array = [{ value: 'root' }]

  return await set(tree, tree_array)
}

export async function append(tree: key, child: id) {
  const tree_array = await get(tree, { must_exist: true })

  // get the first item, traverse focus path to leave
  let leaf = tree_array[0]
  while (has(leaf, 'focus')) {
    leaf = tree_array[leaf.focus]
  }

  leaf.children = [tree_array.length]
  leaf.focus = tree_array.length

  tree_array.push({ value: child })

  // serialize and set back
  return await set(tree, tree_array)
}

export async function edit(tree: key, index: number, child: id) {
  const tree_array = await get(tree)

  const node = tree_array[index]

  // it must exist or you could not edit
  node.children.push(tree_array.length)
  node.focus = tree_array.length

  tree_array.push({ value: child })

  // serialize and set back
  return await set(tree, tree_array)
}

// new children can be anything
export async function rearrange(tree: key, index: number, new_children: id[], new_focus?: id) {
  const tree_array = await get(tree)

  const node = tree_array[index]

  node.children = new_children
  node.focus ??= new_focus

  if (!new_children.includes(node.focus)) {
    // err? yes. explicit > implicit

    throw err(no_focused_item)
  }

  // serialize and set back
  return await set(tree, tree_array)
}

/**
 * you can either
 * 
 * - shift focus, refresh (new tree, fetch nodes needed if not cached)
 * - shift focus on frontend, sync (best effort, keep in localstorage to retry if not changed again later)
 * 
 * keep it simple. you can optimize later.
 */
export async function focus(tree: key, index: number, new_focus: number) {
  const tree_array = await get(tree)

  const node = tree_array[index]
  node.focus = new_focus

  if (!node.children.includes(node.focus)) {
    // err? yes. explicit > implicit

    throw err(no_focused_item)
  }

  // serialize and set back
  return await set(tree, tree_array)
}

export async function read(tree: key) {
  return await get(tree)
}

export function traverse(tree_array: any[]) {
  const focused = []

  let node = tree_array[0]
  focused.push(node)
  while (has(node, 'focus')) {
    node = tree_array[node.focus]
    focused.push(node)
  }

  return focused
}
