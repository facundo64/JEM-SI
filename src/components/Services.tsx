"use client";

import React from "react";
import { Hammer, Building2, HardHat, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "./ScrollReveal";

type LucideIcon = React.ComponentType<{ size?: number; className?: string }>;

const iconMap: Record<string, LucideIcon> = {
  Hammer,
  Building2,
  HardHat,
};

export default function Services() {
  const { dict } = useLanguage();
  const s = dict.services;

  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <ScrollReveal className="flex justify-center mb-5">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-gris-medio text-acero/40 text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {s.badge}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-acero text-center mb-4 tracking-tighter">
            {s.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            className="text-acero/40 text-center max-w-2xl mx-auto mb-20 text-lg"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {s.subtitle}
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {s.categories.map((cat: { id: string; icon: string; title: string; description: string; items: string[] }, i: number) => {
            const Icon = iconMap[cat.icon] ?? Hammer;
            return (
              <ScrollReveal key={cat.id} delay={i * 0.1}>
                <div className="group bg-gris-claro border border-transparent hover:border-gris-medio p-8 transition-all duration-300 h-full">
                  <div className="inline-flex p-3 bg-white border border-gris-medio mb-6">
                    <Icon size={24} className="text-acero/60" />
                  </div>

                  <h3 className="text-xl font-bold text-acero mb-3 tracking-tight">
                    {cat.title}
                  </h3>

                  <p
                    className="text-acero/40 text-sm leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {cat.description}
                  </p>

                  <div className="h-px bg-gris-medio mb-6" />

                  <ul className="space-y-2.5">
                    {cat.items.map((item: string) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-acero/60 text-sm"
                        style={{ fontFamily: "var(--font-rajdhani)" }}
                      >
                        <CheckCircle2 size={14} className="text-acero/30 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
