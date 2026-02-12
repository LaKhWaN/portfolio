import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Calendar, ArrowLeft, Share2, Clock } from "lucide-react";

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<{ content: string; data: any } | null>(null);

  useEffect(() => {
    if (!slug) return;
    fetch(`/posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        // Simple manual frontmatter parser to avoid 'Buffer' issues in browser
        const parts = text.split('---');
        if (parts.length >= 3) {
            const yaml = parts[1];
            const content = parts.slice(2).join('---');
            const data: any = {};
            
            yaml.split('\n').forEach(line => {
                const [key, ...valueParts] = line.split(':');
                if (key && valueParts.length > 0) {
                    const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
                    data[key.trim()] = value;
                }
            });
            
            setPost({ data, content });
        } else {
            setPost({ data: { title: slug, date: 'Unknown' }, content: text });
        }
      })
      .catch(err => console.error("Error loading post:", err));
  }, [slug]);

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-accent font-crayon text-2xl animate-pulse">Loading Intelligence...</div>
    </div>
  );

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <Helmet>
        <title>{`${post.data.title} | Upender Singh Lakhwan`}</title>
        <meta name="description" content={post.data.description} />
        <meta property="og:title" content={post.data.title} />
        <meta property="og:description" content={post.data.description} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": post.data.title,
            "description": post.data.description,
            "author": {
              "@type": "Person",
              "name": "Upender Singh Lakhwan",
              "url": "https://lakhwan.com"
            },
            "datePublished": post.data.date,
            "publisher": {
              "@type": "Organization",
              "name": "Lakhwan.folio",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lakhwan.com/src/assets/profile.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://lakhwan.com/blog/${slug}`
            }
          })}
        </script>
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground/40 hover:text-primary transition-all group tracking-widest uppercase"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" />
            Return to Insights
          </Link>
        </motion.div>

        <header className="mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 text-xs font-bold text-primary mb-8 tracking-[0.3em] uppercase"
          >
            <Calendar size={14} />
            {post.data.date}
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <Clock size={14} />
            6 min read
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-[1] uppercase font-heading"
          >
            {post.data.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/60 leading-relaxed italic border-l-4 border-accent/40 pl-8 font-sans"
          >
            {post.data.description}
          </motion.p>
        </header>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:uppercase prose-strong:text-primary prose-code:text-accent"
        >
          <div className="text-foreground/80 leading-[1.8] text-lg md:text-xl space-y-8 font-sans">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-4xl font-bold mt-16 mb-8 text-white uppercase tracking-tight" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-3xl font-bold mt-16 mb-6 text-white border-b border-white/5 pb-4 uppercase tracking-tight" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-10 mb-4 text-white/90 uppercase" {...props} />,
                p: ({node, ...props}) => <p className="mb-8" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-8 mb-8 space-y-4" {...props} />,
                li: ({node, ...props}) => <li className="pl-2" {...props} />,
                strong: ({node, ...props}) => <strong className="text-primary font-extrabold" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="bg-secondary/20 backdrop-blur-md p-10 rounded-[2.5rem] italic my-12 border-l-8 border-primary relative overflow-hidden" {...props} />,
                code: ({node, ...props}) => <code className="bg-white/10 px-2 py-1 rounded text-accent text-base font-mono" {...props} />,
                table: ({node, ...props}) => <table className="w-full border-collapse my-8 bg-secondary/10 rounded-2xl overflow-hidden" {...props} />,
                thead: ({node, ...props}) => <thead className="bg-primary/10 text-primary uppercase text-xs tracking-widest font-bold" {...props} />,
                th: ({node, ...props}) => <th className="p-4 border-b border-white/5 text-left" {...props} />,
                td: ({node, ...props}) => <td className="p-4 border-b border-white/5 text-foreground/70" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.article>

        <footer className="mt-32 pt-20 border-t border-white/5">
          <div className="glass p-16 md:p-24 rounded-[3.5rem] text-center space-y-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-tighter">Ready to architect the future?</h3>
                <p className="text-lg text-foreground/50 max-w-xl mx-auto">I help high-growth brands deploy agentic systems that scale without the manual overhead.</p>
                <Link to="/#contact" className="inline-flex items-center gap-3 bg-primary hover:bg-primary/80 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                  Request an Audit <Share2 size={20} />
                </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
