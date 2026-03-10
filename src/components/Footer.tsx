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
    <footer className="bg-blanco border-t border-gris-borde">
      {/* CTA banner */}
      <div className="border-b border-gris-borde py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-4 sm:px-8">
              <p className="text-acero font-light text-2xl tracking-wide text-center sm:text-left">
                {f.cta.text}
              </p>
              <button
                onClick={() => scrollTo("contact")}
                className="group flex items-center gap-3 px-8 py-4 border border-acero/10 text-acero font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-acero hover:text-blanco whitespace-nowrap"
              >
                {f.cta.button}
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline mb-6">
              <span className="text-acero font-light text-2xl tracking-[0.1em]">
                JEM-SI
              </span>
            </div>
            <p
              className="text-acero/60 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {f.brand.description}
            </p>

            {/* Thin accent line */}
            <div className="mt-8 h-[1px] w-12 bg-acero/10" />
          </div>

          {/* Navigation links */}
          <div>
            <h4
              className="text-acero text-xs font-semibold mb-6 tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {f.links.title}
            </h4>
            <ul className="space-y-4">
              {f.links.items.map((label: string, i: number) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(sectionIds[i])}
                    className="text-acero/50 hover:text-acero text-sm transition-colors duration-300 text-left font-medium"
                    style={{ fontFamily: "var(--font-inter)" }}
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
              className="text-acero text-xs font-semibold mb-6 tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {f.contact.title}
            </h4>
            <ul className="space-y-4">
              <li
                className="flex items-center gap-3 text-acero/60 text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <MapPin size={15} strokeWidth={1.5} className="text-acero/30 shrink-0" />
                {contactInfo.location.value}
              </li>
              <li
                className="flex items-center gap-3 text-acero/60 text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <Mail size={15} strokeWidth={1.5} className="text-acero/30 shrink-0" />
                {contactInfo.email.value}
              </li>
              <li
                className="flex items-center gap-3 text-acero/60 text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <Phone size={15} strokeWidth={1.5} className="text-acero/30 shrink-0" />
                {contactInfo.phone.value}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gris-borde py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-acero/40 text-xs tracking-wider"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {copyright}
          </p>
          <p
            className="text-acero/40 text-xs tracking-wider"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Plottier, Neuquén, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
