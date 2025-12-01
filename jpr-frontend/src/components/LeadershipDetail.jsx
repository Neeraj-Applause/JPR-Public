// src/pages/LeadershipDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import leaders from "../data/leadersData";
import { ArrowLeft, ExternalLink } from "lucide-react";

/**
 * LeadershipDetail — improved UI
 *
 * - Keeps the leader.bio content exactly as provided (we only render it).
 * - Prevents the photo from growing too large when bio is long:
 *   -> On md+ screens the layout is a fixed narrow left column for the image
 *      (uses a sticky card with a max-height) and a flexible right content column.
 *   -> On small screens image appears above content but with a reasonable max height.
 * - Modern, clean styling, subtle shadows, accessible back button and share CTA.
 */

export default function LeadershipDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const leader = leaders.find((l) => l.slug === slug);

  if (!leader) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="max-w-2xl text-center py-20">
          <h1 className="text-2xl font-semibold mb-4">Leader not found</h1>
          <p className="text-slate-600 mb-6">
            We couldn't find that leader. Please pick someone from the leadership list.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </div>
      </div>
    );
  }

  const initials = leader.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="min-h-screen bg-white/95 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 mb-6 text-sm text-slate-700 hover:text-primary"
        >
          <ArrowLeft className="w-4 h-4" /> Back to leadership
        </motion.button>

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100"
        >
          {/* Grid layout:
              - md+ : two columns: fixed image column on left, flexible content on right
              - sm  : single column (image on top)
          */}
          <div className="md:grid md:grid-cols-[300px_1fr]">
            {/* LEFT: image card (sticky on md+) */}
            <div className="border-b md:border-b-0 md:border-r border-slate-100 md:p-6 bg-slate-50">
              <div className="max-w-[360px] mx-auto">
                <div
                  className="rounded-2xl overflow-hidden shadow-sm bg-white"
                  // keep image card visually separate and capped
                >
                  {leader.photo ? (
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full object-cover"
                      // inline style ensures a sensible max height across screen sizes
                      style={{
                        maxHeight: "min(60vh, 520px)",
                        width: "100%",
                        display: "block",
                      }}
                    />
                  ) : (
                    <div
                      className="flex items-center justify-center text-4xl font-bold text-white"
                      style={{
                        height: "min(36vh, 360px)",
                        background:
                          "linear-gradient(135deg, rgba(190,24,28,1) 0%, rgba(220,46,58,1) 100%)",
                      }}
                    >
                      {initials}
                    </div>
                  )}

                  <div className="p-4">
                    <div className="text-sm text-slate-500">Position</div>
                    <div className="mt-1 text-base font-semibold text-slate-900">{leader.role}</div>

                    {/* small metadata / actions */}
                    <div className="mt-4 flex items-center gap-3">
                      <a
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-sm text-slate-700 hover:bg-slate-50"
                        href={`https://www.google.com/search?q=${encodeURIComponent(leader.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Search ${leader.name}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Search
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: content */}
            <div className="p-8 md:py-10 md:px-10 lg:px-12">
              <header>
                <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">{leader.name}</h1>
                <p className="mt-2 text-sm md:text-base text-primary/90 font-medium">
                  {leader.role}
                </p>
              </header>

              <hr className="my-6 border-slate-100" />

              <article className="prose prose-slate max-w-none text-sm md:text-base">
                {/* render bio exactly as provided */}
                {leader.bio
                  .split("\n")
                  .map((para, idx) =>
                    para.trim() ? <p key={idx}>{para}</p> : <br key={idx} />
                  )}
              </article>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
