"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Aula", href: "/aula" },
  { label: "Alumnos", href: "/alumnos" },
  { label: "Qué vas a aprender en NEURIA", href: "/que-vas-a-aprender" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          neuria
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="rounded-full border border-panel-border px-4 py-2 text-sm font-medium text-foreground/90 transition hover:border-white/30"
          >
            Iniciar sesión
          </a>
          <Link
            href="/#cursos"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(79,107,255,0.4)] transition hover:bg-accent-light"
          >
            Contáctanos
          </Link>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-white/5 px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-sm text-muted transition hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#cursos"
            className="mt-3 rounded-full bg-accent px-4 py-2 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Contáctanos
          </Link>
        </div>
      )}
    </header>
  );
}
