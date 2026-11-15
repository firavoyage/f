// deprecated for sec limitation, use browser ext instead

;(function () {
  'use strict'

  function copy_to_clipboard(text) {
    const text_area = document.createElement('textarea')

    text_area.value = text
    text_area.style.position = 'fixed'
    text_area.style.top = '0'
    text_area.style.left = '0'
    text_area.style.width = '2px'
    text_area.style.height = '2px'
    text_area.style.opacity = '1'
    text_area.style.zIndex = '999999'

    document.body.appendChild(text_area)

    text_area.focus()
    text_area.select()
    text_area.setSelectionRange(0, text.length)

    let copy_success = false

    try {
      copy_success = document.execCommand('copy')
    } catch (error) {
      console.error('Clipboard error:', error)
    }

    text_area.remove()

    if (copy_success) {
      console.log('[+] Import script copied.')
    } else {
      console.warn('[!] Automatic copy failed.')
      console.log('Select and copy the script manually:')
      console.log(text)
    }

    return copy_success
  }

  function get_cookies() {
    return document.cookie
      .split(';')
      .filter(function (entry) {
        return entry.trim().length > 0
      })
      .map(function (entry) {
        const separator_index = entry.indexOf('=')

        return {
          name: entry.slice(0, separator_index).trim(),
          value: entry.slice(separator_index + 1).trim(),
        }
      })
  }

  function build_import_script(cookie_data) {
    return [
      '(function () {',
      '    "use strict";',
      '',
      '    function import_cookies(cookie_data) {',
      '        cookie_data.cookies.forEach(function (cookie) {',
      '            const cookie_string =',
      "                encodeURIComponent(cookie.name) + '=' +",
      '                encodeURIComponent(cookie.value) +',
      "                '; path=/';",
      '',
      '            document.cookie = cookie_string;',
      '        });',
      '',
      "        console.log('[+] Cookie import attempted.');",
      "        console.log('[+] Cookies visible after import:', document.cookie);",
      '    }',
      '',
      '    const cookie_data = ' + JSON.stringify(cookie_data, null, 4) + ';',
      '',
      '    if (location.hostname !== cookie_data.domain) {',
      "        console.error('[!] Wrong domain. Expected:', cookie_data.domain);",
      '        return;',
      '    }',
      '',
      '    import_cookies(cookie_data);',
      '})();',
    ].join('\n')
  }

  function export_cookies() {
    const cookie_data = {
      domain: location.hostname,
      exported_at: new Date().toISOString(),
      cookies: get_cookies(),
    }

    const import_script = build_import_script(cookie_data)

    console.log('========== COOKIE EXPORT ==========')
    console.log('Domain:', cookie_data.domain)
    console.log('Exported:', cookie_data.exported_at)
    console.log('Cookie count:', cookie_data.cookies.length)
    console.table(cookie_data.cookies)

    console.log('========== IMPORT SCRIPT ==========')
    console.log(import_script)

    copy_to_clipboard(import_script)

    return {
      cookie_data: cookie_data,
      import_script: import_script,
    }
  }

  export_cookies()
})()
