const pillars = [
  'Livability',
  'Connectivity',
  'Accessibility',
  'Sustainability',
  'Future Growth',
]

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sage">
          What is HabitusIQ
        </span>
        <p className="mt-6 text-balance font-serif text-2xl font-medium leading-snug text-foreground sm:text-3xl lg:text-[2.5rem] lg:leading-[1.25]">
          We believe people shouldn&apos;t choose a property before
          understanding the neighborhood around it. HabitusIQ helps uncover the
          intelligence behind every address.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {pillars.map((pillar) => (
            <span
              key={pillar}
              className="rounded-full border border-stone-line bg-card px-4 py-2 font-sans text-sm text-foreground"
            >
              {pillar}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
