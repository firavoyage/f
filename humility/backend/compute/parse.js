import { unified } from 'unified'
import remark_parse from 'remark-parse'
import yaml from 'js-yaml'

const extract_yaml_blocks = ({ tree }) =>
  tree.children
    .filter(node => node.type === 'code' && node.lang === 'yaml')
    .map(node => node.value)

const parse_yaml = ({ source }) => {
  const data = yaml.load(source)
  return Array.isArray(data) ? data : []
}

const normalize_calls = ({ blocks }) =>
  blocks.flatMap(block =>
    parse_yaml({ source: block }).map(({ tool, ...params }) => ({
      tool,
      params: params ?? {}
    }))
  )

export const parse = async ({ markdown }) => {
  const tree = unified()
    .use(remark_parse)
    .parse(markdown)

  const blocks = extract_yaml_blocks({ tree })
  return normalize_calls({ blocks })
}

