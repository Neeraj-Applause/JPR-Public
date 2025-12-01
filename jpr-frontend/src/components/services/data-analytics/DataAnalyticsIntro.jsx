import { motion } from "framer-motion";
import { ChartBar, Sparkles } from "lucide-react";

export default function DataAnalyticsIntro() {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight mb-4">
              Data-Driven Insights for Road Safety
            </h2>

            <p className="text-slate-700 text-lg leading-relaxed prose max-w-none">
              What gets measured, gets managed. Aimed at assisting manufacturers,
              local authorities and any stakeholders of road safety in making
              informed decisions, the Data Analytics division of JPRI focuses on
              addressing specific research questions with the availability of over
              <strong> 4,000 in-depth accidents collected across India</strong> and
              other relevant datasets.
            </p>

            {/* subtle visual divider */}
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-primary to-transparent rounded" />
          </motion.div>

          {/* Right: visual card / stats */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-white p-6 shadow-lg border border-slate-100">
              {/* accent stripe */}
              <div className="absolute -left-1 top-6 h-46 w-1.5 rounded bg-gradient-to-b from-primary to-secondary" />

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <ChartBar className="h-7 w-7 text-primary" />
                </div>

                <div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                    Data coverage
                  </div>

                  <div className="mt-1 flex items-baseline gap-3">
                    <div className="text-3xl font-bold text-slate-900">4,000+</div>
                    <div className="text-sm text-slate-500">in-depth cases across India</div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600">
                Robust, field-collected crash records combined with domain expertise
                — crafted to answer product, policy and safety strategy questions.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  <Sparkles className="h-4 w-4" />
                  Insight-driven
                </div>
              </div>
            </div>

            {/* decorative helper */}
            <div className="mt-4 text-xs text-slate-400"></div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
