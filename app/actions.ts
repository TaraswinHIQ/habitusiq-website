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

export type DemoState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function requestDemo(
  _prev: DemoState,
  formData: FormData,
): Promise<DemoState> {
  const fullName = String(formData.get('fullName') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const mobile = String(formData.get('mobile') ?? '').trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!fullName) {
    return { status: 'error', message: 'Please enter your full name.' }
  }
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }
  if (!mobile) {
    return { status: 'error', message: 'Please enter your mobile number.' }
  }

  const interests = formData.getAll('interest').map(String)

  // Simulate persistence latency. Wire up to a database when ready.
  await new Promise((resolve) => setTimeout(resolve, 900))
  console.log('[v0] Demo request:', { fullName, email, mobile, interests })

  return {
    status: 'success',
    message:
      'Your request has been received successfully. A member of our team will contact you shortly regarding your demo, partnership inquiry, or early access application.',
  }
}

export type EarlyAccessState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function requestEarlyAccess(
  _prev: EarlyAccessState,
  formData: FormData,
): Promise<EarlyAccessState> {
  const fullName = String(formData.get('fullName') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!fullName) {
    return { status: 'error', message: 'Please enter your full name.' }
  }
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }
  if (!phone) {
    return { status: 'error', message: 'Please enter your phone number.' }
  }

  const organization = String(formData.get('organization') ?? '').trim()
  const role = String(formData.get('role') ?? '').trim()
  const city = String(formData.get('city') ?? '').trim()
  const interest = String(formData.get('interest') ?? '').trim()

  // Simulate persistence latency. Wire up to a database when ready.
  await new Promise((resolve) => setTimeout(resolve, 900))
  console.log('[v0] Early access request:', {
    fullName,
    email,
    phone,
    organization,
    role,
    city,
    interest,
  })

  return {
    status: 'success',
    message:
      'Thank you for your interest in HabitusIQ. Our team will contact you regarding early access opportunities and platform updates.',
  }
}
