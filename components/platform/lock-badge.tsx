import { Lock } from 'lucide-react'

export function LockBadge({
  label = 'Coming Soon',
  className = '',
}: {
  label?: string
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-sage/30 bg-sage/10 px-3 py-1 font-sans text-xs font-medium tracking-wide text-forest ${className}`}
    >
      <Lock className="h-3 w-3" strokeWidth={2} />
      {label}
    </span>
  )
}

export function StatusBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-terracotta/30 bg-terracotta/10 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-terracotta">
      {label}
    </span>
  )
}
