import { NodeHtmlMarkdown } from 'node-html-markdown'

const noises = [
  'Use code with caution.',
  'You said: ',
  'You said ',
  'AI Mode reply for ',
  'Gemini said',
]

const threshold = 300

const irrelevant_elements = [
  'button',
  'input',
  'textarea',
]

function remove_invisible_elements(container) {
  const all_elements = container.querySelectorAll('*')
  all_elements.forEach(function (el) {
    const style = window.getComputedStyle(el)
    if (
      style.display === 'none' ||
      style.visibility === 'hidden' ||
      style.visibility === 'collapse' ||
      style.opacity === '0'
    ) {
      el.remove()
    }

    if (irrelevant_elements.includes(el.tagName.toLowerCase())) {
      el.remove()
    }
  })
}

function convert_role_headings(container) {
  const headings = container.querySelectorAll('[role="heading"][aria-level]')
  headings.forEach(function (el) {
    const level = parseInt(el.getAttribute('aria-level'), 10)
    if (!isNaN(level) && level >= 1 && level <= 6) {
      const new_tag = 'h' + level
      const new_el = document.createElement(new_tag)
      for (let i = 0; i < el.attributes.length; i++) {
        const attr = el.attributes[i]
        if (attr.name !== 'role' && attr.name !== 'aria-level') {
          new_el.setAttribute(attr.name, attr.value)
        }
      }
      new_el.innerHTML = el.innerHTML
      el.parentNode.replaceChild(new_el, el)
    }
  })
}

function remove_base64_images(container) {
  const images = container.querySelectorAll('img')
  images.forEach(function (img) {
    const src = img.getAttribute('src') || ''
    if (src.startsWith('data:image/')) {
      img.remove()
    }
  })
}

function handle_copy_event(event) {
  if (event.key !== 'c' && event.key !== 'C') {
    return
  }

  if (!event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
    return
  }

  const selection = window.getSelection()
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
    return
  }

  event.stopPropagation()
  event.preventDefault()

  const text = selection.toString()

  if (text.length <= threshold) {
    navigator.clipboard.writeText(text)
    return 
  }

  const range = selection.getRangeAt(0)
  const container = document.createElement('div')
  container.appendChild(range.cloneContents())

  document.body.appendChild(container)
  remove_invisible_elements(container)
  convert_role_headings(container)
  remove_base64_images(container)
  document.body.removeChild(container)

  const nhm = new NodeHtmlMarkdown()
  let markdown = nhm.translate(container.innerHTML)

  let lines = markdown.split('\n')
  if (lines.length > 0) {
    let first_line_index = 0
    while (
      first_line_index < lines.length &&
      lines[first_line_index].trim() === ''
    ) {
      first_line_index++
    }
    if (first_line_index < lines.length) {
      if (!lines[first_line_index].startsWith('# ')) {
        lines[first_line_index] = '# ' + lines[first_line_index]
      }
    }
  }
  markdown = lines.join('\n')

  for (const item of noises) {
    markdown = markdown.replaceAll(item, '')
  }

  navigator.clipboard.writeText(markdown)
}

window.addEventListener('keydown', handle_copy_event, true)
