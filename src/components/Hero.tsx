import { ArrowRight } from "lucide-react";
import profileImg from "../assets/profile.webp";
import { BeforeAfter } from "./BeforeAfter";

export const Hero = () => (
  <section className="container mx-auto px-4 sm:px-6 pt-12 pb-20 md:pt-20 md:pb-28 grid lg:grid-cols-12 gap-12 items-center">
    <div className="lg:col-span-6">
      <p className="eyebrow mb-5">Web developer for small businesses</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] mb-6">
        Websites that make your business easy to trust and contact.
      </h1>
      <div className="flex items-start gap-4 mb-8 max-w-xl">
        <img
          src={profileImg}
          alt="Upender Singh Lakhwan"
          width={64}
          height={64}
          fetchPriority="high"
          className="h-16 w-16 shrink-0 rounded-full bg-card object-cover object-top ring-2 ring-border"
        />
        <p className="text-lg text-muted leading-relaxed">
          I'm Upender. I design and build clear, fast websites that tell people what you do, work
          properly on phones, and turn visitors into enquiries. You deal with me directly, from first
          call to launch.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href="#work" className="btn-primary">
          See my work <ArrowRight className="w-4 h-4" />
        </a>
        <a href="#contact" className="btn-outline">
          Get in touch
        </a>
      </div>
    </div>

    <div className="lg:col-span-6">
      <BeforeAfter />
    </div>
  </section>
);
