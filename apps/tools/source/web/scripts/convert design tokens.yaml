import * as fs from 'fs';
import * as path from 'path';

type InputObject = Record<string, any>;
type FlattenOptions = {
  separator?: string;
  preserve?: (value: any, key: string) => boolean;
};

function flatten(obj: InputObject, options: FlattenOptions = {}): InputObject {
  const { separator = ".", preserve } = options;
  const result: InputObject = {};

  function recurse(current_item: any, current_prefix: string): void {
    for (const key in current_item) {
      if (!Object.prototype.hasOwnProperty.call(current_item, key)) continue;

      const value = current_item[key];
      const new_key = current_prefix ? `${current_prefix}${separator}${key}` : key;

      if (preserve && preserve(value, key)) {
        result[new_key] = value;
        continue;
      }

      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        recurse(value, new_key);
      } else {
        result[new_key] = value;
      }
    }
  }

  recurse(obj, "");
  return result;
}

function main(
  convert: (input_str: string) => string
): void {
  const file_set = new Set<string>();

  // 1. Gather files from shell arguments
  const shell_args = process.argv.slice(2);
  for (const arg_path of shell_args) {
    file_set.add(path.resolve(arg_path));
  }

  // 2. Gather files from stdin using sync buffer reading
  if (!process.stdin.isTTY) {
    try {
      const buffer_size = 65536;
      const chunk_buffer = Buffer.alloc(buffer_size);
      let total_input = '';
      let bytes_read = 0;

      // Loop synchronously through stdin descriptor 0
      while ((bytes_read = fs.readSync(0, chunk_buffer, 0, buffer_size, null)) > 0) {
        total_input += chunk_buffer.toString('utf-8', 0, bytes_read);
      }

      const input_lines = total_input.split(/\r?\n/);
      for (const line of input_lines) {
        const trimmed_line = line.trim();
        if (trimmed_line) {
          file_set.add(path.resolve(trimmed_line));
        }
      }
    } catch (error_obj) {
      // Handle cases where stdin is closed or unavailable
      if ((error_obj as any).code !== 'EAGAIN' && (error_obj as any).code !== 'EOF') {
        throw error_obj;
      }
    }
  }

  log(file_set)

  // 3. Process each unique file path synchronously
  for (const file_path of file_set) {
    try {
      const file_stat = fs.statSync(file_path, { throwIfNoEntry: false });
      if (!file_stat || !file_stat.isFile()) {
        continue;
      }

      const raw_content = fs.readFileSync(file_path, 'utf-8');
      const converted_content = convert(raw_content);

      const parsed_path = path.parse(file_path);
      const yaml_path = path.format({
        dir: parsed_path.dir,
        name: parsed_path.name,
        ext: '.yaml'
      });

      fs.writeFileSync(yaml_path, converted_content, 'utf-8');
    } catch (error_obj) {
      console.error(`Failed processing ${file_path}:`, error_obj);
    }
  }
}

function convert(design: string) {
  return design
}

main(convert)

