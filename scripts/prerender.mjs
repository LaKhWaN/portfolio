// Renders every route to static HTML after `vite build` + `vite build --ssr`.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const { render, parsePost, sortPosts } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const SEO = /<!--seo-->[\s\S]*?<!--\/seo-->/;
if (!SEO.test(template) || !template.includes('<div id="root"></div>')) throw new Error("index.html is missing prerender markers");

const posts = sortPosts(JSON.parse(fs.readFileSync(path.join(dist, "posts.json"), "utf8")));

function write(url, file, preload = {}) {
  const { html, head } = render(url, preload);
  // `<` escaped so post content can't close the script tag.
  const data = `<script>window.__PRELOAD__=${JSON.stringify(preload).replace(/</g, "\\u003c")}</script>`;
  const out = template
    .replace(SEO, head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>${data}`);
  const dest = path.join(dist, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, out);
}

write("/", "index.html");
write("/blog", "blog.html", { posts });
let count = 0;
for (const p of posts) {
  const md = path.join(dist, "posts", `${p.slug}.md`);
  if (!fs.existsSync(md)) {
    console.warn(`⚠️  skipping /blog/${p.slug}: posts/${p.slug}.md not found`);
    continue;
  }
  write(`/blog/${p.slug}`, `blog/${p.slug}.html`, { post: parsePost(p.slug, fs.readFileSync(md, "utf8")) });
  count++;
}
write("/404", "404.html");
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`✅ prerendered home, blog, ${count} posts, 404`);
