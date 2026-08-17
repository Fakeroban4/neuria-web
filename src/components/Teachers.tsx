const companies = [
  "Aurora Tech",
  "Nimbus Labs",
  "Vertex Studio",
  "Orbital",
  "Kaira",
  "Prisma AI",
];

export default function Teachers() {
  return (
    <section id="empresas" className="mx-auto max-w-6xl px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">
        Un claustro que viene de la industria
      </p>
      <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
        No son profesores de carrera: son profesionales en activo que aplican
        la IA todos los días.
      </h2>

      <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
        {companies.map((c) => (
          <div
            key={c}
            className="flex items-center justify-center rounded-xl border border-panel-border bg-panel/40 px-4 py-6 text-sm font-semibold text-muted"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}
