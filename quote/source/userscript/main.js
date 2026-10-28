import 'lib/global'
import { bind } from 'lib/web/keyboard'

function has_selection() {
  const selection = window.getSelection()

  return selection.rangeCount > 0
}

function get_selected_text() {
  const selection = window.getSelection()

  return selection.toString()
  // if (selection.rangeCount > 0) {
  //   return selection.toString()
  // } else {
  //   return nil
  // }
}

function get_selected_html() {
  const selection = window.getSelection()

  const range = selection.getRangeAt(0)
  const container = document.createElement('div')

  container.appendChild(range.cloneContents())
  return container.innerHTML
  // if (selection.rangeCount > 0) {
  //   const range = selection.getRangeAt(0)
  //   const container = document.createElement('div')

  //   container.appendChild(range.cloneContents())
  //   return container.innerHTML
  // }
}

bind('q', () => {
  log('quote?')

  
})
