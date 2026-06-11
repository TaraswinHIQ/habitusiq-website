'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react'
import {
  requestEarlyAccess,
  type EarlyAccessState,
} from '@/app/actions'

const interestOptions = [
  'Neighborhood Intelligence',
  'Investment Research',
  'Urban Planning',
  'Real Estate Development',
  'Market Analysis',
  'Government & Public Sector',
  'Partnership Opportunities',
  'Other',
]

const initialState: EarlyAccessState = { status: 'idle', message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending ? 'Submitting...' : 'Request Early Access'}
      {!pending && <ArrowRight className="h-4 w-4" strokeWidth={2} />}
    </button>
  )
}

const fieldClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30'

export function EarlyAccessForm() {
  const [state, formAction] = useActionState(requestEarlyAccess, initialState)

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-sage/30 bg-card p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-forest">
          <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
          Thank you for your interest in HabitusIQ.
        </h3>
        <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="ea-fullName"
            className="font-sans text-xs font-medium text-foreground"
          >
            Full Name <span className="text-terracotta">*</span>
          </label>
          <input
            id="ea-fullName"
            name="fullName"
            required
            placeholder="Your full name"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="ea-email"
            className="font-sans text-xs font-medium text-foreground"
          >
            Email Address <span className="text-terracotta">*</span>
          </label>
          <input
            id="ea-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="ea-phone"
            className="font-sans text-xs font-medium text-foreground"
          >
            Phone Number <span className="text-terracotta">*</span>
          </label>
          <input
            id="ea-phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 00000 00000"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="ea-organization"
            className="font-sans text-xs font-medium text-foreground"
          >
            Organization
          </label>
          <input
            id="ea-organization"
            name="organization"
            placeholder="Company or institution"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="ea-role"
            className="font-sans text-xs font-medium text-foreground"
          >
            Role
          </label>
          <input
            id="ea-role"
            name="role"
            placeholder="Your role"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="ea-city"
            className="font-sans text-xs font-medium text-foreground"
          >
            City
          </label>
          <input
            id="ea-city"
            name="city"
            placeholder="Your city"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label
            htmlFor="ea-interest"
            className="font-sans text-xs font-medium text-foreground"
          >
            Primary Interest
          </label>
          <div className="relative">
            <select
              id="ea-interest"
              name="interest"
              defaultValue=""
              className={`${fieldClass} cursor-pointer appearance-none pr-10`}
            >
              <option value="" disabled>
                Select your primary interest
              </option>
              {interestOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              strokeWidth={1.75}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label
            htmlFor="ea-message"
            className="font-sans text-xs font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="ea-message"
            name="message"
            rows={4}
            placeholder="Tell us how you'd like to use HabitusIQ..."
            className={`${fieldClass} resize-none`}
          />
        </div>
      </div>

      {state.status === 'error' && (
        <p className="mt-4 font-sans text-sm text-terracotta">
          {state.message}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <SubmitButton />
        <a
          href="mailto:ceo@habitusiq.in?subject=Book%20a%20Demo"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/30 px-6 py-3 font-sans text-sm font-semibold text-forest transition-colors hover:bg-secondary"
        >
          Book a Demo
        </a>
      </div>
    </form>
  )
}
