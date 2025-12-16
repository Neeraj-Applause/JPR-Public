import {
  Search,
  Loader2,
  Trash2,
  Mail,
  Calendar,
  User,
} from "lucide-react";

const ContactList = ({
  messages,
  loading,
  searchLoading,
  pagination,
  totalPages,
  search,
  onSearchChange,
  onView,
  onDelete,
  onPageChange,
}) => {
  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-5 flex flex-col">
      {/* Search */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold">Inbox</h3>

        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search name, email, subject..."
            className="pl-10 pr-4 py-2 border rounded-full text-xs"
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-auto rounded-2xl border bg-slate-50/60 relative">
        {searchLoading && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
          </div>
        )}

        {loading ? (
          <div className="py-12 flex justify-center">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
          </div>
        ) : messages.length === 0 ? (
          <div className="py-12 text-center text-xs text-slate-500">
            No messages found
          </div>
        ) : (
          <ul className="divide-y text-xs bg-white">
            {messages.map((m) => (
              <li
                key={m.id}
                className="px-4 py-3 hover:bg-slate-50 flex gap-3 items-start"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{m.subject || "No subject"}</p>

                  <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-400 mt-0.5">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {m.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="h-3 w-3" /> {m.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(m.created_at).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="mt-1 line-clamp-2 text-slate-600 text-[11px]">
                    {m.message}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onView(m)}
                    className="p-1.5 rounded-full border hover:bg-slate-50"
                    title="View"
                  >
                    <Mail className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => onDelete(m.id)}
                    className="p-1.5 rounded-full border border-red-100 text-red-500 hover:bg-red-50"
                    title="Delete"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-3 flex justify-between text-[11px] text-slate-500">
          <span>
            Page {pagination.page} of {totalPages}
          </span>
          <div className="flex gap-2">
            <button
              disabled={pagination.page <= 1}
              onClick={() => onPageChange(pagination.page - 1)}
              className="px-3 py-1 border rounded-full"
            >
              Prev
            </button>
            <button
              disabled={pagination.page >= totalPages}
              onClick={() => onPageChange(pagination.page + 1)}
              className="px-3 py-1 border rounded-full"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;
