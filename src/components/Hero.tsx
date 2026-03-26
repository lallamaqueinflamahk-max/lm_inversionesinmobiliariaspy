import Image from "next/image";
import Link from "next/link";

const WHATSAPP_BUSINESS = "595984340005"; // +595 984 340005
const PROYECTOS_URL =
  "https://drive.google.com/drive/folders/1-HFLAniVv4C6tvEDlpz_mnY0ZN_4LtoH";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/LM+Inversiones+Inmobiliarias/@-25.2835819,-57.564512,20z/data=!4m6!3m5!1s0x945da900125fc88d:0xae8e764f568d3f7!8m2!3d-25.283!4d-57.5623512!16s%2Fg%2F11mckbs7sl?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D";

export function Hero() {
  const agendaWhatsAppHref = `https://wa.me/${WHATSAPP_BUSINESS}?text=${encodeURIComponent(
    "Hola Liliana. Quiero agendar una visita para conocer oportunidades de inversión."
  )}`;

  return (
    <section
      id="inicio"
      className="scroll-mt-28 relative bg-gradient-to-b from-brand-sage/10 via-transparent to-transparent pt-28 pb-20 md:pt-36 md:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 space-y-8 lg:order-1">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-olive">
            Paraguay · Real estate intelligence
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-[clamp(2.25rem,4.1vw,3.55rem)] font-medium leading-[1.08] tracking-tight text-brand-charcoal"
          >
            Inversiones Inmobiliarias en Paraguay: Decisiones basadas en Datos,
            no en Emociones
          </h1>
          <p className="max-w-xl text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed text-brand-charcoal/70">
            Analista Financiera &amp; Broker especializada en Estudios de Mercado
            de Alta Precisión
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="#inversiones"
              className="inline-flex items-center justify-center rounded-sm border border-brand-gold/60 bg-brand-olive px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-olive-dark focus:outline-none focus:ring-2 focus:ring-brand-gold/30 active:scale-[0.99]"
            >
              Ver Oportunidades de Inversión
            </Link>
            <a
              href="/proyectos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-brand-gold/40 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-charcoal transition-all hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-olive/10 hover:text-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-gold/25 active:scale-[0.99]"
            >
              Descargar Reporte de Mercado 2024
            </a>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <a
              href="/proyectos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-brand-gold/40 bg-transparent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-charcoal transition-all hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-olive/10 hover:text-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-gold/25 active:scale-[0.99]"
            >
              Proyectos
            </a>
            <a
              href={agendaWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-brand-gold/40 bg-transparent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-charcoal transition-all hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-olive/10 hover:text-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-gold/25 active:scale-[0.99]"
            >
              Agenda una visita
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-brand-gold/40 bg-transparent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-charcoal transition-all hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-olive/10 hover:text-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-gold/25 active:scale-[0.99]"
            >
              Nuestra oficina
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl shadow-black/10 ring-1 ring-black/5">
            <Image
              src="/broker-hero.png"
              alt="Liliana Martínez, broker y analista financiera"
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 42vw, 100vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/15 to-transparent"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
              <p className="font-serif text-2xl md:text-3xl">Liliana Martínez</p>
              <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/90">
                Broker · Análisis financiero · Estudio de mercado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
