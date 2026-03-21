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
