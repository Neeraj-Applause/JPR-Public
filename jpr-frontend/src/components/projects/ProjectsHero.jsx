import {
  Briefcase,
  Layers,
  MapPin,
  Sparkles,
  BarChart3,
  Target,
} from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-primary to-gray-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2">
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-1.5">
                <Briefcase className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Sparkles className="inline h-2.5 w-2.5 mr-1.5" />
                Project Portfolio
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Research-driven Projects
                </span>
                <br />
                <span className="text-white/90 text-2xl md:text-3xl lg:text-4xl">
                  Delivering Real-world Safety Impact
                </span>
              </h1>

              <p className="text-base text-white/80 leading-relaxed max-w-xl">
                Explore JP Research India’s national and international projects
                spanning crash investigation, road safety engineering, data
                analytics, and institutional capacity building.
              </p>
            </div>
          </div>

          {/* RIGHT ANALYTICS CARD */}
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />

              <div className="relative bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 p-5 shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-sm">
                      <BarChart3 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        Project Landscape
                      </h3>
                      <p className="text-xs text-white/70">
                        Active & completed engagements
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-3">
                  <Metric
                    icon={<Layers className="h-4 w-4" />}
                    label="Core Domains"
                    value="Engineering, Analytics, Training"
                  />
                  <Metric
                    icon={<Target className="h-4 w-4" />}
                    label="Engagement Model"
                    value="Multi-year & Ongoing"
                  />
                  <Metric
                    icon={<MapPin className="h-4 w-4" />}
                    label="Geographic Reach"
                    value="India, South Asia & Global"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Reusable metric row – matches PublicationsHero style */
function Metric({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between py-2.5 px-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200">
      <div className="flex items-center gap-3">
        <div className="p-1.5 bg-white/10 rounded-md text-white">
          {icon}
        </div>
        <span className="text-sm text-white font-medium">{label}</span>
      </div>
      <span className="text-sm text-white/80 text-right max-w-[55%]">
        {value}
      </span>
    </div>
  );
}
