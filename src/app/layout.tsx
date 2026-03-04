import type { Metadata } from "next";
import { Montserrat, Rajdhani } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JEM-SI | Construcción y Montaje Metalúrgico",
  description:
    "Soluciones integrales en construcción y montaje metalúrgico. Carpintería metálica, estructuras y montaje en obra. Plottier, Neuquén, Argentina.",
  keywords: [
    "metalúrgica",
    "carpintería metálica",
    "estructuras metálicas",
    "montaje en obra",
    "Neuquén",
    "Plottier",
    "soldadura",
    "construcción",
    "galpones",
    "JEM-SI",
  ],
  openGraph: {
    title: "JEM-SI | Construcción y Montaje Metalúrgico",
    description:
      "Soluciones integrales en construcción y montaje metalúrgico para proyectos de mediana y gran escala.",
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${rajdhani.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
