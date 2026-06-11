import {
  Home,
  TrendingUp,
  Building2,
  Briefcase,
  Compass,
  Landmark,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { EarlyAccessForm } from '@/components/platform/early-access-form'

const audiences: { icon: LucideIcon; label: string }[] = [
  { icon: Home, label: 'Homebuyers' },
  { icon: TrendingUp, label: 'Investors' },
  { icon: Building2, label: 'Developers' },
  { icon: Briefcase, label: 'Consultants' },
  { icon: Compass, label: 'Urban Planners' },
  { icon: Landmark, label: 'Financial Institutions' },
  { icon: ShieldCheck, label: 'Governments' },
]

export function EarlyAccess() {
  return (
    <section
      id="early-access"
      className="scroll-mt-20 border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Early Access
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Get Early Access
          </h2>
          <p className="mt-5 text-pretty font-sans text-base leading-relaxed text-muted-foreground">
            Be among the first homebuyers, investors, developers, planners,
            consultants, researchers, institutions, and governments to access
            HabitusIQ&apos;s intelligence platform.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <EarlyAccessForm />
        </div>

        {/* Social proof */}
        <div className="mt-16 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Designed For
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {audiences.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 font-sans text-sm font-medium text-foreground"
              >
                <Icon className="h-4 w-4 text-forest" strokeWidth={1.75} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
