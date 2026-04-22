function can_write_text(): boolean {
  return Boolean(navigator.clipboard && navigator.clipboard.writeText);
}

export async function copy_html_to_clipboard({ html }: { html: string }): Promise<void> {
  if (can_write_text()) {
    await navigator.clipboard.writeText(html);

    console.log({
      action: 'copy_html_to_clipboard',
      length: html.length,
    });

    return;
  }

  console.log({
    action: 'copy_html_to_clipboard',
    mode: 'clipboard_unavailable',
    length: html.length,
  });
}

function escape_html({ text }: { text: string }): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function text_to_html({ text }: { text: string }): string {
  return escape_html({ text }).replaceAll('\n', '<br />');
}