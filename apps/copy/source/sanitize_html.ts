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