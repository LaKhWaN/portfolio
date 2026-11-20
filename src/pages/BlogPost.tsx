import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Seo } from "../components/Seo";
import { NotFound } from "./NotFound";
import { type PostDoc, parsePost, usePreload } from "../lib/posts";
import { SITE_URL } from "../lib/site";

export const BlogPost = () => {
  const { slug = "" } = useParams();
  const preload = usePreload();
  const [post, setPost] = useState<PostDoc | null>(preload.post ?? null);
  const [missingSlug, setMissingSlug] = useState<string | null>(null);
  const current = post?.slug === slug ? post : null;

  useEffect(() => {
    if (current) return;
    let live = true;
    fetch(`/posts/${slug}.md`)
      .then(async (res) => {
        // The dev server answers unknown paths with index.html, so check the type too.
        if (!res.ok || res.headers.get("content-type")?.includes("html")) throw new Error(`post ${res.status}`);
        const doc = parsePost(slug, await res.text());
        if (live) setPost(doc);
      })
      .catch((err) => {
        console.error("Error loading post:", err);
        if (live) setMissingSlug(slug);
      });
    return () => {
      live = false;
    };
  }, [slug, current]);

  if (missingSlug === slug) return <NotFound />;
  if (!current) return <p className="container mx-auto px-4 sm:px-6 py-32 text-muted">Loading…</p>;

  const { title, description = "", date } = current.data;

  return (
    <article className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
      <Seo title={`${title} | Upender Singh Lakhwan`} description={description} path={`/blog/${slug}`} type="article" />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            datePublished: date,
            author: { "@type": "Person", name: "Upender Singh Lakhwan", url: SITE_URL },
            mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
          })}
        </script>
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground mb-10">
          <ArrowLeft className="w-4 h-4" /> All writing
        </Link>

        <header className="mb-12">
          {date && <time className="text-sm text-muted">{date}</time>}
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mt-2 mb-5">{title}</h1>
          {description && <p className="text-xl text-muted leading-relaxed">{description}</p>}
        </header>

        <div className="md text-lg leading-[1.8] text-foreground/90">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{current.content}</ReactMarkdown>
        </div>

        <aside className="mt-20 rounded-2xl border border-border bg-card p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-3">Need a website that brings in enquiries?</h2>
          <p className="text-muted mb-6">I build clear, fast sites for small businesses. Tell me what you need.</p>
          <Link to="/#contact" className="btn-primary">Get in touch</Link>
        </aside>
      </div>
    </article>
  );
};
