import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Qué vas a aprender en NEURIA | NEURIA",
  description:
    "Un recorrido práctico por las habilidades de IA que vas a dominar en NEURIA.",
};

const roadmap = [
  {
    step: "01",
    title: "Fundamentos de IA",
    description:
      "Entendé cómo funcionan los modelos de IA generativa y cuándo conviene usarlos.",
  },
  {
    step: "02",
    title: "Automatización de tareas",
    description:
      "Automatizá procesos repetitivos de tu trabajo diario con herramientas de IA.",
  },
  {
    step: "03",
    title: "Creación de contenido",
    description:
      "Generá texto, imagen, audio y vídeo con calidad profesional usando IA.",
  },
  {
    step: "04",
    title: "Desarrollo con IA",
    description:
      "Programá y lanzá tus propias aplicaciones apoyándote en asistentes de IA.",
  },
  {
    step: "05",
    title: "Aplicación a tu profesión",
    description:
      "Llevá todo lo aprendido a un proyecto final aplicado a tu sector.",
  },
];

export default function QueVasAAprenderPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Qué vas a aprender en NEURIA"
          title="Un camino claro, de cero a aplicarlo en tu trabajo"
          description="No importa tu punto de partida: este es el recorrido que vas a hacer dentro de NEURIA."
        />

        <section className="mx-auto max-w-3xl px-6 pb-24">
          <ol className="space-y-6">
            {roadmap.map((item) => (
              <li
                key={item.step}
                className="flex gap-5 rounded-2xl border border-panel-border bg-panel/50 p-6"
              >
                <span className="text-2xl font-extrabold text-gradient">
                  {item.step}
                </span>
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex justify-center">
            <Link
              href="/aula"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-light"
            >
              Ver formaciones →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
