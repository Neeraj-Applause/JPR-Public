import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function PublicationCard({ publication }) {
  const { type, title, highlight, pub_date, authors, abstract, link } =
    publication;

  const [expanded, setExpanded] = useState(false);

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <article className="group relative flex gap-6 py-6">
      {/* Vertical strip */}
      <div className="relative">
        <span className="absolute left-0 top-1 h-full w-[3px] rounded-full bg-primary transition-all group-hover:bg-secondary" />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3">
        {/* Type + date */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-secondary/10 px-3 py-1 font-semibold uppercase tracking-wide text-secondary">
            {type}
          </span>
          {pub_date && (
            <span className="text-slate-500">{formatDate(pub_date)}</span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold leading-snug text-slate-900 group-hover:text-primary transition-colors">
          {title}
        </h2>

        {/* Authors */}
        {authors && <p className="text-sm text-slate-600">{authors}</p>}

        {/* Highlight */}
        {highlight && (
          <p className="text-sm font-medium text-slate-700">{highlight}</p>
        )}

        {/* Abstract */}
        <div className="max-w-3xl text-slate-700 text-sm leading-relaxed">
          <p>
            {expanded
              ? abstract
              : abstract.slice(0, 260) + (abstract.length > 260 ? "…" : "")}
          </p>

          {abstract.length > 260 && (
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

        {/* CTA */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View publication
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}
