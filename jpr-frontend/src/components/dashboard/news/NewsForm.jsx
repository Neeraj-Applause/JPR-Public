import { Plus, Loader2, ImageIcon } from "lucide-react";

const NewsForm = ({ form, editingId, saving, onChange, onSubmit, onReset }) => {
  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-5 lg:p-6 space-y-3">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
            {editingId ? "Edit news" : "Create news"}
            {editingId && (
              <span className="text-[10px] rounded-full bg-amber-50 text-amber-700 px-2 py-0.5 border border-amber-100">
                Editing existing item
              </span>
            )}
          </h3>
          <p className="text-[11px] text-slate-500 mt-1">
            Title, summary, full content, category and date.
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
            placeholder="e.g. National Road Safety Workshop 2025"
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 bg-slate-50/40"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700">
            Summary
          </label>
          <textarea
            name="summary"
            rows={2}
            value={form.summary}
            onChange={onChange}
            placeholder="Short one–two line description shown in listings."
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 bg-slate-50/40"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            name="content"
            rows={4}
            value={form.content}
            onChange={onChange}
            required
            placeholder="Full content of the news article or event."
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 bg-slate-50/40"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={onChange}
              placeholder="Workshop, Training, Report..."
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 bg-slate-50/40"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-700">
              Event date
            </label>
            <input
              type="date"
              name="event_date"
              value={form.event_date}
              onChange={onChange}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 bg-slate-50/40"
            />
            <p className="text-[10px] text-slate-400 mt-0.5">
              If empty, the article will still be shown using created date.
            </p>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-700 flex items-center gap-1.5">
            <ImageIcon className="h-3.5 w-3.5 text-slate-500" />
            Image URLs (one per line)
          </label>
          <textarea
            name="imagesText"
            rows={3}
            value={form.imagesText}
            onChange={onChange}
            placeholder={
              "https://example.com/image1.jpg\nhttps://example.com/image2.jpg"
            }
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 bg-slate-50/40 font-mono"
          />
          <p className="text-[10px] text-slate-400">
            These map to the <code>news_images</code> table as a gallery.
            First image is typically used as thumbnail.
          </p>
        </div>

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
              {editingId ? "Update news" : "Create news"}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default NewsForm;
