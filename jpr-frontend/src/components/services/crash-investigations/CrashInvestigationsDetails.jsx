import { motion } from "framer-motion";

export default function CrashInvestigationsSection() {
  return (
    <section
      id="forensic-crash-investigations"
      className="relative bg-white py-16 text-slate-900 sm:py-20"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-6 top-6 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 lg:px-8">
        {/* Section label + title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
            Crash Investigations
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Forensic &amp; Special Crash Investigations
          </h2>

          <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
            Detailed, evidence-based crash investigations that support safer
            vehicles, safer roads, and better-informed decisions.
          </p>
        </motion.div>

        {/* Content cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Forensic Crash Investigations */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm ring-1 ring-slate-100/70 backdrop-blur-sm sm:p-7"
          >
            <div className="absolute inset-y-6 left-0 w-1 rounded-full bg-gradient-to-b from-primary to-secondary" />

            <div className="pl-5">
              <h3 className="text-lg font-semibold sm:text-xl">
                Forensic Crash Investigations
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                Be it a quick consultation to understand an accident or
                full-fledged investigations to reconstruct and understand injury
                causation, we deliver easily understandable and evidence based
                explanations of the sequence of events leading up to any road
                traffic accidents.
              </p>
            </div>
          </motion.article>

          {/* Special Crash Investigations */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm ring-1 ring-slate-100/70 backdrop-blur-sm sm:p-7"
          >
            <div className="absolute inset-y-6 left-0 w-1 rounded-full bg-gradient-to-b from-secondary to-primary" />

            <div className="pl-5">
              <h3 className="text-lg font-semibold sm:text-xl">
                Special Crash Investigations
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                The intent of such crash investigations is to examine unique
                real-world crashes anywhere in India and perform a detailed
                examination in a timely manner that can be used by the safety
                community to understand, evaluate and improve the performance of
                existing safety systems. Past cases have triggered interest from
                individual companies and the industry as a whole to improve the
                safety performance of motor vehicles and highway safety
                engineering.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
