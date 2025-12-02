// src/components/services/data-collection/DataCollectionHero.jsx
import { motion } from "framer-motion";
import heroImg from "../../../assets/images/services/data-collection-hero.png";
import logo from "../../../assets/logos/logo.png";
import logo2 from "../../../assets/logos/rassi.png";

export default function DataCollectionHero() {
  return (
    <section
      id="data-collection-hero"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background image full-screen */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Data collection and crash investigation"
          className="h-full w-full object-cover"
        />

        {/* Very subtle global vignette to keep image visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10" />

        {/* Bottom-focused overlay for readability */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      </div>

      {/* TOP-LEFT LOGO (desktop only) */}
      {/* <div className="hidden md:flex absolute top-6 left-6 z-30">
        <div
          className="flex items-center gap-3 px-4 py-4 rounded-2xl
               bg-white/8 backdrop-blur-md border border-white/10 shadow-sm"
        >
          <a href="/" aria-label="JP Research home">
            <img src={logo} alt="JP Research logo" className="h-20 w-auto object-contain" />
          </a>
        </div>
      </div> */}

      {/* TOP-RIGHT RASSI LOGO (desktop only) */}
      {/* <div className="hidden md:flex absolute top-6 right-6 z-30">
        <div
          className="flex items-center gap-3 px-4 py-4 rounded-2xl
               bg-white/8 backdrop-blur-md border border-white/10 shadow-sm"
        >
          <a href="https://www.rassi.in" target="_blank" rel="noopener noreferrer" aria-label="RASSI website">
            <img src={logo2} alt="RASSI logo" className="h-14 w-auto object-contain" />
          </a>
        </div>
      </div> */}

      {/* Content bottom-aligned */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-10 lg:px-12 lg:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 max-w-2xl"
        >
          {/* Small pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Data collection
          </div>

          {/* Main heading at bottom */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-tight">
            <span className="bg-primary bg-clip-text text-transparent">
              Robust crash data collection
            </span>{" "}
            for evidence-led safety interventions.
          </h1>

          {/* Short caption */}
          <p className="text-sm sm:text-base text-slate-200/90 max-w-md">
            Accurate, repeatable data collection is the foundation of credible crash investigation and safety
            interventions. Our methodology combines careful scene work, vehicle examination and targeted interviews to
            record the facts precisely.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
