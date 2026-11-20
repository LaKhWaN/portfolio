import { Link } from "react-router-dom";
import { GITHUB, LINKEDIN } from "../lib/site";
import aboutImg from "../assets/about.webp";

export const About = () => (
  <section id="about" className="container mx-auto px-4 sm:px-6 py-20 md:py-28">
    <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
      <img
        src={aboutImg}
        alt="Upender Singh Lakhwan in a white shirt"
        width={800}
        height={1000}
        loading="lazy"
        className="md:col-span-5 w-full max-w-sm mx-auto rounded-[2rem] object-cover"
      />
      <div className="md:col-span-7">
        <p className="eyebrow mb-3">About me</p>
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Hi, I'm Upender.</h2>
        <div className="space-y-4 text-lg text-muted leading-relaxed">
          <p>
            I'm a developer based in India. I build websites and web apps end to end: design, code,
            hosting and the small details that make people trust a business online.
          </p>
          <p>
            I built failUnicorn by myself, from the first idea to a live product with real players, and
            I still ship updates to it. I bring the same care to client work: plain language, honest
            timelines, and a site you're proud to send people to.
          </p>
          <p>
            I also <Link to="/blog" className="link text-foreground">write about AI and the web</Link>.
            You can find me on{" "}
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="link text-foreground">LinkedIn</a>{" "}
            and{" "}
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="link text-foreground">GitHub</a>.
          </p>
        </div>
      </div>
    </div>
  </section>
);
