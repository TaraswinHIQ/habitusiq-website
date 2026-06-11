import { Sparkles, Send, Lock } from 'lucide-react'
import { LockBadge } from '@/components/platform/lock-badge'

const suggestions = [
  'Family Suitability',
  'Compare Neighborhoods',
  'Connectivity Analysis',
  'School Ecosystem',
  'Growth Outlook',
  'Investment Potential',
]

export function AiAdvisor() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-forest">
            <Sparkles className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              AI Neighborhood Advisor
            </h3>
            <LockBadge className="mt-1.5" />
          </div>
        </div>
      </div>

      <p className="mt-5 font-sans text-sm leading-relaxed text-muted-foreground">
        Ask intelligence questions about connectivity, schools, livability,
        investment opportunities, infrastructure, accessibility, sustainability,
        and future growth.
      </p>

      <div className="mt-5 flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-4">
        <Lock className="mt-0.5 h-4 w-4 shrink-0 text-sage" strokeWidth={2} />
        <p className="font-sans text-sm text-foreground">
          The HabitusIQ AI Planning Advisor will become available upon platform
          launch.
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {suggestions.map((s) => (
          <span
            key={s}
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1.5 font-sans text-xs font-medium text-muted-foreground"
          >
            <Lock className="h-3 w-3" strokeWidth={2} />
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary/40 p-2">
          <input
            type="text"
            disabled
            aria-disabled="true"
            placeholder="Advisor launching soon..."
            className="flex-1 cursor-not-allowed bg-transparent px-3 py-2 font-sans text-sm text-muted-foreground placeholder:text-muted-foreground/70 focus:outline-none"
          />
          <button
            type="button"
            disabled
            aria-disabled="true"
            aria-label="Send (disabled)"
            className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-lg bg-border text-muted-foreground"
          >
            <Send className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  )
}
