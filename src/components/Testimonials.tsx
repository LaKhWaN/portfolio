import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    text: "Delivered an exceptional AI solution that streamlined our operations by 200%. Highly recommended expert.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Indie Game Studio",
    text: "The game mechanics implemented were silky smooth. A true professional who understands game feel perfectly.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Marketing Director",
    text: "Our website serves as a benchmark for our industry now. Incredible eye for design and detail.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white/2 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            100+ <span className="text-gradient">Satisfied Clients</span>
          </h2>
          <p className="text-gray-400">Don't just take my word for it.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-3xl relative bg-secondary/30"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-foreground/5" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-foreground/70 mb-6 italic font-sans">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-foreground">{t.name}</h4>
                <p className="text-sm text-primary font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
