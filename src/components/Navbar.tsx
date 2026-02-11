import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Home", href: isHome ? "#" : "/" },
    { name: "Services", href: isHome ? "#services" : "/#services" },
    { name: "Experience", href: isHome ? "#experience" : "/#experience" },
    { name: "Insights", href: "/blog", isRoute: true },
    { name: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass py-4"
          : "py-6 bg-transparent border-transparent border",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          Lakhwan<span className="text-primary">.folio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  location.pathname.startsWith(link.href) ? "text-primary" : "hover:text-primary"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all group-hover:w-full",
                  location.pathname.startsWith(link.href) ? "w-full" : "w-0"
                )} />
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            )
          ))}
          <a
            href={isHome ? "#contact" : "/#contact"}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden flex flex-col gap-4"
        >
          {navLinks.map((link) => (
             link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
             ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
             )
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};
