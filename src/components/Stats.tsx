const stats = [
  {
    value: "+62%",
    label: "de salario para quien domina la IA",
    detail: "Prima salarial media frente a puestos equivalentes sin competencias en IA.",
    source: "Informe global de empleo en IA, 2026",
  },
  {
    value: "8×",
    label: "más rápido crece el empleo con IA",
    detail: "Las ofertas que exigen IA crecen muy por encima del mercado laboral total.",
    source: "Informe global de empleo en IA, 2026",
  },
  {
    value: "+64%",
    label: "más vacantes con IA",
    detail: "Crecimiento interanual de las ofertas que piden competencias en IA.",
    source: "Radiografía de empleos emergentes, 2026",
  },
  {
    value: "59%",
    label: "de la población activa deberá reciclarse",
    detail: "Trabajadores que necesitarán actualizar sus competencias antes de 2030.",
    source: "Foro Económico Mundial",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-panel/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold leading-tight sm:text-4xl">
          No es la IA la que te reemplaza,{" "}
          <span className="text-gradient">es quien sabe usarla mejor que vos.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-panel-border bg-background/60 p-6"
            >
              <div className="text-4xl font-extrabold text-gradient">{s.value}</div>
              <div className="mt-3 text-sm font-semibold text-foreground">
                {s.label}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted">{s.detail}</p>
              <p className="mt-4 text-[10px] uppercase tracking-wider text-muted/60">
                {s.source}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted">
          Y cada vez más empresas priorizan formar a su plantilla en IA. La
          pregunta no es si vas a aprenderla, sino cuándo.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="#cursos"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-light"
          >
            Empieza por aquí
          </a>
        </div>
      </div>
    </section>
  );
}
