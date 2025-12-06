import { motion } from "framer-motion";
import heroImg from "../../../assets/images/services/crash-hero.jpg";
import logo from "../../../assets/logos/logo.png";
import logo2 from "../../../assets/logos/rassi.png";

export default function CrashInvestigationsHero() {
  return (
    <section
      id="crash-investigations-hero"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background image full-screen */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Crash investigation and data analysis"
          className="h-full w-full object-cover"
        />

        {/* Very subtle global vignette to keep image visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10" />

        {/* Bottom-focused overlay for readability */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      </div>


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
            Crash Investigations
          </div>

          {/* Main heading at bottom */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-tight">
            <span className="bg-primary bg-clip-text text-transparent">
              Crash investigations
            </span>{" "}
            for safer Indian roads.
          </h1>

          {/* Short caption */}
          <p className="text-sm sm:text-base text-slate-200/90 max-w-md">
            Scientific reconstruction and high-fidelity crash data to power
            safer vehicles, infrastructure, and policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
