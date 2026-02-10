import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};
