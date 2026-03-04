"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ScrollReveal from "./ScrollReveal";

const infoIcons = [MapPin, Mail, Phone, Clock];

export default function Contact() {
  const { dict } = useLanguage();
  const c = dict.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const infoItems = [c.info.location, c.info.email, c.info.phone, c.info.hours];

  const inputClasses =
    "w-full bg-gris-claro border border-gris-medio px-4 py-3 text-acero placeholder-acero/25 text-sm focus:outline-none focus:border-acero/30 transition-colors";

  return (
    <section id="contact" className="py-28 bg-gris-claro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Closing quote */}
        <ScrollReveal>
          <blockquote className="text-center mb-20">
            <p className="text-acero/15 text-xl sm:text-2xl font-black tracking-tight max-w-3xl mx-auto leading-snug italic">
              &ldquo;{c.closingQuote}&rdquo;
            </p>
          </blockquote>
        </ScrollReveal>

        {/* Badge */}
        <ScrollReveal className="flex justify-center mb-5">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-gris-medio text-acero/40 text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {c.badge}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-acero text-center mb-4 tracking-tighter">
            {c.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            className="text-acero/40 text-center max-w-xl mx-auto mb-20 text-lg"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {c.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <ScrollReveal direction="left" distance={25}>
            <div className="bg-white border border-gris-medio p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[300px] gap-4 text-center">
                  <div className="p-4 bg-gris-claro border border-gris-medio">
                    <CheckCircle size={36} className="text-acero/40" />
                  </div>
                  <h3 className="text-xl font-bold text-acero tracking-tight">
                    {c.form.successTitle}
                  </h3>
                  <p
                    className="text-acero/40 text-sm"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {c.form.successText}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      className="block text-acero/40 text-xs font-bold mb-2 tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      {c.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                      placeholder={c.form.name}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-acero/40 text-xs font-bold mb-2 tracking-[0.2em] uppercase"
                        style={{ fontFamily: "var(--font-rajdhani)" }}
                      >
                        {c.form.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                        style={{ fontFamily: "var(--font-rajdhani)" }}
                        placeholder="email@ejemplo.com"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-acero/40 text-xs font-bold mb-2 tracking-[0.2em] uppercase"
                        style={{ fontFamily: "var(--font-rajdhani)" }}
                      >
                        {c.form.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        style={{ fontFamily: "var(--font-rajdhani)" }}
                        placeholder="+54 299..."
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-acero/40 text-xs font-bold mb-2 tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      {c.form.message}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                      placeholder={c.form.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-acero hover:bg-acero-light text-white font-bold transition-all duration-200 text-sm tracking-wider uppercase"
                  >
                    {c.form.send}
                    <Send
                      size={15}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right" distance={25} delay={0.1}>
            <div className="flex flex-col gap-4">
              {infoItems.map((info, i) => {
                const Icon = infoIcons[i];
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white border border-gris-medio p-5 hover:border-acero/15 transition-colors duration-200"
                  >
                    <div className="p-2.5 bg-gris-claro border border-gris-medio shrink-0">
                      <Icon size={18} className="text-acero/40" />
                    </div>
                    <div>
                      <div
                        className="text-xs text-acero/30 font-bold tracking-[0.2em] uppercase mb-0.5"
                        style={{ fontFamily: "var(--font-rajdhani)" }}
                      >
                        {info.label}
                      </div>
                      <div
                        className="text-acero/70 text-sm font-semibold"
                        style={{ fontFamily: "var(--font-rajdhani)" }}
                      >
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Map placeholder */}
              <div className="flex-1 min-h-[180px] bg-white border border-gris-medio overflow-hidden relative group hover:border-acero/15 transition-colors duration-200">
                <div className="absolute inset-0 bg-gris-claro">
                  <svg
                    className="absolute inset-0 w-full h-full opacity-[0.06]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="map-grid"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 30 0 L 0 0 0 30"
                          fill="none"
                          stroke="#2C2C2C"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#map-grid)" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center p-4">
                  <MapPin size={24} className="text-acero/25" />
                  <p
                    className="text-acero/30 text-xs font-semibold tracking-wider"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {c.mapLabel}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
