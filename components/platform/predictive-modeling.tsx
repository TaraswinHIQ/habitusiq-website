import { Lock, Activity } from 'lucide-react'
import { LockBadge } from '@/components/platform/lock-badge'
import { SkeletonLines } from '@/components/platform/skeleton'

const timeline = [
  { year: 'Year 1', label: 'Baseline Intelligence' },
  { year: 'Year 2', label: 'Mobility Forecasts' },
  { year: 'Year 3', label: 'Community Growth Models' },
  { year: 'Year 5', label: 'Investment Outlook' },
  { year: 'Year 10', label: 'Future Scenario Analysis' },
]

export function PredictiveModeling() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-forest">
            <Activity className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
            Predictive Urban Modeling
          </h3>
        </div>
        <LockBadge label="Coming Soon" />
      </div>

      <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-stone-line bg-stone-line sm:grid-cols-2 lg:grid-cols-5">
        {timeline.map((t) => (
          <div key={t.year} className="flex flex-col bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                {t.year}
              </span>
              <Lock className="h-3.5 w-3.5 text-sage" strokeWidth={2} />
            </div>
            <h4 className="mt-3 font-serif text-base font-semibold leading-snug text-foreground">
              {t.label}
            </h4>
            <div className="mt-5">
              <SkeletonLines widths={['w-full', 'w-3/4', 'w-5/6']} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-4">
        <Lock className="mt-0.5 h-4 w-4 shrink-0 text-sage" strokeWidth={2} />
        <p className="font-sans text-sm text-foreground">
          Predictive urban modeling and scenario simulation tools will become
          available after launch.
        </p>
      </div>
    </div>
  )
}
