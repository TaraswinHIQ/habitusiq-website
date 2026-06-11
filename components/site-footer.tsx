import { WaitlistForm } from '@/components/waitlist-form'

export function SiteFooter() {
  return (
    <footer id="waitlist" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Be the first to understand your neighborhood.
            </h2>
            <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-muted-foreground">
              Join the waitlist and we&apos;ll let you know the moment HabitusIQ
              opens early access in your city.
            </p>
          </div>
          <WaitlistForm label="Join the Waitlist" className="w-full" />
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-serif text-sm font-semibold text-primary-foreground">
                H
              </span>
              <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
                Habitus<span className="text-sage">IQ</span>
              </span>
            </div>
            <p className="mt-3 font-serif text-base italic text-muted-foreground">
              Intelligence Behind Every Address
            </p>
          </div>

          <div className="flex items-center gap-2">
            {['LinkedIn', 'Twitter', 'Instagram'].map((label) => (
              <a
                key={label}
                href="#"
                className="rounded-full border border-border px-4 py-2 font-sans text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:border-sage hover:text-forest"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-sm font-medium tracking-wide text-forest">
            Launching Soon Across India
          </p>
          <p className="font-sans text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} HabitusIQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
