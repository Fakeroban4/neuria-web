import Link from "next/link";

const courses = [
  {
    tag: "Más popular",
    title: "IA Generativa y Automatización",
    description:
      "Aprende a usar los principales modelos de IA para automatizar flujos de trabajo reales.",
    duration: "8 semanas",
    level: "Nivel inicial",
  },
  {
    tag: "Nuevo",
    title: "Producción Audiovisual con IA",
    description:
      "Crea vídeo, imagen y audio con herramientas de IA generativa, de guion a publicación.",
    duration: "6 semanas",
    level: "Nivel intermedio",
  },
  {
    tag: "",
    title: "Ciberseguridad Ofensiva con IA",
    description:
      "Aplica IA a pentesting, análisis de vulnerabilidades y automatización de auditorías.",
    duration: "10 semanas",
    level: "Nivel avanzado",
  },
  {
    tag: "",
    title: "Desarrollo de Apps con IA",
    description:
      "Diseña y lanza aplicaciones reales apoyándote en asistentes de IA para programar.",
    duration: "8 semanas",
    level: "Nivel intermedio",
  },
];

export default function Courses() {
  return (
    <section id="cursos" className="border-y border-white/5 bg-panel/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">
              Nuestras formaciones
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Aprende IA de la mano de los mejores.
            </h2>
          </div>
          <Link
            href="/aula"
            className="text-sm font-semibold text-accent-light hover:text-foreground"
          >
            Explora todos nuestros cursos →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {courses.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-2xl border border-panel-border bg-background/60 p-7"
            >
              {c.tag && (
                <span className="mb-4 w-fit rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold text-accent-light">
                  {c.tag}
                </span>
              )}
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {c.description}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-panel-border pt-4 text-xs text-muted">
                <span>{c.duration}</span>
                <span>{c.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
