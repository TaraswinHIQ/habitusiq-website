'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { joinWaitlist, type WaitlistState } from '@/app/actions'

const initialState: WaitlistState = { status: 'idle', message: '' }

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="shrink-0 rounded-full bg-primary px-6 py-3 font-sans text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending ? 'Joining…' : label}
    </button>
  )
}

export function WaitlistForm({
  label = 'Join the Waitlist',
  className = '',
}: {
  label?: string
  className?: string
}) {
  const [state, formAction] = useActionState(joinWaitlist, initialState)

  return (
    <div className={className}>
      <form
        action={formAction}
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-full border border-border bg-card px-5 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-sage"
        />
        <SubmitButton label={label} />
      </form>
      {state.status !== 'idle' && (
        <p
          role="status"
          className={`mt-3 font-sans text-sm ${
            state.status === 'success' ? 'text-sage' : 'text-terracotta'
          }`}
        >
          {state.message}
        </p>
      )}
    </div>
  )
}
