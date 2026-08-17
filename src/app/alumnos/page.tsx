import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AlumnosGrid from "@/components/AlumnosGrid";

export const metadata: Metadata = {
  title: "Alumnos | NEURIA",
  description: "Historias reales de quienes ya se formaron con NEURIA.",
};

const stats = [
  { value: "+1.500", label: "alumnos formados" },
  { value: "4,8/5", label: "nota media de las clases" },
];

export default function AlumnosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Alumnos"
          title="Historias reales de quienes dieron el paso"
          description="Personas como vos que decidieron transformar su carrera con la IA. Estas son sus palabras."
        />

        <div className="mx-auto mb-16 flex max-w-xl justify-center gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="pb-1 text-3xl font-extrabold leading-[1.3] text-gradient">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted">{s.label}</div>
            </div>
          ))}
        </div>

        <AlumnosGrid />
      </main>
      <Footer />
    </>
  );
}
