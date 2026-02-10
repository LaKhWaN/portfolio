import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { BlogIndex } from "./pages/BlogIndex";
import { BlogPost } from "./pages/BlogPost";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Analytics />
      <ReactLenis root>
        <div className="relative min-h-screen w-full overflow-hidden bg-background">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </main>
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
