import AnimatedSection from "../components/AnimatedSection";
//import Blog from "../components/Blog";

import Hero from "../components/Hero";

import Resume from "../components/Resume";

export default function Home() {
  return (
    <div>
      <Hero />
      <AnimatedSection></AnimatedSection>
      <AnimatedSection></AnimatedSection>
      <AnimatedSection>
        <Resume />
      </AnimatedSection>

      <AnimatedSection></AnimatedSection>
    </div>
  );
}
