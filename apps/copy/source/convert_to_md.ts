import { NodeHtmlMarkdown } from 'node-html-markdown';

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
};

const markdown_converter = new NodeHtmlMarkdown({
  codeBlockStyle: 'fenced',
  codeFence: '```',
  maxConsecutiveNewlines: 3,
});

export function convert_html_to_md({ html, preserve_svg }: convert_options): string {
  console.log({
    action: 'convert_html_to_md_start',
    html_length: html.length,
    preserve_svg,
  });

  const prepared = prepare_html({ html, preserve_svg });

  const markdown = markdown_converter.translate(prepared.html);

  const restored = restore_tokens({
    markdown,
    token_entries: prepared.token_entries,
  });

  const normalized = normalize_markdown({ markdown: restored });

  console.log({
    action: 'convert_html_to_md_done',
    prepared_length: prepared.html.length,
    markdown_length: normalized.length,
    token_count: prepared.token_entries.length,
  });

  return normalized;
}

function prepare_html({ html, preserve_svg }: convert_options): prepared_html {
  const parser = new DOMParser();
  const document_node = parser.parseFromString(html, 'text/html');
  const body_node = document_node.body;

  const state: token_state = {
    next_token_index: 0,
    token_entries: [],
  };

  const selector = preserve_svg
    ? 'pre, code, mark, svg, summary, details'
    : 'pre, code, mark, summary, details';

  const nodes = Array.from(body_node.querySelectorAll(selector));

  for (const node of nodes) {
    if (!node.isConnected) continue;

    const tag = node.tagName.toLowerCase();

    if (tag == 'pre') {
      replace_pre({ element: node as HTMLPreElement, state });
      continue;
    }

    if (tag == 'code') {
      replace_inline_code({ element: node as HTMLElement, state });
      continue;
    }

    if (tag == 'svg' && preserve_svg != true) {
      node.replaceWith(document.createTextNode(''));
      continue;
    }

    replace_raw({
      element: node,
      state,
      is_block: tag == 'svg' || tag == 'details',
    });
  }

  return {
    html: body_node.innerHTML,
    token_entries: state.token_entries,
  };
}

function replace_pre({
  element,
  state,
}: {
  element: HTMLPreElement;
  state: token_state;
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
  });
}

/**
 * 🔥 CORE FIX
 * Properly extract multiline text from messy editor HTML
 */
function extract_pre_text({ element }: { element: HTMLElement }): string {
  const clone = element.cloneNode(true) as HTMLElement;

  // convert <br> → \n
  const brs = clone.querySelectorAll('br');
  for (const br of brs) {
    br.replaceWith('\n');
  }

  // add newline after block elements
  const blocks = clone.querySelectorAll('div, p');
  for (const block of blocks) {
    if (block.textContent && block.textContent.length > 0) {
      block.append('\n');
    }
  }

  const text = clone.textContent || '';

  const normalized = text.replace(/\r\n/g, '\n');

  return trim_outer_newlines({ text: normalized });
}

function replace_inline_code({
  element,
  state,
}: {
  element: HTMLElement;
  state: token_state;
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
  });
}

function replace_raw({
  element,
  state,
  is_block,
}: {
  element: Element;
  state: token_state;
  is_block: boolean;
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
  });
}

function replace_with_token({
  element,
  token,
  is_block,
}: {
  element: Element;
  token: string;
  is_block: boolean;
}): void {
  if (is_block) {
    element.replaceWith(document.createTextNode(`\n\n${token}\n\n`));
    return;
  }

  element.replaceWith(document.createTextNode(token));
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
  const clean = trim_outer_newlines({ text });
  const len = get_longest_backtick_run({ text: clean }) + 1;
  const fence = '`'.repeat(len);

  const padded =
    clean.startsWith(' ') || clean.endsWith(' ') || len > 1
      ? ` ${clean} `
      : clean;

  return `${fence}${padded}${fence}`;
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