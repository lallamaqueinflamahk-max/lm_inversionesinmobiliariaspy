import Link from "next/link";

const PROYECTOS_URL =
  "https://drive.google.com/drive/folders/1-HFLAniVv4C6tvEDlpz_mnY0ZN_4LtoH";

export default function ProyectosPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-olive">
              Recursos
            </p>
            <h1 className="mt-4 font-serif text-3xl font-medium text-brand-charcoal md:text-4xl">
              Proyectos LM Inversiones
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/65">
              Abrí el drive en una nueva pestaña y, si necesitas regresar, usá el
              botón de “Volver a inicio”.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={PROYECTOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-brand-gold/40 bg-brand-olive px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-olive-dark focus:outline-none focus:ring-2 focus:ring-brand-gold/30 active:scale-[0.99]"
              >
                Abrir Google Drive
              </a>
              <Link
                href="/#inicio"
                className="inline-flex items-center justify-center rounded-sm border border-brand-gold/35 bg-transparent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-charcoal transition-all hover:-translate-y-0.5 hover:border-brand-gold/70 hover:bg-brand-olive/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 active:scale-[0.99]"
              >
                Volver a la página de inicio
              </Link>
            </div>
          </div>

          <div className="w-full rounded-sm border border-black/8 bg-white p-6 shadow-sm md:max-w-[380px]">
            <h2 className="font-serif text-xl text-brand-charcoal">
              Recomendación rápida
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/65">
              Si estás comparando proyectos, seleccioná el PDF y luego
              solicitá el análisis con tu perfil de inversor desde la web.
            </p>
            <Link
              href="/#lead-magnet"
              className="mt-6 inline-flex w-full items-center justify-center rounded-sm border border-brand-charcoal/20 bg-brand-olive px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-olive-dark focus:outline-none focus:ring-2 focus:ring-brand-gold/30 active:scale-[0.99]"
            >
              Ir al Lead Magnet
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

