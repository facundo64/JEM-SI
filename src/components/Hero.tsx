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
    <section className="relative min-h-screen flex flex-col">
      {/* Navbar spacer */}
      <div className="h-16" />

      {/* Content area */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left: text content */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-0">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            className="text-[11px] tracking-[0.4em] uppercase text-acero/40 font-semibold mb-6"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {h.badge}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] mb-6"
          >
            <span className="text-acero block">{h.title}</span>
            <span className="text-acero/20 block">{h.titleHighlight}</span>
          </motion.h1>

          {/* Thin accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.4, delay: 2.3 }}
            className="h-px bg-naranja mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="text-acero/45 text-base sm:text-lg max-w-lg leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {h.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.6 }}
            className="flex flex-col sm:flex-row items-start gap-3"
          >
            <button
              onClick={() => scrollTo("services")}
              className="group flex items-center gap-2 px-7 py-3.5 bg-acero hover:bg-acero-light text-white font-bold transition-all duration-200 text-sm tracking-wider uppercase"
            >
              {h.ctaPrimary}
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 px-7 py-3.5 border border-gris-medio hover:border-acero/30 text-acero/60 hover:text-acero font-bold transition-all duration-200 text-sm tracking-wider uppercase"
            >
              {h.ctaSecondary}
            </button>
          </motion.div>
        </div>

        {/* Right: hero image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="flex-1 relative min-h-[50vh] lg:min-h-0"
        >
          {/* Placeholder image — replace with real project photo */}
          <div className="absolute inset-0 bg-gris-claro">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
              alt="Estructura metálica en construcción"
              className="w-full h-full object-cover"
            />
            {/* Very subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.5 }}
        onClick={() => scrollTo("services")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-acero/25 hover:text-acero/50 transition-colors"
        aria-label="Scroll down"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase font-semibold"
          style={{ fontFamily: "var(--font-rajdhani)" }}
        >
          {h.scrollLabel}
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
