import { motion } from "framer-motion";
import { Gamepad2, Globe, Cpu, Bot, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Intelligent agents and workflow automations to save time and boost productivity.",
    color: "text-emerald-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance websites and web apps built with modern frameworks like React & Next.js.",
    color: "text-cyan-500",
  },
  {
    icon: Cpu,
    title: "Software Solutions",
    description:
      "Custom desktop applications and internal tools to streamline your business operations.",
    color: "text-blue-500",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description:
      "Immersive 2D/3D games with engaging mechanics and polished visuals using Unity & Unreal.",
    color: "text-purple-500",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white/2">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What I <span className="text-gradient">Do</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Combining creativity with technical expertise to deliver exceptional
            digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 glass rounded-2xl border border-foreground/5 hover:border-primary/20 transition-all duration-300 bg-secondary/30"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-foreground/40" />
              </div>

              <div
                className={`w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 text-2xl ${service.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
                {service.title}
              </h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
