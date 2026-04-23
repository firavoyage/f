import { NodeHtmlMarkdown } from 'node-html-markdown';

const nhm = new NodeHtmlMarkdown({}, {
  // Use a translator object where the key is the uppercase tag name
  'SPAN': ({ node }) => {
    const style = node.getAttribute('style') || '';
    
    // Check if font-weight is bold or a numeric value >= 700
    const isBold = /font-weight\s*:\s*(bold|[789]00)/i.test(style);

    if (isBold) {
      return {
        prefix: '**',
        postfix: '**'
      };
    }

    // Return empty configuration for normal spans so they stay as plain text
    return {};
  }
});

const html = '<p>Normal <span style="font-weight: 700;">Bolded Span</span> text.</p>';
console.log(nhm.translate(html)); 
// Output: Normal **Bolded Span** text.
