import { useEffect, useMemo, useRef, useState } from "react";
import publicationService from "../../services/publicationService";
import PublicationCard from "./PublicationCard";

const TYPES = ["All", "Technical Paper", "Research Report", "Presentation"];

export default function PublicationsMainSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState("All");
  const [search, setSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const [typeCounts, setTypeCounts] = useState({});

  useEffect(() => {
    loadCounts();
  }, []);

  async function loadCounts() {
    try {
      const data = await publicationService.getTypeCounts();
      setTypeCounts(data);
    } catch (err) {
      console.error("Error loading type counts", err);
    }
  }

  const scrollRef = useRef(null);

  useEffect(() => {
    loadPublications();
  }, [activeType]);

  async function loadPublications() {
    setLoading(true);
    try {
      const res = await publicationService.list({
        published: 1,
        sort: "pub_date",
        order: "desc",
        type: activeType === "All" ? undefined : activeType,
      });
      setItems(res.data);
    } catch (err) {
      console.error("Error loading publications", err);
    } finally {
      setLoading(false);
    }
  }

  /* Search filter */
  const filteredItems = useMemo(() => {
    return items.filter((p) =>
      `${p.title} ${p.summary || ""}`
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
        {/* LEFT — Cards */}
        <div className="col-span-12 lg:col-span-9">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
className="h-[calc(100vh-180px)] overflow-y-auto pr-4 space-y-10 scroll-smooth sleek-scrollbar"
          >
            {loading ? (
              <div className="text-center text-slate-500 py-16">
                Loading publications…
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="text-center text-slate-500 py-16">
                No publications found.
              </div>
            ) : (
              filteredItems.map((pub, index) => (
                <div
                  key={pub.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <PublicationCard publication={pub} index={index} />
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT — Filters */}
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
                placeholder="Search publications…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full mb-4 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Types */}
              <div className="flex flex-col gap-2">
                {TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium transition
    ${
      activeType === type
        ? "bg-primary text-white"
        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
    }`}
                  >
                    <span>{type}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full
      ${
        activeType === type
          ? "bg-white/20 text-white"
          : "bg-white text-slate-600"
      }`}
                    >
                      {typeCounts?.[type] ?? 0}
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
