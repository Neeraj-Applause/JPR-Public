// src/components/services/data-collection/DataCollectionCards.jsx
import React from "react";
import { motion } from "framer-motion";
import sceneImg from "../../../assets/images/services/data-collection/data-collection-scene.png";
import vehicleImg from "../../../assets/images/services/data-collection/data-collection-vehicle.png";
import interviewImg from "../../../assets/images/services/data-collection/data-collection-interview.png";

/**
 * DataCollectionCards (Modern · Sleek · Simple)
 * - Content unchanged (verbatim)
 * - Cleaner, compact card layout with subtle micro-interactions
 * - Responsive: stacked on small screens, side-by-side cards on larger screens
 * - Image + body layout on desktop for easier scanning
 */

const CARDS = [
  {
    id: "scene",
    title: "Crash Scene inspection",
    image: sceneImg,
    lines: [
      "Inspection involves identifying any traces left on the road as a result of the crash, understanding the available road geometry, road furniture, markings and signage, and finally, measuring and mapping the complete crash scene to create a to-scale scene diagram."
    ]
  },
  {
    id: "vehicle",
    title: "Vehicle inspection",
    image: vehicleImg,
    lines: [
      "Inspection covers mapping and measuring the external damages on the vehicle, inspection of interiors to document safety system availability / usage, measure the integrity of the passenger compartment and occupant contacts resulting in injuries."
    ]
  },
  {
    id: "interview",
    title: "Victim/Witness interviews",
    image: interviewImg,
    lines: [
      "Interviews focus on questions targeted at extracting the pre-crash situations, sequence of events and any relevant information related to the crash. Witness/victim statements are subjective and data from such interviews are always validated against the evidences from vehicle and crash scene inspection."
    ]
  }
];

export default function DataCollectionCards() {
  return (
    <section id="data-collection-cards" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <h3 className="text-lg md:text-2xl font-semibold text-slate-900">Data collection components</h3>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl">
            Practical on-site activities that together produce robust, evidence-led datasets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((c, idx) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ translateY: -6, boxShadow: "0 18px 40px rgba(16,24,40,0.08)" }}
              transition={{ duration: 0.36, delay: idx * 0.04 }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-col h-full"
            >
              {/* Image strip — full width on mobile, fixed height left visual on desktop */}
              <div className="relative">
                <div className="h-48 md:h-40 w-full overflow-hidden">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-white flex items-center justify-center text-slate-400">
                      {c.title}
                    </div>
                  )}
                </div>

                {/* title badge */}
                <div className="absolute left-4 -bottom-5 md:left-5 md:bottom-4">
                  <div className="bg-white rounded-full px-3 py-1 text-xs font-semibold text-primary shadow-sm border border-primary/10">
                    {c.title}
                  </div>
                </div>
              </div>

              <div className="px-5 pt-8 pb-6 flex-1 flex flex-col">
                <p className="text-sm text-slate-700 leading-relaxed break-words">
                  {c.lines[0]}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
