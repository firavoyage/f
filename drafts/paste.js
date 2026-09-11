// ==UserScript==
// @name         Toggleable Pixel Ruler
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a draggable, sharp-edged ruler toggled with Alt+R
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // 1. Create Ruler Container
  const ruler = document.createElement("div");
  ruler.id = "userscript-pixel-ruler";

  // Base styles (semi-transparent background, sharp edges, default hidden)
  Object.assign(ruler.style, {
    position: "fixed",
    top: "100px",
    left: "100px",
    width: "600px",
    height: "60px",
    backgroundColor: "color-mix(in srgb, white 50%, transparent)",
    border: "1px solid rgba(255, 255, 255, 0.8)",
    borderRadius: "0px", // Sharp edges (not rounded)
    boxSizing: "border-box",
    zIndex: "999999",
    display: "none", // Default hidden
    cursor: "grab",
    userSelect: "none",
    backdropFilter: "blur(2px)", // Helps visibility over dark/light sites
  });

  // 2. Build Ticks Canvas for Precise graduations
  const canvas = document.createElement("canvas");
  canvas.width = 600;
  canvas.height = 60;
  Object.assign(canvas.style, {
    width: "100%",
    height: "100%",
    display: "block",
    pointerEvents: "none",
  });
  ruler.appendChild(canvas);
  document.body.appendChild(ruler);

  // 3. Draw White Graduations
  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = "#ffffff";
  ctx.fillStyle = "#ffffff";
  ctx.lineWidth = 1;
  ctx.font = "9px sans-serif";

  // Loop every 4px up to length
  for (let x = 0; x <= 600; x += 4) {
    let tickHeight = 8; // Small graduation every 4px

    if (x % 40 === 0) {
      tickHeight = 24; // High graduation every 40px
      // Add pixel numbers at major marks
      if (x > 0 && x < 600) {
        ctx.fillText(x, x + 2, 38);
      }
    } else if (x % 20 === 0) {
      tickHeight = 15; // Mid graduation every 20px
    }

    // Draw top graduations
    ctx.beginPath();
    ctx.moveTo(x + 0.5, 0); // 0.5 offset for crisp 1px lines in Canvas
    ctx.lineTo(x + 0.5, tickHeight);
    ctx.stroke();
  }

  // 4. Keyboard Shortcut Listener (Alt + R)
  window.addEventListener("keydown", (e) => {
    if (e.altKey && e.code === "KeyR") {
      e.preventDefault();
      ruler.style.display = ruler.style.display === "none" ? "block" : "none";
    }
  });

  // 5. Drag & Drop Functionality
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  ruler.addEventListener("mousedown", (e) => {
    isDragging = true;
    ruler.style.cursor = "grabbing";
    offsetX = e.clientX - ruler.getBoundingClientRect().left;
    offsetY = e.clientY - ruler.getBoundingClientRect().top;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    ruler.style.left = `${e.clientX - offsetX}px`;
    ruler.style.top = `${e.clientY - offsetY}px`;
  });

  window.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      ruler.style.cursor = "grab";
    }
  });
})();
