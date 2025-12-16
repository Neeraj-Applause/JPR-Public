import {
  BookOpen,
  FileText,
  CalendarDays,
  TrendingUp,
  ArrowRight,
  Filter,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import publicationService from "../../services/publicationService";

export default function PublicationsHero() {
  const [focusAreas, setFocusAreas] = useState([]);

  useEffect(() => {
    loadFocusAreas();
  }, []);

  async function loadFocusAreas() {
    try {
      const res = await publicationService.getFocusAreas();
      setFocusAreas(res);
    } catch (err) {
      console.error("Failed to load focus areas", err);
    }
  }

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-primary to-gray-950 text-white">
      {/* Simplified background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                             linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content - Compact */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2">
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-1.5">
                <BookOpen className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Sparkles className="inline h-2.5 w-2.5 mr-1.5" />
                Knowledge Hub
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Research & Innovation
                </span>
                <br />
                <span className="text-white/90 text-2xl md:text-3xl lg:text-4xl">
                  Shaping Road Safety's Future
                </span>
              </h1>

              <p className="text-base text-white/80 leading-relaxed max-w-xl">
                Discover cutting-edge research, technical papers, and analytical
                studies that drive the evolution of road safety practices.
              </p>
            </div>

            {/* Compact stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-1.5 mb-1">
                  <TrendingUp className="h-3.5 w-3.5 text-primary" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider">
                    Publications
                  </span>
                </div>
                <p className="text-xl font-bold">250+</p>
                <p className="text-[10px] text-white/60">Peer-reviewed</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-1.5 mb-1">
                  <CalendarDays className="h-3.5 w-3.5 text-secondary" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider">
                    Years
                  </span>
                </div>
                <p className="text-xl font-bold">15+</p>
                <p className="text-[10px] text-white/60">Of Research</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-1.5 mb-1">
                  <Filter className="h-3.5 w-3.5 text-accent" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider">
                    Topics
                  </span>
                </div>
                <p className="text-xl font-bold">8+</p>
                <p className="text-[10px] text-white/60">Focus Areas</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button className="group bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-sm">
                Explore Publications
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-sm text-white/70">
                <span className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 text-xs">
                  <FileText className="h-3.5 w-3.5" />
                  <span>Filter by Type, Year & Topic</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right card - Compact */}
          <div className="relative">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300" />

              {/* Main card */}
              <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-xl border border-white/10 p-6 shadow-xl">
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-secondary rounded-full p-1.5 shadow-lg">
                  <FileText className="h-4 w-4" />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold mb-1">
                      Research Focus Areas
                    </h3>
                    <p className="text-white/70 text-sm">
                      Specialized areas shaping road safety innovation
                    </p>
                  </div>
                  <div className="space-y-3">
                    {focusAreas.length === 0 ? (
                      <p className="text-xs text-white/60">
                        Loading research focus areas…
                      </p>
                    ) : (
                      focusAreas.map((item, index) => (
                        <div key={index} className="space-y-1.5">
                          <div className="flex justify-between text-xs">
                            <span>{item.title}</span>
                            <span className="text-primary font-medium">
                              {item.progress}%
                            </span>
                          </div>

                          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <p className="text-xs text-white/60">
                      Insights from latest research
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
