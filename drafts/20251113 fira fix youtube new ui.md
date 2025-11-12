<!-- fix the position, not the smoothed icons -->

# a

write a tampermonkey user script working like stylus

```css
/* ==UserStyle==
@name         YOUTUBE 2025 - FIX NEW UI
@version      20251022.14.45
@namespace    ?
@description  Makes new UI look like an old one
@license      No License
==/UserStyle== */

@-moz-document domain("youtube.com") {
  :root {
    --toolbar-height: 52px;

    --element-margin: 6px;
    --element-height: calc(var(--toolbar-height) - var(--element-margin));

    --element-fs-margin: 2px;

    --bg-color: #0000;
  }

  /* SIZE */
  .ytp-delhi-modern .ytp-tooltip {
    margin-top: 12px !important;
  }

  .ytp-delhi-modern .ytp-chrome-bottom,
  .ytp-delhi-modern .ytp-chrome-controls,
  .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode) .ytp-chrome-bottom,
  .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode)
    .ytp-right-controls
    .ytp-right-controls-right,
  .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode)
    .ytp-right-controls
    .ytp-right-controls-left {
    height: var(--toolbar-height) !important;
    line-height: var(--toolbar-height) !important;
  }

  .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode)
    .ytp-progress-bar-container,
  .ytp-delhi-modern:not(.ytp-player-minimized) .ytp-progress-bar-container {
    bottom: var(--toolbar-height) !important;
  }

  /* Overlays container */
  .ytp-delhi-modern.ytp-big-mode.ytp-fullscreen-grid-peeking
    .ytp-overlays-container,
  .ytp-delhi-modern.ytp-fullscreen-grid-peeking .ytp-overlays-container {
    bottom: calc(var(--toolbar-height) + 20px) !important;
  }

  .ytp-delhi-modern .ytp-chrome-controls .ytp-right-controls,
  .ytp-delhi-modern .ytp-prev-button:not(.ytp-miniplayer-button-container > *),
  .ytp-delhi-modern
    .ytp-chrome-controls
    .ytp-next-button:not(.ytp-miniplayer-button-container > *).ytp-playlist-ui {
    margin: var(--element-margin) 0 !important;
    padding: 0 !important;
  }

  .ytp-delhi-modern .ytp-chrome-controls .ytp-play-button {
    margin: var(--element-margin) 0 !important;
  }

  /* Volume */
  .ytp-delhi-modern.ytp-delhi-horizontal-volume-controls .ytp-volume-area {
    margin: var(--element-margin) 0 !important;
  }

  .ytp-delhi-modern .ytp-time-display:not(.ytp-miniplayer-ui *),
  .ytp-delhi-modern .ytp-chapter-container {
    padding: var(--element-margin) 0 !important;
  }

  /* Play button */
  .ytp-delhi-modern .ytp-chrome-controls .ytp-play-button {
    --size: var(--element-height);
    height: var(--size) !important;
    width: var(--size) !important;
    top: -2px;
  }

  /* Play icon */
  .ytp-delhi-modern-icons .ytp-chrome-controls .ytp-play-button svg {
    padding: 10px !important;
    --size: 26px;
    height: var(--size) !important;
    width: var(--size) !important;
  }

  /* gradient */
  .ytp-chrome-bottom:after {
    content: "";
    position: absolute;
    left: -100px;
    bottom: -2px;
    width: calc(100% + 200px);
    background: linear-gradient(0deg, #000a, #0000);
    height: calc(var(--toolbar-height) + 10px);
    z-index: -1;
  }

  /* fullscreen fixes */

  .ytp-delhi-modern.ytp-delhi-horizontal-volume-controls.ytp-big-mode:not(
      .ytp-xsmall-width-mode
    )
    .ytp-volume-area,
  .ytp-big-mode .ytp-volume-slider,
  .ytp-delhi-modern .ytp-chrome-controls .ytp-mute-button,
  .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode) .ytp-time-display,
  .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode)
    .ytp-chrome-controls
    .ytp-next-button:not(.ytp-miniplayer-button-container > *),
  .ytp-big-mode.ytp-delhi-modern
    .ytp-chrome-controls
    .ytp-prev-button:not(ytp-miniplayer-button-container > *),
  .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode) .ytp-time-wrapper,
  .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode)
    .ytp-chapter-title.ytp-button {
    height: var(--element-height) !important;
    min-height: var(--element-height) !important;
    line-height: var(--element-height) !important;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    --element-margin: 2px;
  }

  .ytp-big-mode.ytp-delhi-modern-icons .ytp-chrome-controls .ytp-button svg,
  .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode)
    .ytp-chrome-controls
    .ytp-next-button:not(.ytp-miniplayer-button-container > *)
    svg,
  .ytp-big-mode.ytp-delhi-modern
    .ytp-chrome-controls
    .ytp-prev-button:not(ytp-miniplayer-button-container > *)
    svg {
    padding-top: 14px;
  }

  .ytp-big-mode.ytp-delhi-modern.ytp-delhi-horizontal-volume-controls
    .ytp-volume-area
    .ytp-volume-icon
    svg {
    padding-top: 10px;
  }

  /* COLORS */

  .ytp-delhi-modern .ytp-time-wrapper:not(.ytp-miniplayer-ui *),
  .ytp-delhi-modern.ytp-delhi-horizontal-volume-controls .ytp-volume-area,
  .ytp-delhi-modern .ytp-chrome-controls .ytp-play-button,
  .ytp-delhi-modern .ytp-chrome-controls .ytp-right-controls,
  .ytp-delhi-modern .ytp-chrome-controls > * > *,
  .ytp-delhi-modern .ytp-chapter-title.ytp-button {
    background: var(--bg-color) !important;
  }

  /* play and fullscreen buttons clickable in corners */

  .ytp-fullscreen-button {
    overflow: unset !important;
  }

  .ytp-fullscreen-button::after {
    content: "";
    position: absolute;
    inset-block: -10px;
    inset-inline: 0px;
    width: 220px !important;
    height: 200px;
    /* 	background: #f00; */
  }
}

@-moz-document domain("youtube.com") {
  /* Video endscreen fix */

  .ytp-fullscreen-grid-active.html5-video-player.ended-mode
    .ytp-modern-videowall-still:nth-child(n + 4) {
    display: block;
  }

  .ytp-fullscreen-grid-active.html5-video-player.ended-mode
    .ytp-modern-videowall-still:nth-child(n + 11),
  .ytp-fullscreen-grid-expand-button {
    display: none;
  }

  .ytp-fullscreen-grid-active.ytp-grid-scrollable .ytp-fullscreen-grid {
    top: 10%;
  }

  .ytp-fullscreen-grid-stills-container {
    grid-template-columns: repeat(5, 1fr);
  }
}
```

---

Here's a Tampermonkey user script that works like Stylus to apply your YouTube CSS:

```javascript
// ==UserScript==
// @name         YOUTUBE 2025 - FIX NEW UI
// @namespace    http://tampermonkey.net/
// @version      20251022.14.45
// @description  Makes new UI look like an old one
// @author       You
// @match        *://*.youtube.com/*
// @grant        none
// @license      No License
// ==/UserScript==

(function () {
  "use strict";

  // Create style element
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = `
:root{
    --toolbar-height: 52px;
    
    --element-margin: 6px;
    --element-height: calc(var(--toolbar-height) - var(--element-margin));
    
    --element-fs-margin: 2px;
    
    --bg-color: #0000;
}


/* SIZE */
.ytp-delhi-modern .ytp-tooltip{
    margin-top: 12px !important;
}

.ytp-delhi-modern .ytp-chrome-bottom, .ytp-delhi-modern .ytp-chrome-controls, .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode) .ytp-chrome-bottom, .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode) .ytp-right-controls .ytp-right-controls-right, .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode) .ytp-right-controls .ytp-right-controls-left{
    height: var(--toolbar-height) !important;
    line-height: var(--toolbar-height) !important;
}

.ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode) .ytp-progress-bar-container, .ytp-delhi-modern:not(.ytp-player-minimized) .ytp-progress-bar-container{
    bottom: var(--toolbar-height) !important;
}

/* Overlays container */
.ytp-delhi-modern.ytp-big-mode.ytp-fullscreen-grid-peeking .ytp-overlays-container, .ytp-delhi-modern.ytp-fullscreen-grid-peeking .ytp-overlays-container{
    bottom: calc( var(--toolbar-height) + 20px) !important;
}

.ytp-delhi-modern .ytp-chrome-controls .ytp-right-controls,.ytp-delhi-modern .ytp-prev-button:not(.ytp-miniplayer-button-container>*), .ytp-delhi-modern .ytp-chrome-controls .ytp-next-button:not(.ytp-miniplayer-button-container>*).ytp-playlist-ui{
    margin: var(--element-margin) 0 !important;
    padding: 0 !important;
}

.ytp-delhi-modern .ytp-chrome-controls .ytp-play-button{
    margin: var(--element-margin) 0 !important;
}

/* Volume */
.ytp-delhi-modern.ytp-delhi-horizontal-volume-controls .ytp-volume-area{
    margin: var(--element-margin) 0 !important;
}

.ytp-delhi-modern .ytp-time-display:not(.ytp-miniplayer-ui *), .ytp-delhi-modern .ytp-chapter-container{
    padding: var(--element-margin) 0 !important;
}

/* Play button */
.ytp-delhi-modern .ytp-chrome-controls .ytp-play-button{
    --size: var(--element-height);
    height: var(--size) !important;
    width: var(--size) !important;
    top: -2px;
}

/* Play icon */
.ytp-delhi-modern-icons .ytp-chrome-controls .ytp-play-button svg{
    padding: 10px !important;
    --size: 26px;
    height: var(--size) !important;
    width: var(--size) !important;
}

/* gradient */
.ytp-chrome-bottom:after{
    content: '';
    position: absolute;
    left: -100px;
    bottom: -2px;
    width: calc(100% + 200px);
    background: linear-gradient(0deg, #000a, #0000);
    height: calc(var(--toolbar-height) + 10px);
    z-index: -1;
}

/* fullscreen fixes */

.ytp-delhi-modern.ytp-delhi-horizontal-volume-controls.ytp-big-mode:not(.ytp-xsmall-width-mode) .ytp-volume-area, .ytp-big-mode .ytp-volume-slider, .ytp-delhi-modern .ytp-chrome-controls .ytp-mute-button, .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode) .ytp-time-display, .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode) .ytp-chrome-controls .ytp-next-button:not(.ytp-miniplayer-button-container>*), .ytp-big-mode.ytp-delhi-modern .ytp-chrome-controls .ytp-prev-button:not(ytp-miniplayer-button-container>*), .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode) .ytp-time-wrapper, .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode) .ytp-chapter-title.ytp-button{
    height: var(--element-height) !important;
    min-height: var(--element-height) !important;
    line-height: var(--element-height) !important;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    --element-margin: 2px;
}

.ytp-big-mode.ytp-delhi-modern-icons .ytp-chrome-controls .ytp-button svg, .ytp-delhi-modern.ytp-big-mode:not(.ytp-xsmall-width-mode) .ytp-chrome-controls .ytp-next-button:not(.ytp-miniplayer-button-container>*) svg, .ytp-big-mode.ytp-delhi-modern .ytp-chrome-controls .ytp-prev-button:not(ytp-miniplayer-button-container>*) svg{
    padding-top: 14px;
}

.ytp-big-mode.ytp-delhi-modern.ytp-delhi-horizontal-volume-controls .ytp-volume-area .ytp-volume-icon svg{
    padding-top: 10px;
}

/* COLORS */

.ytp-delhi-modern .ytp-time-wrapper:not(.ytp-miniplayer-ui *), .ytp-delhi-modern.ytp-delhi-horizontal-volume-controls .ytp-volume-area, .ytp-delhi-modern .ytp-chrome-controls .ytp-play-button, .ytp-delhi-modern .ytp-chrome-controls .ytp-right-controls, .ytp-delhi-modern .ytp-chrome-controls>*>*, .ytp-delhi-modern .ytp-chapter-title.ytp-button{
    background: var(--bg-color) !important;
}


/* play and fullscreen buttons clickable in corners */

.ytp-fullscreen-button{
    overflow: unset !important;
}

.ytp-fullscreen-button::after {
    content: '';
    position: absolute;
    inset-block: -10px;
    inset-inline: 0px;
    width: 220px !important;
    height: 200px;
}

/* Video endscreen fix */

.ytp-fullscreen-grid-active.html5-video-player.ended-mode .ytp-modern-videowall-still:nth-child(n+4){
    display: block;
}

.ytp-fullscreen-grid-active.html5-video-player.ended-mode .ytp-modern-videowall-still:nth-child(n+11), .ytp-fullscreen-grid-expand-button{
    display: none;
}

.ytp-fullscreen-grid-active.ytp-grid-scrollable .ytp-fullscreen-grid{
    top: 10%;
}

.ytp-fullscreen-grid-stills-container{
    grid-template-columns: repeat(5,1fr);
}
    `;

  // Add the style to the document head
  document.head.appendChild(style);
})();
```

This Tampermonkey script:

1. **Uses proper metadata** with `@match` directive to target all YouTube domains
2. **Creates a style element** and injects all your CSS code
3. **Combines both CSS blocks** from your original Stylus code into one
4. **Uses `!important` flags** to ensure styles override YouTube's default styles
5. **Automatically applies** when the page loads
6. **Has no external dependencies** - works standalone with Tampermonkey

To use this script:

1. Install Tampermonkey browser extension
2. Create a new script
3. Paste this code
4. Save and enable the script
5. Refresh YouTube pages

The script will automatically apply your CSS styles to make the new YouTube UI look like the old one, with all the fixes you specified for the video player controls, toolbars, and fullscreen behavior.
