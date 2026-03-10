"use client";

import { LanguageProvider } from "@/lib/language-context";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <LanguageProvider>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Projects />
        <Values />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}
