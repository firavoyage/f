follow these:

- use:
  - ubuntu
  - zsh
  - pnpm
  - es module
  - typescript
  - parceljs
  - dont reinvent wheels, prefer modern proven tech
- naming:
  - snake case
  - verb noun for actions, predicate for bools
- style:
  - functional programming
  - modular and cohesive
  - object params
  - async if needed
  - always function statement, never arrow function (unless as props)
  - always type, never interface
  - no `undefined` or `null`
  - no `typeof` or `instanceof`.
  - no `===` `!==`, use `==` `!=` instead.
  - no `try catch` unless external libraries throw
  - no `throw`
- note:
  - add simple logging
  - give me full working code of all changed files.

---

revise convert_to_md.ts

```
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
      });

      continue;
    }

    if (tag == 'code') {
      replace_inline_code({
        element: node as HTMLElement,
        state,
      });

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

  preserve_whitespace({ root: body_node });

  return {
    html: body_node.innerHTML,
    token_entries: state.token_entries,
  };
}

/**
 * preserve whitespace like `white-space: pre`
 * skip pre/code (already tokenized)
 */
function preserve_whitespace({ root }: { root: HTMLElement }): void {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

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

    const span = document.createElement('span');
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
```

todo:

- for span with bold inline style (font weight), consider it bold
- for span with italic inline style (font weight), consider it italic
- for span with strikethrough inline style (font weight), consider it strikethrough

note:

- if there are many ways to create an effect via inline style, handle them all (e.g. you can use bold literally, you could also have a high font weight)

poc:

```
import { NodeHtmlMarkdown } from 'node-html-markdown';

const nhm = new NodeHtmlMarkdown({}, {
  // Use a translator object where the key is the uppercase tag name
  'SPAN': ({ node }) => {
    const style = node.getAttribute('style') || '';
    
    // Check if font-weight is bold or a numeric value >= 700
    const isBold = /font-weight\s*:\s*(bold|[789]00)/i.test(style);

    if (isBold) {
      return {
        prefix: '**',
        postfix: '**'
      };
    }

    // Return empty configuration for normal spans so they stay as plain text
    return {};
  }
});

const html = '<p>Normal <span style="font-weight: 700;">Bolded Span</span> text.</p>';
console.log(nhm.translate(html)); 
// Output: Normal **Bolded Span** text.
```

---

revise convert_to_md.ts

```
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
      });

      continue;
    }

    if (tag == 'code') {
      replace_inline_code({
        element: node as HTMLElement,
        state,
      });

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

  preserve_whitespace({ root: body_node });

  return {
    html: body_node.innerHTML,
    token_entries: state.token_entries,
  };
}

/**
 * preserve whitespace like `white-space: pre`
 * skip pre/code (already tokenized)
 */
function preserve_whitespace({ root }: { root: HTMLElement }): void {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

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

    const span = document.createElement('span');
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
```

todo:

- for span with bold inline style (font weight), consider it bold
- for span with italic inline style (font weight), consider it italic
- for span with strikethrough inline style (font weight), consider it strikethrough

note:

- if there are many ways to create an effect via inline style, handle them all (e.g. you can use bold literally, you could also have a high font weight)

---

tell me to install prettier.

- add option: prettier: on. store and retrieve.

if on, call it to format before output.

---

```
 ...f/apps/copy % fdfind --max-depth 2       
app.html
changes.md
message.md
notes.md
package.json
pnpm-lock.yaml
readme.md
research.md
source/
source/clipboard.ts
source/convert_to_md.ts
source/main.ts
source/sanitize_html.ts
todo.md
tsconfig.json
```

app.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>copy</title>
    <style>
      :root {
        color-scheme: dark;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        background: #000;
        overflow: hidden;
      }

      body {
        position: relative;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      }

      #status {
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        pointer-events: none;
        user-select: none;
        font-size: 18px;
        letter-spacing: 0.08em;
        text-transform: lowercase;
        color: rgba(255, 255, 255, 0.9);
      }

      #paste_area {
        position: fixed;
        inset: 0;
        outline: none;
        overflow: hidden;
        opacity: 0;
        white-space: pre-wrap;
      }

      #markdown-toggle,
      #svg-toggle {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        font-size: 14px;
        user-select: none;
        cursor: pointer;
      }

      #markdown-toggle {
        bottom: 28px;
      }

      #svg-toggle {
        bottom: 8px;
      }
    </style>
    <script type="module" src="./source/main.ts"></script>
  </head>
  <body>
    <div id="status">paste</div>

    <div
      id="paste_area"
      contenteditable="true"
      role="textbox"
      aria-label="paste area"
      spellcheck="false"
    ></div>

    <div id="markdown-toggle">markdown: off</div>
    <div id="svg-toggle">svg: off</div>
  </body>
</html>
```

main.ts

```
import { copy_html_to_clipboard } from './clipboard';
import { get_plain_text, sanitize_html } from './sanitize_html';
import { convert_html_to_md } from './convert_to_md';

const copy_feedback_ms = 1400;

const status_node = document.getElementById('status') as HTMLElement;
const paste_node = document.getElementById('paste_area') as HTMLElement;
const markdown_button = document.getElementById('markdown-toggle') as HTMLElement;
const svg_button = document.getElementById('svg-toggle') as HTMLElement;

const markdown_enabled_key = 'markdown_enabled';
const svg_enabled_key = 'svg_enabled';

let markdown_enabled = false;
let svg_enabled = false;

function load_boolean_setting({ key }: { key: string }): boolean {
  const stored_value = localStorage.getItem(key) || 'false';
  const is_enabled = stored_value == 'true';

  console.log({
    action: 'load_boolean_setting',
    key,
    is_enabled,
  });

  return is_enabled;
}

function save_boolean_setting({ key, value }: { key: string; value: boolean }): void {
  localStorage.setItem(key, value ? 'true' : 'false');

  console.log({
    action: 'save_boolean_setting',
    key,
    value,
  });
}

function set_status({ text }: { text: string }): void {
  status_node.textContent = text;
}

function focus_paste_area(): void {
  paste_node.focus();
}

function keep_focus(): void {
  if (document.activeElement != paste_node) {
    focus_paste_area();
  }
}

function reset_status_to_paste(): void {
  set_status({ text: 'paste' });
}

function flash_copied(): void {
  set_status({ text: 'copied' });
  window.setTimeout(reset_status_to_paste, copy_feedback_ms);
}

function read_paste_area_html(): { html: string } {
  const html = paste_node.innerHTML || '';
  console.log({ action: 'read_paste_area_html', length: html.length });
  return { html };
}

function clear_paste_area(): void {
  paste_node.innerHTML = '';
}

async function process_paste_area(): Promise<void> {
  const { html } = read_paste_area_html();

  const clean_html = sanitize_html({ dirty_html: html });
  const plain_text = get_plain_text({ html: clean_html });

  console.log({
    action: 'process_paste_area',
    html_length: html.length,
    plain_length: plain_text.length,
    markdown_enabled,
    svg_enabled,
  });

  try {
    if (markdown_enabled) {
      const markdown = convert_html_to_md({
        html: clean_html,
        preserve_svg: svg_enabled,
      });

      await copy_html_to_clipboard({ html: markdown });
    } else {
      await copy_html_to_clipboard({ html: clean_html });
    }

    flash_copied();
    clear_paste_area();
  } catch (error: unknown) {
    console.error({
      action: 'copy_failed',
      error,
    });

    set_status({ text: 'paste' });
  }
}

function schedule_process_paste_area(): void {
  window.setTimeout(process_paste_area, 0);
}

function handle_input(): void {
  schedule_process_paste_area();
}

function render_markdown_button(): void {
  const text = markdown_enabled ? 'markdown: on' : 'markdown: off';
  markdown_button.textContent = text;
}

function render_svg_button(): void {
  const text = svg_enabled ? 'svg: on' : 'svg: off';
  svg_button.textContent = text;
}

function toggle_markdown(): void {
  markdown_enabled = !markdown_enabled;

  console.log({
    action: 'toggle_markdown',
    markdown_enabled,
  });

  save_boolean_setting({
    key: markdown_enabled_key,
    value: markdown_enabled,
  });

  render_markdown_button();
}

function toggle_svg(): void {
  svg_enabled = !svg_enabled;

  console.log({
    action: 'toggle_svg',
    svg_enabled,
  });

  save_boolean_setting({
    key: svg_enabled_key,
    value: svg_enabled,
  });

  render_svg_button();
}

function init_settings(): void {
  markdown_enabled = load_boolean_setting({ key: markdown_enabled_key });
  svg_enabled = load_boolean_setting({ key: svg_enabled_key });

  render_markdown_button();
  render_svg_button();
}

paste_node.addEventListener('input', handle_input);
paste_node.addEventListener('blur', keep_focus);
document.addEventListener('click', keep_focus);
window.addEventListener('focus', keep_focus);
window.addEventListener('pageshow', keep_focus);

markdown_button.addEventListener('click', toggle_markdown);
svg_button.addEventListener('click', toggle_svg);

set_status({ text: 'paste' });

init_settings();

window.setTimeout(focus_paste_area, 0);
window.addEventListener('load', focus_paste_area);
```

convert_to_md.ts

```
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

  preserve_whitespace({ root: body_node });

  return {
    html: body_node.innerHTML,
    token_entries: state.token_entries,
  };
}

/**
 * preserve whitespace like `white-space: pre`
 * skip pre/code (already tokenized)
 */
function preserve_whitespace({ root }: { root: HTMLElement }): void {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

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

    const span = document.createElement('span');
    span.innerHTML = replaced;

    node.replaceWith(span);
  }
}

/**
 * 🔥 FIX: extract real multiline text from messy editor HTML
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
```

- tell me to install `remark`
- add two options under markdown and svg, store and retrieve from localstorage
  - keep images: on
  - normalize empty links: on

write process_ast.ts

if keep images is on and normalize empty links is off, do nothing. (main.ts wont call it)

if keep images is off, remove all image node.

if normalize empty links is on, for each link, if it's `[](example.com)`, add `link` to link description, make it `[link](example.com)`.

get the markdown back only after all ast methods.

---

revise convert_to_md.ts

fix

input

```
<html><head></head><body><h3><span role="text">1. <strong>new file: <code>convert_to_md.ts</code></strong> (HTML to Markdown conversion logic)</span></h3>
<pre><div><div><div><div><div><div><div><div><div><div></div></div></div><div><div><div><div dir="ltr"><div><div><span>import</span> { <span>htmlToMarkdown</span> } <span>from</span> <span>'node-html-markdown'</span>;<br><br><span>export</span> <span>const</span> <span>convert_html_to_md</span> <span>=</span> ({ html }: { html: <span>string</span> }): <span>string</span> =&gt; {<br>  <span>console</span><span>.</span>log({ action: <span>'convert_html_to_md'</span>, html_length: <span>html</span><span>.</span>length });<br>  <span>return</span> <span>htmlToMarkdown</span>(<span>html</span>);<br>};</div></div></div></div></div></div></div></div></div></div><div><div></div></div></div></div></div></pre>
<h3><span role="text">2. <strong>Updated <code>main.ts</code></strong> (Handling the Markdown Toggle and Refactoring)</span></h3></body></html>
```

output

````
### 1\. **new file: `convert_to_md.ts`** (HTML to Markdown conversion logic)
  
  

```
import { htmlToMarkdown } from 'node-html-markdown';export const convert_html_to_md = ({ html }: { html: string }): string => {  console.log({ action: 'convert_html_to_md', html_length: html.length });  return htmlToMarkdown(html);};
```
  
  
### 2\. **Updated `main.ts`** (Handling the Markdown Toggle and Refactoring)

````

expected output (on previous code)

````
### 1\. **new file: `convert_to_md.ts`** (HTML to Markdown conversion logic)

```
import { htmlToMarkdown } from 'node-html-markdown';

export const convert_html_to_md = ({ html }: { html: string }): string => {
  console.log({ action: 'convert_html_to_md', html_length: html.length });
  return htmlToMarkdown(html);
};

```
 

### 2\. **Updated `main.ts`** (Handling the Markdown Toggle and Refactoring)
````

---

revise convert_to_md.ts

fix

input

```
<html><head></head><body>follow these:

- use:
  - ubuntu
  - zsh
  - pnpm
  - es module
  - typescript
  - parceljs
  - dont reinvent wheels, prefer modern proven tech
- naming:
  - snake case
  - verb noun for actions, predicate for bools</body></html>
```

ouput

```
follow these: - use: - ubuntu - zsh - pnpm - es module - typescript - parceljs - dont reinvent wheels, prefer modern proven tech - naming: - snake case - verb noun for actions, predicate for bools
```

dont collapse. assume whitespace pre is everywhere.

method

```
const foo = bar.replaceAll('\n', '<br>').replaceAll(' ', '&nbsp;');
```

- just preprocess
- dont replaceall where you should not. e.g. in a pre or code block.

---

revise convert_to_md.ts

fix

input

```
<html><head></head><body>follow these:

- use:
  - ubuntu
  - zsh
  - pnpm
  - es module
  - typescript
  - parceljs
  - dont reinvent wheels, prefer modern proven tech
- naming:
  - snake case
  - verb noun for actions, predicate for bools</body></html>
```

ouput

```
follow these: - use: - ubuntu - zsh - pnpm - es module - typescript - parceljs - dont reinvent wheels, prefer modern proven tech - naming: - snake case - verb noun for actions, predicate for bools
```

dont collapse. assume whitespace pre is everywhere.

---

revise convert_to_md.ts

fix

input

```
<html><head></head><body><p><code>source/clipboard.ts</code></p>
<pre><div><div><div><div><div><div><div><div><div><div></div></div></div><div><div><div><div dir="ltr"><div><div><span>function</span> <span>get_plain_text_from_html</span>({ html }: { html: <span>string</span> }): <span>string</span> {<br>  <span>const</span> <span>parser</span> <span>=</span> <span>new</span> <span>DOMParser</span>();<br>  <span>const</span> <span>document_node</span> <span>=</span> <span>parser</span><span>.</span>parseFromString(<span>html</span>, <span>'text/html'</span>);<br>  <span>const</span> <span>body_node</span> <span>=</span> <span>document_node</span><span>.</span>body;<br><br>  <span>return</span> <span>body_node</span><span>.</span>textContent <span>||</span> <span>''</span>;<br>}<br><br><span>export</span> <span>async</span> <span>function</span> <span>copy_html_to_clipboard</span>({<br>  html,<br>}: {<br>  html: <span>string</span>;<br>}): <span>Promise</span>&lt;<span>void</span>&gt; {<br>  <span>const</span> <span>plain_text</span> <span>=</span> <span>get_plain_text_from_html</span>({ html });<br><br>  <span>console</span><span>.</span>log({<br>    action: <span>'copy_html_to_clipboard'</span>,<br>    html_length: <span>html</span><span>.</span>length,<br>    plain_length: <span>plain_text</span><span>.</span>length,<br>  });<br><br>  <span>if</span> (<span>'ClipboardItem'</span> <span>in</span> <span>window</span> <span>&amp;&amp;</span> <span>navigator</span><span>.</span>clipboard <span>!=</span> <span>null</span> <span>&amp;&amp;</span> <span>navigator</span><span>.</span>clipboard<span>.</span>write <span>!=</span> <span>null</span>) {<br>    <span>const</span> <span>clipboard_item</span> <span>=</span> <span>new</span> <span>ClipboardItem</span>({<br>      <span>'text/html'</span>: <span>new</span> <span>Blob</span>([<span>html</span>], {<br>        type: <span>'text/html'</span>,<br>      }),<br>      <span>'text/plain'</span>: <span>new</span> <span>Blob</span>([<span>plain_text</span>], {<br>        type: <span>'text/plain'</span>,<br>      }),<br>    });<br><br>    <span>await</span> <span>navigator</span><span>.</span>clipboard<span>.</span>write([<span>clipboard_item</span>]);<br>    <span>return</span>;<br>  }<br><br>  <span>await</span> <span>navigator</span><span>.</span>clipboard<span>.</span>writeText(<span>plain_text</span>);<br>}<br><br><span>export</span> <span>async</span> <span>function</span> <span>copy_text_to_clipboard</span>({<br>  text,<br>}: {<br>  text: <span>string</span>;<br>}): <span>Promise</span>&lt;<span>void</span>&gt; {<br>  <span>console</span><span>.</span>log({<br>    action: <span>'copy_text_to_clipboard'</span>,<br>    text_length: <span>text</span><span>.</span>length,<br>  });<br><br>  <span>await</span> <span>navigator</span><span>.</span>clipboard<span>.</span>writeText(<span>text</span>);<br>}</div></div></div></div></div></div></div></div></div></div><div><div></div></div></div></div></div></pre>
<p><code>source/main.ts</code></p></body></html>
```

output

````
`source/clipboard.ts`

```
function get_plain_text_from_html({ html }: { html: string }): string {  const parser = new DOMParser();  const document_node = parser.parseFromString(html, 'text/html');  const body_node = document_node.body;  return body_node.textContent || '';}export async function copy_html_to_clipboard({  html,}: {  html: string;}): Promise<void> {  const plain_text = get_plain_text_from_html({ html });  console.log({    action: 'copy_html_to_clipboard',    html_length: html.length,    plain_length: plain_text.length,  });  if ('ClipboardItem' in window && navigator.clipboard != null && navigator.clipboard.write != null) {    const clipboard_item = new ClipboardItem({      'text/html': new Blob([html], {        type: 'text/html',      }),      'text/plain': new Blob([plain_text], {        type: 'text/plain',      }),    });    await navigator.clipboard.write([clipboard_item]);    return;  }  await navigator.clipboard.writeText(plain_text);}export async function copy_text_to_clipboard({  text,}: {  text: string;}): Promise<void> {  console.log({    action: 'copy_text_to_clipboard',    text_length: text.length,  });  await navigator.clipboard.writeText(text);}
```
 

`source/main.ts`
````

it should line break normally.

---

```
 ...f/apps/copy % fdfind --max-depth 2       
app.html
changes.md
message.md
notes.md
package.json
pnpm-lock.yaml
readme.md
research.md
source/
source/clipboard.ts
source/convert_to_md.ts
source/main.ts
source/sanitize_html.ts
todo.md
tsconfig.json
```

main.ts

```
import { copy_html_to_clipboard } from './clipboard';
import { get_plain_text, sanitize_html } from './sanitize_html';
import { convert_html_to_md } from './convert_to_md';

const copy_feedback_ms = 1400;

const status_node = document.getElementById('status') as HTMLElement;
const paste_node = document.getElementById('paste_area') as HTMLElement;
const markdown_button = document.getElementById('markdown-toggle') as HTMLElement;

let markdown_enabled = false;

function load_markdown_enabled(): boolean {
  const stored = localStorage.getItem('markdown_enabled') || 'false';
  return stored == 'true';
}

function save_markdown_enabled({ value }: { value: boolean }): void {
  localStorage.setItem('markdown_enabled', value ? 'true' : 'false');
}

function set_status({ text }: { text: string }): void {
  status_node.textContent = text;
}

function focus_paste_area(): void {
  paste_node.focus();
}

function keep_focus(): void {
  if (document.activeElement != paste_node) {
    focus_paste_area();
  }
}

function flash_copied(): void {
  set_status({ text: 'copied' });

  window.setTimeout(function () {
    set_status({ text: 'paste' });
  }, copy_feedback_ms);
}

function read_paste_area_html(): { html: string } {
  const html = paste_node.innerHTML || '';
  console.log({ action: 'read_paste_area_html', length: html.length });
  return { html };
}

function clear_paste_area(): void {
  paste_node.innerHTML = '';
}

async function process_paste_area(): Promise<void> {
  const { html } = read_paste_area_html();

  const clean_html = sanitize_html({ dirty_html: html });
  const plain_text = get_plain_text({ html: clean_html });

  console.log({
    action: 'process_paste_area',
    html_length: html.length,
    plain_length: plain_text.length,
    markdown_enabled,
  });

  if (markdown_enabled) {
    const markdown = convert_html_to_md({ html: clean_html });
    await copy_html_to_clipboard({ html: markdown });
  } else {
    await copy_html_to_clipboard({ html: clean_html });
  }

  flash_copied();
  clear_paste_area();
}

function handle_input(): void {
  window.setTimeout(function () {
    process_paste_area().catch(function (error: unknown) {
      console.error({ action: 'copy_failed', error });
      set_status({ text: 'paste' });
    });
  }, 0);
}

function render_markdown_button(): void {
  const text = markdown_enabled ? 'markdown: on' : 'markdown: off';
  markdown_button.textContent = text;
}

function toggle_markdown(): void {
  markdown_enabled = !markdown_enabled;

  console.log({
    action: 'toggle_markdown',
    markdown_enabled,
  });

  save_markdown_enabled({ value: markdown_enabled });
  render_markdown_button();
}

function init_markdown(): void {
  markdown_enabled = load_markdown_enabled();
  render_markdown_button();
}

paste_node.addEventListener('input', handle_input);
paste_node.addEventListener('blur', keep_focus);
document.addEventListener('click', keep_focus);
window.addEventListener('focus', keep_focus);
window.addEventListener('pageshow', keep_focus);

markdown_button.addEventListener('click', toggle_markdown);

set_status({ text: 'paste' });

init_markdown();

window.setTimeout(focus_paste_area, 0);
window.addEventListener('load', focus_paste_area);
```

app.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>copy</title>
    <style>
      :root {
        color-scheme: dark;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        background: #000;
        overflow: hidden;
      }

      body {
        position: relative;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      }

      #status {
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        pointer-events: none;
        user-select: none;
        font-size: 18px;
        letter-spacing: 0.08em;
        text-transform: lowercase;
        color: rgba(255, 255, 255, 0.9);
      }

      #paste_area {
        position: fixed;
        inset: 0;
        outline: none;
        overflow: hidden;
        opacity: 0;
        white-space: pre-wrap;
      }

      #markdown-toggle {
        position: fixed;
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        font-size: 14px;
        user-select: none;
        cursor: pointer;
      }
    </style>
    <script type="module" src="./source/main.ts"></script>
  </head>
  <body>
    <div id="status">paste</div>

    <div
      id="paste_area"
      contenteditable="true"
      role="textbox"
      aria-label="paste area"
      spellcheck="false"
    ></div>

    <div id="markdown-toggle">markdown: off</div>
  </body>
</html>
```

clipboard.ts

```
const can_write_text = (): boolean => Boolean(navigator.clipboard?.writeText);

export const copy_html_to_clipboard = async ({ html }: { html: string }): Promise<void> => {
  if (can_write_text()) {
    await navigator.clipboard.writeText(html);
    console.log({ action: 'copy_html_code', length: html.length });
    return;
  }

  console.log({ action: 'copy_html_code', mode: 'clipboard_unavailable' });
};

const escape_html = ({ text }: { text: string }): string =>
  text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

export const text_to_html = ({ text }: { text: string }): string => escape_html({ text }).replaceAll('\n', '<br />');
```

convert_to_md.ts

```
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

const markdown_converter = new NodeHtmlMarkdown({
  codeBlockStyle: 'fenced',
  codeFence: '```',
  maxConsecutiveNewlines: 3,
});

const preserved_tag_names = new Set(['mark', 'svg', 'summary', 'details']);

export function convert_html_to_md({ html }: { html: string }): string {
  console.log({ action: 'convert_html_to_md_start', html_length: html.length });

  const prepared = prepare_html({ html });
  const markdown = markdown_converter.translate(prepared.html);
  const restored_markdown = restore_tokens({
    markdown,
    token_entries: prepared.token_entries,
  });

  console.log({
    action: 'convert_html_to_md_done',
    prepared_length: prepared.html.length,
    markdown_length: restored_markdown.length,
    token_count: prepared.token_entries.length,
  });

  return restored_markdown;
}

function prepare_html({ html }: { html: string }): prepared_html {
  const parser = new DOMParser();
  const document_node = parser.parseFromString(html, 'text/html');
  const body_node = document_node.body;
  const token_state = {
    next_token_index: 0,
    token_entries: [],
  };

  const pre_count = body_node.querySelectorAll('pre').length;
  const code_count = body_node.querySelectorAll('code').length;
  const preserved_count = body_node.querySelectorAll('mark, svg, summary, details').length;

  console.log({
    action: 'prepare_html',
    pre_count,
    code_count,
    preserved_count,
  });

  const candidate_nodes = Array.from(
    body_node.querySelectorAll('pre, code, mark, svg, summary, details'),
  );

  for (const candidate_node of candidate_nodes) {
    if (!candidate_node.isConnected) {
      continue;
    }

    const tag_name = candidate_node.tagName.toLowerCase();

    if (tag_name == 'pre') {
      replace_pre_element({
        element: candidate_node as HTMLPreElement,
        state: token_state,
      });
      continue;
    }

    if (tag_name == 'code') {
      replace_inline_code_element({
        element: candidate_node as HTMLElement,
        state: token_state,
      });
      continue;
    }

    if (preserved_tag_names.has(tag_name)) {
      replace_raw_html_element({
        element: candidate_node,
        state: token_state,
      });
    }
  }

  return {
    html: body_node.innerHTML,
    token_entries: token_state.token_entries,
  };
}

function replace_pre_element({
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

  const markdown = build_code_block_markdown({
    element,
  });

  state.token_entries.push({
    token,
    value: markdown,
  });

  replace_element_with_token({
    element,
    token,
  });
}

function replace_inline_code_element({
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

  const markdown = build_inline_code_markdown({
    text: get_element_text({
      element,
    }),
  });

  state.token_entries.push({
    token,
    value: markdown,
  });

  replace_element_with_token({
    element,
    token,
  });
}

function replace_raw_html_element({
  element,
  state,
}: {
  element: Element;
  state: token_state;
}): void {
  const token = make_token({
    kind: 'raw',
    index: state.next_token_index,
  });

  state.next_token_index += 1;

  state.token_entries.push({
    token,
    value: element.outerHTML,
  });

  replace_element_with_token({
    element,
    token,
  });
}

function replace_element_with_token({
  element,
  token,
}: {
  element: Element;
  token: string;
}): void {
  element.replaceWith(document.createTextNode(token));
}

function restore_tokens({
  markdown,
  token_entries,
}: {
  markdown: string;
  token_entries: token_entry[];
}): string {
  let restored_markdown = markdown;

  for (const token_entry of token_entries) {
    restored_markdown = restored_markdown.split(token_entry.token).join(token_entry.value);
  }

  return restored_markdown;
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

function build_inline_code_markdown({ text }: { text: string }): string {
  const clean_text = trim_outer_newlines({ text });
  const delimiter_length = get_longest_backtick_run({ text: clean_text }) + 1;
  const delimiter = '`'.repeat(delimiter_length);
  const needs_padding =
    clean_text.startsWith(' ') || clean_text.endsWith(' ') || delimiter_length > 1;

  const body = needs_padding ? ` ${clean_text} ` : clean_text;

  return `${delimiter}${body}${delimiter}`;
}

function build_code_block_markdown({
  element,
}: {
  element: HTMLPreElement;
}): string {
  const code_element = element.querySelector('code');
  const language = get_language_name({
    element: code_element ? code_element : element,
  });

  const text = get_pre_text({
    element,
  });

  const fence_length = Math.max(3, get_longest_backtick_run({ text }) + 1);
  const fence = '`'.repeat(fence_length);

  if (language.length > 0) {
    return `${fence}${language}\n${text}\n${fence}`;
  }

  return `${fence}\n${text}\n${fence}`;
}

function get_pre_text({ element }: { element: HTMLPreElement }): string {
  const inner_text = element.innerText || element.textContent || '';
  const normalized_text = inner_text.replace(/\r\n/g, '\n');

  return trim_outer_newlines({
    text: normalized_text,
  });
}

function get_element_text({ element }: { element: HTMLElement }): string {
  const inner_text = element.innerText || element.textContent || '';
  return inner_text.replace(/\r\n/g, '\n');
}

function get_language_name({ element }: { element: Element }): string {
  const class_name = element.getAttribute('class') || '';
  const class_match = class_name.match(/language-([^\s]+)/);

  if (class_match) {
    return class_match[1];
  }

  return '';
}

function trim_outer_newlines({ text }: { text: string }): string {
  let trimmed_text = text;

  if (trimmed_text.startsWith('\n')) {
    trimmed_text = trimmed_text.slice(1);
  }

  if (trimmed_text.endsWith('\n')) {
    trimmed_text = trimmed_text.slice(0, -1);
  }

  return trimmed_text;
}

function get_longest_backtick_run({ text }: { text: string }): number {
  const matches = text.match(/`+/g) || [];
  let longest_run = 0;

  for (const match of matches) {
    if (match.length > longest_run) {
      longest_run = match.length;
    }
  }

  return longest_run;
}
```

todo

- add `svg: on` or `svg: off` alongside the markdown option. also save and retrieve from localstorage.
- fix

input

```html
<html><head></head><body>---

<pre><code>...f/apps/copy % fdfind --max-depth 2
app.html
...
tsconfig.json</code></pre>

app.html

<pre><code>&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
...
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

main.ts</body></html>
```

output

````
\--- ```
...
``` app.html ```
...
``` main.ts
````

it does not line break properly, resulting in weird rendering.

---

- add `svg: on` or `svg: off` alongside the markdown option. also save and retrieve from localstorage.
- fix

input

```html
<html><head></head><body>---

<pre><code>...f/apps/copy % fdfind --max-depth 2
app.html
...
tsconfig.json</code></pre>

app.html

<pre><code>&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
...
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

main.ts</body></html>
```

output

````
\--- ```
...
``` app.html ```
...
``` main.ts
````

it's wrapped, but it does not line break properly, resulting in weird rendering.

---

- add `svg: on` or `svg: off` alongside the markdown option. also save and retrieve from localstorage.
- for link without content, e.g. `[](https://www.npmjs.com/package/node-html-markdown)  `, add the text link `[link](https://www.npmjs.com/package/node-html-markdown)`

fix

```html
<html><head></head><body>---

<pre><code>...f/apps/copy % fdfind --max-depth 2
app.html
changes.md
message.md
notes.md
package.json
pnpm-lock.yaml
readme.md
research.md
source/
source/clipboard.ts
source/main.ts
source/sanitize_html.ts
todo.md
tsconfig.json</code></pre>

app.html

<pre><code>&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;
    &lt;title&gt;copy&lt;/title&gt;
    &lt;style&gt;
      :root {
        color-scheme: dark;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        background: #000;
        overflow: hidden;
      }

      body {
        position: relative;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      }

      #status {
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        pointer-events: none;
        user-select: none;
        font-size: 18px;
        letter-spacing: 0.08em;
        text-transform: lowercase;
        color: rgba(255, 255, 255, 0.9);
      }

      #paste_area {
        position: fixed;
        inset: 0;
        outline: none;
        overflow: hidden;

        /* invisible but still active */
        opacity: 0;

        /* allow css variables + inherited styles */
        white-space: pre-wrap;
      }
    &lt;/style&gt;
    &lt;script type="module" src="./source/main.ts"&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id="status"&gt;paste&lt;/div&gt;

    &lt;div
      id="paste_area"
      contenteditable="true"
      role="textbox"
      aria-label="paste area"
      spellcheck="false"
    &gt;&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

main.ts</body></html>
```

previous three test cases passed.

this one is still not wrapped.

---

revise `convert_html_to_md.ts`

fix:

```html
<html><head></head><body><h2><span role="text"><code>app.html</code></span></h2>
<pre><div><div><div><div><div><div><div><div><div><div></div></div></div><div><div><div><div dir="ltr"><div><div><span>&lt;!doctype html&gt;</span><br><span>&lt;html</span> <span>lang</span><span>=</span><span>"en"</span><span>&gt;</span><br>  <span>&lt;head&gt;</span><br>    <span>&lt;meta</span> <span>charset</span><span>=</span><span>"utf-8"</span> <span>/&gt;</span><br>    <span>&lt;meta</span> <span>name</span><span>=</span><span>"viewport"</span> <span>content</span><span>=</span><span>"width=device-width, initial-scale=1"</span> <span>/&gt;</span><br>    <span>&lt;title&gt;</span>copy<span>&lt;/title&gt;</span><br>    <span>&lt;style&gt;</span><br>      :<span>root</span> {<br>        color-scheme: <span>dark</span>;<br>      }<br><br>      <span>html</span>,<br>      <span>body</span> {<br>        width: <span>100</span><span>%</span>;<br>        height: <span>100</span><span>%</span>;<br>        margin: <span>0</span>;<br>        background: #000;<br>        overflow: <span>hidden</span>;<br>      }<br><br>      <span>body</span> {<br>        position: <span>relative</span>;<br>        font-family: <span>ui-monospace</span>, <span>SFMono-Regular</span>, <span>Menlo</span>, <span>Consolas</span>, <span>monospace</span>;<br>      }<br><br>      <span>#</span><span>status</span> {<br>        position: <span>fixed</span>;<br>        inset: <span>0</span>;<br>        display: <span>grid</span>;<br>        place-items: <span>center</span>;<br>        pointer-events: <span>none</span>;<br>        user-select: <span>none</span>;<br>        font-size: <span>18</span><span>px</span>;<br>        letter-spacing: <span>0.08</span><span>em</span>;<br>        text-transform: <span>lowercase</span>;<br>        color: <span>rgba</span>(<span>255</span>, <span>255</span>, <span>255</span>, <span>0.9</span>);<br>      }<br><br>      <span>#</span><span>paste_area</span> {<br>        position: <span>fixed</span>;<br>        inset: <span>0</span>;<br>        outline: <span>none</span>;<br>        overflow: <span>hidden</span>;<br>        opacity: <span>0</span>;<br>        white-space: <span>pre-wrap</span>;<br>      }<br><br>      <span>#</span><span>markdown-toggle</span> {<br>        position: <span>fixed</span>;<br>        bottom: <span>12</span><span>px</span>;<br>        left: <span>50</span><span>%</span>;<br>        transform: <span>translateX</span>(<span>-50</span><span>%</span>);<br>        color: #fff;<br>        font-size: <span>14</span><span>px</span>;<br>        user-select: <span>none</span>;<br>        cursor: <span>pointer</span>;<br>      }<br>    <span>&lt;/style&gt;</span><br>    <span>&lt;script</span> <span>type</span><span>=</span><span>"module"</span> <span>src</span><span>=</span><span>"./source/main.ts"</span><span>&gt;&lt;/script&gt;</span><br>  <span>&lt;/head&gt;</span><br>  <span>&lt;body&gt;</span><br>    <span>&lt;div</span> <span>id</span><span>=</span><span>"status"</span><span>&gt;</span>paste<span>&lt;/div&gt;</span><br><br>    <span>&lt;div</span><br>      <span>id</span><span>=</span><span>"paste_area"</span><br>      <span>contenteditable</span><span>=</span><span>"true"</span><br>      <span>role</span><span>=</span><span>"textbox"</span><br>      <span>aria-label</span><span>=</span><span>"paste area"</span><br>      <span>spellcheck</span><span>=</span><span>"false"</span><br>    <span>&gt;&lt;/div&gt;</span><br><br>    <span>&lt;div</span> <span>id</span><span>=</span><span>"markdown-toggle"</span><span>&gt;</span>markdown: off<span>&lt;/div&gt;</span><br>  <span>&lt;/body&gt;</span><br><span>&lt;/html&gt;</span></div></div></div></div></div></div></div></div></div></div><div><div></div></div></div></div></div></pre>
<hr>
<h2>what changed</h2></body></html>
```

the pre is not wrapped inside a code block.

```html
<html><head></head><body><span style="color: rgb(230, 232, 240); font-family: &quot;Google Sans&quot;, Arial, sans-serif; font-size: 16px; white-space-collapse: collapse; background-color: rgb(16, 18, 24);">data,&nbsp;</span><mark style="border-radius: 4px; background-size: 200% 100%; padding: 0px 2px; animation: 0.75s cubic-bezier(0.05, 0.7, 0.1, 1) 0.25s 1 normal forwards running highlight-animation; font-family: &quot;Google Sans&quot;, Arial, sans-serif; font-size: 16px; white-space-collapse: collapse;"><span style="font-weight: 600;">node-html-markdown</span></mark><span style="color: rgb(230, 232, 240); font-family: &quot;Google Sans&quot;, Arial, sans-serif; font-size: 16px; white-space-collapse: collapse; background-color: rgb(16, 18, 24);">&nbsp;is a top-p</span></body></html>
```

mark is removed. (as well as svg, and more)

```html
<html><head></head><body><div><br></div><div><table style="border: none; border-collapse: collapse; table-layout: auto; width: 648px; color: rgb(230, 232, 240); font-family: &quot;Google Sans&quot;, Arial, sans-serif; font-size: 14px; white-space-collapse: collapse; background-color: rgb(16, 18, 24);"><tbody><tr><td colspan="undefined" style="border-bottom: 1px solid var(--gS5jXb); min-width: 4em; vertical-align: top; color: var(--bbQxAb); font-family: var(--LI4Bo); font-size: var(--Mhs7de); font-weight: var(--ofwUBc); line-height: var(--XWv1if); letter-spacing: 0px; padding: 12px 0px;">Converts&nbsp;<code dir="ltr" style="line-height: 22px; background-color: var(--XKMDxc); border: 1px solid var(--XKMDxc); border-radius: 4px; padding-block: 2px; padding-inline: 4px;">&lt;table&gt;</code>&nbsp;to pipe tables automatically.</td></tr></tbody></table></div></body></html>
```

code is not wrapped. (most code are wrapped with backticks. some are not.)

---

```
 ...f/apps/copy % fdfind --max-depth 2
app.html
changes.md
message.md
notes.md
package.json
pnpm-lock.yaml
readme.md
research.md
source/
source/clipboard.ts
source/main.ts
source/sanitize_html.ts
todo.md
tsconfig.json
```

app.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>copy</title>
    <style>
      :root {
        color-scheme: dark;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        background: #000;
        overflow: hidden;
      }

      body {
        position: relative;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      }

      #status {
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        pointer-events: none;
        user-select: none;
        font-size: 18px;
        letter-spacing: 0.08em;
        text-transform: lowercase;
        color: rgba(255, 255, 255, 0.9);
      }

      #paste_area {
        position: fixed;
        inset: 0;
        outline: none;
        overflow: hidden;

        /* invisible but still active */
        opacity: 0;

        /* allow css variables + inherited styles */
        white-space: pre-wrap;
      }
    </style>
    <script type="module" src="./source/main.ts"></script>
  </head>
  <body>
    <div id="status">paste</div>

    <div
      id="paste_area"
      contenteditable="true"
      role="textbox"
      aria-label="paste area"
      spellcheck="false"
    ></div>
  </body>
</html>
```

main.ts

```
import { copy_html_to_clipboard } from './clipboard';
import { get_plain_text, sanitize_html } from './sanitize_html';

const copy_feedback_ms = 1400;

const status_node = document.getElementById('status') as HTMLElement;
const paste_node = document.getElementById('paste_area') as HTMLElement;

const set_status = ({ text }: { text: string }): void => {
  status_node.textContent = text;
};

const focus_paste_area = (): void => {
  paste_node.focus();
};

const keep_focus = (): void => {
  if (document.activeElement !== paste_node) {
    focus_paste_area();
  }
};

const flash_copied = (): void => {
  set_status({ text: 'copied' });
  window.setTimeout(() => set_status({ text: 'paste' }), copy_feedback_ms);
};

const read_paste_area_html = (): { html: string } => {
  const html = paste_node.innerHTML ?? '';
  console.log({ action: 'read_paste_area_html', length: html.length });
  return { html };
};

const clear_paste_area = (): void => {
  paste_node.innerHTML = '';
};

const process_paste_area = async (): Promise<void> => {
  const { html } = read_paste_area_html();

  const clean_html = sanitize_html({ dirty_html: html });
  const plain_text = get_plain_text({ html: clean_html });

  console.log({
    action: 'process_paste_area',
    html_length: html.length,
    plain_length: plain_text.length,
  });

  await copy_html_to_clipboard({ html: clean_html });
  flash_copied();
  clear_paste_area();
};

const handle_input = (): void => {
  // let browser finish paste first
  window.setTimeout(() => {
    void process_paste_area().catch((error: unknown) => {
      console.error({ action: 'copy_failed', error });
      set_status({ text: 'paste' });
    });
  }, 0);
};

paste_node.addEventListener('input', handle_input);
paste_node.addEventListener('blur', keep_focus);
document.addEventListener('click', keep_focus);
window.addEventListener('focus', keep_focus);
window.addEventListener('pageshow', keep_focus);

set_status({ text: 'paste' });
window.setTimeout(focus_paste_area, 0);
window.addEventListener('load', focus_paste_area);
```

todo:

- tell me to install `node-html-markdown`
- add a button. "markdown: off" "markdown: on". no styling. just white text at the bottom (with some margin). click will change. store and retrieve it from localstorage.
- if markdown off (default), just let it work like current.
- if markdown on, first convert to html using the current method. then convert to markdown. then copy.

note:

- create a new ts file to convert to md
- make current code fit the style (e.g. function statement)

spec on markdown:

- keep special tags (e.g. svg, mark, summary, detail, and more, whatever standard html tag) as is. 

---

edit

```
import DOMPurify from 'dompurify';

const sanitize_config = {
  USE_PROFILES: { html: true },
  ALLOW_DATA_ATTR: false,
  ALLOW_ARIA_ATTR: false,
  FORBID_ATTR: ['class'],
} as const;

const url_attribute_names = new Set([
  'action',
  'background',
  'cite',
  'data',
  'formaction',
  'href',
  'poster',
  'src',
  'xlink:href',
]);

const is_data_url = ({ url_value }: { url_value: string }): boolean =>
  url_value.trimStart().toLowerCase().startsWith('data:');

const is_srcset_with_data_url = ({ srcset }: { srcset: string }): boolean => {
  const candidates = srcset.split(',');

  return candidates.some((candidate) => {
    const trimmed = candidate.trimStart();
    const space_index = trimmed.indexOf(' ');
    const url_part = space_index >= 0 ? trimmed.slice(0, space_index) : trimmed;

    return is_data_url({ url_value: url_part });
  });
};

DOMPurify.addHook('uponSanitizeAttribute', (_node, current_data) => {
  const attribute_name = current_data.attrName.toLowerCase();
  const attribute_value = current_data.attrValue;

  if (attribute_name === 'srcset') {
    if (is_srcset_with_data_url({ srcset: attribute_value })) {
      current_data.keepAttr = false;
    }

    return;
  }

  if (!url_attribute_names.has(attribute_name)) {
    return;
  }

  if (is_data_url({ url_value: attribute_value })) {
    current_data.keepAttr = false;
  }
});

export const sanitize_html = ({ dirty_html }: { dirty_html: string }): string => {
  const clean_html = DOMPurify.sanitize(dirty_html, sanitize_config);
  console.log({
    action: 'sanitize_html',
    dirty_length: dirty_html.length,
    clean_length: clean_html.length,
  });
  return clean_html;
};

export const get_plain_text = ({ html }: { html: string }): string => {
  const document = new DOMParser().parseFromString(html, 'text/html');
  const plain_text = document.body.textContent;

  console.log({
    action: 'get_plain_text',
    html_length: html.length,
    text_length: plain_text ? plain_text.length : 0,
  });

  return plain_text ? plain_text : '';
};
```

- import cheerio (it's already installed)
- use cheerio to remove all img, audio, video elements without src
- use dompurify to remove all id attr (like class), `item*` attrs. 
- use dompurify to remove all tags nonsensical to markdown (but make keep content on), including interactive elements (button, input, textarea, and more), script and style, complex multimedia (like iframe, canvas, embed, object).

---

edit

app.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>copy</title>
    <style>
      :root {
        color-scheme: dark;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        background: #000;
        overflow: hidden;
      }

      body {
        position: relative;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      }

      #status {
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        pointer-events: none;
        user-select: none;
        font-size: 18px;
        letter-spacing: 0.08em;
        text-transform: lowercase;
        color: rgba(255, 255, 255, 0.9);
      }

      #paste_area {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        resize: none;
        opacity: 0;
        background: transparent;
        color: transparent;
        caret-color: transparent;
        overflow: hidden;
      }
    </style>
    <script type="module" src="./source/main.ts"></script>
  </head>
  <body>
    <div id="status">paste</div>
    <textarea
      id="paste_area"
      aria-label="paste area"
      autocomplete="off"
      autocapitalize="off"
      autocorrect="off"
      spellcheck="false"
    ></textarea>
  </body>
</html>
```

clipboard.ts

```
const can_write_text = (): boolean => Boolean(navigator.clipboard?.writeText);

export const copy_html_to_clipboard = async ({ html }: { html: string }): Promise<void> => {
  if (can_write_text()) {
    await navigator.clipboard.writeText(html);
    console.log({ action: 'copy_html_code', length: html.length });
    return;
  }

  console.log({ action: 'copy_html_code', mode: 'clipboard_unavailable' });
};

const escape_html = ({ text }: { text: string }): string =>
  text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

export const text_to_html = ({ text }: { text: string }): string => escape_html({ text }).replaceAll('\n', '<br />');

```

main.ts

```
import { copy_html_to_clipboard, text_to_html } from './clipboard';
import { get_plain_text, sanitize_html } from './sanitize_html';

const copy_feedback_ms = 1400;

const status_node = document.getElementById('status') as HTMLElement;
const paste_node = document.getElementById('paste_area') as HTMLTextAreaElement;

const set_status = ({ text }: { text: string }): void => {
  status_node.textContent = text;
};

const focus_paste_area = (): void => {
  paste_node.focus();
};

const keep_focus = (): void => {
  if (document.activeElement !== paste_node) {
    focus_paste_area();
  }
};

const flash_copied = (): void => {
  set_status({ text: 'copied' });
  window.setTimeout(() => set_status({ text: 'paste' }), copy_feedback_ms);
};

const copy_from_clipboard_data = async ({ html, text }: { html: string; text: string }): Promise<void> => {
  const source_html = html.length > 0 ? html : text_to_html({ text });
  const clean_html = sanitize_html({ dirty_html: source_html });
  const plain_text = get_plain_text({ html: clean_html });

  console.log({ action: 'paste_received', html_length: html.length, text_length: text.length, plain_length: plain_text.length });

  await copy_html_to_clipboard({ html: clean_html });
  flash_copied();
};

const handle_paste = (event: ClipboardEvent): void => {
  event.preventDefault();

  const html = event.clipboardData?.getData('text/html') ?? '';
  const text = event.clipboardData?.getData('text/plain') ?? '';

  void copy_from_clipboard_data({ html, text }).catch((error: unknown) => {
    console.error({ action: 'copy_failed', error });
    set_status({ text: 'paste' });
  });
};

paste_node.addEventListener('paste', handle_paste);
paste_node.addEventListener('blur', keep_focus);
document.addEventListener('click', keep_focus);
window.addEventListener('focus', keep_focus);
window.addEventListener('pageshow', keep_focus);

set_status({ text: 'paste' });
window.setTimeout(focus_paste_area, 0);
window.addEventListener('load', focus_paste_area);
```

- use contenteditable instead, so the browser will expand css variables

---

edit

```ts
import DOMPurify from 'dompurify';

const sanitize_config = {
  USE_PROFILES: { html: true },
  ALLOW_DATA_ATTR: false,
  ALLOW_ARIA_ATTR: false,
  FORBID_ATTR: ['class'],
} as const;

export const sanitize_html = ({ dirty_html }: { dirty_html: string }): string => {
  const clean_html = DOMPurify.sanitize(dirty_html, sanitize_config);
  console.log({ action: 'sanitize_html', dirty_length: dirty_html.length, clean_length: clean_html.length });
  return clean_html;
};

export const get_plain_text = ({ html }: { html: string }): string => {
  const document = new DOMParser().parseFromString(html, 'text/html');
  return document.body.textContent ?? '';
};
```

- for all url, if it's data url, remove it

---

write a html page. 

no react. be simple.

blank page. black background. one always focused textarea of opacity zero.

learn from this (only for making it always focused):

```js
// Focus the div immediately
editableDiv.focus();

// Re-focus whenever window gains focus
window.addEventListener("focus", function () {
  editableDiv.focus();
});

// Handle paste event with HTML content
editableDiv.addEventListener("paste", function (e) {
  e.preventDefault();
  const html = e.clipboardData.getData("text/html");
  const text = e.clipboardData.getData("text/plain");

  if (html || text) {
    // Process content
    const markdown = htmlToMarkdown(html || text);
    markdownOutput.textContent = markdown;

    // Copy to clipboard
    navigator.clipboard.writeText(markdown).then(() => {
      // Show "Copied!" feedback
      editableDiv.classList.remove("placeholder");
      editableDiv.classList.add("copied");
      editableDiv.innerHTML = "";

      // Reset after animation
      setTimeout(() => {
        editableDiv.classList.remove("copied");
        editableDiv.classList.add("placeholder");
        editableDiv.focus();
      }, 500);
    });
  }
});

// Keep focus on the editable div when clicking anywhere
document.addEventListener("click", function (e) {
  if (e.target !== editableDiv) {
    editableDiv.focus();
  }
});
});
```

one text. paste at first. copied for a while after that.

when anything (likely to be rich text) is pasted, copy the converted html.

use DOMPurify to do that. tell me to install.

keep everything related to its display (width height of image, style), remove nonsense (classes, data, whatever non standard attr)

research on the list of "necessary attrs". dont guess or try to curate yourself.

---

