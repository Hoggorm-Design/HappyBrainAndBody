import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SanityProvider } from "./providers/SanityProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SanityProvider>
        <App />
      </SanityProvider>
    </BrowserRouter>
  </StrictMode>,
);
