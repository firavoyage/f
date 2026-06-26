import { parse, stringify } from 'yaml';
import { get, set } from 'backend/store';

export const no_focused_item = 'no focused item'
// export const no_focused_item = Symbol('no focused item')

type key = string
type id = PropertyKey
// type id = number

export async function init(tree: key) {
  const tree_array = [{ value: 'root' }]

  return await set(tree, stringify(tree_array))
}

export async function append(tree: key, child: id) {
  const tree_content = await get(tree)

  if (is_error(tree_content)) {
    return tree_content
  }

  const tree_array = parse(tree_content)

  // get the first item, traverse focus path to leave
  let leaf = tree_array[0]
  while (has(leaf, 'focus')) {
    leaf = tree_array[leaf.focus]
  }

  leaf.children = [tree_array.length]
  leaf.focus = tree_array.length

  tree_array.push({ value: child })

  // serialize and set back
  return await set(tree, stringify(tree_array))
}

export async function edit(tree: key, index: number, child: id) {
  const tree_content = await get(tree)

  if (is_error(tree_content)) {
    return tree_content
  }

  const tree_array = parse(tree_content)

  const node = tree_array[index]

  // it must exist or you could not edit
  node.children.push(tree_array.length)
  node.focus = tree_array.length

  tree_array.push({ value: child })

  // serialize and set back
  return await set(tree, stringify(tree_array))
}

// new children can be anything
export async function rearrange(tree: key, index: number, new_children: id[], new_focus?: id) {

  const tree_content = await get(tree)

  if (is_error(tree_content)) {
    return tree_content
  }

  const tree_array = parse(tree_content)

  const node = tree_array[index]

  node.children = new_children
  node.focus ??= new_focus

  if (!new_children.includes(node.focus)) {
    // err? yes. explicit > implicit

    return err(no_focused_item)
  }

  // serialize and set back
  return await set(tree, stringify(tree_array))
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
  const tree_content = await get(tree)

  if (is_error(tree_content)) {
    return tree_content
  }

  const tree_array = parse(tree_content)

  // get the first item, traverse focus path to leave
  const node = tree_array[index]
  node.focus = new_focus

  if (!node.children.includes(node.focus)) {
    // err? yes. explicit > implicit

    return err(no_focused_item)
  }

  // serialize and set back
  return await set(tree, stringify(tree_array))
}

export async function read(tree: key) {
  const tree_content = await get(tree)

  if (is_error(tree_content)) {
    return tree_content
  }

  const tree_array = parse(tree_content)

  return tree_array
}

export async function traverse(tree_array) {
  
}
