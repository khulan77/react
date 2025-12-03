import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
