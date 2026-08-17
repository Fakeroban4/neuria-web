const avatars = ["A", "B", "C", "D", "E"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-glow">
      <div className="absolute inset-0 grid-overlay" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-20 text-center sm:pt-28">
        <div className="mb-8 flex items-center gap-3 rounded-full border border-panel-border bg-panel/60 px-4 py-2">
          <div className="flex -space-x-2">
            {avatars.map((a) => (
              <span
                key={a}
                className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-accent/40 text-[10px] font-semibold"
              >
                {a}
              </span>
            ))}
          </div>
          <span className="text-xs text-muted">
            +1.500 alumnos ya se han formado con nosotros
          </span>
        </div>

        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
          Aprende
          <br />
          <span className="text-gradient">Inteligencia Artificial</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted">
          Invertir en tu formación hoy es asegurarte un lugar en el mundo que
          viene: aprendé la tecnología que está abriendo nuevas oportunidades
          en cada industria.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#cursos"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-light"
          >
            Más información →
          </a>
          <a
            href="#cursos"
            className="rounded-full border border-panel-border bg-panel px-6 py-3 text-sm font-semibold text-foreground transition hover:border-white/30"
          >
            Ver formaciones
          </a>
        </div>

        <p className="mt-10 text-xs uppercase tracking-widest text-muted/70">
          Contenidos académicos validados por instructores en activo
        </p>
      </div>
    </section>
  );
}
