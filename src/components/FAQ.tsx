"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Por qué debería aprender sobre Inteligencia Artificial?",
    a: "Porque cada vez más profesiones exigen competencias en IA y quienes la dominan acceden a mejores oportunidades y salarios.",
  },
  {
    q: "¿Necesito tener experiencia en programación para tomar estos cursos?",
    a: "No. Tenemos itinerarios pensados desde cero y otros más técnicos, según tu nivel de partida.",
  },
  {
    q: "¿Qué tipo de soporte ofrecen si tengo dudas durante el curso?",
    a: "Acompañamiento de mentores, comunidad de alumnos y sesiones en directo para resolver dudas.",
  },
  {
    q: "¿Puedo estudiar a mi propio ritmo?",
    a: "Sí, todo el contenido queda disponible en el campus para que avances cuando puedas.",
  },
  {
    q: "¿Qué diferencia a NEURIA de otras opciones de aprendizaje de IA?",
    a: "Profesores en activo, contenido siempre actualizado y un enfoque 100% práctico orientado a resultados reales.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Preguntas frecuentes
      </h2>

      <div className="mt-12 divide-y divide-panel-border border-t border-b border-panel-border">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q}>
              <button
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="text-sm font-semibold sm:text-base">
                  {item.q}
                </span>
                <span
                  className={`shrink-0 text-xl text-accent-light transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="pb-5 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
