import * as cheerio from 'cheerio';

export function remove_html_attrs({ html }: { html: string }): string {
  const $ = cheerio.load(html);

  $('*').each((_index, element) => {
    const $el = $(element);
    const tagName = $el.prop('tagName') as string;

    const attrs = $el.attr();
    for (const attr of Object.keys(attrs || {})) {
      $el.removeAttr(attr);
    }

    if (tagName.toLowerCase() === 'div') {
      const children = $el.contents();
      if (children.length === 0) {
        return;
      }

      let has_only_text = true;
      children.each((_i, child) => {
        if (child.type !== 'text') {
          has_only_text = false;
          return false;
        }
      });

      if (has_only_text) {
        return;
      }

      const has_inline_style = $el.attr('style') !== undefined;
      if (!has_inline_style) {
        return;
      }

      const style = $el.attr('style') || '';
      if (!style.includes('display: inline') && !style.includes('display:inline')) {
        return;
      }

      $el.attr('style', 'display: inline');
    }
  });

  return $.html();
}

export function remove_you_said({ html }: { html: string }): string {
  const $ = cheerio.load(html);

  $('span').each((_index, element) => {
    const $el = $(element);
    const text = $el.text();

    if (text === 'You said: ') {
      const children = $el.contents();
      if (children.length === 1 && children[0].type === 'text') {
        $el.remove();
      }
    }
  });

  return $.html();
}