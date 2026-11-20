import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export const NotFound = () => (
  <section className="container mx-auto px-4 sm:px-6 py-32 text-center">
    <Seo title="Page not found | Upender Singh Lakhwan" description="This page doesn't exist." path="/404" noindex />
    <p className="eyebrow mb-3">404</p>
    <h1 className="text-4xl md:text-5xl font-semibold mb-4">This page doesn't exist.</h1>
    <p className="text-muted mb-8">The link may be old or mistyped.</p>
    <div className="flex flex-wrap justify-center gap-3">
      <Link to="/" className="btn-primary">Go to homepage</Link>
      <Link to="/blog" className="btn-outline">Read the blog</Link>
    </div>
  </section>
);
