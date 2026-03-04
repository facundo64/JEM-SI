"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 1800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Clean white line across */}
          <motion.div
            className="absolute top-1/2 left-0 h-px bg-acero/20"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          />

          {/* Logo */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              className="flex items-baseline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span
                className="font-black text-5xl sm:text-7xl tracking-tighter text-acero"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                JEM-SI
              </span>
            </motion.div>

            <motion.p
              className="text-[10px] tracking-[0.5em] uppercase mt-3 text-acero/40"
              style={{ fontFamily: "var(--font-rajdhani)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              soluciones integrales
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
