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