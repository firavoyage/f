follow these:

- use:
  - ubuntu
  - zsh
  - pnpm
  - typescript
  - parceljs
  - dont reinvent wheels, prefer modern proven tech
- naming:
  - snake case
  - verb noun for actions and predicate for bools
- style:
  - functional programming
  - modular and cohesive
  - object params
  - async if needed
  - modern es module
  - no function statement, use const arrow function instead
  - no `undefined` or `null`
  - no `typeof` or `instanceof`.
  - no `try catch` unless external libraries need
  - no `throw`
- notes:
  - add simple logging
  - give me full working code of all changed files.

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
