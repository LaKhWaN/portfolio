import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { type PostMeta, sortPosts, usePreload } from "../lib/posts";

export const BlogIndex = () => {
  const preload = usePreload();
  const [posts, setPosts] = useState<PostMeta[] | null>(preload.posts ?? null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (posts) return;
    fetch("/posts.json")
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`posts.json ${res.status}`))))
      .then((data: PostMeta[]) => setPosts(sortPosts(data)))
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setFailed(true);
      });
  }, [posts]);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
      <Seo
        title="Writing | Upender Singh Lakhwan"
        description="Notes on AI, agents and the web by Upender Singh Lakhwan."
        path="/blog"
      />
      <div className="max-w-3xl mb-14">
        <p className="eyebrow mb-3">Writing</p>
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">Notes on AI and the web</h1>
        <p className="text-lg text-muted">Things I'm reading, building and thinking about.</p>
      </div>

      {failed && <p className="text-muted">Couldn't load posts. Please refresh the page.</p>}
      {!posts && !failed && <p className="text-muted">Loading…</p>}

      <ul className="max-w-3xl divide-y divide-border border-y border-border">
        {posts?.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className="group block py-7">
              <time className="text-sm text-muted">{post.date}</time>
              <h2 className="text-xl md:text-2xl font-semibold mt-1 mb-2 group-hover:text-primary">{post.title}</h2>
              <p className="text-muted leading-relaxed line-clamp-2">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
