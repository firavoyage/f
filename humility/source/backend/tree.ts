import yaml from 'yaml';
import { get, set } from 'backend/store';

type key = string
type id = number // or uuid

export async function append(tree: key, child: id) {
  const tree_content = get(tree)

  if(is_error(tree_content)){
    
    
    return
  } 
}