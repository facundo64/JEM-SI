"use client";

import React, { createContext, useContext, useState } from "react";
import { dictionaries, type Locale, type Dictionary } from "./dictionaries";

interface LanguageContextType {
  locale: Locale;
  dict: Dictionary;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider
      value={{ locale, dict: dictionaries[locale] as Dictionary, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
