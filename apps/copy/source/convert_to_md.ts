import { NodeHtmlMarkdown } from 'node-html-markdown';
import * as prettier from 'prettier/standalone';
import * as prettier_plugin_markdown from 'prettier/plugins/markdown';
import { process_ast } from './process_ast';

type token_entry = {
  token: string;
  value: string;
};

type prepared_html = {
  html: string;
  token_entries: token_entry[];
};

type token_state = {
  next_token_index: number;
  token_entries: token_entry[];
};

type convert_options = {
  html: string;
  preserve_svg: boolean;
  keep_images: boolean;
  normalize_empty_links: boolean;
  prettier: boolean;
};

type span_style_traits = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
};

type semantic_inline_tag_name = 'strong' | 'em' | 'del';

const markdown_converter = new NodeHtmlMarkdown({
  codeBlockStyle: 'fenced',
  codeFence: '```',
  maxConsecutiveNewlines: 3,
});

export async function convert_html_to_md({
  html,
  preserve_svg,
  keep_images,
  normalize_empty_links,
  prettier: prettier_enabled,
}: convert_options): Promise<string> {
  console.log({
    action: 'convert_html_to_md_start',
    html_length: html.length,
    preserve_svg,
    keep_images,
    normalize_empty_links,
    prettier_enabled,
  });

  const prepared = prepare_html({
    html,
    preserve_svg,
  });

  const translated = markdown_converter.translate(prepared.html);

  const restored = restore_tokens({
    markdown: translated,
    token_entries: prepared.token_entries,
  });

  let markdown = restored;

  if (should_process_ast({
    keep_images,
    normalize_empty_links,
  })) {
    markdown = process_ast({
      markdown,
      keep_images,
      normalize_empty_links,
    });
  } else {
    console.log({
      action: 'skip_process_ast',
      keep_images,
      normalize_empty_links,
    });
  }

  if (prettier_enabled == true) {
    console.log({
      action: 'prettier_format_start',
    });

    markdown = await prettier.format(markdown, {
      parser: 'markdown',
      plugins: [prettier_plugin_markdown],
    });

    console.log({
      action: 'prettier_format_done',
      length: markdown.length,
    });
  }

  const normalized = normalize_markdown({ markdown });

  console.log({
    action: 'convert_html_to_md_done',
    prepared_length: prepared.html.length,
    markdown_length: normalized.length,
    token_count: prepared.token_entries.length,
  });

  return normalized;
}

function should_process_ast({
  keep_images,
  normalize_empty_links,
}: {
  keep_images: boolean;
  normalize_empty_links: boolean;
}): boolean {
  return keep_images != true || normalize_empty_links == true;
}

function prepare_html({
  html,
  preserve_svg,
}: {
  html: string;
  preserve_svg: boolean;
}): prepared_html {
  const parser = new DOMParser();
  const document_node = parser.parseFromString(html, 'text/html');
  const body_node = document_node.body;

  const state: token_state = {
    next_token_index: 0,
    token_entries: [],
  };

  console.log({
    action: 'normalize_style_spans_start',
  });

  normalize_style_spans({
    root: body_node,
    document_node,
  });

  const selector = preserve_svg
    ? 'pre, code, mark, svg, summary, details'
    : 'pre, code, mark, summary, details';

  const nodes = Array.from(body_node.querySelectorAll(selector));

  for (const node of nodes) {
    if (!node.isConnected) continue;

    const tag = node.tagName.toLowerCase();

    if (tag == 'pre') {
      replace_pre({
        element: node as HTMLPreElement,
        state,
        document_node,
      });

      continue;
    }

    if (tag == 'code') {
      replace_inline_code({
        element: node as HTMLElement,
        state,
        document_node,
      });

      continue;
    }

    if (tag == 'svg' && preserve_svg != true) {
      node.replaceWith(document_node.createTextNode(''));
      continue;
    }

    replace_raw({
      element: node,
      state,
      document_node,
      is_block: tag == 'svg' || tag == 'details',
    });
  }

  preserve_whitespace({
    root: body_node,
    document_node,
  });

  return {
    html: body_node.innerHTML,
    token_entries: state.token_entries,
  };
}

function normalize_style_spans({
  root,
  document_node,
}: {
  root: HTMLElement;
  document_node: Document;
}): void {
  const spans = Array.from(root.querySelectorAll('span[style]'));
  let transformed_span_count = 0;

  for (const span of spans) {
    if (!span.isConnected) continue;

    if (is_inside_code_like_element({ element: span })) {
      continue;
    }

    const traits = read_span_style_traits({ element: span });

    if (
      traits.bold != true &&
      traits.italic != true &&
      traits.strikethrough != true
    ) {
      continue;
    }

    transformed_span_count += 1;

    console.log({
      action: 'normalize_style_span',
      bold: traits.bold,
      italic: traits.italic,
      strikethrough: traits.strikethrough,
    });

    const replacement = build_semantic_inline_node({
      element: span,
      document_node,
      traits,
    });

    span.replaceWith(replacement);
  }

  console.log({
    action: 'normalize_style_spans_done',
    transformed_span_count,
  });
}

/**
 * preserve whitespace like `white-space: pre`
 * skip pre/code (already tokenized)
 */
function preserve_whitespace({
  root,
  document_node,
}: {
  root: HTMLElement;
  document_node: Document;
}): void {
  const walker = document_node.createTreeWalker(root, NodeFilter.SHOW_TEXT);

  const nodes: Text[] = [];

  let current = walker.nextNode();
  while (current != null) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }

  for (const node of nodes) {
    const parent = node.parentElement;
    if (parent == null) continue;

    const tag = parent.tagName.toLowerCase();

    if (tag == 'pre' || tag == 'code') continue;

    const text = node.nodeValue || '';

    if (text.trim().length == 0) continue;

    const replaced = text
      .replaceAll(' ', '\u00A0')
      .replaceAll('\n', '<br>');

    const span = document_node.createElement('span');
    span.innerHTML = replaced;

    node.replaceWith(span);
  }
}

/**
 * extract real multiline text from messy editor HTML
 */
function extract_pre_text({ element }: { element: HTMLElement }): string {
  const clone = element.cloneNode(true) as HTMLElement;

  const brs = clone.querySelectorAll('br');
  for (const br of brs) {
    br.replaceWith('\n');
  }

  const blocks = clone.querySelectorAll('div, p');
  for (const block of blocks) {
    if (block.childNodes.length > 0) {
      block.append('\n');
    }
  }

  unwrap_redundant_divs({ root: clone });

  const text = clone.textContent || '';
  const normalized = text.replace(/\r\n/g, '\n');

  return trim_outer_newlines({ text: normalized });
}

function unwrap_redundant_divs({ root }: { root: HTMLElement }): void {
  const divs = Array.from(root.querySelectorAll('div'));

  for (const div of divs) {
    if (div.childElementCount == 1) {
      const child = div.firstElementChild;

      if (child && child.tagName.toLowerCase() == 'div') {
        div.replaceWith(child);
      }
    }
  }
}

function replace_pre({
  element,
  state,
  document_node,
}: {
  element: HTMLPreElement;
  state: token_state;
  document_node: Document;
}): void {
  const token = make_token({
    kind: 'block',
    index: state.next_token_index,
  });

  state.next_token_index += 1;

  const text = extract_pre_text({ element });

  const markdown = build_code_block({
    text,
    element,
  });

  state.token_entries.push({
    token,
    value: ensure_block_spacing({ text: markdown }),
  });

  replace_with_token({
    element,
    token,
    is_block: true,
    document_node,
  });
}

function replace_inline_code({
  element,
  state,
  document_node,
}: {
  element: HTMLElement;
  state: token_state;
  document_node: Document;
}): void {
  const token = make_token({
    kind: 'code',
    index: state.next_token_index,
  });

  state.next_token_index += 1;

  const text = element.textContent || '';
  const markdown = build_inline_code({ text });

  state.token_entries.push({
    token,
    value: markdown,
  });

  replace_with_token({
    element,
    token,
    is_block: false,
    document_node,
  });
}

function replace_raw({
  element,
  state,
  is_block,
  document_node,
}: {
  element: Element;
  state: token_state;
  is_block: boolean;
  document_node: Document;
}): void {
  const token = make_token({
    kind: 'raw',
    index: state.next_token_index,
  });

  state.next_token_index += 1;

  const value = is_block
    ? ensure_block_spacing({ text: element.outerHTML })
    : element.outerHTML;

  state.token_entries.push({
    token,
    value,
  });

  replace_with_token({
    element,
    token,
    is_block,
    document_node,
  });
}

function replace_with_token({
  element,
  token,
  is_block,
  document_node,
}: {
  element: Element;
  token: string;
  is_block: boolean;
  document_node: Document;
}): void {
  if (is_block) {
    element.replaceWith(document_node.createTextNode(`\n\n${token}\n\n`));
    return;
  }

  element.replaceWith(document_node.createTextNode(token));
}

function restore_tokens({
  markdown,
  token_entries,
}: {
  markdown: string;
  token_entries: token_entry[];
}): string {
  let out = markdown;

  for (const entry of token_entries) {
    out = out.split(entry.token).join(entry.value);
  }

  return out;
}

function normalize_markdown({ markdown }: { markdown: string }): string {
  let out = markdown.replace(/\n{3,}/g, '\n\n');
  return out.trim();
}

function ensure_block_spacing({ text }: { text: string }): string {
  let out = text;

  if (!out.startsWith('\n')) out = '\n' + out;
  if (!out.endsWith('\n')) out = out + '\n';

  return out;
}

function make_token({
  kind,
  index,
}: {
  kind: string;
  index: number;
}): string {
  return `nhm${kind}${index}z`;
}

function build_inline_code({ text }: { text: string }): string {
  const len = get_longest_backtick_run({ text }) + 1;
  const fence = '`'.repeat(len);
  return `${fence}${text}${fence}`;
}

function build_code_block({
  text,
  element,
}: {
  text: string;
  element: HTMLPreElement;
}): string {
  const code = element.querySelector('code');

  const lang = get_language({
    element: code ? code : element,
  });

  const len = Math.max(3, get_longest_backtick_run({ text }) + 1);
  const fence = '`'.repeat(len);

  if (lang.length > 0) {
    return `${fence}${lang}\n${text}\n${fence}`;
  }

  return `${fence}\n${text}\n${fence}`;
}

function get_language({ element }: { element: Element }): string {
  const class_name = element.getAttribute('class') || '';
  const match = class_name.match(/language-([^\s]+)/);

  if (match) return match[1];
  return '';
}

function trim_outer_newlines({ text }: { text: string }): string {
  let out = text;

  if (out.startsWith('\n')) out = out.slice(1);
  if (out.endsWith('\n')) out = out.slice(0, -1);

  return out;
}

function get_longest_backtick_run({ text }: { text: string }): number {
  const matches = text.match(/`+/g) || [];

  let max = 0;

  for (const m of matches) {
    if (m.length > max) max = m.length;
  }

  return max;
}

function read_span_style_traits({
  element,
}: {
  element: HTMLSpanElement;
}): span_style_traits {
  const style = read_style_text({ element });

  return {
    bold: has_bold_style({ style }),
    italic: has_italic_style({ style }),
    strikethrough: has_strikethrough_style({ style }),
  };
}

function read_style_text({ element }: { element: Element }): string {
  return (element.getAttribute('style') || '').trim();
}

function has_bold_style({ style }: { style: string }): boolean {
  const normalized = style.toLowerCase();

  if (normalized.includes('font-weight')) {
    const font_weight = read_style_property({
      style,
      property_name: 'font-weight',
    });

    if (font_weight.length > 0) {
      const compact = font_weight.toLowerCase();

      if (compact.includes('bold')) return true;
      if (compact.includes('bolder')) return true;

      const weight_match = compact.match(/\d{3,4}/);
      if (weight_match) {
        const weight = Number.parseInt(weight_match[0], 10);
        if (weight >= 600) return true;
      }
    }
  }

  const font_shorthand = read_style_property({
    style,
    property_name: 'font',
  });

  if (font_shorthand.length > 0) {
    const compact = font_shorthand.toLowerCase();

    if (compact.includes('bold')) return true;
    if (compact.includes('bolder')) return true;

    const weight_match = compact.match(/\d{3,4}/);
    if (weight_match) {
      const weight = Number.parseInt(weight_match[0], 10);
      if (weight >= 600) return true;
    }
  }

  return false;
}

function has_italic_style({ style }: { style: string }): boolean {
  const font_style = read_style_property({
    style,
    property_name: 'font-style',
  });

  if (font_style.length > 0) {
    const compact = font_style.toLowerCase();

    if (compact.includes('italic')) return true;
    if (compact.includes('oblique')) return true;
    if (compact.includes('slanted')) return true;
  }

  const font_shorthand = read_style_property({
    style,
    property_name: 'font',
  });

  if (font_shorthand.length > 0) {
    const compact = font_shorthand.toLowerCase();

    if (compact.includes('italic')) return true;
    if (compact.includes('oblique')) return true;
    if (compact.includes('slanted')) return true;
  }

  return false;
}

function has_strikethrough_style({ style }: { style: string }): boolean {
  const normalized = style.toLowerCase();

  if (normalized.includes('line-through')) return true;
  if (normalized.includes('strikethrough')) return true;
  if (normalized.includes('strike')) return true;

  return false;
}

function read_style_property({
  style,
  property_name,
}: {
  style: string;
  property_name: string;
}): string {
  const escaped_property_name = escape_reg_exp({ text: property_name });
  const pattern = new RegExp(
    `(?:^|;)\\s*${escaped_property_name}\\s*:\\s*([^;]+)`,
    'i',
  );

  const match = style.match(pattern);

  if (match) {
    return match[1].trim();
  }

  return '';
}

function escape_reg_exp({ text }: { text: string }): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function is_inside_code_like_element({
  element,
}: {
  element: HTMLSpanElement;
}): boolean {
  const nearest_code = element.closest('pre, code');
  const nearest_svg = element.closest('svg');

  if (nearest_code) return true;
  if (nearest_svg) return true;

  return false;
}

function build_semantic_inline_node({
  element,
  document_node,
  traits,
}: {
  element: HTMLSpanElement;
  document_node: Document;
  traits: span_style_traits;
}): Node {
  const fragment = document_node.createDocumentFragment();
  const child_nodes = Array.from(element.childNodes);

  for (const child_node of child_nodes) {
    fragment.append(child_node);
  }

  let current: Node = fragment;

  if (traits.strikethrough == true) {
    current = wrap_inline_node({
      document_node,
      tag_name: 'del',
      child_node: current,
    });
  }

  if (traits.italic == true) {
    current = wrap_inline_node({
      document_node,
      tag_name: 'em',
      child_node: current,
    });
  }

  if (traits.bold == true) {
    current = wrap_inline_node({
      document_node,
      tag_name: 'strong',
      child_node: current,
    });
  }

  return current;
}

function wrap_inline_node({
  document_node,
  tag_name,
  child_node,
}: {
  document_node: Document;
  tag_name: semantic_inline_tag_name;
  child_node: Node;
}): HTMLElement {
  const wrapper = document_node.createElement(tag_name);
  wrapper.append(child_node);
  return wrapper;
}