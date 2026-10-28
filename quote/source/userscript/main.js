import 'lib/global'
import { bind } from 'lib/web/keyboard'
import { now, format } from 'lib/time'

async function post(payload) {
  const url = 'https://localhost:9005/api/save_quote'

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw err(`request failed, status: ${response.status}`)
  }

  const result = await response.json()
  return result
}

function has_selection() {
  const selection = window.getSelection()

  // prevent false positives
  return selection.rangeCount > 0 && get_selected_text() != ''
  // return selection.rangeCount > 0
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

function quote() {
  return {
    time: now().format(),
    timestamp: now().timestamp,
    offset: now().offset,
    text: get_selected_text(),
    html: get_selected_html(),
    url: location.href,
  }
}

bind('q', () => {
  log('quote?')

  if (has_selection()) {
    const quotation = quote()
    log('quote', quotation)
    post(quotation)
  } else {
    log('no selection to quote')
  }
})
