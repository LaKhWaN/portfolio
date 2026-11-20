import { Seo } from "../components/Seo";
import { Hero } from "../components/Hero";
import { Work } from "../components/Work";
import { Offer } from "../components/Offer";
import { Process } from "../components/Process";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export const Home = () => (
  <>
    <Seo
      title="Upender Singh Lakhwan | Websites for small businesses"
      description="I build clear, fast websites that make your business easy to trust and contact. India-based web developer working with clients worldwide."
      path="/"
    />
    <Hero />
    <Work />
    <Offer />
    <Process />
    <About />
    <Contact />
  </>
);
