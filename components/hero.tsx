'use client'

import { useState } from 'react'
import {
  GraduationCap,
  Trees,
  TrainFront,
  HeartPulse,
  Users,
} from 'lucide-react'

const markers = [
  { icon: GraduationCap, label: 'Schools', top: '22%', left: '18%' },
  { icon: Trees, label: 'Parks', top: '62%', left: '30%' },
  { icon: TrainFront, label: 'Transit', top: '34%', left: '70%' },
  { icon: HeartPulse, label: 'Healthcare', top: '70%', left: '64%' },
  { icon: Users, label: 'Community', top: '46%', left: '48%' },
]

export function Hero() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="top" className="relative overflow-hidden pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-24 lg:pt-12">
        {/* Copy */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-sans text-xs font-medium tracking-wide text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            India&apos;s First Neighborhood Intelligence Platform
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Every Neighborhood Has a Story. We&apos;re Building a Better Way to
            Understand It.
          </h1>

          <p className="mt-6 max-w-xl text-pretty font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
            HabitusIQ transforms complex urban, social, environmental, and
            infrastructure data into meaningful neighborhood intelligence,
            helping people make smarter decisions about where they live, invest,
            and grow.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="rounded-full bg-primary px-7 py-3.5 text-center font-sans text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Join the Waitlist
            </a>
            <a
              href="#waitlist"
              className="rounded-full border border-primary px-7 py-3.5 text-center font-sans text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Request Early Access
            </a>
          </div>
        </div>

        {/* Interactive aerial map */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-[0_24px_60px_-30px_rgba(62,91,74,0.45)]">
            <img
              src="/images/hero-aerial-city.png"
              alt="Aerial view of a leafy Indian neighborhood with parks, streets, and community infrastructure"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />

            {markers.map(({ icon: Icon, label, top, left }) => (
              <button
                key={label}
                type="button"
                onMouseEnter={() => setActive(label)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(label)}
                onBlur={() => setActive(null)}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top, left }}
                aria-label={label}
              >
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-card/60" />
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-forest shadow-md transition-transform duration-200 group-hover:scale-110 group-focus-visible:scale-110">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </span>
                <span
                  className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 font-sans text-xs font-medium text-primary-foreground transition-opacity duration-200 ${
                    active === label ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {markers.map(({ label }) => (
              <span
                key={label}
                className="font-sans text-xs tracking-wide text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
