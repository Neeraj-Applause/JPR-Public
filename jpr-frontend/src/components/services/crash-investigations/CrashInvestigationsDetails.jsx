import { motion } from "framer-motion";

export default function CrashInvestigationsSection() {
  return (
    <section
      id="forensic-crash-investigations"
      className="relative py-16 sm:py-20"
    >
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0 space-y-10">
        {/* Section tag + title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-3 text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Crash Investigations
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Forensic &amp; Special Crash Investigations
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
            Detailed, evidence-based crash investigations that support safer
            vehicles, safer roads, and better-informed decisions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Forensic Crash Investigations */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/80 p-6 sm:p-7 shadow-sm backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            {/* Accent bar */}
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-l-2xl" />

            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                Forensic Crash Investigations
              </h3>
              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700">
                Be it a quick consultation to understand an accident or
                full-fledged investigations to reconstruct and understand injury
                causation, we deliver easily understandable and evidence-based
                explanations of the sequence of events leading up to any road
                traffic accident.
              </p>
            </div>
          </motion.article>

          {/* Special Crash Investigations */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/80 p-6 sm:p-7 shadow-sm backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            {/* Accent bar */}
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-secondary to-primary rounded-l-2xl" />

            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                Special Crash Investigations
              </h3>
              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700">
                The intent of such crash investigations is to examine unique
                real-world crashes across India and perform detailed, timely
                examinations that help the safety community improve vehicle
                safety systems and highway engineering.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
