import { motion } from "framer-motion";
import heroImg from "../../../assets/images/services/reconstruction-hero.png";
// ← replace with your actual reconstruction hero image
import logo from "../../../assets/logos/logo.png";
import logo2 from "../../../assets/logos/rassi.png";

export default function CrashReconstructionHero() {
  return (
    <section
      id="crash-reconstruction-hero"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Crash reconstruction and simulation"
          className="h-full w-full object-cover"
        />

        {/* Global vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10" />

        {/* Strong bottom fade for text */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      </div>

      {/* LEFT Logo */}
      <div className="hidden md:flex absolute top-6 left-6 z-30">
        <div className="flex items-center gap-3 px-4 py-4 rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 shadow-sm">
          <a href="/" aria-label="JP Research home">
            <img src={logo} alt="JP Research logo" className="h-20 w-auto object-contain" />
          </a>
        </div>
      </div>

      {/* RIGHT Logo */}
      <div className="hidden md:flex absolute top-6 right-6 z-30">
        <div className="flex items-center gap-3 px-4 py-4 rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 shadow-sm">
          <a
            href="https://www.rassi.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RASSI website"
          >
            <img src={logo2} alt="RASSI logo" className="h-14 w-auto object-contain" />
          </a>
        </div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-10 lg:px-12 lg:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 max-w-2xl"
        >
          {/* Pill label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Crash Reconstruction
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-tight">
            <span className="bg-primary bg-clip-text text-transparent">
              Crash reconstruction
            </span>{" "}
            powered by science & simulation.
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-slate-200/90 max-w-md">
            Accurate reconstruction using 2D/3D simulation, vehicle dynamics and
            evidence-based modelling for deeper crash understanding.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
