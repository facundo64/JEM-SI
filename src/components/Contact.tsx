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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al enviar");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
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
            style={{ fontFamily: "var(--font-inter)" }}
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
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {c.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <ScrollReveal direction="left" distance={20}>
            <div className="bg-blanco p-8 lg:p-12 border border-acero/10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-6 text-center">
                  <div className="mb-4">
                    <CheckCircle size={48} strokeWidth={1} className="text-acero/30" />
                  </div>
                  <h3 className="text-xl font-medium text-acero tracking-widest uppercase">
                    {c.form.successTitle}
                  </h3>
                  <p
                    className="text-acero/50 text-sm leading-[2]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {c.form.successText}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label
                      className="block text-acero/30 text-[10px] font-bold mb-3 tracking-[0.3em] uppercase"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {c.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-acero/10 px-0 py-3 text-acero placeholder-acero/20 text-sm focus:outline-none focus:border-acero transition-colors"
                      style={{ fontFamily: "var(--font-inter)" }}
                      placeholder={c.form.name}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label
                        className="block text-acero/30 text-[10px] font-bold mb-3 tracking-[0.3em] uppercase"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {c.form.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-acero/10 px-0 py-3 text-acero placeholder-acero/20 text-sm focus:outline-none focus:border-acero transition-colors"
                        style={{ fontFamily: "var(--font-inter)" }}
                        placeholder="email@ejemplo.com"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-acero/30 text-[10px] font-bold mb-3 tracking-[0.3em] uppercase"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {c.form.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-acero/10 px-0 py-3 text-acero placeholder-acero/20 text-sm focus:outline-none focus:border-acero transition-colors"
                        style={{ fontFamily: "var(--font-inter)" }}
                        placeholder="+54 299..."
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-acero/30 text-[10px] font-bold mb-3 tracking-[0.3em] uppercase"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {c.form.message}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-acero/10 px-0 py-3 text-acero placeholder-acero/20 text-sm focus:outline-none focus:border-acero transition-colors resize-none"
                      style={{ fontFamily: "var(--font-inter)" }}
                      placeholder={c.form.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`group w-full flex items-center justify-center gap-3 px-8 py-5 border border-acero text-acero font-medium transition-all duration-300 hover:bg-acero hover:text-blanco text-[11px] tracking-[0.2em] uppercase mt-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        {c.form.send}
                        <Send
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>

                  {error && (
                    <p className="text-red-500 text-xs mt-4 text-center" style={{ fontFamily: "var(--font-inter)" }}>
                      {error}
                    </p>
                  )}
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right" distance={20} delay={0.1}>
            <div className="flex flex-col gap-6 h-full">
              {infoItems.map((info, i) => {
                const Icon = infoIcons[i];
                return (
                  <div
                    key={i}
                    className="flex items-start gap-6 bg-blanco border border-acero/10 p-8 hover:border-acero/30 transition-colors duration-500"
                  >
                    <div className="mt-1 text-acero/30">
                      <Icon size={24} strokeWidth={1} />
                    </div>
                    <div>
                      <div
                        className="text-[10px] text-acero/40 font-semibold tracking-[0.3em] uppercase mb-2"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {info.label}
                      </div>
                      <div
                        className="text-acero/80 text-sm font-medium leading-relaxed"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
