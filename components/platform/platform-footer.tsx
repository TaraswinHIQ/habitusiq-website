export function PlatformFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-foreground font-serif text-sm font-semibold text-primary">
            H
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            HabitusIQ
          </span>
        </div>
        <p className="mt-4 font-serif text-base italic text-primary-foreground/80">
          HabitusIQ — Intelligence Behind Every Address.
        </p>
        <p className="mt-1 font-sans text-sm font-medium text-primary-foreground/90">
          India&apos;s Neighborhood Intelligence Platform.
        </p>
        <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-primary-foreground/70">
          Advanced urban intelligence, livability analytics, infrastructure
          assessment, mobility research, and predictive growth intelligence.
        </p>

        <div className="mt-10 border-t border-primary-foreground/15 pt-6">
          <p className="font-sans text-xs text-primary-foreground/60">
            &copy; 2026 HabitusIQ. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
