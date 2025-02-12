import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { SanityProvider } from "./providers/SanityProvider";
import "./index.css";

export const render = async (url: string): Promise<string> => {
  try {
    return renderToString(
      <StrictMode>
        <StaticRouter location={url}>
          <SanityProvider>
            <App />
          </SanityProvider>
        </StaticRouter>
      </StrictMode>,
    );
  } catch (error) {
    console.error("SSR Render error:", error);
    throw error;
  }
};
