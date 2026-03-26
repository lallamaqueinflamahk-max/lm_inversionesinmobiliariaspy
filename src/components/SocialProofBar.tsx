const allies = [
  "Constructora aliada",
  "Cámara inmobiliaria",
  "Desk de inversión",
  "Desarrollo premium",
] as const;

export function SocialProofBar() {
  return (
    <section
      className="border-y border-black/5 bg-white py-10"
      aria-label="Aliados y gremios"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-[0.65rem] font-medium uppercase tracking-[0.28em] text-brand-charcoal/45">
          Red de confianza
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale">
          {allies.map((name) => (
            <span
              key={name}
              className="font-serif text-lg tracking-wide text-brand-charcoal/80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
