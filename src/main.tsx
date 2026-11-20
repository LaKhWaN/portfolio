import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.tsx";
import { type Preload, PreloadContext } from "./lib/posts";

declare global {
  interface Window {
    __PRELOAD__?: Preload;
  }
}

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <HelmetProvider>
      <PreloadContext.Provider value={window.__PRELOAD__ ?? {}}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PreloadContext.Provider>
    </HelmetProvider>
  </StrictMode>
);

// Prerendered pages ship real markup; the dev server serves an empty #root.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
