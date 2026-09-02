import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'yaml';
import 'css.escape'

type flatten = {
  separator?: string;
  preserve?: (value: any, key: string) => boolean;
};

function flatten(obj: Map<string, any>, options: flatten = {}) {
  const { separator = ".", preserve = () => false } = options;
  const result = new Map();

  function traverse(item: Map<any, any>, prefix: string = ""): void {
    for (const [key] of item) {
      const value = item.get(key);
      const path = prefix ? `${prefix}${separator}${key}` : key;

      if (value instanceof Map && !preserve(value, key)) {
        traverse(value, path);
      } else {
        result.set(path, value);
      }
    }
  }

  traverse(obj);
  return result;
}

/**
 * Read file inputs and write outputs to disk
 */
function main(convert: (input_str: string) => string, ext = '.css'): void {
  const file_set = new Set<string>();

  // Gather files from shell arguments
  const shell_args = process.argv.slice(2);
  for (const arg_path of shell_args) {
    file_set.add(path.resolve(arg_path));
  }

  // Gather files from stdin using sync buffer reading
  if (!process.stdin.isTTY) {
    const buffer_size = 65536;
    const chunk_buffer = Buffer.alloc(buffer_size);
    let total_input = '';
    let bytes_read;

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
  }

  // Process each unique file path synchronously
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

function convert(design_yaml: string) {
  const design: Map<string, any> = parse(design_yaml, { mapAsMap: true })

  if (!(design instanceof Map)) {
    return ''
  }

  const modes: Map<string, string[]> = design.get('modes') ?? new Map()
  const nested_tokens = (design.delete('modes'), design)

  type tokens = Map<string, token | contextual_token>
  type token = string | number
  type contextual_token = Map<string, string | number>

  const root = Symbol('root')

  type variants = {
    mode: string
    is_default: boolean,
    tokens: tokens
  }
  const variants: Record<string, variants> & Record<typeof root, variants> = {
    [root]: {
      mode: 'root',
      is_default: true,
      tokens: new Map()
    }
  }

  for (const [mode, current_variants] of modes) {
    for (const variant of current_variants) {
      variants[variant] = {
        mode: mode,
        is_default: false,
        tokens: new Map()
      }
    }
    variants[current_variants[0]].is_default = true
  }

  function preserve(value: any) {
    function does_match(value: Map<string, any>, mode: string[]): boolean {
      if (!(value instanceof Map)) {
        return false
      }

      const keys = Array.from(value.keys());
      // const keys = Object.keys(value);

      const can_be_subset = true
      if (keys.length !== mode.length && !can_be_subset) {
        return false;
      }

      for (const key of keys) {
        if (!mode.includes(key)) {
          return false;
        }

        const val = value.get(key);
        // const val = value[key];
        if (val instanceof Map) {
          // if (typeof val === 'object' && val !== null) {
          return false;
        }
      }

      return true;
    }

    for (const [, mode] of modes) {
      // for (const mode of Object.values(modes)) {
      if (does_match(value, mode)) {
        return true
      }
    }
    return false
  }

  const map = flatten(nested_tokens, { preserve })

  const tokens: tokens = flatten(nested_tokens, {
    separator: '-', preserve
  })

  function convert_dot(variable: string): string {
    return variable.replace(/(?<=\d)\.(?=\d)|(\.)/g, (match, p1) => {
      return p1 ? "-" : ".";
    });
  }

  function set(variant: string, variable: string, value: any) {
    // function set(variant: string, variable: string, value: string | number) {
    if (typeof value == 'string') {
      // handle "bold text.lg typeface.serif"
      for (const part of value.split(' ')) {
        if (has(map, part)) {
          value = value.replaceAll(part, `var(--${CSS.escape(convert_dot(part))})`)
        }
      }
    }

    variants[variant].tokens.set(convert_dot(variable), value)
    // contexts[variant].tokens[variable] = value

    // if (has(map, value)) {
    //   contexts[variant].tokens[variable] = `var(--${value.replaceAll('.', '-')})`
    // } else {
    //   contexts[variant].tokens[variable] = value
    // }
  }

  for (const [token, value] of tokens) {
    const variable = `--${token}`

    if (value instanceof Map) {
      // if (typeof value == 'object') {
      for (const [variant, contextual_value] of value) {
        // for (const [variant, contextual_value] of Object.entries(value)) {
        set(variant, variable, contextual_value)
      }
    } else {
      set('root', variable, value)
    }
  }

  function convert_tokens_to_css(tokens: tokens) {
    let css = ''

    for (const [prop, value] of tokens) {
      // for (const [prop, value] of Object.entries(tokens)) {
      css += `  ${CSS.escape(prop)}: ${value};\n`
    }

    return css
  }

  let css = ''

  function append(selector: string, tokens: tokens) {
    css += `${selector} {\n${convert_tokens_to_css(tokens)}}\n\n`
  }

  for (const [variant, { mode: type, is_default, tokens }] of Object.entries(variants)) {
    if (tokens.size == 0) {
      // if (Object.keys(tokens).length == 0) {
      continue
    }

    if (variant == 'root') {
      append(':root', tokens)
      continue
    }

    // be flexible, no data- prefix required
    const selector = `${is_default ? ':root, ' : ''}[${type}="${variant}"], [data-${type}="${variant}"]`

    append(selector, tokens)
  }

  return css
}

main(convert)
