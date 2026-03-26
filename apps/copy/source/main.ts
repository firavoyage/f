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