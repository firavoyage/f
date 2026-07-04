import { createRoot } from "react-dom/client"
import { StrictMode } from 'react';

import { App } from "./app"

import 'the-new-css-reset/css/reset.css';
import 'web/design/adwaita/adwaita.css';
import './app.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)