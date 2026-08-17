import Link from "next/link";

const testimonials = [
  {
    quote:
      "Trabajaba a tiempo completo y estudiaba por las noches. Hoy dirijo mi propia consultora de IA.",
    name: "Marta L.",
    role: "Fundadora de una consultora de IA · Valencia",
  },
  {
    quote:
      "Descubrí que sin formación técnica previa podía convertir una idea en un producto real.",
    name: "Diego R.",
    role: "De hostelería a crear su propio software",
  },
  {
    quote:
      "Necesitaba algo práctico y cercano. Construí un asistente de IA para mi propio sector.",
    name: "Laura P.",
    role: "Estudiante de Ingeniería · Sevilla",
  },
  {
    quote:
      "Me dio el empujón que me faltaba para independizarme y conseguir mis primeros clientes.",
    name: "Javier M.",
    role: "25 años en operaciones · ahora por su cuenta",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="border-y border-white/5 bg-panel/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            ¿Qué dicen nuestros alumnos?
          </h2>
          <p className="mt-4 text-sm text-muted">
            Historias reales de éxito impulsadas por el aprendizaje en NEURIA.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-panel-border bg-background/60 p-7"
            >
              <p className="text-base leading-relaxed text-foreground/90">
                “{t.quote}”
              </p>
              <footer className="mt-5 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="block text-xs text-muted">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/alumnos"
            className="rounded-full border border-panel-border bg-panel px-6 py-3 text-sm font-semibold transition hover:border-white/30"
          >
            Ver todas las historias
          </Link>
        </div>
      </div>
    </section>
  );
}
