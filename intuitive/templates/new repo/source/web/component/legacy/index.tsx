import { createRoot } from "react-dom/client"
import { StrictMode } from 'react';

import { App } from "./storybook"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)