'use client'

import { useState } from 'react'
import {
  Lock,
  Building2,
  Route,
  Users,
  GraduationCap,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { LockBadge } from '@/components/platform/lock-badge'
import { SkeletonBar, SkeletonLines } from '@/components/platform/skeleton'

const tabs = [
  'Neighborhood Profile',
  'Amenities & Mobility',
  'Property Intelligence',
  'Comparison Study',
] as const

type Tab = (typeof tabs)[number]

const moduleCards: { icon: LucideIcon; title: string }[] = [
  { icon: Building2, title: 'Urban Silhouette' },
  { icon: Route, title: 'Mobility Framework' },
  { icon: Users, title: 'Demographic Character' },
  { icon: GraduationCap, title: 'Education Ecosystem' },
  { icon: TrendingUp, title: 'Growth Signals' },
  { icon: Wallet, title: 'Investment Potential' },
]

const kpis = [
  'Livability',
  'Connectivity',
  'Safety',
  'Accessibility',
  'Sustainability',
  'Community',
  'Economic Opportunity',
  'Future Growth',
]

export function IntelligenceTabs() {
  const [active, setActive] = useState<Tab>('Neighborhood Profile')

  return (
    <div className="rounded-2xl border border-border bg-card">
      {/* Tab nav */}
      <div className="flex flex-wrap gap-1 border-b border-border p-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-sans text-sm font-medium transition-colors ${
              active === tab
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
            }`}
          >
            {tab}
            <Lock
              className={`h-3 w-3 ${active === tab ? 'text-primary-foreground/70' : 'text-sage'}`}
              strokeWidth={2}
            />
          </button>
        ))}
      </div>

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Intelligence Reports Dashboard
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground">
              Explore comprehensive neighborhood intelligence, livability
              scoring, infrastructure assessments, demographic insights,
              mobility analytics, sustainability indicators, and future growth
              forecasts.
            </p>
          </div>
          <LockBadge label="Launching Soon" />
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-2 font-sans text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5 text-sage" strokeWidth={2} />
          Previewing <span className="font-medium text-foreground">{active}</span> — full module unlocks at launch
        </div>

        {/* HIQ Score */}
        <div className="mt-8 grid gap-4 lg:grid-cols-[260px_1fr]">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-secondary/40 p-8 text-center">
            <span className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              HIQ Score
            </span>
            <span className="mt-2 font-serif text-6xl font-semibold text-foreground/30">
              --
            </span>
            <LockBadge className="mt-4" />
            <div className="mt-6 w-full">
              <SkeletonBar className="w-full" />
            </div>
          </div>

          {/* Module cards */}
          <div className="grid gap-px overflow-hidden rounded-2xl border border-stone-line bg-stone-line sm:grid-cols-2 xl:grid-cols-3">
            {moduleCards.map(({ icon: Icon, title }) => (
              <article key={title} className="flex flex-col bg-card p-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-forest">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <Lock className="h-3.5 w-3.5 text-sage" strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-1 font-sans text-xs font-medium uppercase tracking-wide text-sage">
                  Coming Soon
                </p>
                <div className="mt-4">
                  <SkeletonLines
                    widths={['w-5/6', 'w-full', 'w-2/3', 'w-3/4']}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* KPI Index */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              KPI Index
            </h3>
            <LockBadge />
          </div>
          <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-stone-line bg-stone-line sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((kpi) => (
              <div key={kpi} className="bg-card p-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-sans text-sm font-medium text-foreground">
                    {kpi}
                  </span>
                  <span className="font-serif text-2xl font-semibold text-foreground/30">
                    --
                  </span>
                </div>
                <p className="mt-1 font-sans text-xs font-medium uppercase tracking-wide text-sage">
                  Coming Soon
                </p>
                <div className="skeleton-shimmer mt-4 h-2 w-full rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
