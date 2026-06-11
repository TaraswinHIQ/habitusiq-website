import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  CalendarClock,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  BarChart3,
  MapPinned,
} from 'lucide-react'
import { DemoForm } from '@/components/demo-form'

const founders = [
  { role: 'Founder & CEO', name: 'Taraswin H S' },
  { role: 'Co-Founder', name: 'Lovish R' },
]

const contactItems = [
  { icon: Mail, label: 'Business Email', value: 'ceo@habitusiq.in', href: 'mailto:ceo@habitusiq.in' },
  { icon: Mail, label: 'Personal Email', value: 'taraswinhs@gmail.com', href: 'mailto:taraswinhs@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 73376 61562', href: 'tel:+917337661562' },
  { icon: Phone, label: 'Phone', value: '+91 96637 77830', href: 'tel:+919663777830' },
  { icon: MapPin, label: 'Location', value: 'Bengaluru, Karnataka, India' },
]

const stats = [
  { icon: MapPinned, label: 'Neighborhood Intelligence Platform' },
  { icon: Sparkles, label: 'AI-Powered Analysis' },
  { icon: BarChart3, label: 'Data-Driven Decision Support' },
  { icon: ShieldCheck, label: 'Launching Across India' },
]

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Contact, Demo &amp; Early Access
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-5 text-pretty font-sans text-base leading-relaxed text-muted-foreground">
            Whether you&apos;re evaluating a neighborhood, exploring investment
            opportunities, researching urban development, or seeking strategic
            partnerships, HabitusIQ is building the future of neighborhood
            intelligence across India.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left: Founders & Contact */}
          <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-8 lg:sticky lg:top-24">
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              Connect With Our Team
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {founders.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center gap-4 rounded-xl border border-border/70 bg-background/60 p-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-forest">
                    <UserRound className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wide text-muted-foreground">
                      {f.role}
                    </p>
                    <p className="font-serif text-lg font-semibold text-foreground">
                      {f.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6">
              {contactItems.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-sans text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a
                    key={item.label + item.value}
                    href={item.href}
                    className="group transition-opacity hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label + item.value}>{content}</div>
                )
              })}

              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
                  <CalendarClock className="h-4.5 w-4.5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wide text-muted-foreground">
                    Availability
                  </p>
                  <p className="font-sans text-sm font-medium text-foreground">
                    Monday – Saturday
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    9:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/company/habitusiq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                Follow HabitusIQ on LinkedIn
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href="mailto:ceo@habitusiq.in"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/30 px-6 py-3 font-sans text-sm font-medium tracking-wide text-forest transition-colors hover:bg-secondary"
              >
                Email Our Team
              </a>
            </div>
          </div>

          {/* Right: Demo form */}
          <DemoForm />
        </div>

        {/* Trust section */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/60 p-6 text-center backdrop-blur-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-forest">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="font-serif text-sm font-semibold leading-snug text-foreground">
                  {s.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
