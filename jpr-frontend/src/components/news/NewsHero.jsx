import {
  Megaphone,
  CalendarDays,
  BarChart3,
  Sparkles,
} from "lucide-react";

export default function NewsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-primary to-gray-950 text-white mt-6">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
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
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT — Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2">
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-1.5">
                <Megaphone className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Sparkles className="inline h-2.5 w-2.5 mr-1.5" />
                News & Events
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Updates & Activities
                </span>
                <br />
                <span className="text-white/85 text-2xl md:text-3xl lg:text-4xl">
                  Advancing Road Safety Practice
                </span>
              </h1>

              <p className="text-base text-white/80 leading-relaxed max-w-xl">
                Stay informed about recent trainings, workshops, conferences,
                field studies and institutional initiatives undertaken by
                JP Research India.
              </p>
            </div>
          </div>

          {/* RIGHT — Info Card */}
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />

              <div className="relative bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 p-5 shadow-xl">
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-sm">
                    <BarChart3 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Activity Archive
                    </h3>
                    <p className="text-xs text-white/70">
                      Chronological overview
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-3 text-sm text-white/85">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-white/70" />
                    <span>Organised by year and category</span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Browse documented activities covering research dissemination,
                    capacity building, stakeholder engagement and public outreach
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
