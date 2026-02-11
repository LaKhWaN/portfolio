import { motion } from "framer-motion";
import { Send, Mail, Phone, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending...");
    
    const formData = new FormData(event.currentTarget);
    // Note: You'll need to replace 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms access key
    formData.append("access_key", "66f652d8-da34-4141-b88f-ef07feffb0ef");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("Message sent successfully!");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setStatus("error");
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Have a project in mind? Whether it's a new game, an AI agent, or a
              web platform, I'm ready to bring it to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <p className="font-medium">upenderlakhwan@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Me</p>
                  <p className="font-medium">+91 7009966917</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[2.5rem] bg-secondary/30"
          >
            {status === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="flex justify-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Transmission Received!</h3>
                <p className="text-foreground/60">I'll get back to you faster than a reasoning model. 🚀</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-primary hover:underline text-sm font-medium pt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-foreground/70 mb-2 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-all shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground/70 mb-2 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-all shadow-inner"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground/70 mb-2 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-all shadow-inner"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-5 rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-primary/20"
                >
                  {status === "loading" ? "Initializing..." : "Send Message"}
                  {status !== "loading" && <Send className="w-5 h-5" />}
                </button>
                
                {status === "error" && (
                    <p className="text-red-500 text-sm text-center">{result}</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
