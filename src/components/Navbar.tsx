"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const WHATSAPP_BUSINESS = "595984340005"; // +595 984 340005

const PROYECTOS_URL =
  "https://drive.google.com/drive/folders/1-HFLAniVv4C6tvEDlpz_mnY0ZN_4LtoH";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/LM+Inversiones+Inmobiliarias/@-25.2835819,-57.564512,20z/data=!4m6!3m5!1s0x945da900125fc88d:0xae8e764f568d3f7!8m2!3d-25.283!4d-57.5623512!16s%2Fg%2F11mckbs7sl?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D";

const AGENDA_WHATSAPP_HREF = `https://wa.me/${WHATSAPP_BUSINESS}?text=${encodeURIComponent(
  "Hola Liliana. Quiero agendar una visita."
)}`;

const links = [
  { href: "#inversiones", label: "Inversiones" },
  { href: "#analisis", label: "Análisis de Mercado" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY;
      const nearTop = currentY < 10;

      // Oculta al bajar y muestra al subir o estar cerca del inicio.
      if (nearTop || !scrollingDown) setVisible(true);
      else setVisible(false);

      setSolid(currentY > 24);
      lastY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (e.clientY < 84) setVisible(true);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    // #region agent log: branding palette + hrefs
    try {
      const endpoint =
        "http://127.0.0.1:7401/ingest/1510222b-1038-443e-8860-b3a20b3385f5";
      const root = document.documentElement;
      const computed = getComputedStyle(root);
      const lmFormalSage = computed
        .getPropertyValue("--lm-formal-sage")
        .trim();
      const lmRichBronze = computed
        .getPropertyValue("--lm-rich-bronze")
        .trim();
      const lmDeepSpruce = computed
        .getPropertyValue("--lm-deep-spruce")
        .trim();
      const lmPearlGray = computed.getPropertyValue("--lm-pearl-gray").trim();
      const colorBrandOlive = computed
        .getPropertyValue("--color-brand-olive")
        .trim();
      const colorBrandGold = computed
        .getPropertyValue("--color-brand-gold")
        .trim();

      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "119aa6",
        },
        body: JSON.stringify({
          sessionId: "119aa6",
          runId: "debug-pre",
          hypothesisId: "H1,H2,H3,NavHide",
          location: "Navbar.tsx:useEffect",
          message: "Branding vars runtime check (navbar hide logic added)",
          data: {
            lmFormalSage,
            lmRichBronze,
            lmDeepSpruce,
            lmPearlGray,
            colorBrandOlive,
            colorBrandGold,
            WHATSAPP_BUSINESS,
            hasProjectsUrl: PROYECTOS_URL.startsWith("https://"),
            hasMapsUrl: GOOGLE_MAPS_URL.includes("google.com/maps"),
            hasAgendaHref: AGENDA_WHATSAPP_HREF.startsWith("https://wa.me/"),
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
    } catch {
      // ignore logging failures
    }
    // #endregion
  }, []);

  useEffect(() => {
    // #region agent log: navbar visibility
    try {
      const endpoint =
        "http://127.0.0.1:7401/ingest/1510222b-1038-443e-8860-b3a20b3385f5";
      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "119aa6",
        },
        body: JSON.stringify({
          sessionId: "119aa6",
          runId: "debug-pre",
          hypothesisId: "NavHide",
          location: "Navbar.tsx:visibleEffect",
          message: visible ? "Navbar visible" : "Navbar hidden",
          data: { visible, solid },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
    } catch {
      // ignore
    }
    // #endregion
  }, [visible, solid]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 translate-y-0 transform-gpu transition-all duration-300 ${
        visible ? "opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        solid && visible
          ? "border-b border-black/5 bg-brand-ivory/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
      aria-hidden={!visible}
    >
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:gap-8">
        <Link
          href="#inicio"
          className="font-serif text-xl tracking-tight text-brand-charcoal transition-opacity hover:opacity-80"
        >
          <span className="font-semibold">LM</span>
          <span className="mx-2 text-brand-olive">|</span>
          <span className="text-base font-normal uppercase tracking-[0.2em] text-brand-charcoal/80">
            Inversiones
          </span>
        </Link>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end md:gap-4">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 md:gap-10">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-xs font-medium uppercase tracking-[0.18em] text-brand-charcoal/75 transition-colors hover:text-brand-olive"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-2 md:justify-end">
            <a
              href="/proyectos"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-brand-gold/65 bg-brand-olive px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-olive-dark focus:outline-none focus:ring-2 focus:ring-brand-gold/30 active:scale-[0.99]"
            >
              Proyectos
            </a>
            <a
              href={AGENDA_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-brand-gold/65 bg-brand-olive px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-olive-dark focus:outline-none focus:ring-2 focus:ring-brand-gold/30 active:scale-[0.99]"
            >
              Agendá una visita
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-brand-gold/65 bg-brand-olive px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-olive-dark focus:outline-none focus:ring-2 focus:ring-brand-gold/30 active:scale-[0.99]"
            >
              Nuestra oficina
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
