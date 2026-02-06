import { useEffect, useMemo, useRef, useState } from "react";
import { getProjects, getProjectsByCategory, getProjectCategoryCounts } from "../../services/dataService";
import ProjectCard from "./ProjectCard";

const CATEGORIES = [
  "All",
  "Road Safety Engineering",
  "Crash Investigation",
  "Data Analytics",
  "Training",
];

export default function ProjectsMainSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [categoryCounts, setCategoryCounts] = useState({});

  const scrollRef = useRef(null);

  useEffect(() => {
    loadCounts();
  }, []);

  async function loadCounts() {
    try {
      const data = await getProjectCategoryCounts();
      setCategoryCounts(data);
    } catch (err) {
      console.error("Error loading category counts", err);
    }
  }

  useEffect(() => {
    loadProjects();
  }, [activeCategory]);

  async function loadProjects() {
    setLoading(true);
    try {
      const res = activeCategory === "All"
        ? await getProjects({ published: 1 })
        : await getProjectsByCategory(activeCategory);

      setItems(res.data || res);
    } catch (err) {
      console.error("Failed to load projects", err);
    } finally {
      setLoading(false);
    }
  }

  /* Search filter */
  const filteredItems = useMemo(() => {
    return items.filter((p) =>
      `${p.title || ""} ${p.summary || ""}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [items, search]);

  /* Scroll shadow */
  function handleScroll(e) {
    setScrolled(e.target.scrollTop > 8);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-8">

        {/* LEFT — Scrollable cards */}
        <div className="col-span-12 lg:col-span-9">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="h-[calc(100vh-180px)] overflow-y-auto pr-4 space-y-10 scroll-smooth sleek-scrollbar"
          >
            {loading ? (
              <div className="text-center text-slate-500 py-16">
                Loading projects…
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="text-center text-slate-500 py-16">
                No projects found.
              </div>
            ) : (
              filteredItems.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <ProjectCard project={project} index={index} />
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT — Sticky filters */}
        <aside className="col-span-12 lg:col-span-3">
          <div
            className={`sticky top-24 transition-shadow ${
              scrolled ? "shadow-md" : ""
            }`}
          >
            <div className="bg-white rounded-xl p-4">

              {/* Search */}
              <input
                type="text"
                placeholder="Search projects…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full mb-4 rounded-lg border px-3 py-2 text-sm
                           focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Categories */}
              <div className="flex flex-col gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center justify-between rounded-lg px-4 py-2
                      text-sm font-medium transition
                      ${
                        activeCategory === cat
                          ? "bg-primary text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full
                        ${
                          activeCategory === cat
                            ? "bg-white/20 text-white"
                            : "bg-white text-slate-600"
                        }`}
                    >
                      {categoryCounts?.[cat] ?? 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
}
