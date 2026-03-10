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
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {p.badge}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-acero text-center mb-16 tracking-widest">
            {p.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            className="text-acero/50 text-center max-w-2xl mx-auto mb-32 text-sm leading-[1.8]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {p.subtitle}
          </p>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
          {p.items.map((project: { title: string; category: string; year: string }, i: number) => (
            <ScrollReveal key={i} delay={(i % 3) * 0.15}>
              <div className="group cursor-pointer">
                {/* Image */}
                <div className="relative aspect-[4/5] bg-gris-claro overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-shadow duration-[1s]">
                  <img
                    src={[
                      "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=800", // Trabajadores en estructura
                      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800", // Nave industrial terminada
                      "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800", // Construcción metálica
                      "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=800", // Ambiente taller
                      "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800", // Interior nave
                      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800", // Ingeniería civil vigas
                    ][i]}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1s] ease-out"
                  />

                  {/* Category overlay */}
                  <div
                    className="absolute bottom-6 left-6 text-white/90 text-[10px] tracking-[0.2em] uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-baseline justify-between">
                  <h3 className="text-acero font-medium text-sm tracking-wide group-hover:text-acero/60 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <span
                    className="text-acero/40 text-xs font-light tracking-widest"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {project.year}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
