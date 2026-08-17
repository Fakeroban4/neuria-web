const columns = [
  {
    title: "Escuela",
    links: ["Qué es NEURIA", "Cursos", "Profesores"],
  },
  {
    title: "Alumnos",
    links: ["Acceso al campus", "Tour de la plataforma"],
  },
  {
    title: "Cursos",
    links: [
      "IA Generativa y Automatización",
      "Producción Audiovisual con IA",
      "Ciberseguridad Ofensiva",
      "Desarrollo de Apps con IA",
    ],
  },
  {
    title: "Otros",
    links: ["Aviso Legal", "Términos y condiciones", "Política de privacidad"],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-panel/40 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted transition hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-panel-border pt-8 text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} NEURIA.es</span>
          <span>Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
}
