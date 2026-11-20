import { Sun, Moon } from "lucide-react";

// Icons switch via the `dark` class (set before paint in index.html), so server and client markup match.
export const ThemeToggle = () => {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* storage blocked: theme still applies for this visit */
    }
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
      aria-label="Toggle dark mode"
    >
      <Moon className="w-5 h-5 dark:hidden" />
      <Sun className="w-5 h-5 hidden dark:block" />
    </button>
  );
};
