import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Reality from "@/components/landing/Reality";
import Proof from "@/components/landing/Proof";
import Awards from "@/components/landing/Awards";
import Numbers from "@/components/landing/Numbers";
import Voices from "@/components/landing/Voices";
import Studios from "@/components/landing/Studios";
import Faq from "@/components/landing/Faq";
import Contact from "@/components/landing/Contact";
import { Footer, StickyBar } from "@/components/landing/Footer";

export default function Landing() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  const navigate = (target) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -56, duration: 1.4 });
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main data-testid="landing-page" className="bg-cream font-sans">
      <Nav onNavigate={navigate} />
      <Hero onNavigate={navigate} />
      <Marquee />
      <Reality />
      <Proof onNavigate={navigate} />
      <Awards />
      <Numbers />
      <Voices />
      <Studios />
      <Faq />
      <Contact />
      <Footer onNavigate={navigate} />
      <StickyBar onNavigate={navigate} />
    </main>
  );
}
