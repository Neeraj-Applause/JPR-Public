import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const {
    period,
    project_title,
    client,
    location,
    summary,
    category,
  } = project;

  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group relative flex gap-6 py-6">

      {/* Vertical accent */}
      <div className="relative">
        <span className="absolute left-0 top-1 h-full w-[3px] rounded-full bg-primary/80 transition-all group-hover:bg-secondary" />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="rounded-full bg-secondary/10 px-3 py-1 font-semibold uppercase tracking-wide text-secondary">
            {category}
          </span>
          <span>{period}</span>
          {location && <span>• {location}</span>}
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold leading-snug text-slate-900 group-hover:text-primary transition-colors">
          {project_title}
        </h2>

        {/* Client */}
        {client && (
          <p className="text-sm text-slate-600">
            <span className="font-medium">Client:</span> {client}
          </p>
        )}

        {/* Summary */}
        <div className="max-w-3xl text-slate-700 text-sm leading-relaxed">
          <p>
            {expanded
              ? summary
              : summary.slice(0, 300) + (summary.length > 300 ? "…" : "")}
          </p>

          {summary.length > 300 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
            >
              {expanded ? (
                <>
                  Show less <ChevronUp className="h-3.5 w-3.5" />
                </>
              ) : (
                <>
                  Read more <ChevronDown className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
