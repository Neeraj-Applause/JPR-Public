// src/components/TrainingCards.jsx
import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../assets/images/services/training/crash-investigation.jpg";
import image2 from "../../../assets/images/services/training/crash-reconstruction.jpg";
import image3 from "../../../assets/images/services/training/injury-analysis.jpg";
import image4 from "../../../assets/images/services/training/capacity-building.jpg";
import image5 from "../../../assets/images/services/training/crash-test.jpg";

/**
 * TrainingCards (Compact · Modern · Sleek)
 *
 * - Keeps every bit of copy exactly as provided.
 * - More compact card footprint, improved visual hierarchy and micro-interaction.
 * - Responsive grid: 1 col (xs) → 2 cols (sm) → 3 cols (lg).
 * - Replace images above if you want different photos.
 */

const CARDS = [
  {
    id: "crash-investigation",
    title: "Crash\nInvestigation",
    image: image1,
    lines: ["Scene inspection", "Vehicle inspection", "Accident photography"],
  },
  {
    id: "crash-reconstruction",
    title: "Crash\nreconstruction",
    image: image2,
    lines: ["2D and 3D simulation", "Hand calculations and software validation using PC Crash"],
  },
  {
    id: "injury-analysis",
    title: "Injury analysis",
    image: image3,
    lines: ["Understanding injury records", "Extraction of injury information", "Injury correlation", "Injury scaling"],
  },
  {
    id: "capacity-building",
    title: "Capacity building",
    image: image4,
    lines: ["Research centers", "Setting up crash database", "Injury correlation", "Vehicle damage assessments"],
  },
  {
    id: "crash-tests",
    title: "Crash tests",
    image: image5,
    lines: ["Live crash tests", "Accident data collection", "Crash reconstruction"],
  },
];

export default function TrainingCards() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">Training modules</h2>
            <p className="mt-1 text-sm md:text-base text-slate-600 max-w-xl">
              Practical courses and hands-on modules designed for professionals working in crash investigation,
              reconstruction and road safety.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, idx) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ translateY: -8, boxShadow: "0 18px 40px rgba(16,24,40,0.08)" }}
              transition={{ duration: 0.36, delay: idx * 0.04 }}
              className="group bg-white rounded-xl overflow-hidden flex flex-col"
            >
              {/* image with subtle overlay and zoom on hover */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title.replace("\n", " ")}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute left-4 bottom-3">
                  <span className="inline-block px-2 py-1 rounded-md bg-white/90 text-xs font-semibold text-primary/90 shadow-sm">
                    {card.title.split("\n")[0]}
                  </span>
                </div>
              </div>

              {/* compact body */}
              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <h3 className="text-sm font-semibold text-slate-900 leading-snug whitespace-pre-line">
                  {card.title}
                </h3>

                <ul className="mt-3 text-sm text-slate-700 space-y-2 flex-1">
                  {card.lines.map((line, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span className="leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
