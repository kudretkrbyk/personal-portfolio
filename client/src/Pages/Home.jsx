import { Helmet } from "react-helmet-async";
import AnimatedSection from "../components/AnimatedSection";
import Hero from "../components/Hero";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Kudret Kırbıyık | Web Geliştirici & Frontend Uzmanı</title>
        <meta
          name="description"
          content="Kudret Kırbıyık kişisel portfolyo: Web geliştirme, UI/UX tasarımı ve modern frontend projeleri. Benimle iletişime geçin ve projelerinizi hayata geçirelim."
        />
        <meta property="og:title" content="Kudret Kırbıyık | Web Geliştirici" />
        <meta
          property="og:description"
          content="Modern web uygulamaları, frontend projeleri ve UI tasarımlarıyla Kudret Kırbıyık'ın portfolyosunu keşfedin."
        />
        <meta property="og:image" content="/seo-home-thumbnail.jpg" />
      </Helmet>

      <Hero />

      <AnimatedSection>
        <Resume />
      </AnimatedSection>
    </>
  );
}
