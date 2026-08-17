export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden hero-glow">
      <div className="absolute inset-0 grid-overlay" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-16 pt-20 text-center sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
