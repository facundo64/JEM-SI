"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "./ScrollReveal";

export default function Gallery() {
  const { dict } = useLanguage();
  const g = dict.gallery; // We will add this to dictionaries next

  const images = [
    {
      url: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Estructura metálica en construcción",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      url: "https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Detalle de soldadura",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      url: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Vigas de acero",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      url: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Montaje industrial",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      url: "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Fachada arquitectónica",
      span: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-28 bg-blanco">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <ScrollReveal className="flex justify-center mb-5">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-gris-medio text-acero/40 text-[10px] font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {g?.badge || "Galería"}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-acero tracking-tight mb-6">
              {g?.title || "Nuestro Trabajo"}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p
              className="text-acero/50 max-w-xl mx-auto text-sm leading-[1.8] font-light"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {g?.subtitle || "Una selección visual de nuestra artesanía en metal e instalaciones arquitectónicas."}
            </p>
          </ScrollReveal>
        </div>

        {/* Masonry/Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`relative group overflow-hidden bg-gris-claro ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 saturate-50 group-hover:saturate-100"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
