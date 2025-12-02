import React from "react";
import JPLogo from "../../assets/logos/logo.png";
import RassiLogo from "../../assets/logos/rassi.png";

/**
 * HeaderTop with compact stat cards and a vertical primary strip on each card.
 */

export default function HeaderTop() {
  const stats = [
    { id: 1, icon: "car", label: "Crashes", value: "9000+" },
    { id: 2, icon: "map", label: "Coverage", value: "Pan-India" },
    { id: 3, icon: "clock", label: "Years", value: "14+" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm h-20">
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center gap-3">
        {/* Left Logo */}
        <div className="flex items-center">
          <img src={JPLogo} alt="JP Research" className="h-20 w-auto object-contain" />
        </div>

        {/* Center compact ticker (hidden on small screens) */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-4xl hidden md:block">
            <div className="relative overflow-hidden">
              <div
                className="inline-flex gap-3 will-change-transform animate-ticker"
                onMouseEnter={(e) => e.currentTarget.classList.add("paused")}
                onMouseLeave={(e) => e.currentTarget.classList.remove("paused")}
                aria-hidden="false"
              >
                {stats.concat(stats).map((s, idx) => (
                 <div
  key={`${s.id}-${idx}`}
  className="relative flex-shrink-0 min-w-[120px] pl-3 pr-2 py-1.5 bg-white/90 border border-gray-100 rounded-xl shadow-sm flex items-center gap-2 transform transition-transform hover:-translate-y-0.5"
  style={{
    backdropFilter: "saturate(120%) blur(4px)",
  }}
  role={idx < stats.length ? "group" : "presentation"}
  aria-hidden={idx >= stats.length}
>

                    {/* vertical primary strip on the left */}
                    <span className="pointer-events-none absolute inset-y-1 left-0 w-1 rounded-full bg-primary" />

                    {/* icon */}
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-[0_4px_10px_rgba(139,15,15,0.06)] text-primary">
                      {s.icon === "car" && (
                        <svg width="16" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 16v1.5M17 16v1.5M7 16h10"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {s.icon === "map" && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M20 6l-6 3-6-3-6 3v9l6-3 6 3 6-3V6z"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {s.icon === "clock" && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                          <path
                            d="M12 7v5l3 1"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>

                    {/* text */}
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-800">{s.value}</span>
                      <span className="text-xs text-gray-400 -mt-0.5">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Logo */}
        <div className="flex items-center">
          <img src={RassiLogo} alt="RASSI" className="h-16 w-auto object-contain" />
        </div>
      </div>

      {/* styles & animations */}
      <style>{`

        /* slow smooth ticker */
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 22s linear infinite;
        }
        .animate-ticker.paused {
          animation-play-state: paused !important;
        }

        /* respect user motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-ticker {
            animation: none !important;
          }
        }

        /* responsive: hide center stats on narrower screens for minimal header */
        @media (max-width: 768px) {
          .animate-ticker { display: none; }
        }
      `}</style>
    </header>
  );
}
