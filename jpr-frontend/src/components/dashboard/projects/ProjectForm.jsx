// src/components/dashboard/projects/ProjectForm.jsx
import {
  Plus,
  Loader2,
  FileText,
  MapPin,
  Building2,
  CalendarRange,
  Tag,
} from "lucide-react";

const ProjectForm = ({
  form,
  editingId,
  saving,
  onChange,
  onSubmit,
  onReset,
}) => {

const PROJECT_CATEGORIES = [
  "Crash Investigation",
  "Data Analytics",
  "Road Safety Engineering",
  "Training",
];


  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-5 lg:p-6 space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
            {editingId ? "Edit project" : "Create project"}
            {editingId && (
              <span className="text-[10px] rounded-full bg-amber-50 text-amber-700 px-2 py-0.5 border border-amber-100">
                Editing existing item
              </span>
            )}
          </h3>
          <p className="text-[11px] text-slate-500 mt-1">
            Period, project title, client, location and activity summary.
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
        {/* Period + Category */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-700 flex items-center gap-1.5">
              <CalendarRange className="h-3.5 w-3.5 text-slate-500" />
              Period <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="period"
              value={form.period}
              onChange={onChange}
              required
              placeholder="e.g. 2011–present"
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/40 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
            />
            <p className="text-[10px] text-slate-400">
              Example: 2019–2020, 2021–present
            </p>
          </div>

<div className="space-y-1.5">
  <label className="block text-xs font-medium text-slate-700 flex items-center gap-1.5">
    <Tag className="h-3.5 w-3.5 text-slate-500" />
    Category
  </label>

  <select
    name="category"
    value={form.category || ""}
    onChange={onChange}
    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/40 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
  >
    <option value="">Select category</option>
    {PROJECT_CATEGORIES.map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ))}
  </select>

  <p className="text-[10px] text-slate-400">
    Used for grouping projects on the website.
  </p>
</div>

        </div>

        {/* Project title */}
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700">
            Project title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="project_title"
            value={form.project_title}
            onChange={onChange}
            required
            placeholder="e.g. Road Accident Sampling System – India"
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/40 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
          />
        </div>

        {/* Client */}
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700 flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5 text-slate-500" />
            Client
          </label>
          <input
            type="text"
            name="client"
            value={form.client}
            onChange={onChange}
            placeholder="e.g. RASSI Consortium, World Bank"
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/40 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
          />
        </div>

        {/* Location */}
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700 flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-slate-500" />
            Location
          </label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={onChange}
            placeholder="e.g. Pune, Chennai, Colombo"
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/40 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
          />
        </div>

        {/* Summary */}
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700 flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5 text-slate-500" />
            Brief summary of activities <span className="text-red-500">*</span>
          </label>
          <textarea
            name="summary"
            rows={4}
            value={form.summary}
            onChange={onChange}
            required
            placeholder="Detailed summary of activities performed under this project."
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm bg-slate-50/40 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
          />
        </div>

        {/* Visibility toggle */}
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

        {/* Submit */}
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
              {editingId ? "Update project" : "Create project"}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
