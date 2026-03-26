// src/components/TrainingCards.jsx
import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../assets/images/services/training/crash-investigation.jpg";
import image2 from "../../../assets/images/services/training/crash-reconstruction.jpg";
import image3 from "../../../assets/images/services/training/injury-analysis.jpg";
import image4 from "../../../assets/images/services/training/capacity-building.jpg";

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
    title: "Crash Investigation",
    image: image1,
    lines: ["Scene inspection", "Vehicle inspection", "Accident photography"],
  },
  {
  id: "crash-reconstruction",
  title: "Crash reconstruction",
  image: image2,
  lines: [
    "Speed calculations using scientific simulations",
    "Determine the crash sequence of events",
    "3D accident reconstructions using PC-Crash"
  ],
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
  // {
  //   id: "crash-tests",
  //   title: "Crash tests",
  //   image: image5,
  //   lines: ["Live crash tests", "Accident data collection", "Crash reconstruction"],
  // },
];

export default function TrainingCards() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 flex justify-center">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">Training modules</h2>
            <p className="mt-1 text-sm md:text-base text-slate-600 max-w-xl">
              Practical courses and hands-on modules designed for professionals working in crash investigation,
              reconstruction and road safety.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 justify-center gap-6 md:grid-cols-2">
          {CARDS.map((card, idx) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ translateY: -8, boxShadow: "0 18px 40px rgba(16,24,40,0.08)" }}
              transition={{ duration: 0.36, delay: idx * 0.04 }}
              className="group mx-auto flex w-full max-w-md flex-col overflow-hidden rounded-xl bg-white"
            >
              {/* image with subtle overlay and zoom on hover */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title.replace("\n", " ")}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              {/* compact body */}
              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                  {card.title}
                </h3>

                <ul className="mt-3 text-sm text-slate-700 space-y-2 flex-1">
                  {card.lines.map((line, i) => (
                    <li key={i} className="flex items-center gap-3 whitespace-nowrap">
                      <span className="inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" aria-hidden />
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
