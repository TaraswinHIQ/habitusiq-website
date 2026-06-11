import type { Metadata } from 'next'
import { PlatformHeader } from '@/components/platform/platform-header'
import { PreviewBanner } from '@/components/platform/preview-banner'
import { LocaleSelector } from '@/components/platform/locale-selector'
import { IntelligenceTabs } from '@/components/platform/intelligence-tabs'
import { AiAdvisor } from '@/components/platform/ai-advisor'
import { ReportStudio } from '@/components/platform/report-studio'
import { PredictiveModeling } from '@/components/platform/predictive-modeling'
import { EarlyAccess } from '@/components/platform/early-access'
import { PlatformFooter } from '@/components/platform/platform-footer'

export const metadata: Metadata = {
  title: 'HabitusIQ Intelligence Platform — Launching Soon',
  description:
    "A confidential preview of HabitusIQ's enterprise neighborhood intelligence platform. Advanced livability analytics, mobility assessments, investment-grade insights, and predictive growth modeling — launching soon across India.",
}

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-background">
      <PlatformHeader />
      <PreviewBanner />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-8">
          <LocaleSelector />
          <IntelligenceTabs />

          <div className="grid gap-8 lg:grid-cols-2">
            <AiAdvisor />
            <ReportStudio />
          </div>

          <PredictiveModeling />
        </div>
      </div>

      <EarlyAccess />
      <PlatformFooter />
    </main>
  )
}
