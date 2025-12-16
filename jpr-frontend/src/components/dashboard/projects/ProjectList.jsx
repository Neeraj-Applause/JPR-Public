import {
  Search,
  Loader2,
  Trash2,
  Edit2,
  CalendarRange,
  MapPin,
  Building2,
  FileText,
  Tag,
} from "lucide-react";

const ProjectList = ({
  projects,
  loading,
  searchLoading,
  pagination,
  totalPages,
  search,
  onSearchChange,
  onEdit,
  onDelete,
  onPageChange,
}) => {
  const handleSearchInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-5 lg:p-6 flex flex-col">
      {/* Header + search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            Projects list
          </h3>
          <p className="text-[11px] text-slate-500">
            Search and manage consultancy and research projects.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-left gap-2 text-xs"
        >
          <div className="relative">
            <Search className="h-4 w-4 text-slate-400 absolute left-2 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search project title, client, location..."
              value={search}
              onChange={handleSearchInputChange}
              className="pl-12 pr-8 py-2 border border-slate-200 rounded-full text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </form>
      </div>

      {/* List container */}
      <div className="flex-1 overflow-auto rounded-2xl border border-slate-100 bg-slate-50/60 relative">
        {/* Search loading overlay */}
        {searchLoading && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-2xl">
            <div className="flex items-center gap-2 text-xs text-slate-600 bg-white px-3 py-2 rounded-full shadow-sm">
              <Loader2 className="h-4 w-4 animate-spin text-primary" />
              <span>Searching...</span>
            </div>
          </div>
        )}

        {loading ? (
          <div className="h-full flex items-center justify-center py-10">
            <div className="flex flex-col items-center gap-2 text-xs text-slate-500">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
              <span>Loading projects...</span>
            </div>
          </div>
        ) : projects.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center py-10 text-center px-6">
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm">
              <FileText className="h-5 w-5 text-slate-300" />
            </div>
            <p className="text-xs text-slate-500">
              {search
                ? `No projects found for "${search}"`
                : 'No projects found. Use "Add project" to create the first item.'}
            </p>
          </div>
        ) : (
          <div
            className={`transition-opacity duration-200 ${
              searchLoading ? "opacity-50" : "opacity-100"
            }`}
          >
            <ul className="divide-y divide-slate-100 text-xs bg-white rounded-2xl">
              {projects.map((item) => (
                <li
                  key={item.id}
                  className="py-2.5 px-3 flex items-start gap-3 hover:bg-slate-50/80 transition-colors"
                >
                  {/* Left badge: period */}
                  <div className="mt-1 flex-shrink-0">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary font-medium">
                      <CalendarRange className="h-3 w-3 mr-1" />
                      {item.period}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <p className="font-medium text-slate-800 truncate">
                        {item.project_title}
                      </p>

                      {item.is_published ? (
                        <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700 border border-emerald-100">
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500 border border-slate-200">
                          Draft
                        </span>
                      )}

                      {item.category && (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 border border-slate-200">
                          <Tag className="h-3 w-3 mr-1" />
                          {item.category}
                        </span>
                      )}
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-3 text-[10px] text-slate-400">
                      {item.client && (
                        <span className="inline-flex items-center gap-1 max-w-xs truncate">
                          <Building2 className="h-3 w-3" />
                          <span className="truncate">{item.client}</span>
                        </span>
                      )}

                      {item.location && (
                        <span className="inline-flex items-center gap-1 max-w-xs truncate">
                          <MapPin className="h-3 w-3" />
                          <span className="truncate">{item.location}</span>
                        </span>
                      )}
                    </div>

                    {item.summary && (
                      <p className="mt-1 text-[11px] text-slate-600 line-clamp-2">
                        {item.summary}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                    <button
                      type="button"
                      onClick={() => onEdit(item)}
                      className="p-1.5 rounded-full border border-slate-200 cursor-pointer text-slate-600 hover:bg-slate-50"
                      title="Edit"
                    >
                      <Edit2 className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(item.id)}
                      className="p-1.5 rounded-full border border-red-100 cursor-pointer text-red-500 hover:bg-red-50"
                      title="Delete"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
          <span>
            Page {pagination.page} of {totalPages}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={pagination.page <= 1}
              onClick={() => onPageChange(pagination.page - 1)}
              className="px-3 py-1 rounded-full border border-slate-200 bg-white disabled:opacity-50"
            >
              Prev
            </button>
            <button
              type="button"
              disabled={pagination.page >= totalPages}
              onClick={() => onPageChange(pagination.page + 1)}
              className="px-3 py-1 rounded-full border border-slate-200 bg-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
