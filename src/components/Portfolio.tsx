import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "AI Agents", "Web Dev", "Game Dev"];

const projects = [
  {
    title: "Enterprise AI Dashboard",
    category: "AI Agents",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    tags: ["Next.js", "OpenAI", "Python"],
  },
  {
    title: "E-Commerce Platform",
    category: "Web Dev",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Neon Cyberpunk RPG",
    category: "Game Dev",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
    tags: ["Unity", "C#", "HLSL"],
  },
  {
    title: "Physics Simulator",
    category: "Game Dev",
    image:
      "https://images.unsplash.com/photo-1614728853913-1e2203d9d73d?q=80&w=2670&auto=format&fit=crop",
    tags: ["Unreal Engine", "C++", "Physics"],
  },
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" || project.category === activeCategory,
  );

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Selected <span className="text-gradient">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A showcase of my recent projects pushing the boundaries of
            technology.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden aspect-video bg-white/5 border border-white/10"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-primary/20 text-primary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="p-2 rounded-full bg-white/10 hover:bg-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-white/10 hover:bg-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
