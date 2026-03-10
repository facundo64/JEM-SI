"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const sectionIds = [
  "services",
  "about",
  "gallery",
  "projects",
  "values",
  "contact",
];

export default function Navbar() {
  const { dict, locale, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLabels = [
    dict.nav.services,
    dict.nav.about,
    dict.nav.gallery,
    dict.nav.projects,
    dict.nav.values,
    dict.nav.contact,
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b-[0.5px] border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-baseline group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-acero font-light text-2xl tracking-[0.1em] group-hover:opacity-70 transition-opacity">
              JEM-SI
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {sectionIds.map((id, i) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="text-xs text-acero/50 hover:text-acero transition-colors duration-200 font-semibold tracking-widest uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {navLabels[i]}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-gris-medio hover:border-acero/30 text-acero/40 hover:text-acero transition-all duration-200 text-xs font-bold tracking-wider uppercase"
              aria-label="Toggle language"
            >
              <Globe size={13} />
              <span>{locale.toUpperCase()}</span>
            </button>

            <button
              className="md:hidden text-acero/50 hover:text-acero transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gris-medio overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {sectionIds.map((id, i) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="text-left px-3 py-3 text-acero/60 hover:text-acero hover:bg-gris-claro transition-all duration-150 text-sm font-semibold tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {navLabels[i]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
