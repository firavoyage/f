// ==UserScript==
// @name         Force Google US Geolocation
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Force Google Search to use gl=us parameter for English results, regardless of IP location.
// @author       You
// @match        *://www.google.com/search*
// @match        *://www.google.co.jp/search*
// @match        *://www.google.com/webhp*
// @match        *://www.google.co.jp/webhp*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";

  // Function to check if the URL already has a 'gl' parameter
  function hasGlParam(url) {
    return url.includes("&gl=") || url.includes("?gl=");
  }

  // Function to add or replace the gl parameter to 'us'
  function enforceUSgl(url) {
    let newUrl;
    // Check if the URL already has a gl parameter
    if (hasGlParam(url)) {
      // Replace any existing gl value with 'us'
      newUrl = url.replace(/([?&]gl=)[^&]*/, "$1us");
    } else {
      // If no gl parameter exists, add it
      // Check if the URL has a query string already (using ?)
      let separator = url.includes("?") ? "&" : "?";
      newUrl = url + separator + "gl=us";
    }
    return newUrl;
  }

  // Get the current URL
  let currentUrl = window.location.href;

  // Enforce the gl=us parameter on the current URL
  let desiredUrl = enforceUSgl(currentUrl);

  // If the URL was modified, redirect to the new URL
  if (desiredUrl !== currentUrl) {
    window.location.replace(desiredUrl);
  }
})();
