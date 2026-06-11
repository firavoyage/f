import { createRoot } from "react-dom/client";
import 'the-new-css-reset/css/reset.css';
import App from "./app";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);