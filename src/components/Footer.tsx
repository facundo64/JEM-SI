"use client";

import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "./ScrollReveal";

const sectionIds = [
  "services",
  "about",
  "process",
  "projects",
  "values",
  "contact",
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { dict, locale } = useLanguage();
  const f = dict.footer;
  const contactInfo = dict.contact.info;

  const copyright =
    locale === "es"
      ? `© ${currentYear} JEM-SI. Todos los derechos reservados.`
      : `© ${currentYear} JEM-SI. All rights reserved.`;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-acero border-t border-gris-medio">
      {/* CTA banner */}
      <div className="border-b border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-acero-light border border-white/5 px-8 py-6">
              <p className="text-white font-black text-xl tracking-tight">
                {f.cta.text}
              </p>
              <button
                onClick={() => scrollTo("contact")}
                className="group flex items-center gap-2 px-6 py-3 bg-white text-acero font-bold text-sm tracking-wider uppercase transition-all duration-200 hover:bg-gris-claro whitespace-nowrap"
              >
                {f.cta.button}
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline mb-4">
              <span className="text-white font-black text-2xl tracking-tighter">
                JEM-SI
              </span>
            </div>
            <p
              className="text-white/30 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              {f.brand.description}
            </p>

            {/* Thin accent line */}
            <div className="mt-6 h-px w-10 bg-naranja" />
          </div>

          {/* Navigation links */}
          <div>
            <h4
              className="text-white text-sm font-bold mb-5 tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              {f.links.title}
            </h4>
            <ul className="space-y-3">
              {f.links.items.map((label: string, i: number) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(sectionIds[i])}
                    className="text-white/30 hover:text-white text-sm transition-colors duration-150 text-left font-medium"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-white text-sm font-bold mb-5 tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              {f.contact.title}
            </h4>
            <ul className="space-y-3.5">
              <li
                className="flex items-center gap-2.5 text-white/30 text-sm"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                <MapPin size={14} className="text-white/20 shrink-0" />
                {contactInfo.location.value}
              </li>
              <li
                className="flex items-center gap-2.5 text-white/30 text-sm"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                <Mail size={14} className="text-white/20 shrink-0" />
                {contactInfo.email.value}
              </li>
              <li
                className="flex items-center gap-2.5 text-white/30 text-sm"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                <Phone size={14} className="text-white/20 shrink-0" />
                {contactInfo.phone.value}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-white/15 text-xs"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {copyright}
          </p>
          <p
            className="text-white/10 text-xs"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Plottier, Neuquén, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
