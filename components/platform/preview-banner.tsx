import { Sparkles, ArrowRight, Lock } from 'lucide-react'

export function PreviewBanner() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.16em]">
          <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
          Early Access Available
        </span>

        <h1 className="mt-5 max-w-3xl text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          HabitusIQ Intelligence Platform — Launching Soon
        </h1>

        <p className="mt-5 max-w-2xl text-pretty font-sans text-base leading-relaxed text-primary-foreground/80">
          Advanced neighborhood intelligence, livability analytics, mobility
          assessments, urban intelligence research, investment-grade insights,
          and predictive growth modeling are currently in final development.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#early-access"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 font-sans text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Request Early Access
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
          <a
            href="#early-access"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 font-sans text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Book a Demo
          </a>
          <span className="inline-flex items-center gap-1.5 font-sans text-xs text-primary-foreground/60 sm:ml-2">
            <Lock className="h-3.5 w-3.5" strokeWidth={2} />
            Intelligence modules are being prepared for launch
          </span>
        </div>
      </div>
    </section>
  )
}
