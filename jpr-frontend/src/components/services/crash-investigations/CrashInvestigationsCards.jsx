// src/components/services/CrashInvestigationCards.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import image1 from "../../../assets/images/services/crash-cards/data-collection.jpg";
import image2 from "../../../assets/images/services/crash-cards/crash-reconstruction.jpg";
import image3 from "../../../assets/images/services/crash-cards/injury-analysis.jpg";

export default function CrashInvestigationCards() {
  const cards = [
    {
      title: "Data Collection",
      image: image1,
      href: "/services/data-collection",
      gradient: "from-[#9F1F1F] to-[#D04B4B]",
      description:
        "Structured on-site capture of scene, vehicle and human factors — measurements, photos and interviews to create reliable datasets.",
    },
    {
      title: "Crash Reconstructions",
      image: image2,
      href: "/services/crash-reconstructions",
      gradient: "from-[#2E6B6B] to-[#7FB9B9]",
      description:
        "Physics-informed reconstructions combining vehicle damage, scene evidence and biomechanics to recreate event sequences.",
    },
    {
      title: "Injury Analysis",
      image: image3,
      href: "/services/injury-analysis",
      gradient: "from-[#6B2E4A] to-[#B86A8C]",
      description:
        "Forensic injury assessment linking occupant kinematics and contacts to injury causation for design, medical and legal use.",
    },
  ];

  return (
    <section
      id="crash-investigation-cards"
      className="relative py-6 sm:py-12"
      aria-labelledby="crash-cards-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-primary/8 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        {/* Compact heading */}
        <div className="flex flex-col items-start gap-3 mb-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/6 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
            Crash Investigations
          </p>
          <h2 id="crash-cards-heading" className="text-xl sm:text-2xl font-semibold text-slate-900">
            Our specialised services
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            Quick overview — click to learn more about our scientific crash investigation capabilities.
          </p>
        </div>

        {/* Compact cards grid */}
        <div className="grid gap-6 sm:gap-6 md:grid-cols-3">
          {cards.map((card, idx) => (
            <a
              key={card.title}
              href={card.href}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white/70 shadow-sm transition-transform duration-200 hover:translate-y-[-4px] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label={`${card.title} — learn more`}
            >
              {/* thin accent bar */}
              <span
                aria-hidden
                className={`absolute inset-y-0 left-0 w-1 rounded-l-xl bg-gradient-to-b ${card.gradient}`}
              />

              {/* compact image */}
              <div className="relative h-36 w-full overflow-hidden rounded-t-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* compact body */}
              <div className="px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
                  <span className="text-xs font-medium text-slate-400">{idx === 0 ? "Core" : idx === 1 ? "Analytical" : "Forensic"}</span>
                </div>

                <p className="mt-2 text-sm text-slate-600 leading-snug line-clamp-3">
                  {card.description}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <div className="text-sm font-semibold text-primary inline-flex items-center gap-2">
                    Learn more
                    <span className="transition-transform duration-150 group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>

                  <span className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                    View
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
