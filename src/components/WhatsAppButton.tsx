"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "5492996826148"; // Using the phone number from contact
  const message = "Hola! Me gustaría consultar sobre un proyecto.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-blanco border border-acero/20 rounded-none shadow-lg hover:border-acero transition-all duration-500 overflow-hidden relative"
        aria-label="Contactar por WhatsApp"
      >
        {/* Background slide effect */}
        <div className="absolute inset-0 bg-acero translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
        
        <svg
          className="w-6 h-6 text-acero group-hover:text-blanco relative z-10 transition-colors duration-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M9.5 13.5c1.5 1 3.5 1 5 0" />
        </svg>
      </a>
    </motion.div>
  );
}
