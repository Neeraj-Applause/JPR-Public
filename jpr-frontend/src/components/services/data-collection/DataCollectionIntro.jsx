// src/components/services/data-collection/DataCollectionIntro.jsx
import React from "react";
import { motion } from "framer-motion";
import illustration from "../../../assets/images/services/data-collection-illustration.png"; 
// ↑ use your uploaded illustration file

export default function DataCollectionIntro() {
  const content = `A crash involves the participation of 3 factors – human, vehicle and a specific environment (infrastructure). An accurate understanding of the crash occurrence demands identifying the failures in each of these three factors over 3 time phases – Pre Crash, Crash and Post Crash. JPRI’s in-depth crash data collection methodology covers detailed vehicle inspection, crash scene inspection and witness/victim interviews for identification of evidence across all the three factors and phases, documented in the form of photographs, measurements and data forms.`;

  return (
    <section className="py-12 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 shadow-xl overflow-hidden"
        >
          {/* Left accent bar */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-primary/60" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Illustration Section */}
            <div className="hidden md:flex md:col-span-3 items-center justify-center p-4">
              <div className="rounded-2xl bg-white p-2">
                <img
                  src={illustration}
                  alt="Crash data methodology"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            {/* Main content */}
            <div className="col-span-1 md:col-span-9 p-6 md:p-10">
              
              {/* Header row */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-3">
                  <span className="h-0.5 w-12 rounded bg-primary block" />
                  <span className="text-xs font-semibold uppercase text-primary/90 tracking-wider">
                    Data collection
                  </span>
                </div>

                <div className="text-xs text-slate-500">
                  Methodology • Evidence • Fieldwork
                </div>
              </div>

              {/* Paragraph */}
              <article className="prose prose-slate mx-auto max-w-none">
                <p className="text-sm md:text-base text-slate-700 leading-relaxed first-letter:text-5xl first-letter:font-extrabold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                  {content}
                </p>
              </article>

              {/* CTA */}
              <div className="mt-6">
                <a
                  href="#contact"
                  className="text-sm text-primary/90 font-medium hover:underline"
                >
                  Contact our data team
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
