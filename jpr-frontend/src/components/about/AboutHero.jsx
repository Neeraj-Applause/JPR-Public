import { ArrowDown, ArrowRight } from "lucide-react";
import heroGraphic from "../../assets/images/about/about-hero-graphic.jpg"; // your illustration

export default function AboutHero() {
  return (
<section className="relative isolate overflow-hidden bg-gradient-to-br from-secondary from-40% to-primary text-white">
    
      {/* Full height but a bit smaller on mobile */}
      <div className="mx-auto flex min-h-[80vh] md:min-h-screen max-w-6xl items-center px-4 sm:px-6 lg:px-8 py-16">
        {/* LEFT: Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary-100 backdrop-blur">
            About JPR India
            <span className="h-1 w-1 rounded-full bg-red-400" />
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Advancing road safety in India
            <span className="text-red-300"> through science & data.</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/80">
            JP Research India conducts traffic safety research and in-depth crash
            investigations with a rigorous, evidence-based and data-driven
            approach – helping governments, OEMs and organizations make Indian roads safer.
          </p>

          {/* Small meta / stats row */}
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-white/70">
            <div>
              <p className="font-semibold text-white">Since 2006</p>
              <p>Crash investigations & safety research</p>
            </div>
            <div className="h-10 w-px bg-white/20 hidden sm:block" />
            <div>
              <p className="font-semibold text-white">Pan-India presence</p>
              <p>Head office & branches across India</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#history"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-primary/90 transition"
            >
              Explore our journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#team"
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-4 py-2.5 text-sm sm:text-base font-medium text-white/90 hover:bg-white/10 transition"
            >
              Meet the team
            </a>
          </div>
        </div>

        {/* RIGHT: Illustration / data visual */}
        <div className="hidden md:flex w-1/2 justify-center">
          <div className="relative w-full max-w-md">
            {/* Glow background */}
            <div className="absolute -inset-8 rounded-3xl bg-red-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur">
              {/* Main graphic */}
              <img
                src={heroGraphic}
                alt="Crash data visualisation"
                className="w-full rounded-2xl object-contain"
              />

              {/* Floating stat chips */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl bg-black/40 px-3 py-2">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">
                    In-depth crashes
                  </p>
                  <p className="text-lg font-semibold text-white">9000+</p>
                </div>
                <div className="rounded-xl bg-black/40 px-3 py-2">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">
                    Years of data
                  </p>
                  <p className="text-lg font-semibold text-white">15+</p>
                </div>
                <div className="rounded-xl bg-black/40 px-3 py-2">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">
                    States & cities
                  </p>
                  <p className="text-lg font-semibold text-white">Multi-state</p>
                </div>
                <div className="rounded-xl bg-black/40 px-3 py-2">
                  <p className="text-[11px] uppercase tracking-wide text-white/60">
                    Partner organizations
                  </p>
                  <p className="text-lg font-semibold text-white">20+ OEMs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-[11px] text-white/60">
        <ArrowDown className="mb-1 h-4 w-4 animate-bounce" />
        <span>Scroll to learn more</span>
      </div>
    </section>
  );
}
