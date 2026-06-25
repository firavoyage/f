import { data, write, read } from 'lib/file';

// todo: ensure valid key
export async function get(key: string, value: string) {
  await write(data(key), value)
}


