type SkeletonProps = {
  className?: string
}

export function SkeletonBar({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`skeleton-shimmer h-2.5 rounded-full ${className}`}
      aria-hidden="true"
    />
  )
}

export function SkeletonLines({
  widths = ['w-3/4', 'w-full', 'w-2/3', 'w-5/6'],
}: {
  widths?: string[]
}) {
  return (
    <div className="flex flex-col gap-3" aria-hidden="true">
      {widths.map((w, i) => (
        <SkeletonBar key={i} className={w} />
      ))}
    </div>
  )
}
