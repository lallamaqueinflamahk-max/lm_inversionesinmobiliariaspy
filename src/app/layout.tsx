import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LM | Inversiones Inmobiliarias Paraguay — Datos, no emociones",
  description:
    "Analista financiera y broker inmobiliaria especializada en estudios de mercado de alta precisión. Inversiones en Paraguay con enfoque en ROI y plusvalía.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-ivory text-brand-charcoal">
        {children}
      </body>
    </html>
  );
}
