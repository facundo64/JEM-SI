"use client";

import React from "react";
import { Crosshair, CalendarCheck, Gem, Handshake } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "./ScrollReveal";

type LucideIcon = React.ComponentType<{ size?: number; className?: string }>;

const iconMap: Record<string, LucideIcon> = {
  Crosshair,
  CalendarCheck,
  Gem,
  Handshake,
};

export default function Values() {
  const { dict } = useLanguage();
  const v = dict.values;

  return (
    <section id="values" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <ScrollReveal className="flex justify-center mb-5">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-gris-medio text-acero/40 text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {v.badge}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-acero text-center mb-4 tracking-tighter">
            {v.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            className="text-acero/40 text-center max-w-xl mx-auto mb-20 text-lg"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {v.subtitle}
          </p>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {v.items.map((item: { icon: string; title: string; description: string }, i: number) => {
            const Icon = iconMap[item.icon] ?? Crosshair;
            return (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="group bg-gris-claro border border-transparent hover:border-gris-medio p-8 text-center transition-all duration-300 h-full">
                  <div className="inline-flex p-4 bg-white border border-gris-medio mb-5">
                    <Icon size={24} className="text-acero/50" />
                  </div>

                  <h3 className="text-lg font-bold text-acero mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p
                    className="text-acero/40 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
