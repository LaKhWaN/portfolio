import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023 - Present",
    role: "AI Automation Specialist",
    description:
      "Engineered autonomous workflow systems reducing manual operational time by 40%. Deployed custom LLM agents for customer support and data analysis.",
    achievement: "Automated 500+ daily processes",
    tech: ["Python", "LangChain", "OpenAI", "n8n"],
  },
  {
    year: "2021 - Present",
    role: "Full Stack Developer",
    description:
      "Architected and launched high-performance SaaS platforms serving 10k+ active users. Optimized database queries improving load times by 60%.",
    achievement: "Scaled to 10k+ users",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    year: "2019 - Present",
    role: "Game Developer",
    description:
      "Designed immersive 3D environments and gameplay mechanics for indie titles with 50k+ downloads. Implemented complex physics and shader systems.",
    achievement: "50k+ Game Downloads",
    tech: ["Unity", "C#", "Unreal Engine", "Blender"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Turning complex challenges into impactful solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Animated Gradient Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-transparent transform -translate-x-1/2 md:translate-x-0 opacity-30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative mb-16 last:mb-0 md:w-1/2 ${
                index % 2 === 0
                  ? "md:ml-auto md:pl-12 pl-8"
                  : "md:mr-auto md:pr-12 pl-8"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(6,182,212,0.6)] z-10 
                  ${
                    index % 2 === 0
                      ? "left-[-8px] md:left-[-8px]"
                      : "left-[-8px] md:right-[-8px] md:left-auto"
                  }`}
              />

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass p-8 rounded-2xl border border-white/10 hover:border-accent/40 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex flex-col gap-4 mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-accent w-fit">
                      {exp.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex items-center gap-3 mb-6 p-3 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-sm font-semibold text-primary">
                      Impact:
                    </span>
                    <span className="text-sm text-gray-200">
                      {exp.achievement}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-black/40 border border-white/10 text-gray-400 group-hover:border-primary/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
