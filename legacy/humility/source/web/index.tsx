import { createRoot } from "react-dom/client"
import { StrictMode } from 'react';
import env from 'web/env.json';

import { App } from "./app"

import 'the-new-css-reset/css/reset.css';

import 'web/global';

createRoot(document.getElementById("root")!).render(
  env.dev ?
    <StrictMode>
      <App />
    </StrictMode> : <App />
)
