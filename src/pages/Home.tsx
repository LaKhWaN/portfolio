import { Seo } from "../components/Seo";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Work } from "../components/Work";
import { Offer } from "../components/Offer";
import { Process } from "../components/Process";
import { Contact } from "../components/Contact";

export const Home = () => (
  <>
    <Seo
      title="Upender Singh Lakhwan | Websites for small businesses"
      description="I build clear, fast websites that make your business easy to trust and contact. India-based web developer working with clients worldwide."
      path="/"
    />
    <Hero />
    <About />
    <Work />
    <Offer />
    <Process />
    <Contact />
  </>
);
