"use client";

import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "./ScrollReveal";

export default function Methodology() {
  const { dict } = useLanguage();
  const m = dict.methodology;

  return (
    <section id="process" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <ScrollReveal className="flex justify-center mb-5">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-gris-medio text-acero/40 text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {m.badge}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-acero text-center mb-4 tracking-tighter">
            {m.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            className="text-acero/40 text-center max-w-2xl mx-auto mb-20 text-lg"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {m.subtitle}
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gris-medio" />

          <div className="space-y-8 lg:space-y-0">
            {m.steps.map((step: { number: string; title: string; description: string }, i: number) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal
                  key={i}
                  delay={i * 0.06}
                  direction={isLeft ? "left" : "right"}
                  distance={25}
                >
                  <div className="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:mb-12">
                    {/* Dot on timeline */}
                    <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 z-10">
                      <div className="w-3 h-3 bg-acero border-4 border-white" />
                    </div>

                    <div
                      className={`${
                        isLeft
                          ? "lg:pr-16 lg:text-right"
                          : "lg:col-start-2 lg:pl-16"
                      }`}
                    >
                      <div className="bg-gris-claro border border-transparent hover:border-gris-medio p-6 transition-colors duration-300">
                        <span
                          className="text-acero/15 font-black text-3xl tracking-tighter"
                          style={{ fontFamily: "var(--font-rajdhani)" }}
                        >
                          {step.number}
                        </span>

                        <h3 className="text-lg font-bold text-acero mt-2 mb-2 tracking-tight">
                          {step.title}
                        </h3>

                        <p
                          className="text-acero/40 text-sm leading-relaxed"
                          style={{ fontFamily: "var(--font-rajdhani)" }}
                        >
                          {step.description}
                        </p>
                      </div>
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
