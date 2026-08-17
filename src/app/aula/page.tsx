import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Aula | NEURIA",
  description: "Todo lo que necesitás para aprender IA, en un solo lugar.",
};

const courses = [
  {
    tag: "Más popular",
    title: "IA Generativa y Automatización",
    description:
      "Aprende a usar los principales modelos de IA para automatizar flujos de trabajo reales.",
    duration: "8 semanas",
    level: "Nivel inicial",
    syllabus: [
      "Fundamentos de modelos de lenguaje",
      "Prompting avanzado y agentes",
      "Automatización de tareas con IA",
      "Proyecto final aplicado",
    ],
  },
  {
    tag: "Nuevo",
    title: "Producción Audiovisual con IA",
    description:
      "Crea vídeo, imagen y audio con herramientas de IA generativa, de guion a publicación.",
    duration: "6 semanas",
    level: "Nivel intermedio",
    syllabus: [
      "Generación de imagen y vídeo con IA",
      "Guion y storytelling asistido",
      "Edición y postproducción",
      "Publicación y distribución",
    ],
  },
  {
    tag: "",
    title: "Ciberseguridad Ofensiva con IA",
    description:
      "Aplica IA a pentesting, análisis de vulnerabilidades y automatización de auditorías.",
    duration: "10 semanas",
    level: "Nivel avanzado",
    syllabus: [
      "Fundamentos de pentesting",
      "IA aplicada a análisis de vulnerabilidades",
      "Automatización de auditorías",
      "Laboratorio práctico final",
    ],
  },
  {
    tag: "",
    title: "Desarrollo de Apps con IA",
    description:
      "Diseña y lanza aplicaciones reales apoyándote en asistentes de IA para programar.",
    duration: "8 semanas",
    level: "Nivel intermedio",
    syllabus: [
      "Bases de desarrollo web",
      "Programación asistida por IA",
      "Integración de APIs de IA",
      "Lanzamiento de tu propia app",
    ],
  },
];

export default function AulaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Aula"
          title="El aula de NEURIA"
          description="Todo lo que necesitás para aprender IA, en un solo lugar: temario, duración y nivel de cada formación."
        />

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {courses.map((c) => (
              <div
                key={c.title}
                className="flex flex-col rounded-2xl border border-panel-border bg-panel/50 p-7"
              >
                {c.tag && (
                  <span className="mb-4 w-fit rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold text-accent-light">
                    {c.tag}
                  </span>
                )}
                <h2 className="text-lg font-semibold">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {c.syllabus.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/85"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-panel-border pt-4 text-xs text-muted">
                  <span>{c.duration}</span>
                  <span>{c.level}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
