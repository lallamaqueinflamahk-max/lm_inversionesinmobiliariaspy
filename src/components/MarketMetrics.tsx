"use client";

import { useEffect, useRef, useState } from "react";

const METRICS = [
  {
    label: "Rentabilidad promedio generada",
    suffix: "%",
    value: 8.5,
    prefix: "+",
    decimals: 1,
  },
  {
    label: "Plusvalía proyectada (zonas premium)",
    suffix: "%",
    value: 15,
    prefix: "",
    decimals: 0,
  },
  {
    label: "Capital gestionado en asesorías",
    suffix: "M+",
    value: 12,
    prefix: "USD ",
    decimals: 0,
  },
] as const;

/** Índice ilustrativo 2019–2024 (base 100). */
const CHART_POINTS = [
  { year: "2019", v: 100 },
  { year: "2020", v: 102 },
  { year: "2021", v: 108 },
  { year: "2022", v: 115 },
  { year: "2023", v: 122 },
  { year: "2024", v: 131 },
];

function useCountUp(
  target: number,
  decimals: number,
  active: boolean,
): string {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const duration = 1600;
    const start = performance.now();
    const from = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(from + (target - from) * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return display.toFixed(decimals);
}

function MarketGrowthChart() {
  const w = 480;
  const h = 200;
  const pad = { t: 16, r: 12, b: 32, l: 40 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const maxV = Math.max(...CHART_POINTS.map((p) => p.v));
  const minV = Math.min(...CHART_POINTS.map((p) => p.v)) * 0.96;

  const coords = CHART_POINTS.map((p, i) => {
    const x = pad.l + (innerW * i) / (CHART_POINTS.length - 1);
    const y =
      pad.t + innerH - ((p.v - minV) / (maxV - minV)) * innerH;
    return { ...p, x, y };
  });

  const pathD = coords
    .map((c, i) => `${i === 0 ? "M" : "L"} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`)
    .join(" ");

  const areaD = `${pathD} L ${coords[coords.length - 1].x} ${h - pad.b} L ${coords[0].x} ${h - pad.b} Z`;

  return (
    <figure className="mt-12 rounded-sm border border-black/6 bg-white p-6 shadow-sm">
      <figcaption className="text-sm font-medium text-brand-charcoal">
        Crecimiento del mercado inmobiliario — Paraguay (índice ilustrativo,
        últimos 5 años)
      </figcaption>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="mt-6 h-auto w-full text-brand-olive"
        role="img"
        aria-label="Línea de tendencia al alza del mercado inmobiliario"
      >
        <defs>
          <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#chartFill)" className="text-brand-olive" />
        <path
          d={pathD}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {coords.map((c) => (
          <g key={c.year}>
            <circle cx={c.x} cy={c.y} r={3.5} fill="currentColor" />
            <text
              x={c.x}
              y={h - 8}
              textAnchor="middle"
              className="fill-brand-charcoal/50 text-[10px] font-sans"
              style={{ fontSize: 10 }}
            >
              {c.year}
            </text>
          </g>
        ))}
      </svg>
      <p className="mt-2 text-xs text-brand-charcoal/50">
        Fuente compuesta a modo de ejemplo visual; reemplazar por serie
        oficial o interna al publicar.
      </p>
    </figure>
  );
}

function MetricCard({
  label,
  prefix,
  suffix,
  value,
  decimals,
}: (typeof METRICS)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const animated = useCountUp(value, decimals, visible);

  return (
    <div
      ref={ref}
      className="border border-black/6 bg-white px-6 py-8 text-center shadow-sm"
    >
      <p className="text-[0.65rem] font-medium uppercase leading-snug tracking-[0.12em] text-brand-charcoal/55">
        {label}
      </p>
      <p className="mt-4 font-serif text-4xl tabular-nums text-brand-charcoal md:text-5xl whitespace-nowrap">
        {prefix}
        {animated}
        {suffix}
      </p>
    </div>
  );
}

export function MarketMetrics() {
  return (
    <section
      id="metricas"
      className="scroll-mt-28 bg-brand-ivory py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium text-brand-charcoal md:text-4xl">
            Métricas de Mercado
          </h2>
          <p className="mt-4 text-brand-charcoal/65">
            Indicadores de referencia que sintetizan resultados y foco analítico
            — sin reemplazar un estudio personalizado.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {METRICS.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
        <MarketGrowthChart />
      </div>
    </section>
  );
}
