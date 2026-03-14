import { motion } from "framer-motion";

export default function CrashInvestigationsSection() {
  return (
    <>
      {/* Forensic Crash Investigations Section */}
      <section
        id="forensic-crash-investigations"
        className="relative py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Case-specific Crash Investigations
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                  Forensic Crash Investigations
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Detailed, evidence-based crash investigations that support trained operators, safer vehicles, safer forgiving roads, and better-informed decisions.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 text-justify">
                  Be it a quick consultation to understand an accident or full-fledged investigations to reconstruct and understand crash contributors, JPRI delivers easily understandable and evidence-based explanations of the sequence of events leading up to any road traffic accident to encourage informed decision making and prevent recurrence.
                </p>
              </div>
            </motion.div>

            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 shadow-xl">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="h-16 w-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-slate-600">Forensic Investigation</p>
                    <p className="text-xs text-slate-500">Image placeholder</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-primary/20" />
                <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-secondary/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Crash Investigations Section */}
      <section
        id="special-crash-investigations"
        className="relative py-16 sm:py-20 bg-gradient-to-br from-white to-slate-50"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image placeholder - on left for variety */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative lg:order-1"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 p-8 shadow-xl">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="h-16 w-16 mx-auto rounded-full bg-secondary/20 flex items-center justify-center">
                      <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-slate-600">Special Investigation</p>
                    <p className="text-xs text-slate-500">Image placeholder</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-secondary/20" />
                <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-full bg-primary/20" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 lg:order-2"
            >
              <div className="space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Case-specific Crash Investigations
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                  Special Crash Investigations
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Detailed, evidence-based crash investigations that support trained operators, safer vehicles, safer forgiving roads, and better-informed decisions.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 text-justify">
                  Case-specific and timely crash investigations to examine unique real-world crashes across India to help the clients undertake India-specific improvements such as vehicle safety system design and road engineering.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}