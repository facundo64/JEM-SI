"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { dict } = useLanguage();
  const h = dict.hero;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-acero-dark">
      {/* Fullscreen Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1920&q=80&auto=format&fit=crop"
          alt="Estructura arquitectónica moderna"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content overlays */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto w-full mt-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[11px] tracking-[0.5em] uppercase text-white/70 font-medium mb-6"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {h.badge}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-5xl sm:text-7xl lg:text-8xl xl:text-[8rem] font-light tracking-tight leading-[1.05] mb-8 text-white drop-shadow-lg"
        >
          <span className="block">{h.title}</span>
          <span className="block mt-2 italic text-white/90">{h.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl leading-[1.8] mb-12 drop-shadow-md font-light"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {h.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button
            onClick={() => scrollTo("services")}
            className="group flex items-center gap-3 px-10 py-5 bg-white text-acero font-medium transition-all duration-300 hover:bg-white/90 text-[11px] tracking-[0.2em] uppercase"
          >
            {h.ctaPrimary}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="group flex items-center gap-3 px-10 py-5 border border-white text-white font-medium transition-all duration-300 hover:bg-white hover:text-acero text-[11px] tracking-[0.2em] uppercase"
          >
            {h.ctaSecondary}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.5 }}
        onClick={() => scrollTo("services")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Scroll down"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase font-light"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {h.scrollLabel}
        </span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
