'use client'

import { useActionState, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle2, ChevronDown, Loader2 } from 'lucide-react'
import { requestDemo, type DemoState } from '@/app/actions'

const initialState: DemoState = { status: 'idle', message: '' }

const userTypes = [
  'Homebuyer',
  'Real Estate Investor',
  'Developer',
  'Real Estate Consultant',
  'Government Agency',
  'Urban Planner',
  'Researcher',
  'Financial Institution',
  'Startup',
  'Media',
  'Other',
]

const interests = [
  'Neighborhood Quality Reports',
  'Investment Intelligence',
  'Property Discovery',
  'Site Selection',
  'Market Research',
  'Urban Analytics',
  'Infrastructure Analysis',
  'ESG & Sustainability Insights',
  'AI Powered Reports',
  'Partnership Opportunities',
]

const investmentRanges = [
  'Under ₹50 Lakhs',
  '₹50 Lakhs – ₹1 Crore',
  '₹1 Crore – ₹3 Crores',
  '₹3 Crores – ₹5 Crores',
  'Above ₹5 Crores',
]

const cities = [
  'Bengaluru',
  'Hyderabad',
  'Chennai',
  'Mumbai',
  'Pune',
  'Delhi NCR',
  'Ahmedabad',
  'Other',
]

const fieldBase =
  'w-full rounded-xl border border-border bg-card/70 px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-sage'
const labelBase =
  'mb-1.5 block font-sans text-xs font-medium tracking-wide text-foreground/80'
const legendBase =
  'mb-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-sage'

function Select({
  name,
  options,
  placeholder,
  required,
}: {
  name: string
  options: string[]
  placeholder: string
  required?: boolean
}) {
  return (
    <div className="relative">
      <select
        name={name}
        required={required}
        defaultValue=""
        className={`${fieldBase} appearance-none pr-10`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        strokeWidth={1.75}
      />
    </div>
  )
}

function SubmitButtons() {
  const { pending } = useFormStatus()
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="submit"
        disabled={pending}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-sans text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" />}
        {pending ? 'Sending…' : 'Book a Personalized Demo'}
      </button>
      <a
        href="#waitlist"
        className="inline-flex flex-1 items-center justify-center rounded-full border border-forest/30 bg-transparent px-6 py-3.5 font-sans text-sm font-medium tracking-wide text-forest transition-colors hover:bg-secondary"
      >
        Join the Waitlist
      </a>
    </div>
  )
}

export function DemoForm() {
  const [state, formAction] = useActionState(requestDemo, initialState)
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (value: string) =>
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value],
    )

  if (state.status === 'success') {
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center rounded-2xl border border-sage/30 bg-card/70 p-10 text-center backdrop-blur-sm">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-sage">
          <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} />
        </span>
        <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">
          Thank you for your interest in HabitusIQ.
        </h3>
        <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-8">
      <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
        Request a Personalized Demo
      </h3>
      <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
        Tell us about yourself and how you plan to use neighborhood
        intelligence. Our team will connect with you and provide early access
        opportunities.
      </p>

      <form action={formAction} className="mt-8 flex flex-col gap-8">
        {/* Hidden interests for server */}
        {selected.map((s) => (
          <input key={s} type="hidden" name="interest" value={s} />
        ))}

        <fieldset>
          <legend className={legendBase}>Personal Information</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={labelBase} htmlFor="fullName">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                required
                placeholder="Your full name"
                className={fieldBase}
              />
            </div>
            <div>
              <label className={labelBase} htmlFor="email">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className={fieldBase}
              />
            </div>
            <div>
              <label className={labelBase} htmlFor="mobile">
                Mobile Number *
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                placeholder="+91 00000 00000"
                className={fieldBase}
              />
            </div>
            <div>
              <label className={labelBase} htmlFor="city">
                City *
              </label>
              <input
                id="city"
                name="city"
                required
                placeholder="City"
                className={fieldBase}
              />
            </div>
            <div>
              <label className={labelBase} htmlFor="state">
                State *
              </label>
              <input
                id="state"
                name="state"
                required
                placeholder="State"
                className={fieldBase}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelBase} htmlFor="country">
                Country *
              </label>
              <input
                id="country"
                name="country"
                required
                defaultValue="India"
                placeholder="Country"
                className={fieldBase}
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className={legendBase}>Professional Information</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelBase} htmlFor="company">
                Company / Organization
              </label>
              <input
                id="company"
                name="company"
                placeholder="Organization"
                className={fieldBase}
              />
            </div>
            <div>
              <label className={labelBase} htmlFor="jobTitle">
                Job Title
              </label>
              <input
                id="jobTitle"
                name="jobTitle"
                placeholder="Role"
                className={fieldBase}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelBase} htmlFor="linkedin">
                LinkedIn Profile URL
              </label>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/…"
                className={fieldBase}
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className={legendBase}>Your Profile</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelBase}>User Type</label>
              <Select
                name="userType"
                options={userTypes}
                placeholder="Select user type"
              />
            </div>
            <div>
              <label className={labelBase}>Investment Range (Optional)</label>
              <Select
                name="investmentRange"
                options={investmentRanges}
                placeholder="Select range"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className={legendBase}>Primary Interest</legend>
          <div className="flex flex-wrap gap-2">
            {interests.map((item) => {
              const active = selected.includes(item)
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggle(item)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-2 font-sans text-xs font-medium tracking-wide transition-colors ${
                    active
                      ? 'border-forest bg-primary text-primary-foreground'
                      : 'border-border bg-card/60 text-muted-foreground hover:border-sage hover:text-forest'
                  }`}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className={legendBase}>Preferred Cities</legend>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {cities.map((city) => (
              <label
                key={city}
                className="flex cursor-pointer items-center gap-2 font-sans text-sm text-foreground/80"
              >
                <input
                  type="checkbox"
                  name="preferredCity"
                  value={city}
                  className="h-4 w-4 rounded border-border text-forest accent-[var(--forest)]"
                />
                {city}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label className={labelBase} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us what you're looking for, the neighborhoods you're interested in, or how you'd like to collaborate with HabitusIQ."
            className={`${fieldBase} resize-none`}
          />
        </div>

        <div className="flex flex-col gap-3 rounded-xl border border-border/70 bg-secondary/40 p-4">
          <label className="flex cursor-pointer items-start gap-3 font-sans text-sm leading-relaxed text-foreground/80">
            <input
              type="checkbox"
              name="earlyAccess"
              defaultChecked
              className="mt-0.5 h-4 w-4 rounded border-border accent-[var(--forest)]"
            />
            Join the HabitusIQ Early Access Program
          </label>
          <label className="flex cursor-pointer items-start gap-3 font-sans text-sm leading-relaxed text-foreground/80">
            <input
              type="checkbox"
              name="updates"
              className="mt-0.5 h-4 w-4 rounded border-border accent-[var(--forest)]"
            />
            Receive neighborhood intelligence updates and product announcements
          </label>
        </div>

        {state.status === 'error' && (
          <p role="alert" className="font-sans text-sm text-terracotta">
            {state.message}
          </p>
        )}

        <SubmitButtons />
      </form>
    </div>
  )
}
