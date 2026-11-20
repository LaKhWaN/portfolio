import { createContext, useContext } from "react";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export interface PostDoc {
  slug: string;
  data: Record<string, string>;
  content: string;
}

// Data the prerender step bakes into each page so the first render matches the static HTML.
export interface Preload {
  posts?: PostMeta[];
  post?: PostDoc;
}

export const PreloadContext = createContext<Preload>({});
export const usePreload = () => useContext(PreloadContext);

export const sortPosts = (posts: PostMeta[]) =>
  [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Minimal frontmatter parser (gray-matter needs Node's Buffer in the browser).
export function parsePost(slug: string, text: string): PostDoc {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { slug, data: { title: slug }, content: text };
  const data: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return { slug, data, content: m[2] };
}
