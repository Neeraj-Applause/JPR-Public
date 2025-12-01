// src/components/services/crash-reconstruction/CrashReconstructionIntro.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * CrashReconstructionIntro
 * - Content is kept verbatim (no edits)
 * - Modern, sleek, minimal UI
 */
export default function CrashReconstructionIntro() {
  const content1 = `A systematic process of evaluating the evidences obtained from vehicle and crash scene examination, as well as data from victim/witness interviews, and applying accepted physical principles and laws, to determine the collision sequence, calculate vehicle speeds, and ascertain the causes for the crash occurrence.`;

  const content2 = `Reconstruction requires good quality crash data collection. Like solving a jigsaw puzzle, JPRI Crash Reconstructionists put together the crash data and the evidence collected, and determine the crash sequence by employing physics and mechanics calculations. JPRI Crash Reconstructionists also use an accident reconstruction software, PC-Crash, for creating for 3D simulations (not animations) for a better understanding and visualization of crashes.`;

  return (
    <section className="py-12 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-100 shadow-xl overflow-hidden"
        >
          {/* vertical accent */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-primary/60" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* decorative glyph / illustration (desktop only) */}
            <div className="hidden md:flex md:col-span-2 items-start justify-center p-6">
              <div className="rounded-2xl bg-white p-3 border border-slate-100 shadow-sm">
                {/* simple reconstruction glyph (magnifier + trajectory) */}
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="10" cy="10" r="6" stroke="#A01E21" strokeWidth="1.5" fill="#fff7f6" />
                  <path d="M14.5 14.5 L20 20" stroke="#6B7280" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M6 12 C7.2 9.5 9.2 8.6 10.5 8.4" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* main copy */}
            <div className="col-span-1 md:col-span-10 p-6 md:p-10">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-3">
                  <span className="h-0.5 w-12 rounded bg-primary block" />
                  <span className="text-xs font-semibold uppercase text-primary/90 tracking-wider">
                    Crash reconstruction
                  </span>
                </div>

                <div className="text-xs text-slate-500">Physics • Simulation • Evidence</div>
              </div>

              <article className="prose prose-slate mx-auto max-w-none">
                {/* drop-cap style (first letter visually emphasized) */}
                <p className="text-sm md:text-base text-slate-700 leading-relaxed first-letter:text-5xl first-letter:font-extrabold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                  {content1}
                </p>

                <p className="mt-4 text-sm md:text-base text-slate-700 leading-relaxed">
                  {content2}
                </p>
              </article>

              <div className="mt-6 flex items-center gap-4">

                <a href="#contact" className="text-sm text-primary/90 font-medium hover:underline">
                  Contact reconstruction team
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
