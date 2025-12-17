import {
  BookOpen,
  FileText,
  TrendingUp,
  ArrowRight,
  Sparkles,
  BarChart3,
  Target,
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
      // Calculate progress percentages for visual representation
      const maxTotal = Math.max(...res.map(item => item.total));
      const areasWithProgress = res.map(item => ({
        ...item,
        progress: (item.total / maxTotal) * 100
      }));
      setFocusAreas(areasWithProgress);
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
          </div>

          {/* Right section - Professional & Compact */}
          <div className="space-y-4">
            {/* Main Analytics Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
              
              <div className="relative bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 p-5 shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-sm">
                      <BarChart3 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">Research Portfolio</h3>
                      <p className="text-xs text-white/70">Publication analytics</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">
                      {focusAreas.reduce((sum, item) => sum + item.total, 0)}
                    </div>
                    <div className="text-xs text-white/70 uppercase tracking-wide">Total</div>
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="space-y-3">
                  {focusAreas.length === 0 ? (
                    <div className="flex items-center justify-center py-4">
                      <div className="flex items-center gap-2 text-white/60">
                        <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="text-xs">Loading data...</span>
                      </div>
                    </div>
                  ) : (
                    focusAreas.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2.5 px-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200 group/item">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary group-hover/item:scale-125 transition-transform" />
                          <span className="text-sm text-white font-medium">{item.type}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-1 bg-white/15 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700 ease-out"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-white font-semibold min-w-[1.5rem] text-right tabular-nums">{item.total}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
