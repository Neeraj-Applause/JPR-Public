import { motion } from "framer-motion";
import { Activity, FileText, AlertTriangle, Flame } from "lucide-react";

export default function CrashInvestigationsExpertise() {
  const expertiseItems = [
    {
      label: "In-depth Crash Investigations",
      icon: Activity,
      href: "#in-depth-crash-investigations",
    },
    {
      label: "Forensic Crash Investigations",
      icon: FileText,
      href: "#forensic-crash-investigations",
    },
     {
      label: "Vehicle/EV Fire Investigations",
      icon: Flame,
      href: "#vehicle-fire-investigations",
    },
    {
      label: "Special Crash Investigations",
      icon: AlertTriangle,
      href: "#special-crash-investigations",
    },
  ];

  return (
    <section id="expertise" className="relative bg-white py-12 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-20 lg:px-10">
        {/* LEFT TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl space-y-5"
        >
          {/* Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Expertise
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Crash Investigations Meeting{" "}
            <span className="text-primary font-bold">Global Standards.</span>
          </h2>

          {/* Paragraph */}
          <p className="text-base leading-relaxed text-slate-600">
            As pioneers in scientific crash investigations in India and having
            established a successful working model of in-depth accident database
            on par with other international databases, the JPRI Crash
            Investigations Division is well positioned and equipped to deliver
            insights across various crash investigation services
          </p>
        </motion.div>

        {/* RIGHT LIST */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid w-full max-w-xl gap-6"
        >
          {expertiseItems.map(({ label, icon: Icon, href }, index) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md hover:border-primary/40 cursor-pointer group"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon className="h-5 w-5" />
              </div>

              {/* Text */}
              <div className="flex min-h-10 items-center">
                <h3 className="text-base font-semibold leading-tight text-slate-900 transition-colors group-hover:text-primary">
                  {label}
                </h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
