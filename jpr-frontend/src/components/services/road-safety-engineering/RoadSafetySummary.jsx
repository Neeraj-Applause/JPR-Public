// src/components/RoadSafetySummary.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Truck, Map, ArrowRight } from "lucide-react";
import intro from "../../../assets/images/services/road-safety/intro.png";
import intro1 from "../../../assets/images/services/road-safety/intro1.png";
import intro2 from "../../../assets/images/services/road-safety/intro2.png";

export default function RoadSafetySummary({ illustrationSrc = null }) {
  const pillars = [
    { title: "Human", subtitle: "Behaviour & road-user interaction", icon: Users },
    { title: "Vehicle", subtitle: "Vehicle performance & protection", icon: Truck },
    { title: "Infrastructure", subtitle: "Design, geometry & maintenance", icon: Map },
  ];

  // If illustrationSrc is passed, don't cycle — use only that
  const slideshowImages = illustrationSrc
    ? [illustrationSrc]
    : [intro, intro1, intro2];

  const [index, setIndex] = useState(0);

  // Loop through images every 4 seconds
  useEffect(() => {
    if (slideshowImages.length === 1) return; // skip slideshow
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* LEFT SIDE — TEXT (unchanged) */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-0.5 w-12 rounded bg-primary" />
              <span className="text-xs font-medium text-primary/90 uppercase tracking-wider">
                Road Safety Engineering
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              Safety of the road users is a fundamental right.
            </h2>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              Safety of the road users is to be considered fundamental right
              from design stage of road construction. Once built, existing roads
              require periodic assessments and upgrades to upkeep the safety
              record. JPRI’s approaches the safety assessments backed by a
              profound understanding of the influence of underlying three
              factors of road ecosystem: <strong>Human</strong>,{" "}
              <strong>Vehicle</strong> and <strong>Infrastructure</strong>. The
              team includes qualified Transport Engineers and Planners advised
              by international experts.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:shadow transition"
              >
                Explore services
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="text-sm text-primary/90 font-medium hover:underline"
              >
                Contact our experts
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE SLIDESHOW */}
          <div className="order-1 md:order-2 flex flex-col gap-5 items-stretch">
            <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-6 flex flex-col gap-6">

              <div className="flex justify-center relative h-72">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={slideshowImages[index]}
                    src={slideshowImages[index]}
                    alt="Road safety illustration"
                    className="h-72 object-contain absolute inset-0 mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </AnimatePresence>
              </div>

            </div>

            {/* MICRO NOTE */}
            <div className="text-xs text-slate-500">

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
