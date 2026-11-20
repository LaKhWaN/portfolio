import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";
import { type Preload, PreloadContext } from "./lib/posts";

export { parsePost, sortPosts } from "./lib/posts";

export function render(url: string, preload: Preload) {
  const ctx: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={ctx}>
      <PreloadContext.Provider value={preload}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </PreloadContext.Provider>
    </HelmetProvider>,
  );
  const h = ctx.helmet!;
  const head = [h.title, h.meta, h.link, h.script].map((t) => t.toString()).join("\n    ");
  return { html, head };
}
