import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { name: "About", href: "/#about" },
  { name: "Work", href: "/#work" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Writing", href: "/blog" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" onClick={close} className="font-heading text-xl font-semibold">
          Upender Lakhwan
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link key={l.name} to={l.href} className="text-sm font-medium text-muted hover:text-foreground">
              {l.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link to="/#contact" className="btn-primary !px-5 !py-2 text-sm">
            Get in touch
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            className="p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-1">
          {[...links, { name: "Contact", href: "/#contact" }].map((l) => (
            <Link key={l.name} to={l.href} onClick={close} className="py-2 text-lg font-medium">
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
