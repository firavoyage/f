import * as cheerio from 'cheerio';
import DOMPurify from 'dompurify';

const sanitize_config = {
  USE_PROFILES: { html: true, mathMl: true },
  ALLOW_DATA_ATTR: false,
  ALLOW_ARIA_ATTR: false,
  FORBID_ATTR: ['class', 'id'],
  FORBID_TAGS: [
    'script',
    'style',
    'noscript',
    'template',
    'iframe',
    'canvas',
    'embed',
    'object',
    'button',
    'input',
    'textarea',
    'select',
    'option',
    'optgroup',
    'label',
    'fieldset',
    'legend',
    'datalist',
    'output',
    'form',
    'dialog',
    'marquee',
    'portal',
    'frame',
    'frameset',
  ],
  KEEP_CONTENT: true,
};

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

const remove_empty_media_elements = ({
  html,
}: {
  html: string;
}): string => {
  const $ = cheerio.load(html);

  $('img, audio, video')
    .filter((_index, element) => ($(element).attr('src') || '').trim().length === 0)
    .remove();

  const clean_html = $.html();

  console.log({
    action: 'remove_empty_media_elements',
    input_length: html.length,
    output_length: clean_html.length,
  });

  return clean_html;
};

let has_added_sanitize_attribute_hook = false;

if (!has_added_sanitize_attribute_hook) {
  DOMPurify.addHook('uponSanitizeAttribute', (_node, current_data) => {
    const attribute_name = current_data.attrName.toLowerCase();
    const attribute_value = current_data.attrValue;

    if (
      attribute_name === 'id' ||
      attribute_name === 'class' ||
      attribute_name.startsWith('item')
    ) {
      current_data.keepAttr = false;
      return;
    }

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

  has_added_sanitize_attribute_hook = true;
}

export const sanitize_html = ({ dirty_html }: { dirty_html: string }): string => {
  const sanitized_html = DOMPurify.sanitize(dirty_html, sanitize_config);
  const final_html = remove_empty_media_elements({ html: sanitized_html });

  console.log({
    action: 'sanitize_html',
    dirty_length: dirty_html.length,
    clean_length: final_html.length,
  });

  return final_html;
};

export const get_plain_text = ({ html }: { html: string }): string => {
  const document = new DOMParser().parseFromString(html, 'text/html');
  const plain_text = document.body.textContent || '';

  console.log({
    action: 'get_plain_text',
    html_length: html.length,
    text_length: plain_text.length,
  });

  return plain_text;
};