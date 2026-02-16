import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Calendar, ArrowRight, Clock } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export const BlogIndex = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort posts by date (newest first)
        const sorted = [...data].sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(sorted);
      })
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <Helmet>
        <title>Technical Insights | Upender Singh Lakhwan</title>
        <meta name="description" content="Deep dives into AI infrastructure, automated workflows, and the future of agentic engineering by Upender Singh Lakhwan." />
        <meta property="og:title" content="Technical Insights | Upender Singh Lakhwan" />
        <meta property="og:description" content="Deep dives into AI infrastructure, automated workflows, and the future of agentic engineering." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-16 text-center"
      >
        <span className="text-accent font-crayon text-xl mb-4 block">The Lab Notes</span>
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter uppercase font-heading">
          Technical <span className="text-gradient">Insights</span>
        </h1>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-sans">
          Deep dives into AI infrastructure, automated workflows, and the future of agentic engineering.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Featured Post */}
        {featuredPost && (
          <motion.article
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative glass p-8 md:p-12 rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all duration-500 bg-secondary/30 border border-white/5"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -mr-48 -mt-48 group-hover:bg-primary/20 transition-all duration-700" />
            
            <Link to={`/blog/${featuredPost.slug}`} className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 text-left space-y-6">
                <div className="flex items-center gap-4">
                  <span className="bg-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-primary/20">
                    Latest Entry
                  </span>
                  <div className="flex items-center gap-2 text-xs text-foreground/40 font-bold tracking-[0.1em] uppercase">
                    <Calendar size={14} className="text-primary" />
                    {featuredPost.date}
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold group-hover:text-primary transition-colors duration-300 tracking-tight font-heading leading-tight uppercase">
                  {featuredPost.title}
                </h2>
                
                <p className="text-foreground/60 leading-relaxed font-sans text-xl">
                  {featuredPost.description}
                </p>

                <div className="flex items-center gap-3 text-base font-bold text-accent group/btn">
                  Read Full Technical Deep-Dive 
                  <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Other Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative glass p-8 rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-500 bg-secondary/20 border border-white/5 flex flex-col"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[80px] rounded-full -mr-24 -mt-24 group-hover:bg-primary/10 transition-all duration-700" />
              
              <Link to={`/blog/${post.slug}`} className="flex flex-col h-full relative z-10 text-left">
                <div className="flex items-center gap-3 text-[10px] text-foreground/40 font-bold tracking-[0.15em] uppercase mb-4">
                  <Clock size={12} className="text-primary" />
                  {post.date}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300 tracking-tight font-heading leading-snug uppercase mb-4 flex-grow">
                  {post.title}
                </h3>
                
                <p className="text-foreground/50 leading-relaxed font-sans text-sm mb-6 line-clamp-2">
                  {post.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-accent group/btn mt-auto">
                  View Insights
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
