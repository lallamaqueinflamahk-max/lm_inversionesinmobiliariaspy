const ZONES = [
  {
    zone: "Barrio Herrera / Lillo",
    profile: "Residencial Premium / Boutique",
    roi: "7.5% – 9%",
    appreciation: "Alta (Revalorización)",
  },
  {
    zone: "Villa Morra / Santa Teresa",
    profile: "Corporativo y Lujo",
    roi: "6% – 8%",
    appreciation: "Estable (Activo Refugio)",
  },
  {
    zone: "Luque / Zona Aeropuerto",
    profile: "Logístico e Industrial",
    roi: "9% – 12%",
    appreciation: "Media-Alta (Expansión)",
  },
  {
    zone: "San Lorenzo / Fernando",
    profile: "Vivienda Multifamiliar (Clase Media)",
    roi: "10% – 11%",
    appreciation: "Media (Alta Rotación)",
  },
] as const;

export function ZonePerformance() {
  return (
    <section id="zonas" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium text-brand-charcoal md:text-4xl">
            Mapa de rendimiento por zonas (Asunción & Gran Asunción)
          </h2>
          <p className="mt-4 text-brand-charcoal/65">
            Lectura rápida de yield (ROI) y plusvalía proyectada para perfilar
            escenarios de renta y salida.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-sm border border-black/10">
          <div className="overflow-x-auto">
            <table className="min-w-[860px] w-full border-collapse bg-white text-left">
              <thead className="bg-brand-olive text-white">
                <tr>
                  <th className="px-5 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                    Zona
                  </th>
                  <th className="px-5 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                    Perfil del activo
                  </th>
                  <th className="px-5 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                    Yield (ROI)
                  </th>
                  <th className="px-5 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                    Plusvalía proyectada
                  </th>
                </tr>
              </thead>
              <tbody>
                {ZONES.map((z) => (
                  <tr key={z.zone} className="border-t border-black/8">
                    <td className="px-5 py-5 font-serif text-lg text-brand-charcoal">
                      {z.zone}
                    </td>
                    <td className="px-5 py-5 text-sm text-brand-charcoal/70">
                      {z.profile}
                    </td>
                    <td className="px-5 py-5">
                      <span className="inline-flex items-center rounded-sm border border-brand-gold/50 bg-brand-olive/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal">
                        {z.roi}
                      </span>
                    </td>
                    <td className="px-5 py-5 text-sm text-brand-charcoal/70">
                      {z.appreciation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 text-xs text-brand-charcoal/55">
          Datos del reporte 2025 (Q1–Q2). Rendimientos y plusvalías dependen del
          activo, el ticket y el plan de salida.
        </p>
      </div>
    </section>
  );
}

