// src/components/RoadSafetySummary.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Truck, Map, ArrowRight } from "lucide-react";
import intro from "../../../assets/images/services/road-safety/intro.png";
import intro1 from "../../../assets/images/services/road-safety/intro1.jpg";
import intro2 from "../../../assets/images/services/road-safety/intro2.png";
import intro3 from "../../../assets/images/services/road-safety/intro3.png";

export default function RoadSafetySummary({ illustrationSrc = null }) {
  const pillars = [
    {
      title: "Human",
      subtitle: "Behaviour & road-user interaction",
      icon: Users,
    },
    {
      title: "Vehicle",
      subtitle: "Vehicle performance & protection",
      icon: Truck,
    },
    {
      title: "Infrastructure",
      subtitle: "Design, geometry & maintenance",
      icon: Map,
    },
  ];

  /* 🔹 Slides with captions */
  const slides = [
    {
      src: intro,
      caption: "Intersection redesign for increased safety",
    },
    {
      src: intro1,
      caption:
        "Collaboration with government and private partners for safer roads",
    },
    {
      src: intro2,
      caption:
        "Identifying road safety issues and recommending safe interventions",
    },
    {
      src: intro3,
      caption: "On-site data collection including road mapping and speed data",
    },
  ];

  // If illustrationSrc is passed, don't cycle — use only that
  const slideshowImages = illustrationSrc
    ? [{ src: illustrationSrc, caption: "" }]
    : slides;

  const [index, setIndex] = useState(0);

  // Loop through images every 4 seconds
  useEffect(() => {
    if (slideshowImages.length === 1) return;
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
              Promoting Safer Road Infrastructure
            </h2>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed text-justify">
              Once built, existing road infrastructure requires periodic
              assessments and upgrades to upkeep the safety record. JPRI’s
              approaches the safety assessments backed by a profound
              understanding of road crashes and the influence of underlying
              three factors of road ecosystem: Human, Vehicle, and
              Infrastructure. JPRI’s Road Safety Engineering team includes
              qualified Transport Engineers and Auditors advised by
              international experts.
            </p>
          </div>

          {/* RIGHT SIDE — IMAGE SLIDESHOW (UPDATED) */}
          <div className="order-1 md:order-2 flex flex-col gap-5 items-stretch mt-10">
            <div className="bg-slate-50">
              <div className="relative h-80 md:h-96">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slideshowImages[index].src}
                    className="absolute inset-0 flex flex-col items-center"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {/* Image */}
                    <img
                      src={slideshowImages[index].src}
                      alt={slideshowImages[index].caption}
                      className="
                                 w-full
                                 h-64 md:h-72
                                 object-fit
                                 rounded-2xl
                                 shadow-xl
                                 transition-transform duration-300
                                 hover:-translate-y-1
                                "
                    />

                    {/* Caption */}
                    <p className="mt-4 px-6 text-sm md:text-base text-slate-700 text-center leading-snug">
                      {slideshowImages[index].caption}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress indicators */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2">
                  {slideshowImages.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-6 rounded-full transition-all ${
                        i === index ? "bg-primary" : "bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* MICRO NOTE */}
            <div className="text-xs text-slate-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
