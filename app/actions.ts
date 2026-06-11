'use server'

export type WaitlistState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = String(formData.get('email') ?? '').trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  // Simulate persistence latency. Wire up to a database when ready.
  await new Promise((resolve) => setTimeout(resolve, 700))
  console.log('[v0] Waitlist signup:', email)

  return {
    status: 'success',
    message: "You're on the list. We'll be in touch as we launch across India.",
  }
}
