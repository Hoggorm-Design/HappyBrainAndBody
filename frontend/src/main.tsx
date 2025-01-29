import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SanityProvider } from "./providers/SanityProvider";
import { LoadingProvider } from "@/context/LoadingContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SanityProvider>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </SanityProvider>
    </BrowserRouter>
  </StrictMode>,
);
