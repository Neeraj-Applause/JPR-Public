// src/components/dashboard/publications/PublicationForm.jsx
import { Plus, Loader2, Link as LinkIcon, FileText } from "lucide-react";

const PublicationForm = ({
  form,
  editingId,
  saving,
  onChange,
  onSubmit,
  onReset,
}) => {
  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-5 lg:p-6 space-y-3">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
            {editingId ? "Edit publication" : "Create publication"}
            {editingId && (
              <span className="text-[10px] rounded-full bg-amber-50 text-amber-700 px-2 py-0.5 border border-amber-100">
                Editing existing item
              </span>
            )}
          </h3>
          <p className="text-[11px] text-slate-500 mt-1">
            Type, title, authors, abstract, date and optional link.
          </p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="text-[11px] text-slate-400 hover:text-slate-700 underline-offset-2 hover:underline"
        >
          Clear form
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-3">
        {/* Type + Date */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-700">
              Type <span className="text-red-500">*</span>
            </label>
            <select
              name="type"
              value={form.type}
              onChange={onChange}
              required
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/40 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
            >
              <option value="Technical Paper">Technical Paper</option>
              <option value="Research Report">Research Report</option>
              <option value="Presentation">Presentation</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-700">
              Publication date
            </label>
            <input
              type="date"
              name="pub_date"
              value={form.pub_date}
              onChange={onChange}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/40 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
            />
            <p className="text-[10px] text-slate-400 mt-0.5">
              If empty, publications can be grouped as “Undated”.
            </p>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={onChange}
            required
            placeholder="e.g. Analysis of Road Crash Patterns in Urban India"
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/40 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
          />
        </div>

        {/* Highlight */}
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700">
            Highlight (short key takeaway)
          </label>
          <input
            type="text"
            name="highlight"
            value={form.highlight}
            onChange={onChange}
            placeholder="One-line highlight shown in listings."
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/40 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
          />
        </div>

        {/* Authors */}
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700">
            Authors
          </label>
          <textarea
            name="authors"
            rows={2}
            value={form.authors}
            onChange={onChange}
            placeholder="e.g. Jeya Padmanaban, Ajit Dandapani, ..."
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/40 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
          />
          <p className="text-[10px] text-slate-400">
            You can enter multiple authors, separated by commas or line breaks.
          </p>
        </div>

        {/* Abstract */}
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700 flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5 text-slate-500" />
            Abstract <span className="text-red-500">*</span>
          </label>
          <textarea
            name="abstract"
            rows={4}
            value={form.abstract}
            onChange={onChange}
            required
            placeholder="Short abstract or summary of the publication."
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/40 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
          />
        </div>

        {/* Link + Published toggle */}
        <div className="grid grid-cols-[minmax(0,1.6fr)_minmax(0,0.8fr)] gap-3 items-end">
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-700 flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5 text-slate-500" />
              Upload PDF
            </label>

<input
  type="file"
  name="pdf"                 // ✅ REQUIRED
  accept="application/pdf"
  onChange={onChange}        // ✅ let handler work normally
  className="w-full text-xs file:mr-3 file:rounded-lg file:border-0
    file:bg-slate-100 file:px-3 file:py-1.5
    file:text-slate-700 hover:file:bg-slate-200"
/>

            {form.pdf && (
              <p className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                ✓ Selected: {form.pdf.name} ({Math.round(form.pdf.size / 1024)} KB)
              </p>
            )}
            {!form.pdf && form.existing_pdf_path && (
              <div className="text-[10px] text-blue-600 bg-blue-50 px-2 py-1 rounded flex items-center justify-between">
                <span>📄 Current PDF attached</span>
                <a 
                  href={form.existing_pdf_path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  View
                </a>
              </div>
            )}
            <p className="text-[10px] text-slate-400">PDF only. Max 10MB. {form.existing_pdf_path ? "Upload new file to replace existing PDF." : ""}</p>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-700">
              Visibility
            </label>
            <button
              type="button"
              onClick={() =>
                onChange({
                  target: {
                    name: "is_published",
                    value: form.is_published ? 0 : 1,
                  },
                })
              }
              className={`w-full inline-flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium border transition
                ${
                  form.is_published
                    ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                    : "bg-slate-50 border-slate-200 text-slate-500"
                }`}
            >
              <span>
                {form.is_published ? "Published on website" : "Hidden / draft"}
              </span>
              <span
                className={`h-4 w-8 flex items-center rounded-full transition ${
                  form.is_published ? "bg-emerald-500" : "bg-slate-300"
                }`}
              >
                <span
                  className={`h-3 w-3 bg-white rounded-full shadow transition-transform ${
                    form.is_published ? "translate-x-4" : "translate-x-1"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={saving}
          className="mt-1 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-red-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {saving ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Plus className="h-3.5 w-3.5" />
              {editingId ? "Update publication" : "Create publication"}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default PublicationForm;
