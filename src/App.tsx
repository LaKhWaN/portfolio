import { ReactLenis } from "lenis/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";

function App() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-full overflow-hidden bg-background">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Services />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
