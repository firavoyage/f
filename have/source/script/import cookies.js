;(function () {
  'use strict'

  function export_cookies() {
    const cookie_list = document.cookie
      .split(';')
      .filter(Boolean)
      .map(function (cookie_entry) {
        const separator_index = cookie_entry.indexOf('=')

        return {
          name: cookie_entry.slice(0, separator_index).trim(),
          value: cookie_entry.slice(separator_index + 1).trim(),
        }
      })

    const cookie_data = {
      domain: location.hostname,
      path: location.pathname,
      exported_at: new Date().toISOString(),
      cookies: cookie_list,
    }

    const restore_script = `
(function () {
    "use strict";

    function import_cookies(cookie_data) {
        cookie_data.cookies.forEach(function (cookie) {
            document.cookie =
                encodeURIComponent(cookie.name) + "=" +
                encodeURIComponent(cookie.value) +
                "; path=/";
        });

        console.log("Cookie import completed.");
    }

    const cookie_data = ${JSON.stringify(cookie_data, null, 4)};

    import_cookies(cookie_data);
})();
`

    console.log('Exported cookies:', cookie_data)
    console.log('Restoration script:\n', restore_script)

    navigator.clipboard
      .writeText(restore_script)
      .then(function () {
        console.log('Restoration script copied to clipboard.')
      })
      .catch(function (error) {
        console.error('Clipboard copy failed:', error)
        console.log('Copy the restoration script manually.')
      })

    return cookie_data
  }

  export_cookies()
})()
