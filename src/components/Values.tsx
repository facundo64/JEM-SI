"use client";

import React from "react";
import { Crosshair, CalendarCheck, Gem, Handshake } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "./ScrollReveal";

type LucideIcon = React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;

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
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {v.badge}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-acero text-center mb-8 tracking-widest">
            {v.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            className="text-acero/50 text-center max-w-xl mx-auto mb-24 text-sm leading-[1.8]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {v.subtitle}
          </p>
        </ScrollReveal>

        {/* Minimal Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
          {v.items.map((item: { icon: string; title: string; description: string }, i: number) => {
            const Icon = iconMap[item.icon] ?? Crosshair;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group flex flex-col items-center text-center">
                  <div className="mb-8 text-acero/30 group-hover:text-acero transition-colors duration-500">
                    <Icon size={36} strokeWidth={1} />
                  </div>

                  <h3 className="text-sm font-semibold text-acero mb-4 tracking-[0.2em] uppercase">
                    {item.title}
                  </h3>
                  <p
                    className="text-acero/50 text-sm leading-[2]"
                    style={{ fontFamily: "var(--font-inter)" }}
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
