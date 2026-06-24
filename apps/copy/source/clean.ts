import * as cheerio from 'cheerio';

export function remove_html_attrs({ html }: { html: string }): string {
  const codeBlockPattern = /(`{3,})[\s\S]*?\1/g;
  
  let result = html;
  const codeBlocks: string[] = [];
  
  result = result.replace(codeBlockPattern, (match) => {
    codeBlocks.push(match);
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  result = result.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s+[^>]*>/g, '<$1>');

  result = result.replace(/__CODE_BLOCK_(\d+)__/g, (_match, index) => {
    return codeBlocks[parseInt(index, 10)];
  });

  return result;
}

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

  let result = $.html();

  if (result.startsWith('<html><head></head><body>')) {
    result = result.slice('<html><head></head><body>'.length);
  }

  if (result.endsWith('</body></html>')) {
    result = result.slice(0, -'</body></html>'.length);
  }

  return result;
}