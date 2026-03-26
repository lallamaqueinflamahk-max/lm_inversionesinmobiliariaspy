const roles = [
  {
    title: "Analista Financiera",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    ),
    description:
      "Modelos de rentabilidad, ROI y proyecciones de flujo de caja para decidir con números claros, no con suposiciones.",
  },
  {
    title: "Broker Inmobiliaria",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    description:
      "Gestión de cartera exclusiva, negociación y cierre estratégico alineado a tus objetivos patrimoniales.",
  },
  {
    title: "Estudio de Mercado",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1.5 3m8.5-3l1.5 3m0 0l.5 1.5m-.5-1.5h-9.5" />
      </svg>
    ),
    description:
      "Análisis de zonas, plusvalía histórica y señales de oferta-demanda, con enfoque en datos masivos aplicados al real estate.",
  },
] as const;

export function SpecializationMatrix() {
  return (
    <section id="analisis" className="scroll-mt-28 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium text-brand-charcoal md:text-4xl">
            El Valor de la Especialización
          </h2>
          <p className="mt-4 text-brand-charcoal/65">
            Tres disciplinas que trabajan juntas para reducir riesgo y maximizar
            retorno ajustado.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {roles.map(({ title, icon, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden border border-black/8 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-olive/35 hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-brand-olive/30 text-brand-olive transition-colors group-hover:border-brand-olive group-hover:bg-brand-olive/10">
                {icon}
              </div>
              <h3 className="font-serif text-xl text-brand-charcoal">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/70">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
