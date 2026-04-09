// ==UserScript==
// @name        Dog
// @namespace   http://tampermonkey.net/
// @match       *://*/*
// @grant       none
// ==/UserScript==

(function () {
  'use strict';

  const abilities = {};
  const site = location.href;
  const FETCHER = "http://127.0.0.1:8765";

  let listening = false;

  function siteMatches(regexString) {
    try {
      return new RegExp(regexString).test(site);
    } catch {
      return false;
    }
  }

  function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  async function listen() {
    if (listening) return;
    listening = true;

    while (true) {
      try {
        const res = await fetch(FETCHER + "/listen");
        if (!res.ok) {
          await sleep(3000);
          continue;
        }

        const msg = await res.json();
        const { which, what, how, id } = msg;

        if (!siteMatches(which)) continue;
        if (!abilities[what]) continue;

        const result = await abilities[what](how);

        try {
          await fetch(FETCHER + "/respond", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, site, result })
          });
        } catch {
          // network issue — silently ignore
        }

      } catch {
        // network issue — silently ignore
        await sleep(5000);
      }
    }
  }

  globalThis.dog = {
    pet(newAbilities) {
      Object.assign(abilities, newAbilities);
      listen();
    }
  };

})();

// Test (outside the IIFE)

if (location.hostname.includes("wikipedia.org")) {
  dog.pet({
    async readTitle() {
      return document.title;
    }
  });
}
