const quotes = [
  "Mi tesis para 2025 es clara: la diversificación ya no es opcional.",
  "Transición de un mercado de “especulación” a un mercado de “flujo de caja”.",
  "60% del capital en renta inmediata (zonas consolidadas) y 40% en tierra/preventas (Luque/MRA).",
] as const;

export function ThesisQuotes() {
  return (
    <section className="border-y border-black/5 bg-brand-ivory py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-brand-charcoal/45">
          Tesis de inversión 2025
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q}
              className="border border-black/6 bg-white p-6 shadow-sm"
            >
              <p className="font-serif text-lg leading-relaxed text-brand-charcoal">
                &ldquo;{q}&rdquo;
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

