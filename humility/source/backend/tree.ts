import { parse, stringify } from 'yaml';
import { get, set } from 'backend/store';

type key = string
type id = number // or uuid

export async function init(tree: key) {
  const tree_array = [{value: 'root'}]

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
  await set(tree, stringify(tree_array))
}

