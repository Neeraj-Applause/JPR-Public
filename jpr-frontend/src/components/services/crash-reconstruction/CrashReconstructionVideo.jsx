// src/components/services/crash-reconstruction/CrashReconstructionVideo.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

/**
 * CrashReconstructionVideo
 *
 * - Shows a main inline YouTube player and a selectable list of 4 videos (thumbnails).
 * - Modern, sleek, compact UI using Tailwind utilities and framer-motion micro-interactions.
 * - Keyboard accessible: arrow keys move selection; Enter selects.
 *
 * Usage:
 *  <CrashReconstructionVideo />
 *
 * Replace the sample `VIDEOS` ids/titles with your actual YouTube video IDs and titles.
 */

const VIDEOS = [
  { id: "0ZBlJ3ickdc", title: "Crash Reconstruction — Overview" },
  { id: "WvFCHN2xUIs", title: "2D/3D Simulation Walkthrough" },
  { id: "QNDNq92BmUU", title: "Vehicle Dynamics & Calculations" },
  { id: "clxo-gapJzY&t", title: "Evidence Gathering & Scene Mapping" },
];

export default function CrashReconstructionVideo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const thumbnailsRef = useRef(null);

  // keyboard navigation for the thumbnails list
  useEffect(() => {
    const el = thumbnailsRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll("[role='button']"));
    let focused = 0;

    const onKey = (e) => {
      if (["ArrowRight", "ArrowLeft", "Enter", " "].includes(e.key)) e.preventDefault();
      if (e.key === "ArrowRight") {
        focused = Math.min(items.length - 1, focused + 1);
        items[focused].focus();
      } else if (e.key === "ArrowLeft") {
        focused = Math.max(0, focused - 1);
        items[focused].focus();
      } else if (e.key === "Enter" || e.key === " ") {
        const idx = items.indexOf(document.activeElement);
        if (idx >= 0) setActiveIdx(idx);
      }
    };

    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, []);

  const active = VIDEOS[activeIdx];

  // youtube embed url with autoplay when switching (autoplay=1). For mobile autoplay may be blocked.
  const embedUrl = (id) =>
    `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Crash Reconstruction Videos</h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl">
            Learn our approach to reconstruction — select a video to play inline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Main player */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-2 bg-black/95 rounded-xl overflow-hidden shadow-lg border border-gray-100"
          >
            <div className="relative" style={{ paddingTop: "56.25%" /* 16:9 */ }}>
              <iframe
                title={active.title}
                src={embedUrl(active.id)}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-4 flex items-center justify-between border-t border-gray-800/30">
              <div>
                <div className="text-sm font-semibold text-white">{active.title}</div>
                <div className="text-xs text-gray-300">YouTube • Inline playback</div>
              </div>

              <div className="text-xs text-gray-300">Select a video from the thumbnails</div>
            </div>
          </motion.div>

          {/* Thumbnails / selector */}
          <motion.nav
            ref={thumbnailsRef}
            className="space-y-3"
            aria-label="Crash reconstruction videos"
          >
            {VIDEOS.map((v, i) => {
              const thumb = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
              const isActive = i === activeIdx;
              return (
                <motion.button
                  key={v.id}
                  role="button"
                  onClick={() => setActiveIdx(i)}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-shadow focus:outline-none ${
                    isActive
                      ? "ring-2 ring-primary/50 bg-primary/5 shadow-sm"
                      : "hover:shadow-sm bg-white border border-gray-100"
                  }`}
                >
                  <div className="relative flex-shrink-0 h-20 w-36 rounded-md overflow-hidden bg-gray-100">
                    <img src={thumb} alt={v.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-9 w-9 rounded-full bg-black/60 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    {isActive && (
                      <div className="absolute left-1 top-1 px-2 py-0.5 text-xs rounded bg-primary text-white font-semibold">
                        Playing
                      </div>
                    )}
                  </div>

                  <div className="text-left">
                    <div className={`text-sm font-semibold ${isActive ? "text-primary" : "text-slate-900"}`}>
                      {v.title}
                    </div>
                    <div className="text-xs text-slate-500">Click to play inline</div>
                  </div>
                </motion.button>
              );
            })}
          </motion.nav>
        </div>
      </div>
    </section>
  );
}
