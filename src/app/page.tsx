import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Interstitial from "@/components/Interstitial";
import Work from "@/components/Work";
import Showcase from "@/components/Showcase";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <About />
        <Stats />
        <Interstitial />
        <Work />
        <Showcase />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
