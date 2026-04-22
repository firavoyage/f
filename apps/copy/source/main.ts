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