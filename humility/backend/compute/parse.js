import { unified } from 'unified'
import remark_parse from 'remark-parse'
import yaml from 'js-yaml'
import { log } from '../log.js'

/**
 * @typedef {{ tool: string, params?: object }} tool_call
 * @typedef {import('./../types').result} result
 */

/** Extract YAML code blocks from markdown AST */
const extract_yaml_blocks = ({ tree }) =>
  tree.children
    .filter(node => node.type === 'code' && node.lang === 'yaml')
    .map(node => node.value)

/** Parse YAML string to objects; will throw if invalid */
const parse_yaml = ({ source }) => {
  const data = yaml.load(source)          // <-- will throw on malformed YAML
  return Array.isArray(data) ? data : []
}

/** Normalize YAML blocks to tool calls; propagate YAML errors */
const normalize_calls = ({ blocks }) =>
  blocks.flatMap(block =>
    parse_yaml({ source: block }).map(({ tool, ...params }) => ({
      tool,
      params: params ?? {}
    }))
  )

/**
 * Parse markdown and extract YAML tool calls
 * @async
 * @param {{ markdown: string }} params
 * @returns {Promise<result>}
 */
export const parse = async ({ markdown }) => {
  if (!markdown?.trim()) {
    await log({ level: 'warn', message: 'Empty markdown' })
    return { type: 'ok', value: [] }
  }

  let tree
  try {
    tree = unified().use(remark_parse).parse(markdown)
  } catch (error) {
    await log({ level: 'error', message: `Markdown parse failed: ${error.message}` })
    return { type: 'err', error: `Markdown parse failed: ${error.message}` }
  }

  const blocks = extract_yaml_blocks({ tree })

  try {
    const calls = normalize_calls({ blocks }) // YAML parse errors propagate here
    return { type: 'ok', value: calls }
  } catch (error) {
    await log({ level: 'error', message: `YAML parse failed: ${error.message}` })
    return { type: 'err', error: `YAML parse failed: ${error.message}` }
  }
}