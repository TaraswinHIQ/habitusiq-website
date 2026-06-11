import {
  FileText,
  Gauge,
  Route,
  TrendingUp,
  Sparkles,
  LineChart,
  MapPinned,
  Building2,
  type LucideIcon,
} from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: FileText,
    title: 'Neighborhood Intelligence Reports',
    description:
      'Comprehensive, address-level reports synthesizing the data that actually shapes daily life.',
  },
  {
    icon: Gauge,
    title: 'HIQ Neighborhood Scores',
    description:
      'A single, trustworthy score that distills livability into something you can compare.',
  },
  {
    icon: Route,
    title: 'Livability & Connectivity Insights',
    description:
      'Understand how well an area connects to work, schools, transit, and everyday essentials.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Intelligence',
    description:
      'Spot signals of long-term value with data-driven context on demand and development.',
  },
  {
    icon: Sparkles,
    title: 'AI Neighborhood Advisor',
    description:
      'Ask questions in plain language and get grounded, personalized neighborhood guidance.',
  },
  {
    icon: LineChart,
    title: 'Future Growth Analysis',
    description:
      'See where an area is heading with forward-looking infrastructure and growth models.',
  },
  {
    icon: MapPinned,
    title: 'Amenity Mapping',
    description:
      'Map parks, healthcare, schools, and community spaces around any address you care about.',
  },
  {
    icon: Building2,
    title: 'Infrastructure Intelligence',
    description:
      'Evaluate the roads, utilities, and civic systems that quietly define quality of life.',
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sage">
            Coming Soon
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            The intelligence behind every address.
          </h2>
          <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
            A growing suite of tools designed to make neighborhoods legible,
            comparable, and genuinely understandable.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-stone-line bg-stone-line sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group flex flex-col bg-card p-6 transition-colors hover:bg-background"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-forest transition-colors group-hover:bg-sage group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold leading-snug text-foreground">
                {title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
