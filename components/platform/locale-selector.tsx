import { Lock, MapPin, Search } from 'lucide-react'
import { StatusBadge } from '@/components/platform/lock-badge'

export function LocaleSelector() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            Select a Locale
          </h2>
          <p className="mt-2 inline-flex items-center gap-2 font-sans text-sm text-muted-foreground">
            <Lock className="h-3.5 w-3.5 text-sage" strokeWidth={2} />
            Intelligence Data Available at Launch
          </p>
        </div>
        <StatusBadge label="Pre-Launch Preview" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            strokeWidth={1.75}
          />
          <input
            type="text"
            disabled
            aria-disabled="true"
            placeholder="Locale search unlocks at launch..."
            className="w-full cursor-not-allowed rounded-xl border border-border bg-secondary/60 py-3 pl-11 pr-4 font-sans text-sm text-muted-foreground placeholder:text-muted-foreground/70"
          />
        </div>
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-border bg-secondary/60 px-6 py-3 font-sans text-sm font-medium text-muted-foreground"
        >
          <Lock className="h-3.5 w-3.5" strokeWidth={2} />
          Locked
        </button>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-sage" strokeWidth={1.75} />
          <span className="font-sans text-xs uppercase tracking-wide text-muted-foreground">
            Coordinates
          </span>
          <span className="font-mono text-sm text-foreground">--, --</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-sans text-xs uppercase tracking-wide text-muted-foreground">
            Selected Locale
          </span>
          <span className="font-sans text-sm text-foreground">
            None — Available at Launch
          </span>
        </div>
      </div>
    </div>
  )
}
