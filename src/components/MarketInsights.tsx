const items = [
  {
    date: "Mar 2025",
    title: "Spread renta vs. bonos soberanos en Asunción",
    excerpt:
      "Ventana favorable para activos físicos en corredores con demanda institucional sostenida.",
  },
  {
    date: "Feb 2025",
    title: "Stock en upscale: señales de absorción",
    excerpt:
      "Menor tiempo de comercialización en unidades con amenities diferenciados y ticket medio alto.",
  },
  {
    date: "Ene 2025",
    title: "Zonas con pipeline de infraestructura",
    excerpt:
      "Mapa de obras y plusvalía esperada para horizontes de 24–48 meses.",
  },
] as const;

export function MarketInsights() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-medium text-brand-charcoal md:text-4xl">
              Insights de Mercado
            </h2>
            <p className="mt-2 max-w-xl text-brand-charcoal/65">
              Notas breves que podés actualizar para mostrar pulso de mercado y
              rigor de research.
            </p>
          </div>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col border border-black/6 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <time className="text-[0.65rem] font-medium uppercase tracking-widest text-brand-olive">
                {item.date}
              </time>
              <h3 className="mt-3 font-serif text-lg text-brand-charcoal">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-charcoal/70">
                {item.excerpt}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
