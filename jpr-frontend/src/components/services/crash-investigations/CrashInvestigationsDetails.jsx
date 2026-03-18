import { motion } from "framer-motion";
import forensicImage from "../../../assets/images/services/Case-specific-Crash-Investigations/ForensicCI.jpg";
import vehicleFireImage from "../../../assets/images/services/Case-specific-Crash-Investigations/vehicleEVFire.jpg";
import specialImage from "../../../assets/images/services/Case-specific-Crash-Investigations/SpecialCI.jpg";

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
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 text-justify">
                  Be it a quick consultation to understand an accident or
                  full-fledged investigations to reconstruct and understand
                  crash contributors, JPRI delivers easily understandable and
                  evidence-based explanations of the sequence events leading up
                  to any road traffic accident to encourage informed decision
                  making and prevent recurrence.{" "}
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={forensicImage}
                  alt="Forensic Crash Investigation"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vehicle/EV Fire Investigations Section */}
      <section
        id="vehicle-fire-investigations"
        className="relative py-16 sm:py-20 bg-gradient-to-br from-white to-slate-50"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-red-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image - on left for variety */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative lg:order-1"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={vehicleFireImage}
                  alt="Vehicle/EV Fire Investigation"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
                <p className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                  Case-specific Crash Investigations
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                  Vehicle/EV Fire Investigations
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 text-justify">
                  Evidence-based independent investigation services for fires
                  involving conventional and electric vehicles. Each
                  investigation involves detailed vehicle examination, evidence
                  documentation, and analysis of vehicle components to determine
                  the origin and source of the fire. Using established fire
                  investigation methodologies and knowledge of modern vehicle
                  systems, to deliver clear findings to support insurers,
                  manufacturers, fleet operators, and legal teams in
                  understanding incidents and reducing future risks.{" "}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Crash Investigations Section */}
      <section
        id="special-crash-investigations"
        className="relative py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Case-specific Crash Investigations
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                  Special Crash Investigations
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 text-justify">
                  Case-specific and timely crash investigations to examine
                  unique real-world crashes across India to help clients
                  undertake India-specific improvements such as vehicle safety
                  system design and road engineering.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={specialImage}
                  alt="Special Crash Investigation"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
