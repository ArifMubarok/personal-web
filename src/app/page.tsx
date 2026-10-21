import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CoreFocus from "@/components/CoreFocus";
import Stats from "@/components/Stats";
import WordBand from "@/components/WordBand";
import About from "@/components/About";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <CoreFocus />
        <Stats />
        <WordBand text="Engineer" />
        <About />
        <Features />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}
