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