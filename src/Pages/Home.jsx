import AnimatedSection from "../components/AnimatedSection";
//import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <div>
      <Hero />
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection>
        <Resume />
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </div>
  );
}
