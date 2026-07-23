import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'yaml';
import 'css.escape'

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

function main(convert: (input_str: string) => string, ext = '.css'): void {
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
        ext
      });

      fs.writeFileSync(yaml_path, converted_content, 'utf-8');
    } catch (error_obj) {
      console.error(`Failed processing ${file_path}:`, error_obj);
    }
  }
}

function is_match(obj: Record<string, any>, arr: string[]): boolean {
  const keys = Object.keys(obj);

  if (keys.length !== arr.length) {
    return false;
  }

  const arr_set = new Set(arr);

  for (const key of keys) {
    if (!arr_set.has(key)) {
      return false;
    }

    const val = obj[key];
    if (typeof val === 'object' && val !== null) {
      return false;
    }
  }

  return true;
}

function convert(design_yaml: string) {
  const design = parse(design_yaml)

  const { modes, ...tokens_obj } = design

  type tokens = Record<string, string>

  const contexts: Record<string, {
    type: string
    is_default: boolean,
    tokens: tokens
  }> & Record<'root', {
    type: string
    is_default: boolean,
    tokens: tokens
  }> = {
    root: {
      type: 'root',
      is_default: true,
      tokens: {}
    }
  }

  for (const [type, variants] of Object.entries(modes)) {
    for (const variant of variants) {
      contexts[variant] = {
        type,
        is_default: false,
        tokens: {}
      }
    }
    contexts[variants[0]].is_default = true
  }

  // you wont reference a contextual token. no comp layer.
  const map = flatten(tokens_obj)

  const tokens = flatten(tokens_obj, {
    separator: '-', preserve(value, key) {
      for (const mode of Object.values(modes)) {
        if (is_match(value, mode)) {
          return true
        }
      }
      return false
    }
  })

  function set(variant: string, variable: string, value: string) {
    if (has(map, value)) {
      contexts[variant].tokens[variable] = `var(--${value.replaceAll('.', '-')})`
    } else {
      contexts[variant].tokens[variable] = value
    }
  }

  for (const [token, value] of Object.entries(tokens)) {
    const variable = `--${token}`

    if (typeof value == 'object') {
      for (const [variant, contextual_value] of Object.entries(value)) {
        set(variant, variable, contextual_value)
      }
    } else {
      set('root', variable, value)
    }
  }

  function convert_tokens_to_css(tokens: tokens) {
    let css = ''

    for (const [prop, value] of Object.entries(tokens)) {
      css += `  ${CSS.escape(prop)}: ${value};\n`
    }

    return css
  }

  let css = ''

  for (const [variant, { type, is_default, tokens }] of Object.entries(contexts)) {
    if (Object.keys(tokens).length == 0) {
      continue
    }

    if (variant == 'root') {
      css += `:root {\n${convert_tokens_to_css(tokens)}}\n`

      continue
    }

    // be flexible, no data- prefix required
    const selector = `${is_default ? ':root, ' : ''}[data-${type}="${variant}"], [${type}="${variant}"]`

    css += `${selector} {\n${convert_tokens_to_css(tokens)}}\n`
  }

  return css
}

main(convert)
