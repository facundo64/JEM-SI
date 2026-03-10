"use client";

import React from "react";
import { Hammer, Building2, HardHat, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "./ScrollReveal";

type LucideIcon = React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;

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
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {s.badge}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-acero text-center mb-8 tracking-widest">
            {s.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            className="text-acero/50 text-center max-w-2xl mx-auto mb-32 text-sm leading-[1.8]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {s.subtitle}
          </p>
        </ScrollReveal>

        {/* Categories as Exhibition Text Blocks */}
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
          {s.categories.map((cat: { id: string; icon: string; title: string; description: string; items: string[] }, i: number) => {
            const Icon = iconMap[cat.icon] ?? Hammer;
            return (
              <ScrollReveal key={cat.id} delay={i * 0.2}>
                <div className="group flex flex-col items-center text-center h-full">
                  <div className="mb-10 text-acero/30 group-hover:text-acero transition-colors duration-500">
                    <Icon size={32} strokeWidth={1} />
                  </div>

                  <h3 className="text-lg font-medium text-acero mb-6 tracking-[0.1em] uppercase">
                    {cat.title}
                  </h3>

                  <p
                    className="text-acero/50 text-sm leading-[2] mb-10 flex-grow"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {cat.description}
                  </p>

                  <div className="w-8 h-[1px] bg-acero/20 mb-10 group-hover:w-16 transition-all duration-500" />

                  <ul className="space-y-4 w-full">
                    {cat.items.map((item: string) => (
                      <li
                        key={item}
                        className="flex items-center justify-center text-acero/60 text-xs tracking-wide"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
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
