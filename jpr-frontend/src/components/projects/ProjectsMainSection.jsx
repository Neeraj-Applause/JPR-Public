import { useEffect, useState } from "react";
import projectService from "../../services/projectService";
import ProjectCard from "./ProjectCard";

const CATEGORIES = [
  "All",
  "Crash Investigation",
  "Data Analytics",
  "Road Safety Engineering",
  "Training",
];

export default function ProjectsMainSection() {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, [activeCategory]);

  async function loadProjects() {
    setLoading(true);
    try {
      const res =
        activeCategory === "All"
          ? await projectService.list({ published: 1 })
          : await projectService.getByCategory(activeCategory);

      setItems(res.data || res);
    } catch (err) {
      console.error("Failed to load projects", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-[1fr_240px] gap-10">

      {/* Content */}
      <div className="space-y-8">
        {loading ? (
          <div className="py-20 text-center text-slate-500">
            Loading projects…
          </div>
        ) : items.length === 0 ? (
          <div className="py-20 text-center text-slate-500">
            No projects found.
          </div>
        ) : (
          items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>

      {/* Sticky filter */}
      <aside className="hidden md:block">
        <div className="sticky top-28 space-y-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-full text-left rounded-xl px-4 py-2 text-sm font-medium transition
                ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>

    </section>
  );
}
