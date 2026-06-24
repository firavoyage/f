import * as cheerio from 'cheerio';

export function remove_you_said({ html }: { html: string }): string {
  const $ = cheerio.load(html);

  $('span').each((_index, element) => {
    const $el = $(element);
    const text = $el.text();

    if (text === 'You said: ' || text === 'You said:') {
      const children = $el.contents();
      if (children.length === 1 && children[0].type === 'text') {
        $el.remove();
      }
    }
  });

  return $.html();
}