import { ArrowDown, ArrowRight } from "lucide-react";
import heroGraphic from "../../assets/images/about/about-hero-graphic.jfif"; // your illustration
import { ChevronDown } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-secondary from-40% to-primary text-white mt-4">
      {/* Full height minus header (adjust 80px to your header height) */}
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-4 sm:px-6 lg:px-2 py-8 md:py-10">
        {/* LEFT: Text */}
        <div className="w-full md:w-1/2 space-y-3">
          {/* <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary-100 backdrop-blur">
            about JP Research India
            <span className="h-1 w-1 rounded-full bg-red-400" />
          </p> */}

          <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold leading-tight">
            Advancing road safety in India
            <span className="text-red-300"> through science & data.</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/90 text-justify">
            JP Research India is a research company dedicated to improve road
            and automotive safety in India with a focus on field data
            collection, analysis, and engineering services. Established in 2006,
            JP Research India has worked to initiate awareness of road safety
            issues among government bodies, auto manufacturers, and other
            agencies, organizations, and entities having a stake in the shaping
            of safer, modern Indian roads. The company has accomplished this
            through accident investigation and data collection activities, by
            bringing diverse industries together through our annual road safety
            seminars, and by disseminating knowledge and encouraging public
            participation in groundbreaking research programs presented in our
            quarterly newsletters.
          </p>

          {/* Small meta / stats row */}
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-white/70">
            <div>
              <p className="font-semibold text-white">
                Promoting road safety research in India
              </p>
              <p>Since 2006</p>
            </div>
            <div className="h-10 w-px bg-white/20 hidden sm:block" />
            <div>
              <p className="font-semibold text-white">Pan-India presence</p>
              <p>Head office & branches across India</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                const section = document.getElementById("history");
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-primary/90 transition"
            >
              Explore our journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                const section = document.getElementById("leadership");
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-4 py-2.5 text-sm sm:text-base font-medium text-white/90 hover:bg-white/10 transition"
            >
              Meet the team
            </button>
          </div>
        </div>

        {/* RIGHT: Compact + Slightly Bigger */}
        <div className="hidden md:flex w-1/2 justify-end">
          <div className="relative w-full max-w-md group">
            {/* Soft glow ring */}
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary/70 to-secondary/70 blur-2xl opacity-80" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-gradient-to-br from-white/10 to-black/30 shadow-2xl backdrop-blur-xl p-5">
              {/* Graphic */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />
                <img
                  src={heroGraphic}
                  alt="Crash data visualization"
                  className="h-full w-full object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-[12px] leading-tight">
                <div className="rounded-xl bg-white/15 px-3 py-2 shadow">
                  <p className="tracking-wide text-white/55 text-[11px]">
                    In-depth crashes studied
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    9000+
                  </p>
                </div>

                <div className="rounded-xl bg-white/15 px-3 py-2 shadow">
                  <p className="tracking-wide text-white/55 text-[11px]">
                    Research covering
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    ~20 years
                  </p>
                </div>

                <div className="rounded-xl bg-white/15 px-3 py-2 shadow">
                  <p className="tracking-wide text-white/55 text-[11px]">
                    Presence
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    Pan India
                  </p>
                </div>

                <div className="rounded-xl bg-white/15 px-3 py-2 shadow">
                  <p className="tracking-wide text-white/55 text-[11px]">
                    Partner Organizations
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-white">
                    Government, Automotive OEMs, Insurance, Road Infrastructure
                    agencies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Cue */}
      <button
        type="button"
        onClick={() => {
          const target = document.getElementById("main-content");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 text-[11px] tracking-wide text-white hover:text-white transition"
      >
        {/* move arrow up a bit, text stays */}
        <ChevronDown className="h-10 w-10 animate-bounce relative text-white/80" />
        <span>Scroll to learn more</span>
      </button>
    </section>
  );
}
