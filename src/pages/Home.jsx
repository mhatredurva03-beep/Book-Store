
import {HeroSection} from "../components/HeroSection.jsx";
import {Categories} from "../components/Categories.jsx";
import{ ProductCards} from "../components/ProductCards.jsx";
import {Testimonials} from "../components/Testimonials.jsx";
import { About } from "../pages/About.jsx";
import {Contact} from "../pages/Contact.jsx";

export function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <ProductCards />
      <Testimonials />
      <About/>
      <Contact/>
    </>
  );
}

