import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'yaml';
import 'css.escape'

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

/**
 * Convert design token yaml to css
 */
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
  type variant = string | typeof root

  const variants: Map<variant, variants> = new Map(entries({
    [root]: {
      mode: 'root',
      is_default: true,
      tokens: new Map()
    }
  }))

  for (const [mode, current_variants] of modes) {
    for (const [index, variant] of entries(current_variants)) {
      variants.set(variant, {
        mode,
        is_default: index == 0,
        tokens: new Map()
      })
    }
  }

  function preserve(value: any) {
    /**
     * value is a contextual token if
     * its keys represent (a subset of) the variants of a mode 
     * and all values are primitive
     */
    function is_contextual(value: Map<string, any>, variants: string[]): boolean {
      const can_be_subset = true
      if (value.size != variants.length && !can_be_subset) {
        return false;
      }

      for (const [k, v] of value) {
        if (!has(variants, k) || v instanceof Map) {
          return false;
        }
      }

      return true;
    }

    for (const [, variants] of modes) {
      if (value instanceof Map && is_contextual(value, variants)) {
        return true
      }
    }
    return false
  }

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

  const tokens: tokens = flatten(nested_tokens, { preserve })

  /**
   * Convert dots to dashes unless surrounded by numbers (i.e. float point)
   */
  function convert_dot(variable: string) {
    return variable.replace(/(?<=\d)\.(?=\d)|(\.)/g, (match, p1) => {
      return p1 ? "-" : ".";
    });
  }

  function css_variable(variable: string) {
    return `--${CSS.escape(convert_dot(variable))}`
  }

  function set(variant: variant, variable: string, value: string | number) {
    if (typeof value == 'string') {
      // handle "bold text.lg typeface.serif"
      for (const part of value.split(' ')) {
        if (has(tokens, part)) {
          value = value.replaceAll(part, `var(${css_variable(part)})`)
        }
      }
    }

    // @ts-expect-error narrowed when called
    variants.get(variant).tokens.set(variable, value)
  }

  for (const [token, value] of tokens) {
    const variable = css_variable(token)

    if (value instanceof Map) {
      // contextual token
      for (const [variant, contextual_value] of value) {
        set(variant, variable, contextual_value)
      }
    } else {
      // raw token
      set(root, variable, value)
    }
  }

  function convert_tokens_to_css(tokens: tokens) {
    return map(tokens, ([prop, value]) => `  ${prop}: ${value};`).join('\n') + '\n'
  }

  let css = ''

  for (const [variant, { mode, is_default, tokens }] of variants) {
    // omit empty ruleset
    if (tokens.size == 0) {
      continue
    }

    function append_css(selector: string, tokens: tokens) {
      css += `${selector} {\n${convert_tokens_to_css(tokens)}}\n\n`
    }

    if (variant == root) {
      append_css(':root', tokens)
    } else {
      // be flexible, no data- prefix required
      const selector = `${is_default ? ':root, ' : ''}[${mode}="${variant}"], [data-${mode}="${variant}"]`

      append_css(selector, tokens)
    }
  }

  return css
}

main(convert)
