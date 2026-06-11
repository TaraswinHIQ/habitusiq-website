import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export function PlatformHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-serif text-sm font-semibold text-primary-foreground">
            H
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            Habitus<span className="text-sage">IQ</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hidden items-center gap-1.5 font-sans text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            Back to Home
          </Link>
          <a
            href="#early-access"
            className="rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request Early Access
          </a>
        </div>
      </div>
    </header>
  )
}
