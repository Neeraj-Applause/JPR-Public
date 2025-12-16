import { useEffect, useState } from "react";
import publicationService from "../../services/publicationService";
import PublicationCard from "./PublicationCard";

const TYPES = [
  "All",
  "Technical Paper",
  "Research Report",
  "Presentation",
];

export default function PublicationsMainSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState("All");

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

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-10">

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all
              ${
                activeType === type
                  ? "bg-primary text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading ? (
        <div className="text-center text-slate-500 py-16">
          Loading publications…
        </div>
      ) : items.length === 0 ? (
        <div className="text-center text-slate-500 py-16">
          No publications found.
        </div>
      ) : (
        <div className="grid gap-6">
          {items.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      )}
    </section>
  );
}
