"use client";

import { Clock, Wrench, Users, HardHat, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "./ScrollReveal";

const statIcons = [Clock, Wrench, Users, HardHat];

export default function About() {
  const { dict } = useLanguage();
  const a = dict.about;

  const statsArray = [
    a.stats.years,
    a.stats.projects,
    a.stats.clients,
    a.stats.team,
  ];

  return (
    <section id="about" className="py-28 bg-gris-claro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <ScrollReveal className="flex justify-center mb-5">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-gris-medio text-acero/40 text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {a.badge}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center text-acero mb-20 tracking-tighter">
            {a.title}
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Paragraphs */}
          <div className="space-y-6">
            {a.paragraphs.map((p: string, i: number) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p
                  className="text-acero/50 leading-relaxed text-base"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {p}
                </p>
              </ScrollReveal>
            ))}

            {/* Thin accent line */}
            <ScrollReveal delay={0.3}>
              <div className="h-px w-16 bg-naranja mt-8" />
            </ScrollReveal>

            {/* Capabilities */}
            <ScrollReveal delay={0.35}>
              <h3 className="text-lg font-bold text-acero mt-10 mb-4 tracking-tight">
                {a.capabilities.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {a.capabilities.items.map((item: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-acero/50 text-sm"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    <Check size={14} className="text-acero/30 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {statsArray.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white border border-gris-medio p-6 hover:border-acero/15 transition-colors duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gris-claro border border-gris-medio group-hover:border-acero/10 transition-colors">
                        <Icon size={18} className="text-acero/40" />
                      </div>
                    </div>
                    <div
                      className="text-4xl font-black text-acero mb-1 tracking-tighter"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs text-acero/30 font-semibold tracking-wider uppercase"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
