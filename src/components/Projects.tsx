"use client";

import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const { dict } = useLanguage();
  const p = dict.projects;

  return (
    <section id="projects" className="py-28 bg-gris-claro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <ScrollReveal className="flex justify-center mb-5">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-gris-medio text-acero/40 text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {p.badge}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-acero text-center mb-4 tracking-tighter">
            {p.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            className="text-acero/40 text-center max-w-2xl mx-auto mb-20 text-lg"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {p.subtitle}
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.items.map((project: { title: string; category: string; year: string }, i: number) => (
            <ScrollReveal key={i} delay={(i % 3) * 0.08}>
              <div className="group bg-white border border-gris-medio overflow-hidden hover:border-acero/20 transition-all duration-300">
                {/* Image placeholder */}
                <div className="relative h-52 bg-gris-claro overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1504307651254-35680f356dfd",
                        "1581094794329-c8112a89af12",
                        "1558618666-fcd25c85f82e",
                        "1513467535987-db81bc0d0cd0",
                        "1590644365607-1c5a6f0e5b5e",
                        "1541888946425-d81bb19240f5",
                      ][i]
                    }?w=600&q=75`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Year */}
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-acero/50 text-xs font-bold tracking-wider"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span
                    className="inline-block px-2.5 py-1 bg-gris-claro border border-gris-medio text-acero/40 text-xs font-bold mb-3 tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-acero font-bold text-base leading-snug group-hover:text-acero/70 transition-colors duration-200 tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
