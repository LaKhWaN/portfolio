import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Globe } from "lucide-react";
import profileImg from "../assets/profile.png";

export const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Digital Experiences",
    "Intelligent Agents",
    "Immersive Games",
    "Web Solutions",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-foreground/60 font-medium">
              Available for Freelance
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 min-h-[160px] md:min-h-[220px]">
            Creating <span className="text-gradient">{text}</span>
            <span className="animate-pulse text-foreground">|</span>
            <br />
            That Matter
          </h1>

          <p className="text-lg text-foreground/60 mb-8 max-w-lg leading-relaxed">
            I'm a multidisciplinary developer specializing in AI Automation, Web
            Apps, Software, and Game Development. I turn complex problems into
            elegant solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="bg-foreground text-background px-8 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors flex items-center gap-2"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full font-medium border border-foreground/20 hover:bg-foreground/5 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block lg:col-span-5"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-end justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-accent/20 rounded-full opacity-40 blur-[80px]" />

            {/* Profile Image */}
            <img
              src={profileImg}
              alt="Upender Singh Lakhwan"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] grayscale hover:grayscale-0 transition-all duration-700"
            />

            {/* Creative Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ delay: 1, duration: 0.8, type: "spring" }}
              className="absolute top-0 -left-10 z-20"
            >
              <div className="relative">
                {/* Arrow pointing to image */}
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -right-20 top-8 opacity-70"
                >
                  <path
                    d="M10 10 C 40 10, 60 40, 80 60"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M80 60 L 70 55 M 80 60 L 75 45"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="font-crayon text-2xl text-foreground transform -rotate-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  >
                    <span className="text-primary">Hi, I'm</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                  >
                    Upender Singh
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.9, duration: 0.5 }}
                  >
                    Lakhwan
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating tech icons around image */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-20 right-0 p-3 bg-black/50 backdrop-blur-md rounded-2xl border border-white/10"
              >
                <Bot className="w-6 h-6 text-pink-500" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-20 left-10 p-3 bg-black/50 backdrop-blur-md rounded-2xl border border-white/10"
              >
                <Globe className="w-6 h-6 text-accent" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
