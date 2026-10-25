// compute/test/parse.js
import { parse } from "../parse.js";

function test_parse() {
    const markdown = `
# Example Markdown

Some text here.

\`\`\`tool
echo "Hello, world!"
\`\`\`

Some other text.

\`\`\`js
console.log("This should not appear");
\`\`\`

\`\`\`tool
ls -la
\`\`\`
`;

    const blocks = parse(markdown);
    console.log("Tool code blocks found:", blocks);
}

test_parse();