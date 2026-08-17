const features = [
  {
    title: "Impulsa tu productividad con IA",
    description: "Automatiza tareas repetitivas y recupera horas de tu semana.",
    icon: (
      <path
        d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Toma mejores decisiones",
    description: "Analiza datos, encuentra patrones y decide con criterio.",
    icon: (
      <path
        d="M4 19V5m6 14V9m6 10V3m6 16V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Amplía tus oportunidades",
    description: "Prepárate para un mercado laboral en constante evolución.",
    icon: (
      <path
        d="M12 2 2 8l10 6 10-6-10-6Zm0 12-10-6v6l10 6 10-6V8l-10 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Features() {
  return (
    <section id="que-vas-a-aprender" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Domina la IA, <span className="text-gradient">desbloquea tu potencial</span>
        </h2>
        <p className="mt-4 text-sm text-muted">
          Aprovecha la tecnología que está haciendo a las personas más
          eficientes y capaces, en todos los aspectos de su vida profesional y
          personal.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-panel-border bg-panel/50 p-7"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-accent-light"
            >
              {f.icon}
            </svg>
            <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
