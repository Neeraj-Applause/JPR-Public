import { motion } from "framer-motion";
import heroImg from "../../../assets/images/services/injury-hero.jpg";

export default function InjuryAnalysisHero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen overflow-hidden bg-black text-white">

      <div className="absolute inset-0">
        <img src={heroImg} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] md:min-h-screen max-w-7xl items-end px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1 text-[11px] uppercase tracking-wider">
            <span className="h-2 w-2 bg-primary rounded-full" />
            Injury Analysis
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-tight">
            <span className="text-primary">Scientific Injury Analysis</span>{" "}
            for Safer Indian Roads
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-md">
            Systematic extraction, severity scaling, and source correlation of human injuries from real-world crashes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
