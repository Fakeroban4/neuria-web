"use client";

export default function Newsletter() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Cada semana, una idea que te hará pensar
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm text-muted">
        Cada domingo te compartimos un email con herramientas, casos reales y
        aprendizajes sobre cómo se está utilizando la inteligencia artificial
        en el mundo real. Sin ruido, solo contenido útil.
      </p>

      <form
        className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          required
          placeholder="tu@email.com"
          className="w-full rounded-full border border-panel-border bg-panel px-5 py-3 text-sm outline-none placeholder:text-muted focus:border-accent"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-light"
        >
          Suscribirme
        </button>
      </form>

      <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-muted">
        <span>Enfoque en ejemplos prácticos</span>
        <span>Visión crítica y realista</span>
        <span>Solo contenido útil, sin ruido</span>
      </div>
    </section>
  );
}
