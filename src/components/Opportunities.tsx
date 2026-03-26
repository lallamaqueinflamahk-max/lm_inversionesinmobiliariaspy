"use client";

import Image from "next/image";
import { useEffect } from "react";

const WHATSAPP_BUSINESS = "595984340005"; // +595 984 340005

function buildWhatsAppHref(propertyTitle: string) {
  const text = `Hola Liliana. Quiero solicitar análisis de inversión para: ${propertyTitle}.`;
  return `https://wa.me/${WHATSAPP_BUSINESS}?text=${encodeURIComponent(text)}`;
}

const properties = [
  {
    title: "Torre corporativa · Asunción",
    location: "Av. Santa Teresa — zona institucional",
    roi: "ROI est. 7%",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    title: "Condominio boutique",
    location: "Luque · corredor de valor medio-alto",
    roi: "Cash-on-cash 6.2%",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    title: "Lote estratégico pre-desarrollo",
    location: "Gran Asunción · pipeline infra",
    roi: "Plusvalía proyectada 12%",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
] as const;

export function Opportunities() {
  useEffect(() => {
    // #region agent log: opportunities whatsappHref check
    try {
      const endpoint =
        "http://127.0.0.1:7401/ingest/1510222b-1038-443e-8860-b3a20b3385f5";
      const hrefs = properties.map((p) => buildWhatsAppHref(p.title));
      const allBusinessUsed = hrefs.every((h) => h.includes(WHATSAPP_BUSINESS));
      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "119aa6",
        },
        body: JSON.stringify({
          sessionId: "119aa6",
          runId: "debug-pre",
          hypothesisId: "H3",
          location: "Opportunities.tsx:useEffect",
          message: "Opportunities CTA opens WhatsApp with real business number",
          data: {
            allBusinessUsed,
            ctasCount: hrefs.length,
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
    } catch {
      // ignore logging failures
    }
    // #endregion
  }, []);

  return (
    <section id="inversiones" className="scroll-mt-28 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium text-brand-charcoal md:text-4xl">
            Oportunidades Seleccionadas
          </h2>
          <p className="mt-4 text-brand-charcoal/65">
            Curaduría con lentes financieras: ubicación, ticket y escenarios de
            salida.
          </p>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {properties.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden border border-black/6 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-brand-charcoal/85 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  {p.roi}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl text-brand-charcoal">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-brand-charcoal/60">
                  {p.location}
                </p>
                <a
                  href={buildWhatsAppHref(p.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center border border-brand-charcoal/20 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal transition-all hover:-translate-y-0.5 hover:border-brand-olive hover:bg-brand-olive/5 hover:text-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-olive/30"
                >
                  Solicitar análisis de inversión
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
