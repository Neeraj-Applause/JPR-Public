// src/components/services/data-collection/DataCollectionIntro.jsx
import React from "react";
import { motion } from "framer-motion";
import haddonMatrixImage from "../../../assets/images/services/haddon-matrix.png"; 
// ↑ Haddon Matrix table image

export default function DataCollectionIntro() {
  const content = `A crash involves the participation of 3 contributors – human, vehicle and a specific environment (infrastructure). An accurate understanding of the crash occurrence not just demands identifying the failures in each of these three contributors, but also over three distinct time phases – Pre Crash, Crash and Post Crash. JPRI’s in-depth crash data collection methodology covers detailed vehicle inspection, crash scene inspection and witness/victim interviews for identification of evidence across all the three contributors and phases, documented using proprietary tools for reproducibility.`;

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

          <div className="p-6 md:p-10">
            
            {/* Header row */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="inline-flex items-center gap-3">
                <span className="h-0.5 w-12 rounded bg-primary block" />
                <span className="text-xs font-semibold uppercase text-primary/90 tracking-wider">
                  Data collection
                </span>
              </div>
            </div>

            {/* Paragraph */}
            <article className="prose prose-slate mx-auto max-w-none">
              <p className="text-sm md:text-base text-slate-700 leading-relaxed first-letter:text-5xl first-letter:font-extrabold first-letter:text-primary first-letter:mr-3 first-letter:float-left text-justify">
                {content}
              </p>
            </article>

            {/* Haddon Matrix Section - now below text and centered */}
            <div className="flex items-center justify-center mt-8">
              <img
                src={haddonMatrixImage}
                alt="Haddon Matrix - Data Collection Framework"
                className="w-full h-auto object-contain max-w-full"
                style={{ maxHeight: '650px' }}
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
