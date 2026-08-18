import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PayPalSubscribeButton from "@/components/PayPalSubscribeButton";

export const metadata: Metadata = {
  title: "Suscribite | NEURIA",
  description: "Accedé al curso completo de Inteligencia Artificial de NEURIA.",
};

const included = [
  "Acceso de por vida a las 4 formaciones del aula",
  "Proyectos prácticos con corrección de mentores",
  "Comunidad privada de alumnos",
  "Certificado al finalizar cada curso",
];

export default function SuscribitePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Suscribite"
          title="Sumate al curso completo de Inteligencia Artificial"
          description="Suscripción mensual, acceso a todo el contenido de NEURIA sin vueltas."
        />

        <section className="mx-auto max-w-lg px-6 pb-24">
          <div className="rounded-2xl border border-panel-border bg-panel/50 p-8">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">
                Plan completo
              </p>
              <p className="text-2xl font-extrabold text-gradient">
                US$60<span className="text-sm font-medium text-muted">/mes</span>
              </p>
            </div>
            <p className="mt-3 text-sm text-muted">Suscripción mensual</p>

            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground/85"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <PayPalSubscribeButton />
            </div>

            <p className="mt-4 text-center text-xs text-muted">
              Pago recurrente en dólares, procesado por PayPal. Podés cancelar
              cuando quieras desde tu cuenta de PayPal.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
