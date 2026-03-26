import Link from "next/link";

const WHATSAPP_BUSINESS = "595984340005"; // +595 984 340 005

export function Footer() {
  const whatsappHref = `https://wa.me/${WHATSAPP_BUSINESS}?text=${encodeURIComponent(
    "Hola Liliana. Quiero hablar sobre una oportunidad de inversión."
  )}`;

  return (
    <footer
      id="contacto"
      className="scroll-mt-28 mt-24 border-t border-black/10 bg-brand-charcoal text-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-serif text-2xl">Liliana Martínez</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            Broker inmobiliaria y analista financiera. Decisiones de inversión
            fundamentadas en datos y estudios de mercado en Paraguay.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-white/80">
          <span className="text-xs font-medium uppercase tracking-widest text-white/50">
            Contacto
          </span>
          <Link
            href="https://instagram.com/lm_inversionesinmobiliariaspy"
            className="hover:text-brand-gold"
          >
            @lm_inversionesinmobiliariaspy
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center justify-center border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-0.5 hover:border-brand-gold/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
          >
            WhatsApp directo
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-6 text-xs text-white/55 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-6">
            <Link href="#" className="hover:text-white">
              Términos y ayuda
            </Link>
            <Link href="#" className="hover:text-white">
              Política de privacidad
            </Link>
          </div>
          <p className="text-white/40">Asesoría profesional · Paraguay</p>
        </div>
      </div>
    </footer>
  );
}
