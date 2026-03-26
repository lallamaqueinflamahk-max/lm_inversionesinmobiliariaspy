"use client";

import { useState } from "react";

const WHATSAPP_BUSINESS = "595984340005"; // +595 984 340005
const WHATSAPP_BUSINESS_FORMATTED = "+595 984 340005";

function PdfThumbnail() {
  return (
    <div
      className="relative aspect-[3/4] w-full max-w-[200px] overflow-hidden rounded border border-black/10 bg-gradient-to-br from-brand-charcoal via-brand-charcoal/90 to-brand-olive-dark shadow-lg"
      aria-hidden
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-4 top-6 h-1 w-16 rounded bg-white/40" />
        <div className="absolute left-4 top-10 h-1 w-24 rounded bg-white/25" />
        <div className="absolute left-4 top-20 h-1 w-20 rounded bg-white/20" />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-black/35 p-4 backdrop-blur-[2px]">
        <p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-white/90">
          Reporte
        </p>
        <p className="mt-0.5 font-serif text-lg text-white">Q1 · Oportunidades</p>
      </div>
    </div>
  );
}

export function LeadMagnet() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [message, setMessage] = useState<string | null>(null);

  const buildWhatsAppHref = (data: {
    name: string;
    whatsapp: string;
    investorProfile: string;
  }) => {
    const text = `Hola Liliana. Soy ${data.name}. Perfil: ${data.investorProfile}. Mi WhatsApp es: ${data.whatsapp}. Quiero recibir el Reporte Trimestral de Oportunidades Inmobiliarias.`;
    return `https://wa.me/${WHATSAPP_BUSINESS}?text=${encodeURIComponent(text)}`;
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // #region agent log: lead magnet submit invoked
    try {
      const form = e.currentTarget;
      const investorProfile = (
        form.elements.namedItem("investorProfile") as HTMLSelectElement
      ).value;
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
          hypothesisId: "H4",
          location: "LeadMagnet.tsx:handleSubmit(start)",
          message: "LeadMagnet submit handler executed",
          data: { investorProfile },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
    } catch {
      // ignore
    }
    // #endregion

    e.preventDefault();
    setStatus("loading");
    setMessage(null);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement)
        .value,
      investorProfile: (
        form.elements.namedItem("investorProfile") as HTMLSelectElement
      ).value,
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      // Aunque la API sea un placeholder interno, para el usuario el flujo es real:
      // se abre WhatsApp con el mensaje prellenado.
      if (res.ok) setStatus("ok");
      form.reset();
    } catch {
      // No bloqueamos el flujo: igual llevamos a WhatsApp (evita fricción).
      setStatus("ok");
    }

    const whatsappHref = buildWhatsAppHref(data);

    // #region agent log: lead magnet whatsappHref check
    try {
      const endpoint =
        "http://127.0.0.1:7401/ingest/1510222b-1038-443e-8860-b3a20b3385f5";
      const businessUsed = whatsappHref.includes(WHATSAPP_BUSINESS);
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
          location: "LeadMagnet.tsx:handleSubmit",
          message: "Lead magnet opens WhatsApp with real business number",
          data: {
            businessUsed,
            investorProfile: data.investorProfile,
            hasReporteText: whatsappHref.includes("Reporte Trimestral"),
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
    } catch {
      // ignore logging failures
    }
    // #endregion

    window.open(whatsappHref, "_blank", "noopener,noreferrer");
    setMessage(
      `Perfecto. Abrimos WhatsApp (${WHATSAPP_BUSINESS_FORMATTED}) para enviarte el reporte.`,
    );
  }

  return (
    <section
      id="lead-magnet"
      className="scroll-mt-28 py-20 md:py-28"
      aria-labelledby="lead-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-sm border border-brand-olive/25 bg-brand-olive/8 shadow-sm">
          <div className="grid gap-10 p-8 md:grid-cols-[auto,1fr] md:items-center md:gap-14 md:p-12 lg:p-14">
            <PdfThumbnail />
            <div>
              <h2
                id="lead-heading"
                className="font-serif text-[clamp(1.6rem,2.1vw,2.1rem)] text-brand-charcoal md:text-3xl"
              >
                Obtén mi Reporte Trimestral de Oportunidades Inmobiliarias
              </h2>
              <p className="mt-3 max-w-xl text-sm text-brand-charcoal/75">
                Dejá tus datos y recibí el PDF con lectura de mercado y
                oportunidades alineadas a tu perfil de riesgo.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-8 grid max-w-lg gap-4 sm:grid-cols-2"
              >
                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-[0.65rem] font-semibold uppercase tracking-widest text-brand-charcoal/55">
                    Nombre
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none ring-brand-olive/40 transition-shadow focus:ring-2"
                    placeholder="Tu nombre"
                  />
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-[0.65rem] font-semibold uppercase tracking-widest text-brand-charcoal/55">
                    Tu WhatsApp
                  </span>
                  <input
                    name="whatsapp"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none ring-brand-olive/40 transition-shadow focus:ring-2"
                    placeholder="+595 9xx xxx xxx"
                    inputMode="tel"
                  />
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-[0.65rem] font-semibold uppercase tracking-widest text-brand-charcoal/55">
                    Perfil del inversor
                  </span>
                  <select
                    name="investorProfile"
                    required
                    className="w-full border border-black/15 bg-white px-4 py-3 text-sm outline-none ring-brand-olive/40 transition-shadow focus:ring-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Elegí una opción
                    </option>
                    <option value="conservador">Conservador</option>
                    <option value="moderado">Moderado</option>
                    <option value="agresivo">Agresivo</option>
                  </select>
                </label>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-sm border border-brand-gold/60 bg-brand-olive px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-olive-dark disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 active:scale-[0.99] sm:w-auto"
                  >
                    {status === "loading" ? "Enviando…" : "Quiero el reporte"}
                  </button>
                  {message ? (
                    <p
                      className={`mt-3 text-sm ${status === "ok" ? "text-brand-olive-dark" : "text-red-700"}`}
                    >
                      {message}
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
