"use client";

import { useMemo, useState } from "react";

const sectors = [
  "Todos",
  "Tecnología",
  "Marketing",
  "Diseño",
  "Consultoría",
  "Educación",
] as const;

const stories = [
  {
    name: "Camila Restrepo",
    sector: "Tecnología",
    role: "Estudiante · Bogotá",
    quote:
      "Empecé sin saber programar y hoy automatizo reportes enteros para mi equipo.",
  },
  {
    name: "Bruno Ferrari",
    sector: "Marketing",
    role: "Empleado · Buenos Aires",
    quote:
      "Uso IA todos los días para generar campañas que antes me tomaban una semana.",
  },
  {
    name: "Nadia Solís",
    sector: "Diseño",
    role: "Freelance · Ciudad de México",
    quote:
      "Aprendí a combinar mi criterio de diseño con herramientas de IA generativa.",
  },
  {
    name: "Tomás Ibarra",
    sector: "Consultoría",
    role: "Empleado · Madrid",
    quote:
      "El curso me dio el marco para ofrecer servicios de IA a mis propios clientes.",
  },
  {
    name: "Luz Marín",
    sector: "Educación",
    role: "Docente · Lima",
    quote:
      "Ahora diseño material didáctico con IA en una fracción del tiempo que antes.",
  },
  {
    name: "Iker Zabala",
    sector: "Tecnología",
    role: "Estudiante · Bilbao",
    quote: "Pasé de curiosear con IA a construir mi propia agencia de automatización.",
  },
  {
    name: "Renata Costa",
    sector: "Marketing",
    role: "Empleada · São Paulo",
    quote:
      "Duplicamos el volumen de contenido de la marca sin sumar una sola persona más.",
  },
  {
    name: "Diego Salgado",
    sector: "Consultoría",
    role: "Freelance · Santiago",
    quote:
      "Hoy vendo diagnósticos de IA a pymes que ni sabían por dónde empezar.",
  },
  {
    name: "Valentina Roa",
    sector: "Diseño",
    role: "Estudiante · Medellín",
    quote:
      "Aprendí a prototipar productos completos en días en vez de semanas.",
  },
];

export default function AlumnosGrid() {
  const [active, setActive] = useState<(typeof sectors)[number]>("Todos");

  const filtered = useMemo(
    () =>
      active === "Todos"
        ? stories
        : stories.filter((s) => s.sector === active),
    [active],
  );

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="flex flex-wrap justify-center gap-2">
        {sectors.map((sector) => (
          <button
            key={sector}
            onClick={() => setActive(sector)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === sector
                ? "border-accent bg-accent/15 text-accent-light"
                : "border-panel-border text-muted hover:border-white/30 hover:text-foreground"
            }`}
          >
            {sector}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <blockquote
            key={s.name}
            className="rounded-2xl border border-panel-border bg-panel/50 p-6"
          >
            <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold text-accent-light">
              {s.sector}
            </span>
            <p className="mt-4 text-sm leading-relaxed text-foreground/90">
              “{s.quote}”
            </p>
            <footer className="mt-5 text-sm">
              <span className="font-semibold">{s.name}</span>
              <span className="block text-xs text-muted">{s.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
