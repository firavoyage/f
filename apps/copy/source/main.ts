import { copy_html_to_clipboard } from './clipboard';
import { sanitize_html } from './sanitize_html';
import { convert_html_to_md } from './convert_to_md';

type boolean_setting_options = {
  key: string;
  default_value: boolean;
};

type save_boolean_setting_options = {
  key: string;
  value: boolean;
};

type render_toggle_options = {
  node: HTMLElement;
  label: string;
  enabled: boolean;
};

type conversion_settings = {
  markdown_enabled: boolean;
  svg_enabled: boolean;
  keep_images_enabled: boolean;
  normalize_empty_links_enabled: boolean;
  prettier_enabled: boolean;
  remove_heading_enabled: boolean;
  intercept_paste_enabled: boolean;
};

const copy_feedback_ms = 1400;

const status_node = document.getElementById('status') as HTMLElement;
const paste_node = document.getElementById('paste_area') as HTMLElement;
const markdown_button = document.getElementById('markdown-toggle') as HTMLElement;
const svg_button = document.getElementById('svg-toggle') as HTMLElement;
const keep_images_button = document.getElementById('keep-images-toggle') as HTMLElement;
const normalize_empty_links_button = document.getElementById(
  'normalize-empty-links-toggle',
) as HTMLElement;
const prettier_button = document.getElementById('prettier-toggle') as HTMLElement;
const remove_heading_button = document.getElementById('remove-heading-toggle') as HTMLElement;
const intercept_paste_button = document.getElementById('intercept-paste-toggle') as HTMLElement;

const markdown_enabled_key = 'markdown_enabled';
const svg_enabled_key = 'svg_enabled';
const keep_images_enabled_key = 'keep_images_enabled';
const normalize_empty_links_enabled_key = 'normalize_empty_links_enabled';
const prettier_enabled_key = 'prettier_enabled';
const remove_heading_enabled_key = 'remove_heading_enabled';
const intercept_paste_enabled_key = 'intercept_paste_enabled';

let markdown_enabled = false;
let svg_enabled = false;
let keep_images_enabled = true;
let normalize_empty_links_enabled = true;
let prettier_enabled = true;
let remove_heading_enabled = false;
let intercept_paste_enabled = false;
let intercepted_html: string | null = null;

function load_boolean_setting({ key, default_value }: boolean_setting_options): boolean {
  const stored_value = localStorage.getItem(key);

  if (stored_value == 'true') return true;
  if (stored_value == 'false') return false;

  return default_value;
}

function save_boolean_setting({ key, value }: save_boolean_setting_options): void {
  localStorage.setItem(key, value ? 'true' : 'false');
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
  return { html };
}

function clear_paste_area(): void {
  paste_node.innerHTML = '';
}

function get_conversion_settings(): conversion_settings {
  return {
    markdown_enabled,
    svg_enabled,
    keep_images_enabled,
    normalize_empty_links_enabled,
    prettier_enabled,
    remove_heading_enabled,
    intercept_paste_enabled,
  };
}

async function process_paste_area(): Promise<void> {
  let html: string;

  if (intercept_paste_enabled && intercepted_html !== null) {
    html = intercepted_html;
    intercepted_html = null;
  } else {
    const result = read_paste_area_html();
    html = result.html;
  }

  const clean_html = sanitize_html({ dirty_html: html });
  const settings = get_conversion_settings();

  try {
    if (settings.markdown_enabled) {
      const markdown = await convert_html_to_md({
        html: clean_html,
        preserve_svg: settings.svg_enabled,
        keep_images: settings.keep_images_enabled,
        normalize_empty_links: settings.normalize_empty_links_enabled,
        prettier: settings.prettier_enabled,
        remove_heading: settings.remove_heading_enabled,
      });

      await copy_html_to_clipboard({ html: markdown });
    } else {
      await copy_html_to_clipboard({ html: clean_html });
    }

    flash_copied();
    clear_paste_area();
  } catch (error: unknown) {
    console.error({ error });
    set_status({ text: 'paste' });
  }
}

function schedule_process_paste_area(): void {
  window.setTimeout(process_paste_area, 0);
}

function handle_input(): void {
  schedule_process_paste_area();
}

function render_toggle_button({ node, label, enabled }: render_toggle_options): void {
  node.textContent = enabled ? `${label}: on` : `${label}: off`;
}

function render_all(): void {
  render_toggle_button({ node: markdown_button, label: 'markdown', enabled: markdown_enabled });
  render_toggle_button({ node: svg_button, label: 'keep svg', enabled: svg_enabled });
  render_toggle_button({ node: keep_images_button, label: 'keep images', enabled: keep_images_enabled });
  render_toggle_button({
    node: normalize_empty_links_button,
    label: 'normalize empty links',
    enabled: normalize_empty_links_enabled,
  });
  render_toggle_button({ node: prettier_button, label: 'use prettier', enabled: prettier_enabled });
  render_toggle_button({ node: remove_heading_button, label: 'remove heading on the first line', enabled: remove_heading_enabled });
  render_toggle_button({ node: intercept_paste_button, label: 'intercept paste', enabled: intercept_paste_enabled });
}

function toggle_boolean({
  current,
  key,
}: {
  current: boolean;
  key: string;
}): boolean {
  const next = !current;
  save_boolean_setting({ key, value: next });
  return next;
}

function init_settings(): void {
  markdown_enabled = load_boolean_setting({ key: markdown_enabled_key, default_value: false });
  svg_enabled = load_boolean_setting({ key: svg_enabled_key, default_value: false });
  keep_images_enabled = load_boolean_setting({ key: keep_images_enabled_key, default_value: true });
  normalize_empty_links_enabled = load_boolean_setting({
    key: normalize_empty_links_enabled_key,
    default_value: true,
  });
  prettier_enabled = load_boolean_setting({ key: prettier_enabled_key, default_value: true });
  remove_heading_enabled = load_boolean_setting({ key: remove_heading_enabled_key, default_value: false });
  intercept_paste_enabled = load_boolean_setting({ key: intercept_paste_enabled_key, default_value: false });

  render_all();
}

paste_node.addEventListener('input', handle_input);
paste_node.addEventListener('blur', keep_focus);
paste_node.addEventListener('paste', function (event: ClipboardEvent) {
  if (!intercept_paste_enabled) return;

  event.preventDefault();

  const clipboard_data = event.clipboardData;
  if (!clipboard_data) return;

  const html = clipboard_data.getData('text/html');
  if (html) {
    intercepted_html = html;
    schedule_process_paste_area();
  }
});
document.addEventListener('click', keep_focus);
window.addEventListener('focus', keep_focus);

markdown_button.addEventListener('click', function () {
  markdown_enabled = toggle_boolean({ current: markdown_enabled, key: markdown_enabled_key });
  render_all();
});

svg_button.addEventListener('click', function () {
  svg_enabled = toggle_boolean({ current: svg_enabled, key: svg_enabled_key });
  render_all();
});

keep_images_button.addEventListener('click', function () {
  keep_images_enabled = toggle_boolean({
    current: keep_images_enabled,
    key: keep_images_enabled_key,
  });
  render_all();
});

normalize_empty_links_button.addEventListener('click', function () {
  normalize_empty_links_enabled = toggle_boolean({
    current: normalize_empty_links_enabled,
    key: normalize_empty_links_enabled_key,
  });
  render_all();
});

prettier_button.addEventListener('click', function () {
  prettier_enabled = toggle_boolean({
    current: prettier_enabled,
    key: prettier_enabled_key,
  });
  render_all();
});

remove_heading_button.addEventListener('click', function () {
  remove_heading_enabled = toggle_boolean({
    current: remove_heading_enabled,
    key: remove_heading_enabled_key,
  });
  render_all();
});

intercept_paste_button.addEventListener('click', function () {
  intercept_paste_enabled = toggle_boolean({
    current: intercept_paste_enabled,
    key: intercept_paste_enabled_key,
  });
  render_all();
});

set_status({ text: 'paste' });

init_settings();

window.setTimeout(focus_paste_area, 0);