// compute/parse.js
import { readFile } from "fs/promises";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";

/**
 * parse(markdown)
 * 
 * Extract all code blocks of language "tool" from a Markdown string.
 * 
 * @param {string} markdown - The Markdown content to parse.
 * @returns {Array<string>} - Array of code block contents with lang "tool".
 */
export function parse(markdown) {
    const ast = unified().use(remarkParse).parse(markdown);
    const blocks = [];

    visit(ast, "code", node => {
        if (node.lang === "tool") {
            blocks.push(node.value);
        }
    });

    return blocks;
}