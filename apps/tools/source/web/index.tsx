import 'the-new-css-reset/css/reset.css';

import 'web/lib/global';

import { createRoot } from "react-dom/client"
import { StrictMode } from 'react';

import { App } from "./component/app"

const dev = process?.env?.NODE_ENV == 'development'

// Use StrictMode in Dev
if (dev) {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  createRoot(document.getElementById("root")!).render(
    <App />
  )
}

// Auto Reload after Sleep (i.e. hmr websocket down)
if (dev) {
  // 1. Keep a backup copy of the original native warning function
  const originalWarn = console.warn;

  // 2. Override the global console.warn function
  console.warn = function (...args) {
    // Convert arguments to a single readable string
    const message = args.join(' ');

    // 3. Match the exact Parcel HMR warning string (ignoring the emoji)
    if (message.includes('[parcel]') && message.includes('Connection to the HMR server was lost')) {
      // 4. Force an immediate page reload
      window.location.reload();
      return; // Stop execution early to prevent logging it
    }

    // 5. Pass all normal warnings through seamlessly
    originalWarn.apply(console, args);
  };
}
