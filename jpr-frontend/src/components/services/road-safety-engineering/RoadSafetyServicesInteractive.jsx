import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Lucide from "lucide-react";
import before from "../../../assets/images/services/road-safety/before.png";
import after from "../../../assets/images/services/road-safety/after.png";
import blackspot from "../../../assets/images/services/road-safety/blackspot.png";

// Vertical stacked pill panel + content card
const ITEMS = [
  {
    id: "rsa",
    title: "Road Safety Audits",
    icon: "Target",
    // exact content you provided (kept unchanged)
    content: `Road Safety Audit is a formal procedure for identifying potential safety related conflicts for a new road development or an existing road, reported by an independent, qualified team. The RSA projects help identify the safety issues and thereby providing cost-effective countermeasures to solve the identified safety problem and further implemented by the designer or the client. Following are the objectives of Road Safety Audit:

• Mitigating the likelihood of crashes;
• Ensuring that, if a crash occurs, the likelihood of the injury is minimized;
• Ensuring that safety related design criteria have been met;
• Enhance consideration for the safety of all categories of road users`,
    bullets: [
      "Mitigating the likelihood of crashes",
      "Ensuring that, if a crash occurs, the likelihood of the injury is minimized",
      "Ensuring that safety-related design criteria have been met",
      "Enhancing consideration for the safety of all categories of road users",
    ],
  },
  { id: "blackspot", title: "Blackspot identification", icon: "MapPin", content: `From defining a blackspot based on crash data and developing cost-effective countermeasures conforming to local standards, our blackspot identification strategy leverages accident research and experienced transport engineers to prioritize and plan targeted interventions.`, bullets: ["Data-driven location identification", "Low-cost proven countermeasures", "Priority ranking and implementation roadmaps"] },
  { id: "junction", title: "Junction assessment", icon: "Layout", content: `We offer a comprehensive study of junctions for improving the layout, installation of road furniture and signal faces for a smoother and safer traffic flow. The findings and recommendations take into consideration the local conditions of the intersection with respect to traffic and pedestrian volume, social activities, informal markets and other parameters.`, bullets: ["Geometry and sightline checks", "Conflict point reduction", "Pedestrian & cyclist facility improvements"] },
  { id: "parking", title: "Parking layout", icon: "GitBranch", content: `From the design of layout to capacity checks, blind-spot counter measures and treating potential conflict zones, our services can help make your parking lot safer for all users and informative.`, bullets: ["Circulation & entry/exit optimization", "Visibility and signage improvements", "Safe pedestrian connections"] },
  { id: "swept", title: "Swept path analysis", icon: "Truck", content: `Be it confined parking spaces or open highways, Manoeuvrability of vehicles is an important factor in the safety of traffic movement. We offer analysis of swept path of any vehicle type and provide a 3D rendering for easy understanding.`, bullets: ["Large-vehicle path checks", "Design refinements for turning radii", "Clearances for kerbs and obstructions"] },
  { id: "safety", title: "Traffic safety assessments", icon: "Activity", content: `Planning of new infrastructure often attracts more traffic. Knowing the impact of this increased traffic helps authorities and other involved stake holders to plan accordingly for the increased flow, to reduce travel times and enhance safety of users despite the traffic. Traffic safety assessments focusses on the safety conflicts at such new developments and aims to reduce or eliminate the risk right from design stage. This is particularly important for establishments involving high motor traffic such as public parking spaces, hotel premises, shopping complexes, apartments and mixed use developments. We are experienced in identifying such conflicts for quick and cost effective resolutions. Our expertise includes all infrastructure facilities such as mixed use developments, paper processing plants, hotels and any such built-up developments.`, bullets: ["Crash pattern and severity analysis", "Field observational studies", "Prioritized engineering remedies"] },
  { id: "signals", title: "Traffic signal plans", icon: "SignalTower", content: `Traffic signal plans play a significant role in safety and transport planning. With experience in working on dedicated software we offer signal optimisation, traffic signal coordination and in developing new signal plans for decreased waiting and queue build-up conforming to the local standards.`, bullets: ["Warrant & phasing review", "Detection and coordination checks", "Pedestrian signal and crossing safety"] },
];

// If you have distinct before/after files, replace these two paths with the correct ones.
// Using the developer-provided image path for now.
const RSA_IMAGES = [
  before, // BEFORE
  after, // AFTER (replace if you have a different file)
];

export default function RoadSafetyServicesInteractive() {
  const [activeIdx, setActiveIdx] = useState(0);
  const navRef = useRef(null);

  // keyboard navigation: Up/Down to move, Enter/Space to activate
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const tabs = Array.from(el.querySelectorAll("[role='tab']"));
    if (!tabs.length) return;
    let focused = 0;

    const onKey = (e) => {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) e.preventDefault();
      if (e.key === "ArrowDown") {
        focused = Math.min(tabs.length - 1, focused + 1);
        tabs[focused].focus();
        tabs[focused].scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
      } else if (e.key === "ArrowUp") {
        focused = Math.max(0, focused - 1);
        tabs[focused].focus();
        tabs[focused].scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
      } else if (e.key === "Enter" || e.key === " ") {
        const idx = tabs.indexOf(document.activeElement);
        if (idx >= 0) setActiveIdx(idx);
      }
    };

    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, []);

  const active = ITEMS[activeIdx];

  function Icon({ name, className = "w-4 h-4" }) {
    const C = Lucide[name];
    if (C) return <C className={className} />;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="#A01E21" strokeWidth="1.2" />
      </svg>
    );
  }

  return (
    <section className="py-6 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          {/* Vertical nav panel for md+; horizontal scroll on small screens */}
          <nav
            ref={navRef}
            aria-label="Road safety services"
            role="tablist"
            className="col-span-1 md:col-span-1 bg-white rounded-2xl p-2 md:p-3 border border-gray-100"
          >
            <div className="hidden md:flex flex-col gap-2">
              {ITEMS.map((it, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={it.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIdx(i)}
                    className={`relative flex items-center gap-3 w-full text-left px-3 py-2 rounded-md transition ${
                      isActive ? "bg-primary/5 ring-1 ring-primary/20 shadow-sm" : "hover:bg-slate-50"
                    }`}
                  >
                    {/* Accent bar */}
                    <span
                      aria-hidden
                      className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full transition-all ${
                        isActive ? "bg-primary" : "bg-transparent"
                      }`}
                    />
                    <span className="flex items-center justify-center bg-white rounded-full p-1 border border-gray-100">
                      <Icon name={it.icon} className="w-4 h-4 text-primary" />
                    </span>
                    <span className={`text-sm font-medium ${isActive ? "text-primary" : "text-slate-800"}`}>
                      {it.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile: horizontal small pills */}
            <div className="md:hidden overflow-x-auto no-scrollbar py-1">
              <div className="inline-flex gap-2">
                {ITEMS.map((it, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <button
                      key={it.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveIdx(i)}
                      className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs transition ${
                        isActive ? "bg-primary/10 ring-1 ring-primary/20" : "bg-white"
                      }`}
                    >
                      <Icon name={it.icon} className="w-3.5 h-3.5 text-primary" />
                      <span className="truncate">{it.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Content area */}
          <div className="col-span-1 md:col-span-3">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="relative bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-lg flex items-center justify-center bg-gradient-to-br from-white to-slate-50 border border-gray-100">
                        <Icon name={active.icon} className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-slate-900">{active.title}</h3>
                        <p className="text-sm text-slate-500">{active.bullets?.slice(0, 2).join(" • ")}</p>
                      </div>
                    </div>

                    {/* Keep the content exactly as provided for RSA (or the default content otherwise) */}
                    <div className="mt-4 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {active.content}
                    </div>

                    {/* If RSA is active, show before/after images */}
                    {active.id === "rsa" && (
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                        {/* BEFORE */}
                        <figure className="flex flex-col items-center">
                          <figcaption className="mb-2 text-xs font-semibold text-slate-700">BEFORE (2016)</figcaption>
                          <img
                            src={RSA_IMAGES[0]}
                            alt="Before - Road Safety Audit example (2016)"
                            className="w-full rounded-md border border-gray-100 object-cover"
                          />
                        </figure>

                        {/* AFTER */}
                        <figure className="flex flex-col items-center">
                          <figcaption className="mb-2 text-xs font-semibold text-slate-700">AFTER (2017)</figcaption>
                          <img
                            src={RSA_IMAGES[1]}
                            alt="After - Road Safety Audit example (2017)"
                            className="w-full rounded-md border border-gray-100 object-cover"
                          />
                        </figure>
                      </div>
                    )}
                     {/* NEW: Blackspot image */}
                    {active.id === "blackspot" && (
                      <div className="mt-6">
                        <figure className="flex flex-col items-start gap-3">
                          <figcaption className="text-sm font-semibold text-slate-800 mb-2">
                            Blackspot identification (map)
                          </figcaption>
                          <img
                            src={blackspot}
                            alt="Blackspot identification map"
                            className="w-full rounded-md border border-gray-100 object-contain"
                          />
                        </figure>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function iToColor(i) {
  const palette = ["#A01E21", "#E86E6E", "#D14B2A", "#1F6F7A", "#2A9D8F", "#3A6EA5", "#8A4B4B"];
  return palette[i % palette.length];
}
