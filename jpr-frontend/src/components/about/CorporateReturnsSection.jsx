// src/components/about/CorporateReturnsSection.jsx
import { useState } from "react";
import { FileText, ExternalLink, Download } from "lucide-react";

import pdf2017_18 from "../../assets/pdfs/returns/2017-18-Form-MGT-7.pdf";
import pdf2018_19 from "../../assets/pdfs/returns/2018-19-Form_MGT-7.pdf";
import pdf2019_20 from "../../assets/pdfs/returns/2019-20-Form-MGT-7.pdf";
import pdf2020_21 from "../../assets/pdfs/returns/2020-21-Form-MGT-7.pdf";
import pdf2021_22 from "../../assets/pdfs/returns/2021-22-Form-MGT-7.pdf";
import pdf2022_23 from "../../assets/pdfs/returns/2022-23-Form-MGT-7.pdf";
import pdf2023_24 from "../../assets/pdfs/returns/2023-24-Form-MGT-7.pdf";

const corporateReturns = [
  { id: "2017-18", label: "2017–18", pdfUrl: pdf2017_18 },
  { id: "2018-19", label: "2018–19", pdfUrl: pdf2018_19 },
  { id: "2019-20", label: "2019–20", pdfUrl: pdf2019_20 },
  { id: "2020-21", label: "2020–21", pdfUrl: pdf2020_21 },
  { id: "2021-22", label: "2021–22", pdfUrl: pdf2021_22 },
  { id: "2022-23", label: "2022–23", pdfUrl: pdf2022_23 },
  { id: "2023-24", label: "2023–24", pdfUrl: pdf2023_24 },
];

export default function CorporateReturnsSection() {
  const [activeId, setActiveId] = useState(corporateReturns[0]?.id);
  const active = corporateReturns.find((r) => r.id === activeId);

  return (
    <section
      className="relative py-12 sm:py-16"
      id="corporate-returns"
      aria-labelledby="corporate-returns-heading"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0 space-y-6">
        {/* Header */}
        <div className="space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur">
            <FileText className="h-3.5 w-3.5" />
            Corporate Returns
          </div>

          <h2
            id="corporate-returns-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
          >
            Corporate Returns &amp; Compliance
          </h2>
        </div>

        {/* Year pills */}
        <div className="relative">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Select financial year
          </p>

          <div className="mt-3 overflow-x-auto pb-2">
            <div className="flex gap-2 sm:gap-3 min-w-max">
              {corporateReturns.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`relative inline-flex items-center rounded-full border px-4 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? "border-primary bg-primary text-white shadow-md"
                        : "border-slate-200 bg-white text-slate-700 hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-primary/70" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active year card */}
        {active && (
          <div className="rounded-3xl border border-slate-200/70 bg-white/90 backdrop-blur-md p-6 sm:p-8 shadow-md">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-semibold">
                  FY {active.label}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Annual Return – Form MGT-7
                </h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-xl">
                  View or download the filed annual return (Form MGT-7) for the
                  selected financial year.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={active.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-primary/90 transition"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open PDF
                </a>
                <a
                  href={active.pdfUrl}
                  download
                  className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-primary/50 hover:text-primary transition"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </a>
              </div>
            </div>

            {/* Sleek embedded preview on large screens */}
            <div className="mt-6 hidden lg:block">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-950/95 text-slate-100 shadow-lg overflow-hidden">
                {/* Fake toolbar/header */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800/80 bg-slate-900/90">
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <span className="ml-3 text-slate-200">
                      {`Annual Return – FY ${active.label}`}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Preview (read-only)
                  </span>
                </div>

                {/* PDF iframe */}
                <div className="relative h-[420px] bg-slate-900">
                  <iframe
                    src={`${active.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={`Corporate return ${active.label}`}
                    className="h-full w-full"
                  />

                  {/* gradient fade at bottom for a polished look */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
