import { FileText, Lock } from 'lucide-react'
import { LockBadge } from '@/components/platform/lock-badge'

const reportTypes = [
  'Civic Quality Summary',
  'Livability Assessment',
  'Investment Potential Report',
  'Development Opportunity Analysis',
]

const criteria = [
  'Schools',
  'Healthcare',
  'Connectivity',
  'Safety',
  'Walkability',
  'Green Spaces',
  'Economic Activity',
  'Growth Signals',
]

export function ReportStudio() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-forest">
            <FileText className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              AI Report Studio
            </h3>
            <LockBadge className="mt-1.5" label="Launching Soon" />
          </div>
        </div>
      </div>

      <p className="mt-5 font-sans text-sm leading-relaxed text-muted-foreground">
        Generate consultant-grade intelligence reports, livability assessments,
        urban analytics, investment evaluations, and strategic planning
        documents.
      </p>

      <div className="mt-6">
        <span className="font-sans text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Report Type
        </span>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {reportTypes.map((r) => (
            <div
              key={r}
              aria-disabled="true"
              className="flex cursor-not-allowed items-center gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-2.5 font-sans text-sm text-muted-foreground"
            >
              <Lock className="h-3.5 w-3.5 shrink-0 text-sage" strokeWidth={2} />
              {r}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <span className="font-sans text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Criteria
        </span>
        <div className="mt-3 flex flex-wrap gap-2">
          {criteria.map((c) => (
            <span
              key={c}
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1.5 font-sans text-xs font-medium text-muted-foreground"
            >
              <Lock className="h-3 w-3" strokeWidth={2} />
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-6">
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-border px-6 py-3 font-sans text-sm font-semibold text-muted-foreground"
        >
          <Lock className="h-4 w-4" strokeWidth={2} />
          Compile Intelligence Report
        </button>
        <p className="mt-2 text-center font-sans text-xs text-muted-foreground">
          Available at launch.
        </p>
      </div>
    </div>
  )
}
