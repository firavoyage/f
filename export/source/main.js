import { h, render } from 'preact'
import { useState } from 'preact/hooks'
import { parse, stringify } from 'yaml'
import { copy } from 'lib/web/clipboard'

import { GM_registerMenuCommand, GM_setValue, GM_getValue } from '$'
import 'lib/global'
import './popup.css'

import TurndownService from 'turndown'
import { gfm } from '@joplin/turndown-plugin-gfm'

const default_config = {
  format: 'markdown', // text, markdown, html
  copy_text_threshold: 300,
  tags_to_preserve: ['svg'],
  tags_to_preserve_one_layer: ['mark', 'summary', 'details'],
  tags_to_remove: [
    'script',
    'style',
    'noscript',
    'iframe',
    'button',
    'input',
    'textarea',
  ],
  should_normalize_heading: true,
  fallback_element: 'body',
  texts_to_strip: ['Use code with caution.', 'You said: '],
}

function Config({ onClose }) {
  const [config, set_config_value] = useState(GM_getValue('export_config', ''))

  const handleSave = () => {
    set_config(config)

    onClose()
  }

  const handleOverlayClick = (e) => {
    if (e.target.className === 'export_config_overlay') {
      onClose()
    }
  }

  // Structure: h(tag_or_component, attributes_object, ...children)
  return h(
    'div',
    { className: 'export_config_overlay', onClick: handleOverlayClick },
    h(
      'div',
      { className: 'export_config_popup' },
      h('textarea', {
        type: 'text',
        value: config,
        onInput: (e) => set_config_value(e.target.value),
        placeholder: 'Enter key...',
      }),
      h(
        'div',
        { className: 'export_config_button_group' },
        h(
          'button',
          { className: 'export_config_cancel', onClick: onClose },
          'Cancel',
        ),
        h(
          'button',
          { className: 'export_config_save', onClick: handleSave },
          'Save',
        ),
      ),
    ),
  )
}

function open_config() {
  if (document.querySelector('.export_config_overlay')) return

  const container = document.createElement('div')
  document.body.appendChild(container)

  const closePopup = () => {
    container.remove()
  }

  // Mount the component root element
  render(h(Config, { onClose: closePopup }), container)
}

GM_registerMenuCommand('config', open_config)

function set_config(value) {
  if (is(value, 'string')) {
    if (value == '') {
      set_config(default_config)
    } else {
      GM_setValue('export_config', value)
    }
  } else {
    GM_setValue('export_config', stringify(value))
  }
}

function get_config() {
  return parse(GM_getValue('export_config', ''))
}

/**
 * flatten shadow dom and inline styling
 */
function serialize_node(sourceNode) {
  // 1. Base case: Handle text nodes, comments, etc.
  if (sourceNode.nodeType !== Node.ELEMENT_NODE) {
    return sourceNode.cloneNode(false)
  }

  // 2. Create a shallow clone of the element
  const clonedNode = sourceNode.cloneNode(false)

  // 3. Diff and Inline Non-Default Styles
  // Create a clean dummy element of the same tag type to discover browser defaults
  const dummy = document.createElement(sourceNode.tagName)
  dummy.style.visibility = 'hidden'
  dummy.style.position = 'absolute'

  // Attach dummy to the active parent or body to allow correct evaluation
  const parent = sourceNode.parentElement || document.body
  parent.appendChild(dummy)

  const liveStyles = window.getComputedStyle(sourceNode)
  const defaultStyles = window.getComputedStyle(dummy)

  // Loop through all computed properties and apply differences
  for (const property of liveStyles) {
    const liveValue = liveStyles.getPropertyValue(property)
    const defaultValue = defaultStyles.getPropertyValue(property)

    if (liveValue !== defaultValue) {
      clonedNode.style.setProperty(property, liveValue)
    }
  }

  // Clean up the dummy baseline immediately
  dummy.remove()

  // 4. Traverse and flatten the child nodes
  // Detect open shadow root; default to light DOM children if absent
  const hasShadow =
    sourceNode.shadowRoot && sourceNode.shadowRoot.mode === 'open'
  const sourceChildren = hasShadow
    ? Array.from(sourceNode.shadowRoot.childNodes)
    : Array.from(sourceNode.childNodes)

  for (const child of sourceChildren) {
    if (child.localName === 'slot') {
      // Re-map projected content inside web component slots
      const assignedNodes = child.assignedNodes()
      for (const assignedNode of assignedNodes) {
        clonedNode.appendChild(serialize_node(assignedNode))
      }
    } else {
      // Recurse normally into child tree branches
      clonedNode.appendChild(serialize_node(child))
    }
  }

  return clonedNode
}

function get_selection_text() {
  const selection = window.getSelection()
  return selection ? selection.toString() : ''
}

function get_selection_node() {
  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0) {
    return null
  }
  const range = selection.getRangeAt(0)
  return range.commonAncestorContainer
}

/**
 * remove hidden elements and standardize text styling on html tag
 */
function normalize_node(parent_node) {
  if (!parent_node || !(parent_node instanceof Element)) return

  // Retrieve all descendant elements and include the parent itself
  const all_elements = Array.from(parent_node.querySelectorAll('*'))
  all_elements.push(parent_node)

  // Process in reverse (bottom-up) to safely mutate/remove nodes without breaking traversal
  for (let i = all_elements.length - 1; i >= 0; i--) {
    const el = all_elements[i]

    // 1. Remove hidden nodes & CSS hiding hacks on inline styling
    if (is_hidden_node(el) || is_base64_image(el)) {
      el.remove()
      continue
    }

    // 2. Standardize tags supported by Markdown based on inline styles
    standardize_markdown_tag(el)
  }

  return parent_node
}

function is_hidden_node(el) {
  // HTML hidden attribute
  if (el.hasAttribute('hidden')) return true

  // ARIA hidden attribute
  if (el.getAttribute('aria-hidden') === 'true') return true

  const style = el.style
  if (!style) return false

  // Common CSS hidden properties
  if (style.display === 'none') return true
  // if (style.blockSize === '1px') return true
  // if (style.inlineSize === '1px') return true
  if (style.visibility === 'hidden') return true
  if (style.opacity === '0') return true

  // Zero-dimension sizing hacks
  if (
    (style.width === '0px' || style.width === '0') &&
    (style.height === '0px' || style.height === '0')
  ) {
    return true
  }

  // Off-screen positioning hacks (e.g., position: absolute with huge negative offset)
  if (style.position === 'absolute' || style.position === 'fixed') {
    const left = parseInt(style.left, 10)
    const top = parseInt(style.top, 10)
    if ((!isNaN(left) && left < -999) || (!isNaN(top) && top < -999)) {
      return true
    }
  }

  return false
}

function is_base64_image(el) {
  // Check if it's an img tag with a data URI (base64 image source)
  if (el.tagName && el.tagName.toLowerCase() === 'img') {
    const src = el.getAttribute('src')
    if (src && src.trim().toLowerCase().startsWith('data:image/')) {
      return true
    }
  }
  return false
}

function standardize_markdown_tag(el) {
  const style = el.style
  if (!style) return

  let target_tag = null

  // Check font-weight for bold -> <strong> (Markdown ** / __)
  const font_weight = style.fontWeight
  if (
    font_weight === 'bold' ||
    font_weight === 'bolder' ||
    parseInt(font_weight, 10) >= 600
  ) {
    target_tag = 'strong'
  }

  // Check font-style for italic -> <em> (Markdown * / _)
  const font_style = style.fontStyle
  if (font_style === 'italic' || font_style === 'oblique') {
    target_tag = 'em'
  }

  // Check text-decoration for strikethrough -> <del> (Markdown ~~text~~)
  const text_decoration = style.textDecoration
  if (text_decoration && text_decoration.includes('line-through')) {
    target_tag = 'del'
  }

  // If a standard markdown tag is matched and the current element isn't already that tag, convert it
  if (target_tag && el.tagName.toLowerCase() !== target_tag) {
    const new_element = document.createElement(target_tag)

    // Move all children over to the new element
    while (el.firstChild) {
      new_element.appendChild(el.firstChild)
    }

    // Replace the old element with the standardized one
    el.replaceWith(new_element)
  }
}

function standardize_heading(parent_node) {
  const headings = parent_node.querySelectorAll('[role="heading"][aria-level]')

  headings.forEach((el) => {
    const level = el.getAttribute('aria-level')
    const level_num = parseInt(level, 10)

    if (level_num >= 1 && level_num <= 6) {
      const new_tag = `h${level_num}`

      if (el.tagName.toLowerCase() !== new_tag) {
        const new_el = document.createElement(new_tag)

        // Copy all attributes from the original element
        Array.from(el.attributes).forEach((attr) => {
          new_el.setAttribute(attr.name, attr.value)
        })

        // Move all child nodes to the new element
        while (el.firstChild) {
          new_el.appendChild(el.firstChild)
        }

        // Replace the old element with the new heading element
        el.replaceWith(new_el)
      }
    }
  })

  return parent_node
}

function normalize_heading(parent_node) {
  const headings = Array.from(
    parent_node.querySelectorAll('h1, h2, h3, h4, h5, h6'),
  )
  if (headings.length === 0) return parent_node

  const levels = headings.map((h) => parseInt(h.tagName.substring(1), 10))
  const highest_level = Math.min(...levels)

  if (headings.length === 1) {
    const current_level = levels[0]
    if (current_level !== 1) {
      const new_heading = document.createElement('h1')
      new_heading.innerHTML = headings[0].innerHTML
      for (const attr of headings[0].attributes) {
        new_heading.setAttribute(attr.name, attr.value)
      }
      headings[0].replaceWith(new_heading)
    }
  } else {
    const level_delta = 2 - highest_level

    headings.forEach((h, index) => {
      const current_level = levels[index]
      let new_level = current_level + level_delta

      if (new_level > 6) new_level = 6
      if (new_level < 1) new_level = 1

      if (new_level !== current_level) {
        const new_heading = document.createElement(`h${new_level}`)
        new_heading.innerHTML = h.innerHTML
        for (const attr of h.attributes) {
          new_heading.setAttribute(attr.name, attr.value)
        }
        h.replaceWith(new_heading)
        headings[index] = new_heading
      }
    })

    const first_heading = headings[0]
    const h1_node = document.createElement('h1')
    h1_node.innerHTML = first_heading.innerHTML
    for (const attr of first_heading.attributes) {
      h1_node.setAttribute(attr.name, attr.value)
    }
    parent_node.prepend(h1_node)
  }

  return parent_node
}

import * as cheerio from 'cheerio'

function clean_html(html) {
  const $ = cheerio.load(html)

  // 1. Instantly purge structural garbage along with its inner text
  $('script, style, noscript, iframe').remove()
  // $('script, style, noscript, iframe, form, nav, footer, ads').remove();

  // // 2. Standardize tables that are missing <thead> blocks (Fixes turndown-plugin-gfm crash)
  // $('table').each((_, table) => {
  //   const $table = $(table);
  //   if ($table.find('thead').length === 0) {
  //     const firstRow = $table.find('tr').first();
  //     // Move the first row into a newly injected <thead> block
  //     $table.prepend($('<thead><\/thead>').append(firstRow));
  //   }
  // });

  return $.html()
}

const log = console.log

window.addEventListener(
  'keydown',
  (e) => {
    // Strictly match Ctrl + C, ensuring Alt, Shift, and Meta (Cmd) are NOT pressed
    const is_exact_ctrl_c =
      e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && e.code === 'KeyC'

    if (!is_exact_ctrl_c) {
      return
    }

    e.stopImmediatePropagation()
    e.preventDefault()

    log('copy')

    const {
      format,
      copy_text_threshold,
      tags_to_preserve,
      tags_to_preserve_one_layer,
      tags_to_remove,
      should_normalize_heading,
      fallback_element,
      texts_to_strip,
    } = get_config()

    let node = get_selection_node()
    const text = get_selection_text()

    if (
      (text.length != 0 && text.length <= copy_text_threshold) ||
      format == 'text'
    ) {
      copy(text)
      return
    }

    if (text.length == 0) {
      node = document.querySelector(fallback_element)
    }

    if (format == 'html') {
      copy(node.outerHTML)
      return
    }

    log(node)

    log('node', node, node.outerHTML)

    node = serialize_node(node)
    log('serialized_node', node, node.outerHTML)

    node = normalize_node(node)
    log('normalized_node', node, node.outerHTML)

    node = standardize_heading(node)
    log('standarized heading', node, node.outerHTML)

    if (should_normalize_heading) {
      node = normalize_heading(node)
      log('normalized_heading_node', node, node.outerHTML)
    }

    const turndown = new TurndownService({
      // Heading syntax format
      headingStyle: 'atx', // 'setext' (___ / ===) or 'atx' (#, ##, ###)

      // Markdown block horizontal line character layout
      hr: '---', // Any valid CommonMark thematic break string (e.g., '---', '***')

      // Bullet character for unordered lists
      bulletListMarker: '-', // '*', '-', or '+'

      // Structure style for multi-line code segments
      codeBlockStyle: 'indented', // 'indented' (4 spaces) or 'fenced' (``` / ~~~)

      // Character used to fence code blocks if codeBlockStyle is 'fenced'
      fence: '```', // '```' or '~~~'

      // Formatting boundary for <em> tags
      emDelimiter: '_', // '_' or '*'

      // Formatting boundary for <strong> tags
      strongDelimiter: '**', // '**' or '__'

      // Layout formatting for hyperlinked URLs
      linkStyle: 'inlined', // 'inlined' ([text](url)) or 'referenced' ([text][1])

      // System fallback if linkStyle is set to 'referenced'
      linkReferenceStyle: 'full', // 'full' ([text][text]), 'collapsed' ([text][]), or 'shortcut' ([text])

      // Handles preformatted blocks strictly as code snippets
      preformattedCode: true, // false (renders as code blocks only if <pre> contains <code>) or true
    })

    turndown.keep(tags_to_preserve)

    turndown.remove(tags_to_remove)

    turndown.addRule('preserve one layer', {
      // Target the elements you want to retain as HTML wrappers
      filter: tags_to_preserve_one_layer,

      replacement: function (content, node) {
        // 1. Convert the tag name to lowercase
        const tagName = node.nodeName.toLowerCase()

        // 2. Extract any attributes if they exist (e.g., <details open>)
        const attributes = Array.from(node.attributes)
          .map((attr) => ` ${attr.name}="${attr.value}"`)
          .join('')

        // 3. Return the outer HTML wrapper, but inject the already-converted 'content' inside
        // (We add newlines around block elements like details to maintain markdown separation)
        if (tagName === 'details') {
          return `\n\n<details${attributes}>\n${content}\n</details>\n\n`
        }

        return `<${tagName}${attributes}>${content}</${tagName}>`
      },
    })

    turndown.addRule('preserveSvg', {
      filter: 'svg',
      replacement: function (content, node) {
        // node is a real DOM element (or a virtual DOM element via JSDOM/Cheerio)
        // node.outerHTML gives us the exact string representation of the SVG
        return `\n\n${node.outerHTML}\n\n`
      },
    })

    turndown.use(gfm)

    // Stop Turndown from adding ugly backslashes to normal punctuation/markdown symbols
    turndown.escape = function (string) {
      // Only escape syntax markers if absolutely necessary, or return string as-is
      // For LLM usage or clean pipelines, returning the string directly is often preferred:
      return string
    }

    let html = node.outerHTML

    // html = clean_html(html)

    let markdown = turndown.turndown(html)

    log('markdown', markdown)

    markdown = markdown
      .replace(/\n{3,}/g, '\n\n') // Collapse 3+ structural newlines into a standard double newline
      .replace(/[ \t]+\n/g, '\n') // Drop invisible trailing spaces at end of text lines
      .trim() // Clean up absolute leading/trailing wrapper boundaries

    for (const text of texts_to_strip) {
      markdown = markdown.replaceAll(text, '')
    }

    copy(markdown)
  },
  { capture: true },
)

if (get_config() == nil) {
  set_config(default_config)
}
