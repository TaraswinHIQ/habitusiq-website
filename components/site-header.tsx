'use client'

import { useEffect, useState } from 'react'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-serif text-sm font-semibold text-primary-foreground">
            H
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            Habitus<span className="text-sage">IQ</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            ['About', '#about'],
            ['Features', '#features'],
            ['Vision', '#vision'],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#waitlist"
          className="rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Join the Waitlist
        </a>
      </div>
    </header>
  )
}
