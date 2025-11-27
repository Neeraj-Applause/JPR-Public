import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import rassiLogo from "../../../assets/logos/rassi.png";

export default function RassiInDepthSection() {
  return (
    <section
      id="in-depth-crash-investigations"
      className="relative bg-white py-16 text-slate-900 sm:py-12"
    >
      {/* soft blended accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:gap-14 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        {/* Left: RASSI logo / card */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm lg:max-w-md"
        >
          <div className="rounded-3xl border border-primary/20 bg-white/70 p-4 shadow-md ring-1 ring-primary/20 backdrop-blur-sm hover:scale-[1.02] transition-transform hover:border-primary">
            <div className="flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 hover:border-secondary">
              <img
                src={rassiLogo}
                alt="RASSI logo"
                className="max-h-24 max-w-[70%] object-contain"
              />
            </div>

            {/* Minimal stat strip */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-600 bg-transparent">
              <div className="space-y-0.5">
                <p className="font-bold text-primary">3,750+</p>
                <p className="leading-snug">Accidents</p>
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-secondary">7+ yrs</p>
                <p className="leading-snug">Data period</p>
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-primary">India</p>
                <p className="leading-snug">Coverage</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: content */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-2xl space-y-6"
        >
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium tracking-[0.16em] text-primary uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
            In-depth crash investigations
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                In-depth Crash Investigation
              </span>{" "}
              for India
            </h2>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              JPRI has developed and successfully established an indigenous
              in-depth accident database with data collected scientifically by
              well-trained crash investigators. The database, Road Accident
              Sampling System-India (RASSI), is a repository of accident data of
              over 3,750 accidents investigated across India over a period of 7
              years.
            </p>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The Road Accident Sampling System – India is a pioneering Indian
              initiative aimed at collecting in-depth scientific road accident
              data, through on-site crash investigations, that will enable the
              government, industry and other road safety stakeholders to plan
              and execute data-driven road safety strategies for safer Indian
              roads.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-3 pt-2">
            <a
              href="https://www.rassi.org.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-secondary bg-white text-primary px-4 py-2 text-sm font-medium transition hover:border-primary/40 hover:bg-primary/50 hover:text-secondary"
            >
              <span>Visit www.rassi.org.in</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
              Learn more about RASSI and its activities, members and
              achievements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
