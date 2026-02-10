import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

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
      .then((data) => setPosts(data))
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16 text-center"
      >
        <span className="text-accent font-crayon text-xl mb-4 block">The Lab Notes</span>
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter uppercase font-heading">
          Technical <span className="text-gradient">Insights</span>
        </h1>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-sans">
          Deep dives into AI infrastructure, automated workflows, and the future of agentic engineering.
        </p>
      </motion.div>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative glass p-8 rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-500 bg-secondary/30"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32 group-hover:bg-primary/15 transition-all duration-700" />
            
            <Link to={`/blog/${post.slug}`}>
              <div className="flex flex-col gap-4 relative z-10 text-left">
                <div className="flex items-center gap-3 text-xs text-foreground/40 font-bold tracking-[0.2em] uppercase">
                  <Calendar size={14} className="text-primary" />
                  {post.date}
                </div>
                
                <h2 className="text-2xl md:text-4xl font-bold group-hover:text-primary transition-colors duration-300 tracking-tight font-heading leading-tight uppercase">
                  {post.title}
                </h2>
                
                <p className="text-foreground/60 leading-relaxed max-w-2xl font-sans text-lg">
                  {post.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold text-accent pt-2 group/btn">
                  Explore Post 
                  <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
};
