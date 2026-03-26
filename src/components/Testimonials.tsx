const quotes = [
  {
    name: "Inversor institucional",
    text: "LM me ayudó a elegir la unidad con mejor ROI del edificio sin perder de vista el riesgo de liquidez.",
  },
  {
    name: "Familia patrimonial",
    text: "Su estudio de mercado evitó que pagáramos sobre precio de zona. El cash-flow proyectado se cumplió en línea.",
  },
  {
    name: "Cliente retail",
    text: "No buscaba ‘la casa linda’: quería números. El análisis de plusvalía y comparables fue determinante.",
  },
] as const;

export function Testimonials() {
  return (
    <section className="border-y border-black/5 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-3xl font-medium text-brand-charcoal md:text-4xl">
          Testimonios
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-brand-charcoal/65">
          Resultados y criterio financiero, más allá del estético.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="flex flex-col border-l-2 border-brand-olive/50 pl-6"
            >
              <p className="flex-1 text-sm italic leading-relaxed text-brand-charcoal/80">
                &ldquo;{q.text}&rdquo;
              </p>
              <footer className="mt-4 text-xs font-medium uppercase tracking-widest text-brand-charcoal/45">
                {q.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
