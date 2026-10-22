import { h, render } from 'preact'
import { useState } from 'preact/hooks'
import { parse, stringify } from 'yaml'
import { copy } from 'lib/web/clipboard'

import { GM_registerMenuCommand, GM_setValue, GM_getValue } from '$'
import 'lib/global'
import './popup.css'

import TurndownService from 'turndown'
import { gfm } from '@joplin/turndown-plugin-gfm'

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
    GM_setValue('export_config', value)
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

function normalize_node(parent_node) {
  if (!parent_node || !(parent_node instanceof Element)) return

  // Retrieve all descendant elements and include the parent itself
  const all_elements = Array.from(parent_node.querySelectorAll('*'))
  all_elements.push(parent_node)

  // Process in reverse (bottom-up) to safely mutate/remove nodes without breaking traversal
  for (let i = all_elements.length - 1; i >= 0; i--) {
    const el = all_elements[i]

    // 1. Remove hidden nodes & CSS hiding hacks on inline styling
    if (is_hidden_node(el)) {
      el.remove()
      continue
    }

    // 2. Standardize tags supported by Markdown based on inline styles
    standardize_markdown_tag(el)
  }
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

    const node = get_selection_node()
    const text = get_selection_text()

    const {
      copy_text_threshold,
      tags_to_preserve,
      tags_to_preserve_one_layer,
      should_normalize_heading,
      fallback_element,
    } = get_config()

    const turndownService = new TurndownService({
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

    turndownService.keep(tags_to_preserve)

    turndownService.addRule('preserve one layer', {
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

    turndownService.use(tables)

    
  },
  { capture: true },
)

if (get_config() == nil) {
  set_config({
    copy_text_threshold: 300,
    tags_to_preserve: ['svg'],
    tags_to_preserve_one_layer: ['mark', 'summary', 'details'],
    should_normalize_heading: true,
    fallback_element: 'body',
  })
}
