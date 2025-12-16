import { Briefcase, MapPin, Layers } from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-secondary via-primary to-secondary text-white mt-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col md:flex-row gap-10 md:items-center">

        {/* Left */}
        <div className="w-full md:w-2/3 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Projects</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold leading-tight">
            Research-driven projects{" "}
            <span className="text-white/90">
              delivering real-world safety impact
            </span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/90">
            Explore JP Research India’s national and international projects in
            crash investigation, road safety engineering, data analytics and
            training.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/80">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/15 px-3 py-1">
              <Layers className="h-4 w-4" />
              <span>Category-wise project archive</span>
            </div>
            <span className="hidden sm:inline text-white/60">•</span>
            <span>Multi-year &amp; ongoing engagements</span>
          </div>
        </div>

        {/* Right accent */}
        <div className="w-full md:w-1/3 flex md:justify-end">
          <div className="relative w-full max-w-xs">
            <div className="absolute -inset-6 rounded-[2rem] bg-white/20 blur-2xl opacity-80" />
            <div className="relative rounded-[1.75rem] border border-white/20 bg-white/10 backdrop-blur-xl p-4 shadow-2xl">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-2">
                Coverage
              </p>
              <p className="text-sm text-white/95 flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-white/80" />
                India, South Asia, Europe &amp; global research collaborations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
