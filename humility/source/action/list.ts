import { parse } from 'yaml';
import { get } from 'backend/store';

export async function list() {
  const threads = await get('thread.list')
  if(is_error(threads)){
    return threads
  } 

  return parse(threads)
}