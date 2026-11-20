import { Link } from "react-router-dom";
import { EMAIL, FAILUNICORN, GITHUB, LINKEDIN } from "../lib/site";

export const Footer = () => (
  <footer className="border-t border-border">
    <div className="container mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row gap-4 justify-between text-sm text-muted">
      <p>© {new Date().getFullYear()} Upender Singh Lakhwan · India</p>
      <nav className="flex flex-wrap gap-x-6 gap-y-2">
        <a href={`mailto:${EMAIL}`} className="hover:text-foreground">Email</a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
        <a href={FAILUNICORN} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">failUnicorn</a>
        <Link to="/blog" className="hover:text-foreground">Writing</Link>
      </nav>
    </div>
  </footer>
);
