"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Clock, Wrench, Users, HardHat, Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "./ScrollReveal";

const statIcons = [Clock, Wrench, Users, HardHat];

function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic for a smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}

function CountUpStat({ value, label, Icon, delay }: { value: string; label: string; Icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Parse numeric value and suffix (e.g. "500+" → 500 and "+")
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const animatedValue = useCountUp(numericPart, 2000, isVisible);

  return (
    <ScrollReveal delay={delay}>
      <div ref={ref} className="flex flex-col items-center text-center group">
        <div className="mb-6 text-acero/20 group-hover:text-acero transition-colors duration-500">
          <Icon size={28} strokeWidth={1} />
        </div>
        <div
          className="text-5xl font-light text-acero mb-3 tracking-widest"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {isVisible ? `${animatedValue}${suffix}` : `0${suffix}`}
        </div>
        <div
          className="text-[10px] text-acero/40 font-medium tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {label}
        </div>
      </div>
    </ScrollReveal>
  );
}

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
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {a.badge}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center text-acero mb-24 tracking-widest">
            {a.title}
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Paragraphs */}
          <div className="space-y-8">
            {a.paragraphs.map((p: string, i: number) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p
                  className="text-acero/50 leading-[2] text-sm"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {p}
                </p>
              </ScrollReveal>
            ))}

            {/* Thin accent line */}
            <ScrollReveal delay={0.3}>
              <div className="h-[1px] w-12 bg-acero/20 mt-12" />
            </ScrollReveal>

            {/* Capabilities */}
            <ScrollReveal delay={0.35}>
              <h3 className="text-sm font-semibold text-acero mt-12 mb-8 tracking-[0.2em] uppercase">
                {a.capabilities.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {a.capabilities.items.map((item: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-acero/50 text-xs tracking-wider"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <Check size={14} className="text-acero/30 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Stats grid with animated counters */}
          <div className="grid grid-cols-2 gap-12 sm:gap-16">
            {statsArray.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <CountUpStat
                  key={i}
                  value={stat.value}
                  label={stat.label}
                  Icon={Icon}
                  delay={i * 0.1}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

