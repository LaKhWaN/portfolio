import { GITHUB, LINKEDIN } from "../lib/site";
import aboutImg from "../assets/about.webp";

// Short trust strip right after the hero: who you'll be working with.
export const About = () => (
  <section id="about" className="border-t border-border">
    <div className="container mx-auto px-4 sm:px-6 py-14 md:py-16 flex flex-col sm:flex-row items-center gap-8 md:gap-12">
      <img
        src={aboutImg}
        alt="Upender Singh Lakhwan"
        width={800}
        height={1000}
        loading="lazy"
        className="w-40 md:w-48 shrink-0 aspect-[4/5] rounded-2xl object-cover"
      />
      <div className="max-w-2xl">
        <p className="eyebrow mb-2">You work directly with me</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Upender Singh Lakhwan, web developer in India</h2>
        <p className="text-muted leading-relaxed mb-3">
          No agency, no hand-offs. I plan, design, build and launch your site myself, and I'm the person
          you talk to the whole way. I've built and shipped my own products from scratch, so I care about
          what happens after launch too.
        </p>
        <p className="text-sm text-muted">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="link text-foreground">LinkedIn</a>
          {" · "}
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="link text-foreground">GitHub</a>
        </p>
      </div>
    </div>
  </section>
);
