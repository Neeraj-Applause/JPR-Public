// src/components/about/VisionMissionSection.jsx
import { Target, Compass } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section
      className="relative py-12 sm:py-16"
      id="vision-mission"
      aria-labelledby="vision-mission-heading"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0 space-y-8">
        {/* Heading */}
        <div className="text-center space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Who we are
          </p>
          <h2
            id="vision-mission-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
          >
            Vision &amp; Mission
          </h2>
          <p className="mt-1 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            A science-driven, data-backed approach to building safer journeys on
            India&apos;s roads.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Vision */}
          <article className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/80 p-6 sm:p-7 shadow-sm backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
            {/* accent bar */}
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-red-500 rounded-l-2xl" />

            <div className="flex items-start gap-4">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-5 w-5" />
                <span className="absolute inset-0 rounded-xl border border-primary/20" />
              </div>

              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                  Vision
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700">
                  To be a world-renowned traffic safety research and training center that focuses on conducting traffic safety research, capacity building and disseminating competent and scientifically analyzed data to help individuals and organizations make everyone’s journeys safer.
                </p>
              </div>
            </div>
          </article>

          {/* Mission */}
          <article className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/80 p-6 sm:p-7 shadow-sm backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
            {/* accent bar */}
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-slate-800 to-primary rounded-l-2xl" />

            <div className="flex items-start gap-4">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Compass className="h-5 w-5" />
                <span className="absolute inset-0 rounded-xl border border-primary/20" />
              </div>

              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                  Mission
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700">
                  To conduct traffic safety research activities with an unbiased, scientific, evidence-based and data-driven approach that provides high-quality data, insights and cost-effective solutions, enabling our customers to achieve a quantifiable return on investment in terms of lives saved and injuries mitigated.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
